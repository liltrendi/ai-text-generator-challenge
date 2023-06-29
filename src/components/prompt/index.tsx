import { FC } from "react";
import { IPromptProps } from "@/components/prompt/types";
import {
    ChatInput,
    ChatSend,
    InputContainer,
} from "@/components/prompt/styles";
import SendIcon from "@/public/static/images/send-icon.svg";

const Prompt: FC<IPromptProps> = () => {
    return (
        <InputContainer>
            <ChatInput
                name="prompt"
                placeholder="Type your prompt here..."
                data-testid="chat-prompt-input"
            />
            <ChatSend src={SendIcon} alt="Send message" />
        </InputContainer>
    );
};

export default Prompt;
