import Image from "next/image";
import { styled } from "styled-components";

export const InputContainer = styled.div`
    position: absolute;
    padding: 0 30px 20px 30px;
    left: 0;
    right: 0;
    bottom: 0;
    @media only screen and (max-width: 600px) {
        padding: 0 15px 15px 15px;
    }
`;

export const ChatInput = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.lightWhite2};
    border-radius: 10px;
    padding: 25px 45px 25px 25px;
    font-size: 18px;
    width: 100%;
    height: 50px;
    &::placeholder {
        color: ${({ theme }) => theme.colors.lightGray2};
    }
    @media only screen and (max-width: 600px) {
        padding-left: 13px;
    }
`;

export const ChatSend = styled(Image)`
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 48px;
    @media only screen and (max-width: 600px) {
        top: 15px;
        right: 31px;
    }
`;
