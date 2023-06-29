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
} from "@/components/header/styles";
import { IHeaderProps } from "@/components/header/types";
import { useMenu } from "@/hooks/useMenu";
import { useAuth } from "@/hooks/useAuth";
import { getUserInitials } from "@/utils";

const Header: FC<IHeaderProps> = () => {
    const { user } = useAuth();
    const { visible, toggle, handleLogout } = useMenu();

    if (!user) return undefined;

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
                <UserMenuIcon onClick={toggle} data-testid="header-avatar">
                    {getUserInitials(user)}
                </UserMenuIcon>
                <UserMenuContent
                    data-testid="header-signout-btn"
                    isVisible={visible}
                    onClick={handleLogout}
                >
                    Sign out
                </UserMenuContent>
            </UserMenu>
        </HeaderContainer>
    );
};

export default Header;
