import { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "gotrue-js";

export interface IHeaderProps {
    user: User | null | undefined;
}

export interface IUserMenuProps {
    isVisible?: boolean;
}

export type TUserMenuProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> &
    IUserMenuProps;
