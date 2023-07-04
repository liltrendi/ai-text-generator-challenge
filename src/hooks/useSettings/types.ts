import { ChangeEvent, ChangeEventHandler } from "react";

export interface IUseSettingsProps {
    closeSettings: () => void;
}

export type TBotTone =
    | "modern"
    | "old fashioned"
    | "informal"
    | "formal"
    | string;
export type TBotOutputLength = "About 200 words or less" | string;

export interface ISettingsConfig {
    temperature: number;
    outputLength: TBotOutputLength;
    tone: TBotTone;
}

export type THandleConfigChange =
    | ChangeEventHandler<HTMLInputElement>
    | undefined;

export type THandleConfigChangeEvent = ChangeEvent<HTMLInputElement>;
