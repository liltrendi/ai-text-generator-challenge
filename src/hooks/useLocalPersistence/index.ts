import { IAppConversation } from "@/components/chats/types";
import { useCallback, useEffect } from "react";
import { openDB } from "idb";
import { triggerAlert } from "@/utils";

const DATABASE_NAME = "MessagesDatabase";
const STORE_NAME = "ChatHistory";

export const useLocalPersistence = () => {
    const createDatabase = useCallback(async () => {
        try {
            return await openDB(DATABASE_NAME, 1, {
                upgrade(database) {
                    const store = database.createObjectStore(STORE_NAME, {
                        keyPath: "id",
                        autoIncrement: true,
                    });
                    store.createIndex("id", "id", { unique: false });
                    store.createIndex("origin", "origin", { unique: false });
                    store.createIndex("message", "message", { unique: false });
                    store.createIndex("dateCreated", "dateCreated", {
                        unique: false,
                    });
                    store.createIndex("dateModified", "dateModified", {
                        unique: false,
                    });
                },
            });
        } catch (e) {
            triggerAlert({
                message: "Database connection failed",
                type: "error",
            });
            return null;
        }
    }, []);

    const persistMessage = useCallback(async (message: IAppConversation) => {
        try {
            const db = await createDatabase();
            if (!db) throw new Error("Message was not saved");
            await db.add(STORE_NAME, message);
            return message;
        } catch (e) {
            triggerAlert({ message: "Message was not saved", type: "error" });
            return null;
        }
    }, []);

    const getPersistedMessages = useCallback(async () => {
        try {
            const db = await createDatabase();
            if (!db) throw new Error("Could not retrieve chat history");
            const messages = await db.getAll(STORE_NAME);
            return messages;
        } catch (e) {
            triggerAlert({
                message: "Could not retrieve chat history",
                type: "error",
            });
            return [];
        }
    }, []);

    useEffect(() => {
        createDatabase();
    }, []);

    return {
        persistMessage,
        getPersistedMessages,
    };
};
