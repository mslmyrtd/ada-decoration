import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_KEY_AUTH_DOMAIN,
  projectId: 'e-commerce-cf7e7',
  storageBucket: 'e-commerce-cf7e7.appspot.com',
  messagingSenderId: '178185654947',
  appId: '1:178185654947:web:bc36f76cf0198b7e536516',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
