import { useCallback, useState } from "react";
import {
    IUsePromptHandlers,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/usePrompt/types";
import { isValidPromptText } from "@/utils";

export const usePromptHandlers = ({
    promptText,
    setPromptText,
    clearPromptText,
}: IUsePromptHandlers) => {
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

        clearPromptText();
        setSendingPrompt(true);
        // process input
        setSendingPrompt(false);
    }, [promptText, sendingPrompt]);

    const handlePromptSubmitOnEnter = useCallback(
        async (promptTextOnEnter?: string) => {
            if (sendingPrompt) return;

            const userMessage = promptText || promptTextOnEnter || undefined;
            const isValid = isValidPromptText(userMessage);
            if (!isValid) return;

            clearPromptText();
            setSendingPrompt(true);
            // process input
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
