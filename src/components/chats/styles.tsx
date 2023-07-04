import { styled } from "styled-components";
import {
    TChatAvatarProps,
    TChatBubbleProps,
    TChatTextProps,
    TChatWrapper,
} from "@/components/chats/types";

const DESKTOP_HEADER_HEIGHT = 75;
const DESKTOP_PROMPT_HEIGHT = 94;
const MOBILE_HEADER_HEIGHT = 60;
const MOBILE_PROMPT_HEIGHT = 69;

export const ChatWindow = styled.div`
    display: flex;
    flex-direction: column;
    max-height: calc(
        100vh - (${DESKTOP_HEADER_HEIGHT + DESKTOP_PROMPT_HEIGHT}px)
    );
    overflow-y: scroll;
    padding: 20px 30px 20px 30px;
    @media only screen and (max-width: 600px) {
        max-height: calc(
            100vh - (${MOBILE_HEADER_HEIGHT + MOBILE_PROMPT_HEIGHT + 15}px)
        );
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
    justifyContent: chatOrigin === "bot" ? "flex-start" : "flex-end",
}));

export const ChatWrapper = styled((props: TChatWrapper) => {
    // eslint-disable-next-line
    const { chatOrigin, isAvatarHidden, ...otherProps } = props;
    return <div {...otherProps} />;
})(({ chatOrigin }) => ({
    display: "flex",
    alignItems: "start",
    flexDirection: chatOrigin === "bot" ? "row" : "row-reverse",
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
    background: theme.colors.lightWhite1,
    margin: chatOrigin === "bot" ? "0 0 0 15px" : "0 15px 0 0",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "19px",
    "@media only screen and (max-width: 600px)": {
        margin: chatOrigin === "bot" ? "0 0 0 8px" : "0 8px 0 0",
        fontSize: "16px",
    },
}));
