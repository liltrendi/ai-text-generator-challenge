import React from "react";
import { StoryFn } from "@storybook/react";
import AppEntry from "@/app/page";

export default {
    title: "App",
    component: AppEntry,
};

const Template: StoryFn<typeof AppEntry> = () => <AppEntry />;

export const App = Template.bind({});
App.args = {};
