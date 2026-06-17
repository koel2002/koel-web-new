'use client';
import {
  collection,
  onSnapshot,
  getDocs,
  type CollectionReference,
  type DocumentData,
  type Query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useFirestore } from '../provider';
import { useMemoFirebase } from '../utils';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

type CollectionOptions = {
  deps?: any[];
};

export function useCollection<T>(
  path: string,
  options: CollectionOptions = {}
) {
  const firestore = useFirestore();
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const collectionRef = useMemoFirebase(() => {
    return collection(firestore, path);
  }, [firestore, path, ...(options.deps || [])]);

  useEffect(() => {
    if (!collectionRef) return;

    const unsubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(data);
        setLoading(false);
      },
      (error) => {
        const permissionError = new FirestorePermissionError({
          path: (collectionRef as CollectionReference).path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionRef]);

  return { data, loading };
}

export function useCollectionOnce<T>(
  query: Query<DocumentData> | null,
  options: CollectionOptions = {}
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    getDocs(query)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        const permissionError = new FirestorePermissionError({
          path: (query as CollectionReference).path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setLoading(false);
      });
  }, [query]);

  return { data, loading };
}
