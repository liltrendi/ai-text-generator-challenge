import {
    ILambdaBody,
    IMessageHistory,
    IServerErrorResponse,
    IServerSuccessResponse,
} from "./types";

const injectUserSettings = (body: ILambdaBody) => {
    const { userMessage, tone, outputLength } = body;

    const PROMPT_TEMPLATE = `
        Limit your replies to a length described by "${outputLength}". Use a ${tone} tone. Here is what they say next: ${userMessage}. 
    `;

    return PROMPT_TEMPLATE;
};

export const getInitialPrompt = (body: ILambdaBody) => {
    const { userName, userMessage, tone, outputLength } = body;

    const firstName = userName?.split(" ")?.[0] || userName;

    const PROMPT_TEMPLATE = `
        I want you to act as a human on a versatile platform that caters to casual users seeking fun and engaging text-generation experiences but also functions as a powerful tool for professional writers, content creators and individuals in creative fields. Engage in conversation based off of the messages I give you. Remember the conversation context. Limit your replies to a length described by "${outputLength}". Use a ${tone} tone. ${
        firstName ? `${firstName} is a` : "A"
    } user that wants to speak with you. Here is what they say: ${userMessage}. 
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

    // if no prior conversation exists, just use the prompt with default settings
    if (messageHistory.length === 0) {
        messageHistory.push({ role: "user", content: getInitialPrompt(body) });
        // update the prompt with settings from the user that may change over time
    } else {
        messageHistory.push({
            role: "user",
            content: injectUserSettings(body),
        });
    }

    return messageHistory;
};

export const serverError = ({ code, message, error }: IServerErrorResponse) => {
    return {
        statusCode: code,
        body: JSON.stringify({ message, error }),
        // headers: {
        //     "access-control-allow-origin": "*",
        // },
    };
};

export const serverSuccess = ({ code, body }: IServerSuccessResponse) => {
    return {
        statusCode: code,
        body,
        // headers: {
        //     "access-control-allow-origin": "*",
        // },
    };
};
