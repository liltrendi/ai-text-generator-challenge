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

const Chats: FC<IChatWindowProps> = ({ chats, containerRef }) => {
    const { user } = useAuth();

    return (
        <ChatWindow ref={containerRef}>
            {chats.length === 0 ? (
                <EmptyMessage>
                    No conversations to see here. Type in your message below to
                    start the chat.
                </EmptyMessage>
            ) : (
                chats.map((item, index) => {
                    const hideAvatar = !!(
                        index !== 0 &&
                        chats[index - 1] &&
                        chats[index - 1].origin === item.origin
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
