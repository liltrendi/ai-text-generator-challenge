import React from "react";
import { StoryFn } from "@storybook/react";
import SignupPage from "@/app/signup/page";

export default {
    title: "Signup",
    component: SignupPage,
    parameters: {
        nextjs: {
            appDirectory: true,
        },      
    }
};

const Template: StoryFn<typeof SignupPage> = () => <SignupPage />;

export const Signup = Template.bind({});
Signup.args = {};
