import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TChatOrigin = "user" | "assistant";

export interface IAppConversation {
    id: string;
    origin: TChatOrigin;
    message: string;
    dateCreated: string;
    dateModified: null;
}

export interface IChatWindowProps {
    chats: IAppConversation[];
}

export interface IAppMessage {
    id: string;
    origin: TChatOrigin;
    dateCreated: string;
}

export interface IChatType {
    chatOrigin?: TChatOrigin;
    isAvatarHidden?: boolean;
}

export type TChatBubbleProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> &
    IChatType;

export type TChatWrapper = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> &
    IChatType;

export type TChatAvatarProps = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
> &
    IChatType;

export type TChatTextProps = DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
> &
    IChatType;
