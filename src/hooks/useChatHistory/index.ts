import { IAppConversation } from "@/components/chats/types";
import { useLocalPersistence } from "@/hooks/useLocalPersistence";
import { useCallback, useEffect, useState } from "react";

export const useChatHistory = () => {
    const { getPersistedMessages } = useLocalPersistence();
    const [chats, setChats] = useState<IAppConversation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const messages = await getPersistedMessages();
            setChats(messages);
            setLoading(false);
        })();
    }, []);

    const appendToStatefulChatHistory = useCallback(
        (message: IAppConversation) => {
            const duplicate = chats.find(({ id }) => id === message.id);
            if (duplicate) return;
            setChats(previous => [...previous, message]);
        },
        [chats]
    );

    return {
        loading,
        chats,
        appendToStatefulChatHistory,
    };
};
