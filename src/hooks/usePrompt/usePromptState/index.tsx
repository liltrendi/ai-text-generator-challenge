import { useCallback, useState } from "react";

export const usePromptState = () => {
    const [promptText, setPromptText] = useState<string>("");

    const clearPromptText = useCallback(() => setPromptText(""), []);

    return {
        promptText,
        setPromptText,
        clearPromptText,
    };
};
