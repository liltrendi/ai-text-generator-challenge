"use client";

import { FC } from "react";
import { Poppins } from "next/font/google";
import {
    PageContainer,
    SignupContainer,
    Header,
    Logo,
    TextContainer,
    Title,
    Description,
    SignupText,
    EmailContainer,
    EmailLabel,
    EmailInput,
    PasswordContainer,
    PasswordLabel,
    PasswordInput,
    SignupButton,
    ValidationError,
    NameLabel,
    NameContainer,
    NameInput,
} from "@/app/signup/styles";
import { ISignupProps } from "@/app/signup/types";
import AppLogo from "@/public/static/images/app-logo.svg";
import { useSignup } from "@/hooks/useSignup";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

const Signup: FC<ISignupProps> = () => {
    const { name, email, password, confirmPassword, handleTextChange, validationErrors, handleSignup, loading } =
        useSignup();

    return (
        <PageContainer className={poppins.className}>
            <SignupContainer>
                <Header>
                    <Logo
                        src={AppLogo}
                        alt="Distributed logo"
                        data-testid="signup-logo"
                    />
                    <TextContainer>
                        <Title data-testid="signup-title">Elastic Team</Title>
                        <Description data-testid="signup-subtitle">
                            Open AI - Text Generator
                        </Description>
                    </TextContainer>
                </Header>
                <SignupText>Please sign up to continue</SignupText>
                <NameContainer>
                    <NameLabel htmlFor="name">Full name</NameLabel>
                    <NameInput
                        id="name"
                        name="name"
                        type="name"
                        value={name}
                        onChange={handleTextChange}
                        data-testid="signup-name-input"
                        required
                    />
                    {validationErrors.name.length > 0 && (
                        <ValidationError data-testid="name-validation-error">
                            {validationErrors.name[0]}
                        </ValidationError>
                    )}
                </NameContainer>
                <EmailContainer>
                    <EmailLabel htmlFor="email">Email address</EmailLabel>
                    <EmailInput
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleTextChange}
                        data-testid="signup-email-input"
                        required
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
                        data-testid="signup-password-input"
                        required
                    />
                    {validationErrors.password.length > 0 && (
                        <ValidationError data-testid="password-validation-error">
                            {validationErrors.password[0]}
                        </ValidationError>
                    )}
                </PasswordContainer>
                <PasswordContainer>
                    <PasswordLabel htmlFor="password">Confirm password</PasswordLabel>
                    <PasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleTextChange}
                        data-testid="signup-confirm-password-input"
                        required
                    />
                    {validationErrors.confirmPassword.length > 0 && (
                        <ValidationError data-testid="confirm-password-validation-error">
                            {validationErrors.confirmPassword[0]}
                        </ValidationError>
                    )}
                </PasswordContainer>
                <SignupButton onClick={handleSignup} data-testid="signup-btn" disabled={loading}>
                    Sign Up
                </SignupButton>
            </SignupContainer>
        </PageContainer>
    );
};

export default Signup;
