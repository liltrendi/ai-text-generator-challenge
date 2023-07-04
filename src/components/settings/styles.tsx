import { styled } from "styled-components";
import { TSettingsContainerProps } from "@/components/settings/types";

export const SettingsContainer = styled((props: TSettingsContainerProps) => {
    // eslint-disable-next-line
    const { settingsVisible, ...otherProps } = props;
    return <div {...otherProps} />;
})(({ settingsVisible, theme }) => ({
    display: settingsVisible ? "block" : "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    background: theme.colors.black2,
}));

export const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.colors.lightWhite1};
    position: relative;
    border-radius: 10px;
    margin: 22vh auto;
    width: 45%;
    @media only screen and (max-width: 600px) {
        width: 75%;
    }
`;

export const TitleBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
    padding: 15px 20px;
    @media only screen and (max-width: 600px) {
        padding: 15px 13px;
    }
`;

export const ContentBlock = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    border-radius: 10px;
    @media only screen and (max-width: 600px) {
        padding: 15px 13px;
    }
`;

export const ModalTitle = styled.h3`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 25px;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

export const CloseBtn = styled.span`
    color: ${({ theme }) => theme.colors.pink};
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        font-size: 28px;
        line-height: 0;
    }
`;

export const InputBlock = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.label`
    flex: 1;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

export const NumberRangeInput = styled.input`
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.colors.black1};
    flex: 1.3;
    min-width: 60px;
    min-height: 40px;
    @media only screen and (max-width: 600px) {
        padding: 0 5px;
        font-size: 16px;
        flex: 0.8;
    }
`;

export const ToneInput = styled.input`
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.colors.black1};
    flex: 1.3;
    min-width: 60px;
    min-height: 40px;
    @media only screen and (max-width: 600px) {
        padding: 0 5px;
        font-size: 16px;
        flex: 0.8;
    }
`;

export const OutputLengthInput = styled.input`
    border-radius: 5px;
    padding: 0 10px;
    border: 1px solid ${({ theme }) => theme.colors.black1};
    flex: 1.3;
    min-width: 60px;
    min-height: 40px;
    @media only screen and (max-width: 600px) {
        padding: 0 5px;
        font-size: 16px;
        flex: 0.8;
    }
`;

export const ValidationError = styled.small`
    color: ${({ theme }) => theme.colors.red};
    margin: 0 0 3px 0;
    font-size: 14px;
`;

export const SaveBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    margin: 20px 0 0 0;
    cursor: pointer;
`;
