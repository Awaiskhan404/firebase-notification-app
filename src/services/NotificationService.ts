// src/services/NotificationService.ts
import { collection, addDoc, getDocs, updateDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export interface Notification {
    id?: string;
    message: string;
    read: boolean;
}

const notificationsCollection = collection(db, 'notifications');

export const createNotification = async (message: string) => {
    await addDoc(notificationsCollection, { message, read: false });
};

export const getNotifications = async () => {
    const q = query(notificationsCollection, where("read", "==", false));
    const querySnapshot = await getDocs(q);
    const notifications: Notification[] = [];
    querySnapshot.forEach((doc) => {
        notifications.push({ id: doc.id, ...doc.data() } as Notification);
    });
    return notifications;
};

export const markNotificationRead = async (id: string) => {
    const notificationDoc = doc(db, 'notifications', id);
    await updateDoc(notificationDoc, { read: true });
};
