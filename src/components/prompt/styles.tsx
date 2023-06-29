import Image from "next/image";
import { styled } from "styled-components";

export const InputContainer = styled.div`
    position: relative;
`;

export const ChatInput = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.lightWhite2};
    border-radius: 10px;
    padding: 25px;
    font-size: 18px;
    width: 100%;
    height: 50px;
    &::placeholder {
        color: ${({ theme }) => theme.colors.lightGray2};
    }
`;

export const ChatSend = styled(Image)`
    position: absolute;
    top: 14px;
    right: 20px;
`;
