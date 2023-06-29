import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IHeaderProps {}

export interface IUserMenuProps {
    isVisible?: boolean;
}

export type TUserMenuProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> &
    IUserMenuProps;
