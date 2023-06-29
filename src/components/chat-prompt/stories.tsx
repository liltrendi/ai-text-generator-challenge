import React from "react";
import { User } from "gotrue-js";
import { StoryFn } from "@storybook/react";
import ChatPromptComponent from "@/components/chat-prompt";

export default {
    title: "Chat Prompt",
    component: ChatPromptComponent,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};

const Template: StoryFn<typeof ChatPromptComponent> = args => (
    <ChatPromptComponent {...args} />
);

export const ChatPrompt = Template.bind({});
ChatPrompt.args = {
    user: { user_metadata: { name: "Alexander" } } as User,
};
