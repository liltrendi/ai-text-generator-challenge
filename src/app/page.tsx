"use client";

import { AppContainer } from "@/app/styles";
import Chats from "@/components/chats";
import Prompt from "@/components/prompt";
import { useChatHistory } from "@/hooks/useChatHistory";

const Home = () => {
    const { chats, containerRef, scrollToBottom, appendToStatefulChatHistory } =
        useChatHistory();

    return (
        <AppContainer>
            <Chats chats={chats} containerRef={containerRef} />
            <Prompt
                scrollToBottom={scrollToBottom}
                appendToStatefulChatHistory={appendToStatefulChatHistory}
            />
        </AppContainer>
    );
};

export default Home;
