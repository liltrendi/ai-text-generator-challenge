import React from "react";
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

const Template: StoryFn<typeof HeaderComponent> = () => <HeaderComponent />;

export const Header = Template.bind({});
Header.args = {};
