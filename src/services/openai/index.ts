import { ISendUserMessageArgs } from "@/services/openai/types";

export const sendUserMessage = async ({
    userMessage,
    chatHistory,
}: ISendUserMessageArgs) => {
    console.log({ userMessage, chatHistory });
};
