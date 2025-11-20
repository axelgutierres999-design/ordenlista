// --- CONFIGURACIÓN REAL DE TU PROYECTO ---
const firebaseConfig = {
  apiKey: "AIzaSyCzhOyn07my_1Af0B4iGXm2HbF8_c_bE",
  authDomain: "ordenlista12.firebaseapp.com",
  projectId: "ordenlista12",
  storageBucket: "ordenlista12.firebasestorage.app",
  messagingSenderId: "554278256681",
  appId: "1:554278256681:web:5dcf23625e36def4bad693"
};

// --- IMPORTS OFICIALES DE FIREBASE (USO MÓDULOS) ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- INICIALIZAR FIREBASE ---
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);