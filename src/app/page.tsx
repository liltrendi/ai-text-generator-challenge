"use client";

import { AppContainer } from "@/app/styles";
import Chats from "@/components/chats";
import Prompt from "@/components/prompt";
import { useChatHistory } from "@/hooks/useChatHistory";

const Home = () => {
    const { chats, appendToStatefulChatHistory } = useChatHistory();

    return (
        <AppContainer>
            <Chats chats={chats} />
            <Prompt appendToStatefulChatHistory={appendToStatefulChatHistory} />
        </AppContainer>
    );
};

export default Home;
