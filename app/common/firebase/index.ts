import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import {FirebaseConfig} from "@/app/common/firebase/config/FirebaseConfig";

export const firebaseApp = firebase.initializeApp(FirebaseConfig.AppInitializeConfig);
export const firestoreApp = getFirestore(firebaseApp);
