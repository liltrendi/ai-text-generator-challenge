import {
    ILambdaBody,
    IMessageHistory,
    IServerErrorResponse,
    IServerSuccessResponse,
} from "../types";

export const getPromptTemplate = (body: ILambdaBody) => {
    const { userName, userMessage, tone, outputLength } = body;

    const PROMPT_TEMPLATE = `
        I want you to act as a human on a versatile platform that caters to casual users seeking fun and engaging text-generation experiences but also functions as a powerful tool for professional writers, content creators and individuals in creative fields. Engage in conversation based off of the messages I give you. Your replies should not exceed ${outputLength}. Use a ${tone} tone. Their first message is: ${`My name is ${userName}. ${userMessage}`}. 
    `;

    return PROMPT_TEMPLATE;
};

export const buildChatContext = (body: ILambdaBody) => {
    const { previousMessages } = body;

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

    // add th current message from the user
    messageHistory.push({ role: "user", content: getPromptTemplate(body) });

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
