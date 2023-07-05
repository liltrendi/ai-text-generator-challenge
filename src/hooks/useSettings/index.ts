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
    getDefaultSettings,
    LOCAL_STORAGE_SETTINGS_KEY,
} from "@/utils";

export const useSettings = ({ closeSettings }: IUseSettingsProps) => {
    const [config, setConfig] = useState<ISettingsConfig>(getDefaultSettings());

    const handleConfigChange: THandleConfigChange = useCallback(
        (e: THandleConfigChangeEvent) => {
            setConfig(previous => ({
                ...previous,
                [e.target.name]: e.target.value,
            }));
        },
        []
    );

    const saveConfig = useCallback(() => {
        if (shouldAbortSettingsSave(config)) {
            triggerAlert({
                message: "Your settings are invalid",
                type: "error",
            });
            return;
        }
        localStorage.setItem(
            LOCAL_STORAGE_SETTINGS_KEY,
            JSON.stringify(config)
        );
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
