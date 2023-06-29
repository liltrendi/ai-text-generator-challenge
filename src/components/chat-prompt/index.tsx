import { FC } from "react";
import { IChatPrompt } from "@/components/chat-prompt/types";
import {
    ChatInput,
    ChatSend,
    InputContainer,
} from "@/components/chat-prompt/styles";
import SendIcon from "@/public/static/images/send-icon.svg";

const ChatPrompt: FC<IChatPrompt> = () => {
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

export default ChatPrompt;
