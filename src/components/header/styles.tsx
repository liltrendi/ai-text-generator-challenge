import Image from "next/image";
import { styled } from "styled-components";
import { TUserMenuProps } from "./types";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightWhite2};
    height: 75px;
    padding: 0 25px;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        padding: 0 10px;
        height: 60px;
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
`;

export const Logo = styled(Image)`
    margin: 0 15px 0 0;
    @media only screen and (max-width: 600px) {
        margin: 0 5px 0 0;
        width: 35px;
        width: 35px;
    }
`;

export const TextContainer = styled.span``;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.pink};
    font-weight: 600;
    font-size: 18px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

export const Subtitle = styled.p`
    display: block;
    font-weight: 600;
    font-size: 19px;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const SubtitleMobile = styled.p`
    display: none;
    font-weight: 600;
    font-size: 15px;
    @media only screen and (max-width: 600px) {
        display: block;
    }
`;

export const UserMenu = styled.div``;

export const UserMenuIcon = styled(Image)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 48px;
    height: 48px;
    @media only screen and (max-width: 600px) {
        width: 35px;
        height: 35px;
    }
`;

export const UserMenuContent = styled((props: TUserMenuProps) => {
    // eslint-disable-next-line
    const { isVisible, ...otherProps } = props;
    return <ul {...otherProps} />;
})(({ theme, isVisible }) => ({
    boxShadow: `0px 8px 16px 1px ${theme.colors.black1}`,
    display: isVisible ? "block" : "none",
    background: theme.colors.white,
    transform: "translate(-50px, 20px)",
    borderRadius: "5px",
    position: "absolute",
    textAlign: "center",
    minWidth: "100px",
    cursor: "pointer",
    zIndex: 1,
    "@media only screen and (max-width: 600px)": {
        transform: "translate(-50px, 20px)",
        minWidth: "80px",
        fontSize: "16px",
    },
}));

export const MenuItem = styled.li`
    cursor: pointer;
    list-style: none;
    padding: 12px 0;
    &:hover {
        background-color: ${({ theme }) => theme.colors.pink};
        color: ${({ theme }) => theme.colors.white};
    }
`;
