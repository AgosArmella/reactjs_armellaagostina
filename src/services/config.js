
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhTzGmysYjgsB0njz_KcQUOhjhbX_qohQ",
  authDomain: "paginaweb-matos.firebaseapp.com",
  projectId: "paginaweb-matos",
  storageBucket: "paginaweb-matos.appspot.com",
  messagingSenderId: "596122500996",
  appId: "1:596122500996:web:bad535f758805690d8e7d1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);