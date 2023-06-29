import { useCallback, useState } from "react";
import { TTextChangeEvent, TTextChangeHandler } from "@/hooks/usePrompt/types";

export const usePrompt = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [sendingPrompt, setSendingPrompt] = useState<boolean>(false);

    const handleTextChange: TTextChangeHandler = useCallback(
        (e: TTextChangeEvent) => {
            setPrompt(e.target.value || "");
        },
        [prompt]
    );

    const sendPrompt = useCallback(async () => {
        if (sendingPrompt) return;

        setSendingPrompt(true);
        // process input
        setSendingPrompt(false);
    }, [prompt, sendingPrompt]);

    return {
        prompt,
        handleTextChange,
        sendPrompt,
    };
};
