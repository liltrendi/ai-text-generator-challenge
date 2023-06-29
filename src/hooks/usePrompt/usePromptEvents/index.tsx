import { useCallback, useEffect } from "react";

export const usePromptEvents = (
    handler: (promptText?: string) => Promise<void>
) => {
    const submitOnEnter = useCallback(
        async (e: KeyboardEvent) => {
            if (!(e.code === "Enter" || e.code === "NumpadEnter")) {
                return;
            }

            e.preventDefault();

            const promptText = (e.target as HTMLInputElement)?.value;

            // input is not focused
            if (typeof promptText !== "string") {
                return;
            }

            await handler(promptText);
        },
        [handler]
    );

    useEffect(() => {
        document.addEventListener("keydown", submitOnEnter);
        return () => {
            document.removeEventListener("keydown", submitOnEnter);
        };
    }, []);
};
