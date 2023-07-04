import { useCallback, useMemo, useState } from "react";
import {
    ISettingsConfig,
    IUseSettingsProps,
    THandleConfigChange,
    THandleConfigChangeEvent,
} from "@/hooks/useSettings/types";
import {
    shouldAbortSettingsSave,
    triggerAlert,
    validateSettingsConfig,
} from "@/utils";

export const useSettings = ({ closeSettings }: IUseSettingsProps) => {
    const [config, setConfig] = useState<ISettingsConfig>({
        temperature: 0.5,
        tone: "informal",
        outputLength: "About 200 words or less",
    });

    const handleConfigChange: THandleConfigChange = useCallback(
        (e: THandleConfigChangeEvent) => {
            setConfig(previous => ({
                ...previous,
                [e.target.name]: e.target.value,
            }));
        },
        [config]
    );

    const saveConfig = useCallback(() => {
        if (shouldAbortSettingsSave(config)) {
            triggerAlert({
                message: "Your settings are invalid",
                type: "error",
            });
            return;
        }
        // save
        triggerAlert({
            message: "Your settings have been updated",
            type: "success",
        });
        closeSettings();
    }, [config, closeSettings]);

    const validationErrors = useMemo(
        () => validateSettingsConfig(config),
        [config]
    );

    return {
        config,
        validationErrors,
        handleConfigChange,
        saveConfig,
    };
};
