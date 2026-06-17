'use client';
import {
  doc,
  getDoc,
  onSnapshot,
  type DocumentData,
  type DocumentReference,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useFirestore } from '../provider';
import { useMemoFirebase } from '../utils';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export function useDoc<T>(path: string, options: { deps?: any[] } = {}) {
  const firestore = useFirestore();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const docRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, path);
  }, [firestore, path, ...(options.deps || [])]);

  useEffect(() => {
    if (!docRef) {
      return;
    }

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = { id: snapshot.id, ...snapshot.data() } as T;
          setData(data);
        } else {
          setData(null);
        }
        setLoading(false);
      },
      (error) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'get',
        });
        errorEmitter.emit('permission-error', permissionError);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [docRef]);

  return { data, loading };
}

export function useDocOnce<T>(path: string) {
  const firestore = useFirestore();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const docRef: DocumentReference<DocumentData> | null = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, path);
  }, [firestore, path]);

  useEffect(() => {
    if (!docRef) {
      return;
    }

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = { id: snapshot.id, ...snapshot.data() } as T;
          setData(data);
        } else {
          setData(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'get',
        });
        errorEmitter.emit('permission-error', permissionError);
        setLoading(false);
      });
  }, [docRef]);

  return { data, loading };
}
