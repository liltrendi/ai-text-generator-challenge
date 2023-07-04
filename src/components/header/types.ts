import { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "gotrue-js";

export interface IHeaderProps {
    user: User | null | undefined;
    menuVisible: boolean;
    toggleMenu: () => void;
    openSettings: () => void;
    handleLogout: () => Promise<void>;
}

export interface IUserMenuProps {
    isVisible?: boolean;
}

export type TUserMenuProps = DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
> &
    IUserMenuProps;
