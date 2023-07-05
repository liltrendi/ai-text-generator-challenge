import { useCallback, useState } from "react";
import {
    IUsePromptHandlers,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/usePrompt/types";
import { getDefaultSettings, isValidPromptText } from "@/utils";
import { sendUserMessage } from "@/services/openai";
import { useLocalPersistence } from "@/hooks/useLocalPersistence";
import { IAppConversation } from "@/components/chats/types";
import { v4 as uuidv4 } from "uuid";

export const usePromptHandlers = ({
    promptText,
    setPromptText,
    clearPromptText,
    scrollToBottom,
    appendToStatefulChatHistory,
    setIsBotTyping,
}: IUsePromptHandlers) => {
    const { persistMessage, getPersistedMessages } = useLocalPersistence();
    const [sendingPrompt, setSendingPrompt] = useState<boolean>(false);

    const handleTextChange: TTextChangeHandler = useCallback(
        (e: TTextChangeEvent) => {
            setPromptText(e.target.value || "");
        },
        [promptText]
    );

    const handlePromptSubmitOnClick = useCallback(async () => {
        if (sendingPrompt) return;

        const userMessage = promptText;
        const isValid = isValidPromptText(userMessage);
        if (!isValid) return;

        const craftedMessage: IAppConversation = {
            id: uuidv4(),
            origin: "user",
            message: userMessage,
            dateCreated: new Date().toISOString(),
            dateModified: null,
        };

        scrollToBottom();
        setIsBotTyping(true);
        appendToStatefulChatHistory(craftedMessage);
        await persistMessage(craftedMessage);

        clearPromptText();
        setSendingPrompt(true);

        const chatHistory: IAppConversation[] = (
            await getPersistedMessages()
        ).filter(({ id }) => id !== craftedMessage.id);
        const settings = getDefaultSettings();
        const aiMessage = await sendUserMessage({
            userMessage,
            chatHistory,
            settings,
        });
        if (aiMessage) {
            await persistMessage(aiMessage);
            appendToStatefulChatHistory(aiMessage);
        }
        setSendingPrompt(false);
        setIsBotTyping(true);
    }, [promptText, sendingPrompt, persistMessage]);

    const handlePromptSubmitOnEnter = useCallback(
        async (promptTextOnEnter?: string) => {
            if (sendingPrompt) return;

            const userMessage = promptText || promptTextOnEnter || "";
            const isValid = isValidPromptText(userMessage);
            if (!isValid) return;

            const craftedMessage: IAppConversation = {
                id: uuidv4(),
                origin: "user",
                message: userMessage,
                dateCreated: new Date().toISOString(),
                dateModified: null,
            };

            scrollToBottom();
            setIsBotTyping(true);
            appendToStatefulChatHistory(craftedMessage);
            await persistMessage(craftedMessage);

            clearPromptText();
            setSendingPrompt(true);

            const chatHistory: IAppConversation[] = (
                await getPersistedMessages()
            ).filter(({ id }) => id !== craftedMessage.id);
            const settings = getDefaultSettings();
            const aiMessage = await sendUserMessage({
                userMessage,
                chatHistory,
                settings,
            });
            if (aiMessage) {
                await persistMessage(aiMessage);
                appendToStatefulChatHistory(aiMessage);
            }
            setIsBotTyping(false);
            setSendingPrompt(false);
        },
        [promptText, sendingPrompt, persistMessage]
    );

    return {
        handleTextChange,
        handlePromptSubmitOnClick,
        handlePromptSubmitOnEnter,
    };
};
