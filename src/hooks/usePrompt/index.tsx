import { usePromptState } from "@/hooks/usePrompt/usePromptState";
import { usePromptHandlers } from "@/hooks/usePrompt/usePromptHandlers";
import { usePromptEvents } from "@/hooks/usePrompt/usePromptEvents";

export const usePrompt = () => {
    const { promptText, setPromptText, clearPromptText } = usePromptState();
    const {
        handleTextChange,
        handlePromptSubmitOnEnter,
        handlePromptSubmitOnClick,
    } = usePromptHandlers({
        promptText,
        setPromptText,
        clearPromptText,
    });
    usePromptEvents(handlePromptSubmitOnEnter);

    return {
        promptText,
        handleTextChange,
        handlePromptSubmitOnClick,
    };
};
