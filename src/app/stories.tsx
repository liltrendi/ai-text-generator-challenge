import React from "react";
import { StoryFn } from "@storybook/react";
import HomeComponent from "@/app/page";

export default {
    title: "Home",
    component: HomeComponent,
};

const Template: StoryFn<typeof HomeComponent> = () => <HomeComponent />;

export const Home = Template.bind({});
Home.args = {};
