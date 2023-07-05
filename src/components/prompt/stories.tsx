import React from "react";
import { StoryFn } from "@storybook/react";
import PromptComponent from "@/components/prompt";

export default {
    title: "Prompt",
    component: PromptComponent,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};

const Template: StoryFn<typeof PromptComponent> = args => (
    <PromptComponent {...args} />
);

export const Prompt = Template.bind({});
Prompt.args = {};
