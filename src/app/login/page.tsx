"use client";

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
    SignupLink,
    ButtonsContainer,
} from "@/app/login/styles";
import { ILoginProps } from "@/app/login/types";
import AppLogo from "@/public/static/images/app-logo.svg";
import { useLogin } from "@/hooks/useLogin";
import { FC } from "react";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

const Login: FC<ILoginProps> = () => {
    const {
        email,
        password,
        handleTextChange,
        validationErrors,
        handleLogin,
        loading,
    } = useLogin();

    return (
        <PageContainer className={poppins.className}>
            <LoginContainer>
                <Header>
                    <Logo
                        src={AppLogo}
                        alt="Distributed logo"
                        data-testid="login-logo"
                    />
                    <TextContainer>
                        <Title data-testid="login-title">Elastic Team</Title>
                        <Description data-testid="login-subtitle">
                            Open AI - Text Generator
                        </Description>
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
                        data-testid="login-email-input"
                    />
                    {validationErrors.email.length > 0 && (
                        <ValidationError data-testid="email-validation-error">
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
                        data-testid="login-password-input"
                    />
                    {validationErrors.password.length > 0 && (
                        <ValidationError data-testid="password-validation-error">
                            {validationErrors.password[0]}
                        </ValidationError>
                    )}
                </PasswordContainer>
                <ButtonsContainer>
                    <LoginButton
                        onClick={handleLogin}
                        data-testid="login-btn"
                        disabled={loading}
                    >
                        Log In
                    </LoginButton>
                    <SignupLink href="/signup">Sign up instead?</SignupLink>
                </ButtonsContainer>
            </LoginContainer>
        </PageContainer>
    );
};

export default Login;
