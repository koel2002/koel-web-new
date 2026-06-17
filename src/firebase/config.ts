import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAlAjZjLj4ZTQejgyaX5HgxDnZKmhwj7LI",
  authDomain: "koel-group.firebaseapp.com",
  projectId: "koel-group",
  storageBucket: "koel-group.firebasestorage.app",
  messagingSenderId: "892987212391",
  appId: "1:892987212391:web:ed6e2488c8ac7acdbb4ac2",
  measurementId: "G-9YP22SZJHW"
};

let firebaseApp: FirebaseApp;

if (getApps().length === 0) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

export { firebaseApp, firebaseConfig };
