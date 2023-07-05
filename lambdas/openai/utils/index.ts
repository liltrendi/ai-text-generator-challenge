import {
    ILambdaBody,
    IMessageHistory,
    IServerErrorResponse,
    IServerSuccessResponse,
} from "../types";

export const getPromptTemplate = (body: ILambdaBody) => {
    const { userName, userMessage, tone, outputLength } = body;

    const PROMPT_TEMPLATE = `
        You are a human masquerading as a bot on a chatbot interface on a website whose users speak with you on a daily basis. Right now, a ${
            userName ? `person named ${userName}` : "user"
        } wants to speak with you. "${tone}" should be your tone, and "${outputLength}" should be how long your response is. Here is their message: "${userMessage}"
    `;

    return PROMPT_TEMPLATE;
};

export const buildChatContext = (body: ILambdaBody) => {
    const { userMessage, previousMessages } = body;

    let messageHistory: IMessageHistory[] = [];

    if (previousMessages) {
        messageHistory = previousMessages.reduce(
            (newMessages: IMessageHistory[], current) => {
                newMessages.push({
                    role: current.origin,
                    content: current.message,
                });
                return newMessages;
            },
            []
        );
    }

    // if there are no previous conversations, signifying the start of a new one, inject the prompt
    if (messageHistory.length === 0) {
        messageHistory.push({ role: "user", content: getPromptTemplate(body) });
    } else {
        // otherwise, just continue the conversation with the user's latest message
        messageHistory.push({ role: "user", content: userMessage });
    }

    return messageHistory;
};

export const serverError = ({ code, message, error }: IServerErrorResponse) => {
    return {
        statusCode: code,
        body: JSON.stringify({ message, error }),
        headers: {
            "access-control-allow-origin": "*",
        },
    };
};

export const serverSuccess = ({ code, body }: IServerSuccessResponse) => {
    return {
        statusCode: code,
        body,
        headers: {
            "access-control-allow-origin": "*",
        },
    };
};
