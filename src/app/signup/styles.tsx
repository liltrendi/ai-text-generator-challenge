import Image from "next/image";
import Link from 'next/link'
import { styled } from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 100px;
    @media only screen and (max-width: 600px) {
        padding: 80px 0;
    }
`;

export const SignupContainer = styled.div`
    max-width: 400px;
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
    @media only screen and (max-width: 600px) {
        font-size: 17px;
    }
`;

export const Description = styled.p`
    font-weight: 600;
    font-size: 19px;
    @media only screen and (max-width: 600px) {
        font-size: 17px;
    }
`;

export const SignupText = styled.p`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 700;
    padding: 40px 0 10px 0;
    @media only screen and (max-width: 600px) {
        padding-top: 30px;
        font-size: 17px;
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    @media only screen and (max-width: 600px) {
        width: unset;
    }
`;

export const NameLabel = styled.label`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 20px 0 15px 0;
    @media only screen and (max-width: 600px) {
        padding: 10px 0 8px 0;
    };
`;

export const NameInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.lightGray1};
    height: 48px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 20px;
    @media only screen and (max-width: 600px) {
        height: 40px;
    };
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    @media only screen and (max-width: 600px) {
        width: unset;
    }
`;

export const EmailLabel = styled.label`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 20px 0 15px 0;
    @media only screen and (max-width: 600px) {
        padding: 10px 0 8px 0;
    };
`;

export const EmailInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.lightGray1};
    height: 48px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 20px;
    @media only screen and (max-width: 600px) {
        height: 40px;
    };
`;

export const ValidationError = styled.small`
    color: ${({ theme }) => theme.colors.red};
    padding: 10px 0px 0 0;
    font-size: 14px;
`;

export const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    @media only screen and (max-width: 600px) {
        width: unset;
    }
`;

export const PasswordLabel = styled.label`
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 20px 0 15px 0;
    @media only screen and (max-width: 600px) {
        padding: 10px 0 8px 0;
    };
`;

export const PasswordInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.lightGray1};
    height: 48px;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 20px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 40px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 34px;
    @media only screen and (max-width: 600px) {
        margin-top: 35px;
    };
`

export const SignupButton = styled.button`
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.lightWhite2};
    font-size: 17px;
    font-weight: 600;
    border: none;
    padding: 8px 32px;
    border-radius: 8px;
    height: 48px;
    cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
    @media only screen and (max-width: 600px) {
        padding: 0 15px;
    };
`;

export const LoginLink = styled(Link)`
color: ${({ theme }) => theme.colors.darkGray};
font-size: 17px;
@media only screen and (max-width: 600px) {
    font-size: 15px;
}
`