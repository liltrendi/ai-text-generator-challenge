import { usePromptState } from "@/hooks/usePrompt/usePromptState";
import { usePromptHandlers } from "@/hooks/usePrompt/usePromptHandlers";
import { usePromptEvents } from "@/hooks/usePrompt/usePromptEvents";
import { IUsePromptArgs } from "@/hooks/usePrompt/types";

export const usePrompt = ({ appendToStatefulChatHistory }: IUsePromptArgs) => {
    const { promptText, setPromptText, clearPromptText } = usePromptState();
    const {
        handleTextChange,
        handlePromptSubmitOnEnter,
        handlePromptSubmitOnClick,
    } = usePromptHandlers({
        promptText,
        setPromptText,
        clearPromptText,
        appendToStatefulChatHistory,
    });
    usePromptEvents(handlePromptSubmitOnEnter);

    return {
        promptText,
        handleTextChange,
        handlePromptSubmitOnClick,
    };
};
