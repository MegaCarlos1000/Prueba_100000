import { db } from "./firebase.js";
import { addDoc, collection , getDocs,doc,updateDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";



export const registrarPersona = async(persona)=>{
    const docRef = await addDoc(collection(db, "formulario"), persona);;
}

export const obtenerPersonas = async()=>{
    const ref = collection(db, "formulario");
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}
export const actualizarPersona = async(objeto,id)=>{
    const ref = doc(db,"formulario",id);
    await updateDoc(ref,objeto)
}
export const eliminarPersona = async(id)=>{
    const ref =doc(db,"formulario",id);
    await deleteDoc(ref);
}