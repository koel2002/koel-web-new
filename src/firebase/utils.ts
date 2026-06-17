import { useMemo } from 'react';
import { CollectionReference, DocumentReference, Query } from 'firebase/firestore';

export function useMemoFirebase<T>(
  factory: () => T | null,
  deps: any[]
): T | null {
  return useMemo(() => {
    try {
      // One of the dependencies is not ready
      if (deps.some(dep => dep === null || dep === undefined)) {
        return null;
      }
      const result = factory();
      if (
        result === null ||
        result instanceof DocumentReference ||
        result instanceof CollectionReference ||
        result instanceof Query
      ) {
        return result;
      }
      return result;
    } catch (e) {
      console.error("Error in useMemoFirebase factory", e);
      return null;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
