// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD84nFRnjhgMJXkYZrrHUzjeRCeOomeAQE',
  authDomain: 'salesforcemock-1ae60.firebaseapp.com',
  projectId: 'salesforcemock-1ae60',
  storageBucket: 'salesforcemock-1ae60.appspot.com',
  messagingSenderId: '1065844044743',
  appId: '1:1065844044743:web:c6bf4af7b86d98af955fe2',
  measurementId: 'G-M3G41336M2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export { auth, firebase, app }
