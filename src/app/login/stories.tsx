import React from "react";
import { StoryFn } from "@storybook/react";
import LoginPage from "@/app/login/page";

export default {
    title: "Login",
    component: LoginPage,
    parameters: {
        nextjs: {
            appDirectory: true,
        },      
    }
};

const Template: StoryFn<typeof LoginPage> = () => <LoginPage />;

export const Login = Template.bind({});
Login.args = {};
