import { doc, getDoc, collection, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';

// Fetch all entries
export const fetchEntries = async () => {
  let data = [];
  const response = await getDocs(collection(db, 'entries'));
  response.docs.forEach(item => {
    data.push({
      id: item.id,
      ...item.data(),
    });
  });
  console.log('Fetched Entries:', data);
  return data;
};

// Fetch a single entry by ID
export const fetchEntry = async (id) => {
  const entryRef = doc(db, 'entries', id);
  const entryDoc = await getDoc(entryRef);
  if (entryDoc.exists()) {
    return {
      id: entryDoc.id,
      ...entryDoc.data(),
    };
  } else {
    console.log("Entry not found");
    return null;
  }
};

// Add a new entry
export const addEntry = async (entry) => {
  try {
    const docRef = await addDoc(collection(db, 'entries'), entry);
    console.log('Added Entry ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};

// Update an entry
export const updateEntry = async (id, data) => {
  await updateDoc(doc(db, 'entries', id), data);
};

// Delete an entry
export const deleteEntry = async (id) => {
  await deleteDoc(doc(db, 'entries', id));
};
