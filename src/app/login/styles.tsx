import Image from "next/image";
import { styled } from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LoginContainer = styled.div`
    @media only screen and (max-width: 600px) {
        padding: 0 15px;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Logo = styled(Image)`
    margin-right: 15px;
`;

export const TextContainer = styled.span``;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 600;
    font-size: 18px;
`;

export const Description = styled.p`
    font-weight: 600;
    font-size: 19px;
`;

export const LoginText = styled.p`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 700;
    padding: 40px 0 10px 0;
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmailLabel = styled.label`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 20px 0 15px 0;
`;

export const EmailInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.lightGray1};
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 20px;
`;

export const ValidationError = styled.small`
    color: ${({ theme }) => theme.colors.red};
    padding-top: 10px;
    font-size: 14px;
`;

export const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PasswordLabel = styled.label`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 20px 0 15px 0;
`;

export const PasswordInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.lightGray1};
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 20px;
`;

export const LoginButton = styled.button`
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.lightWhite2};
    font-size: 17px;
    font-weight: 600;
    border: none;
    padding: 8px 32px;
    border-radius: 8px;
    margin-top: 34px;
    height: 48px;
    cursor: pointer;
`;
