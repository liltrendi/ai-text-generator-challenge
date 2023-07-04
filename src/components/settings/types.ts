import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISettingsModalProps {
    settingsVisible: boolean;
    closeSettings: () => void;
}

export type TSettingsContainerProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & { settingsVisible?: boolean };
