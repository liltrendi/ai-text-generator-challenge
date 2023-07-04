import { IAppConversation } from "@/components/chats/types";

export const APP_CONVERSATIONS: IAppConversation[] = [
    {
        id: "123",
        dateCreated: new Date().toISOString(),
        message: "Hey there",
        origin: "user",
        dateModified: null,
    },
    {
        id: "234",
        dateCreated: new Date().toISOString(),
        message: "Hello Brian",
        origin: "bot",
        dateModified: null,
    },
    {
        id: "4",
        dateCreated: new Date().toISOString(),
        message: "How can I help you?",
        origin: "bot",
        dateModified: null,
    },
    {
        id: "5",
        dateCreated: new Date().toISOString(),
        message: "I'm trying to complete this coding challenge",
        origin: "user",
        dateModified: null,
    },
    {
        id: "6",
        dateCreated: new Date().toISOString(),
        message: "Any tips?",
        origin: "user",
        dateModified: null,
    },
];
