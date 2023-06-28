"use client";

import { FC } from "react";
import { Poppins } from "next/font/google";
import {
    PageContainer,
    LoginContainer,
    Header,
    Logo,
    TextContainer,
    Title,
    Description,
    LoginText,
    EmailContainer,
    EmailLabel,
    EmailInput,
    PasswordContainer,
    PasswordLabel,
    PasswordInput,
    LoginButton,
} from "@/app/login/styles";
import { ILoginProps } from "@/app/login/types";
import AppLogo from "@/public/static/images/app-logo.svg";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

const Login: FC<ILoginProps> = () => {
    return (
        <PageContainer className={poppins.className}>
            <LoginContainer>
                <Header>
                    <Logo src={AppLogo} alt="Distributed logo" />
                    <TextContainer>
                        <Title>Elastic Team</Title>
                        <Description>Open AI - Text Generator</Description>
                    </TextContainer>
                </Header>
                <LoginText>Please log in to continue</LoginText>
                <EmailContainer>
                    <EmailLabel htmlFor="email">Email address</EmailLabel>
                    <EmailInput id="email" name="email" type="email" />
                </EmailContainer>
                <PasswordContainer>
                    <PasswordLabel htmlFor="password">Password</PasswordLabel>
                    <PasswordInput
                        id="password"
                        name="password"
                        type="password"
                    />
                </PasswordContainer>
                <LoginButton>Log In</LoginButton>
            </LoginContainer>
        </PageContainer>
    );
};

export default Login;
