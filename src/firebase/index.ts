import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseApp } from './config';
import type { FirebaseApp } from 'firebase/app';

export function initializeFirebase(): {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
} {
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  return { app: firebaseApp, auth, firestore };
}

export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './auth/use-user';
export * from './provider';
export { FirebaseClientProvider } from './client-provider';
export * from './utils';
