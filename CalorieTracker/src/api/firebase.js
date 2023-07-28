import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

console.log('API_KEY:', API_KEY);
console.log('AUTH_DOMAIN:', AUTH_DOMAIN);
console.log('PROJECT_ID:', PROJECT_ID);
console.log('STORAGE_BUCKET:', STORAGE_BUCKET);
console.log('MESSAGING_SENDER_ID:', MESSAGING_SENDER_ID);
console.log('APP_ID:', APP_ID);

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };