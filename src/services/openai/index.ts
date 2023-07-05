import axios from "axios";
import {
    ISendUserMessageArgs,
    ISendUserMessageResponse,
} from "@/services/openai/types";
import { triggerAlert } from "@/utils";
import { IAppConversation } from "@/components/chats/types";
import { v4 as uuidv4 } from "uuid";

const LAMBDA_URL =
    process.env.NODE_ENV === "production"
        ? `${process.env.NEXT_PUBLIC_GOTRUE_SITE_URL}.netlify/functions/openai`
        : "http://localhost:8888/.netlify/functions/openai";

export const sendUserMessage = async ({
    userMessage,
    chatHistory,
    user,
    settings,
}: ISendUserMessageArgs): Promise<IAppConversation | null> => {
    const requestBody = {
        ...settings,
        userName: user?.user_metadata.name,
        userMessage,
        previousMessages: chatHistory,
    };

    try {
        const { data } = await axios.post(
            LAMBDA_URL,
            JSON.stringify(requestBody)
        );
        const aiMessage: IAppConversation = {
            id: uuidv4(),
            origin: "assistant",
            message:
                (data as ISendUserMessageResponse).result[0] ||
                "Um... I didn't quite catch that",
            dateCreated: new Date().toISOString(),
            dateModified: null,
        };
        return aiMessage;
    } catch (e) {
        triggerAlert({
            message: "Something went wrong, please try again",
            type: "error",
        });
        return null;
    }
};
