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

const LOCAL_STORAGE_SETTINGS_KEY = "dstbtd_app_settings";

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

    const getDefaultSettings = useCallback((): ISettingsConfig => {
        try {
            const settings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
            if (settings === null) return config;
            return JSON.parse(settings);
        } catch (e) {
            return config;
        }
    }, [config]);

    return {
        config,
        validationErrors,
        handleConfigChange,
        saveConfig,
        getDefaultSettings,
    };
};
