// src/services/PostService.js
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Importa Firestore desde firebaseConfig

const COMMENTS_COLLECTION = "comments";

// Obtén los comentarios para un post desde Firebase
export const getCommentsByPostId = async (postId) => {
  try {
    const q = query(
      collection(db, COMMENTS_COLLECTION),
      where("postId", "==", postId)
    );
    const commentsSnapshot = await getDocs(q);
    const comments = commentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// Agrega un comentario a un post en Firebase
export const addComment = async (postId, body, userId) => {
  try {
    const docRef = await addDoc(collection(db, COMMENTS_COLLECTION), {
      body,
      postId,
      userId,
      createdAt: new Date(),
    });
    return { id: docRef.id, body, postId, userId };
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};
