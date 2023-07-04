import { FC } from "react";
import { IChatWindowProps } from "@/components/chats/types";
import {
    ChatAvatar,
    ChatBubble,
    ChatText,
    ChatWindow,
    ChatWrapper,
    EmptyMessage,
} from "@/components/chats/styles";
import { useAuth } from "@/hooks/useAuth";
import { getUserInitials } from "@/utils";
import { APP_CONVERSATIONS } from "./schema";

const Chats: FC<IChatWindowProps> = () => {
    const { user } = useAuth();

    return (
        <ChatWindow>
            {APP_CONVERSATIONS.length === 0 ? (
                <EmptyMessage>
                    No conversations to see here. Type in your message below to
                    start the chat.
                </EmptyMessage>
            ) : (
                APP_CONVERSATIONS.map((item, index) => {
                    const hideAvatar = !!(
                        index !== 0 &&
                        APP_CONVERSATIONS[index - 1] &&
                        APP_CONVERSATIONS[index - 1].origin === item.origin
                    );
                    return (
                        <ChatBubble key={item.id} chatOrigin={item.origin}>
                            <ChatWrapper chatOrigin={item.origin}>
                                <ChatAvatar
                                    chatOrigin={item.origin}
                                    isAvatarHidden={hideAvatar}
                                >
                                    {item.origin === "assistant"
                                        ? "AI"
                                        : getUserInitials(user)}
                                </ChatAvatar>
                                <ChatText chatOrigin={item.origin}>
                                    {item.message}
                                </ChatText>
                            </ChatWrapper>
                        </ChatBubble>
                    );
                })
            )}
        </ChatWindow>
    );
};

export default Chats;
