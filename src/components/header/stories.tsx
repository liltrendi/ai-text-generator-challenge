import React from "react";
import { User } from "gotrue-js";
import { StoryFn } from "@storybook/react";
import HeaderComponent from "@/components/header";

export default {
    title: "Header",
    component: HeaderComponent,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};

const Template: StoryFn<typeof HeaderComponent> = args => (
    <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {
    user: { user_metadata: { name: "Alexander" } } as User,
};
