import { useCallback, useState } from "react";
import {
    IUsePromptHandlers,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/usePrompt/types";
import { isValidPromptText } from "@/utils";
// import { sendUserMessage } from "@/services/openai";
import { useLocalPersistence } from "@/hooks/useLocalPersistence";
import { IAppConversation } from "@/components/chats/types";
import { v4 as uuidv4 } from "uuid";

export const usePromptHandlers = ({
    promptText,
    setPromptText,
    clearPromptText,
    appendToStatefulChatHistory,
}: IUsePromptHandlers) => {
    const { persistMessage } = useLocalPersistence();
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

        clearPromptText();
        setSendingPrompt(true);
        // await sendUserMessage({userMessage, chatHistory})
        if (true) {
            await persistMessage(craftedMessage);
        }
        setSendingPrompt(false);
    }, [promptText, sendingPrompt]);

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

            clearPromptText();
            setSendingPrompt(true);
            // process input
            // await sendUserMessage({userMessage, chatHistory})
            if (true) {
                await persistMessage(craftedMessage);
            }
            setSendingPrompt(false);
        },
        [promptText, sendingPrompt]
    );

    return {
        handleTextChange,
        handlePromptSubmitOnClick,
        handlePromptSubmitOnEnter,
    };
};
