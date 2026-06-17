'use client';
import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import type { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handleError = (error: FirestorePermissionError) => {
      if (process.env.NODE_ENV === 'development') {
        // This will be caught by the Next.js error overlay in development
        throw error;
      } else {
        // In production, you might want to log this to a monitoring service
        console.error('Firestore Permission Error:', error.message);
      }
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  return null;
}
