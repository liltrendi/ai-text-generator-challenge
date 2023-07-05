"use client";

import { AppContainer } from "@/app/styles";
import Chats from "@/components/chats";
import Prompt from "@/components/prompt";
import { useChatHistory } from "@/hooks/useChatHistory";
import { getCurrentUser } from "@/services/auth";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    const { chats, containerRef, scrollToBottom, appendToStatefulChatHistory } =
        useChatHistory();

    const user = getCurrentUser();
    if (!user) {
        router.push("/login");
        return undefined;
    }

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
