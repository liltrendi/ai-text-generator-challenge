import { useCallback, useState } from "react";
import {
    IUsePromptHandlers,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/usePrompt/types";
import { isValidPromptText } from "@/utils";
import { sendUserMessage } from "@/services/openai";
import { useLocalPersistence } from "@/hooks/useLocalPersistence";
import { IAppConversation } from "@/components/chats/types";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "@/hooks/useAuth";
import { useSettings } from "@/hooks/useSettings";

export const usePromptHandlers = ({
    promptText,
    setPromptText,
    clearPromptText,
    appendToStatefulChatHistory,
}: IUsePromptHandlers) => {
    const { user } = useAuth();
    const { persistMessage, getPersistedMessages } = useLocalPersistence();
    const { getDefaultSettings } = useSettings({ closeSettings: () => {} });
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

        appendToStatefulChatHistory(craftedMessage);
        await persistMessage(craftedMessage);

        clearPromptText();
        setSendingPrompt(true);

        const chatHistory = await getPersistedMessages();
        const settings = getDefaultSettings();
        const aiMessage = await sendUserMessage({
            userMessage,
            chatHistory,
            user,
            settings,
        });
        if (aiMessage) {
            await persistMessage(aiMessage);
            appendToStatefulChatHistory(aiMessage);
        }
        setSendingPrompt(false);
    }, [promptText, sendingPrompt, user, persistMessage]);

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

            appendToStatefulChatHistory(craftedMessage);
            await persistMessage(craftedMessage);

            clearPromptText();
            setSendingPrompt(true);

            const chatHistory = await getPersistedMessages();
            const settings = getDefaultSettings();
            const aiMessage = await sendUserMessage({
                userMessage,
                chatHistory,
                user,
                settings,
            });
            if (aiMessage) {
                await persistMessage(aiMessage);
                appendToStatefulChatHistory(aiMessage);
            }

            setSendingPrompt(false);
        },
        [promptText, sendingPrompt, user, persistMessage]
    );

    return {
        handleTextChange,
        handlePromptSubmitOnClick,
        handlePromptSubmitOnEnter,
    };
};
