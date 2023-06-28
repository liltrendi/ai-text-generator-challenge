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
    ValidationError,
} from "@/app/login/styles";
import { ILoginProps } from "@/app/login/types";
import AppLogo from "@/public/static/images/app-logo.svg";
import { useLogin } from "@/hooks/useLogin";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

const Login: FC<ILoginProps> = () => {
    const { email, password, handleTextChange, validationErrors, handleLogin } =
        useLogin();

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
                    <EmailInput
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleTextChange}
                    />
                    {validationErrors.email.length > 0 && (
                        <ValidationError>
                            {validationErrors.email[0]}
                        </ValidationError>
                    )}
                </EmailContainer>
                <PasswordContainer>
                    <PasswordLabel htmlFor="password">Password</PasswordLabel>
                    <PasswordInput
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleTextChange}
                    />
                    {validationErrors.password.length > 0 && (
                        <ValidationError>
                            {validationErrors.password[0]}
                        </ValidationError>
                    )}
                </PasswordContainer>
                <LoginButton onClick={handleLogin}>Log In</LoginButton>
            </LoginContainer>
        </PageContainer>
    );
};

export default Login;
