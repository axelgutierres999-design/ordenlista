import { auth, db } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc,
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- REGISTRO DE DUEÑO ---
const form = document.getElementById("registroForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombreRest = document.getElementById("nombreRest").value;
    const direccionRest = document.getElementById("direccionRest").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // 1. Crear usuario en Authentication
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      // 2. Crear restaurante en Firestore
      const restRef = await addDoc(collection(db, "restaurantes"), {
        nombre: nombreRest,
        direccion: direccionRest,
        propietario_uid: uid,
        fecha_registro: new Date()
      });

      const restauranteId = restRef.id;

      // 3. Crear documento en "usuarios"
      await setDoc(doc(db, "usuarios", uid), {
        uid: uid,
        rol: "dueno",
        restaurante_id: restauranteId
      });

      // 4. Redirigir al panel
      window.location.href = "panel.html";

    } catch (error) {
      alert("Error: " + error.message);
    }
  });
}