import { FC } from "react";
import AppLogo from "@/public/static/images/app-logo.svg";
import {
    HeaderContainer,
    NavContainer,
    Logo,
    TextContainer,
    Title,
    Subtitle,
    SubtitleMobile,
    UserMenu,
    UserMenuIcon,
    UserMenuContent,
    MenuItem,
} from "@/components/header/styles";
import { IHeaderProps } from "@/components/header/types";
import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";
import SettingsIcon from "@/public/static/images/settings-icon.svg";

const Header: FC<IHeaderProps> = ({
    user: propsUser,
    menuVisible,
    toggleMenu,
    openSettings,
    handleLogout,
}) => {
    const { user: authUser } = useAuth();
    const pathname = usePathname();

    const user = authUser || propsUser;

    if (!user || pathname !== "/") return undefined;

    return (
        <HeaderContainer>
            <NavContainer>
                <Logo
                    src={AppLogo}
                    alt="Distributed logo"
                    data-testid="header-logo"
                />
                <TextContainer>
                    <Title data-testid="header-title">Elastic Team</Title>
                    <Subtitle data-testid="header-subtitle">
                        Open AI - Text Generator
                    </Subtitle>
                    <SubtitleMobile data-testid="header-subtitle-mobile">
                        AI Text Generator
                    </SubtitleMobile>
                </TextContainer>
            </NavContainer>
            <UserMenu>
                <UserMenuIcon
                    src={SettingsIcon}
                    alt="Settings"
                    onClick={toggleMenu}
                    data-testid="header-avatar"
                />
                <UserMenuContent isVisible={menuVisible}>
                    <MenuItem onClick={openSettings}>Settings</MenuItem>
                    <MenuItem
                        data-testid="header-signout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </MenuItem>
                </UserMenuContent>
            </UserMenu>
        </HeaderContainer>
    );
};

export default Header;
