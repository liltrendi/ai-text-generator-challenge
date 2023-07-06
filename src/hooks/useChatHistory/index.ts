import { IAppConversation } from "@/components/chats/types";
import { useLocalPersistence } from "@/hooks/useLocalPersistence";
import { useCallback, useEffect, useRef, useState } from "react";

export const useChatHistory = () => {
    const { getPersistedMessages } = useLocalPersistence();

    const containerRef = useRef<null | HTMLDivElement>(null);
    const [chats, setChats] = useState<IAppConversation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const messages = await getPersistedMessages();
            setChats(messages);
            setLoading(false);
        })();
    }, []);

    const scrollToBottom = useCallback(() => {
        const element = containerRef.current;
        if (!element) return;
        element.scroll({
            top: element.scrollHeight,
            behavior: "smooth",
        });
    }, [containerRef, chats]);

    useEffect(() => {
        scrollToBottom();
    }, [chats, containerRef]);

    const updateReactiveChatHistory = useCallback(
        (message: IAppConversation) => {
            setChats((previousChats: IAppConversation[]) => {
                const withoutDuplicates = previousChats.filter(
                    ({ id }) => id !== message.id
                );
                return [...withoutDuplicates, message];
            });
        },
        [chats]
    );

    return {
        loading,
        chats,
        updateReactiveChatHistory,
        containerRef,
        scrollToBottom,
        isBotTyping,
        setIsBotTyping,
    };
};
