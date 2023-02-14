import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDUEMMAK2tnDxlwaMjkjzCJo1QZvw4Zu_E',
  authDomain: 'e-commerce-cf7e7.firebaseapp.com',
  projectId: 'e-commerce-cf7e7',
  storageBucket: 'e-commerce-cf7e7.appspot.com',
  messagingSenderId: '178185654947',
  appId: '1:178185654947:web:bc36f76cf0198b7e536516',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
