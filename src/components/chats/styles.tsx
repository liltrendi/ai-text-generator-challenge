import { styled, keyframes } from "styled-components";
import {
    TChatAvatarProps,
    TChatBubbleProps,
    TChatTextIndicator,
    TChatTextProps,
    TChatWrapper,
} from "@/components/chats/types";

export const ChatWindow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 75px 0;
    overflow-y: scroll;
    padding: 75px 30px 20px 30px;
    @media only screen and (max-width: 600px) {
        margin: 60px 0 75px 0;
        padding: 10px;
    }
`;

export const EmptyMessage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 0 10%;
    text-align: center;
`;

export const ChatBubble = styled((props: TChatBubbleProps) => {
    // eslint-disable-next-line
    const { chatOrigin, ...otherProps } = props;
    return <div {...otherProps} />;
})(({ chatOrigin }) => ({
    display: "flex",
    justifyContent: chatOrigin === "assistant" ? "flex-start" : "flex-end",
}));

export const ChatWrapper = styled((props: TChatWrapper) => {
    // eslint-disable-next-line
    const { chatOrigin, isAvatarHidden, ...otherProps } = props;
    return <div {...otherProps} />;
})(({ chatOrigin }) => ({
    display: "flex",
    alignItems: "start",
    flexDirection: chatOrigin === "assistant" ? "row" : "row-reverse",
    maxWidth: "75%",
    margin: "7px 0",
    "@media only screen and (max-width: 600px)": {
        maxWidth: "80%",
    },
}));

export const ChatAvatar = styled((props: TChatAvatarProps) => {
    // eslint-disable-next-line
    const { chatOrigin, isAvatarHidden, ...otherProps } = props;
    return <span {...otherProps} />;
})(({ theme, isAvatarHidden }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.colors.pink,
    color: theme.colors.white,
    borderRadius: "10px",
    minWidth: "40px",
    minHeight: "40px",
    fontSize: "17px",
    visibility: isAvatarHidden ? "hidden" : "visible",
    "@media only screen and (max-width: 600px)": {
        minWidth: "35px",
        minHeight: "35px",
        fontSize: "15.5px",
    },
}));

export const ChatText = styled((props: TChatTextProps) => {
    // eslint-disable-next-line
    const { chatOrigin, ...otherProps } = props;
    return <p {...otherProps} />;
})(({ chatOrigin, theme }) => ({
    position: "relative",
    background: theme.colors.lightWhite1,
    margin: chatOrigin === "assistant" ? "0 0 0 15px" : "0 15px 0 0",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "19px",
    "@media only screen and (max-width: 600px)": {
        margin: chatOrigin === "assistant" ? "0 0 0 8px" : "0 8px 0 0",
        fontSize: "16px",
    },
}));

export const ChatTextIndicator = styled((props: TChatTextIndicator) => {
    // eslint-disable-next-line
    const { chatOrigin, ...otherProps } = props;
    return <span {...otherProps} />;
})(({ chatOrigin, theme }) => ({
    position: "absolute",
    background: theme.colors.red,
    color: theme.colors.white,
    left: chatOrigin === "assistant" ? "-8px" : "inherit",
    right: chatOrigin === "assistant" ? "inherit" : "-8px",
    bottom: "-8px",
    padding: "0 0 3px 0",
    borderRadius: "50%",
    fontSize: "16px",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const TypingContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.lightWhite1};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 0 15px;
    border-radius: 12px;
    padding: 12px 16px;
    font-size: 19px;
    height: 47px;
    @media only screen and (max-width: 600px) {
        margin: 0 0 0 8px;
        font-size: 16px;
    }
`;

export const typingAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    33% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
`;

export const TypingBubble = styled.span`
    background-color: ${({ theme }) => theme.colors.lightGray2};
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 3px;
    animation: ${typingAnimation} 1000ms ease-in-out infinite;
    animation-delay: 3600ms;
    &:nth-child(1) {
        animation-delay: 0ms;
    }
    &:nth-child(2) {
        animation-delay: 333ms;
    }
    &:nth-child(3) {
        animation-delay: 666ms;
    }
    @media only screen and (max-width: 600px) {
        width: 8px;
        height: 8px;
    }
`;
