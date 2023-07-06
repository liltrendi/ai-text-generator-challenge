import { usePromptState } from "@/hooks/usePrompt/usePromptState";
import { usePromptHandlers } from "@/hooks/usePrompt/usePromptHandlers";
import { usePromptEvents } from "@/hooks/usePrompt/usePromptEvents";
import { IUsePromptArgs } from "@/hooks/usePrompt/types";

export const usePrompt = ({
    scrollToBottom,
    updateReactiveChatHistory,
    setIsBotTyping,
}: IUsePromptArgs) => {
    const { promptText, setPromptText, clearPromptText } = usePromptState();
    const {
        handleTextChange,
        handlePromptSubmitOnEnter,
        handlePromptSubmitOnClick,
    } = usePromptHandlers({
        promptText,
        setPromptText,
        clearPromptText,
        scrollToBottom,
        updateReactiveChatHistory,
        setIsBotTyping,
    });
    usePromptEvents(handlePromptSubmitOnEnter);

    return {
        promptText,
        handleTextChange,
        handlePromptSubmitOnClick,
    };
};
