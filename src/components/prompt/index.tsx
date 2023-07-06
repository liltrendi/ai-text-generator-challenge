import { FC } from "react";
import { IPromptProps } from "@/components/prompt/types";
import {
    ChatInput,
    ChatSend,
    InputContainer,
} from "@/components/prompt/styles";
import SendIcon from "@/public/static/images/send-icon.svg";
import { usePrompt } from "@/hooks/usePrompt";

const Prompt: FC<IPromptProps> = ({
    scrollToBottom,
    updateReactiveChatHistory,
    setIsBotTyping,
}) => {
    const { promptText, handleTextChange, handlePromptSubmitOnClick } =
        usePrompt({
            updateReactiveChatHistory,
            scrollToBottom,
            setIsBotTyping,
        });

    return (
        <InputContainer>
            <ChatInput
                name="prompt"
                placeholder="Type your prompt here..."
                data-testid="chat-prompt-input"
                onChange={handleTextChange}
                value={promptText}
            />
            <ChatSend
                src={SendIcon}
                alt="Send message"
                onClick={handlePromptSubmitOnClick}
            />
        </InputContainer>
    );
};

export default Prompt;
