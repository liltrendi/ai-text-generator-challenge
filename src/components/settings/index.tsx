import { FC } from "react";
import { ISettingsModalProps } from "@/components/settings/types";
import {
    CloseBtn,
    ContentBlock,
    InputBlock,
    InputLabel,
    ModalContent,
    ModalTitle,
    NumberRangeInput,
    OutputLengthInput,
    SaveBtn,
    SettingsContainer,
    TitleBlock,
    ToneInput,
    ValidationError,
} from "@/components/settings/styles";
import { useSettings } from "@/hooks/useSettings";

const SettingsModal: FC<ISettingsModalProps> = ({
    settingsVisible,
    closeSettings,
}) => {
    const { config, validationErrors, handleConfigChange, saveConfig } =
        useSettings({
            closeSettings,
        });

    return (
        <SettingsContainer settingsVisible={settingsVisible}>
            <ModalContent>
                <TitleBlock>
                    <ModalTitle>Settings</ModalTitle>
                    <CloseBtn onClick={closeSettings}>&times;</CloseBtn>
                </TitleBlock>
                <ContentBlock>
                    <InputBlock>
                        <InputLabel htmlFor="outputLength">
                            Output Length:{" "}
                        </InputLabel>
                        <OutputLengthInput
                            name="outputLength"
                            id="outputLength"
                            value={config.outputLength}
                            onChange={handleConfigChange}
                        />
                    </InputBlock>
                    {validationErrors.outputLength.length > 0 && (
                        <ValidationError>
                            {validationErrors.outputLength[0]}{" "}
                        </ValidationError>
                    )}
                    <InputBlock>
                        <InputLabel htmlFor="tone">Response tone: </InputLabel>
                        <ToneInput
                            name="tone"
                            id="tone"
                            value={config.tone}
                            onChange={handleConfigChange}
                        />
                    </InputBlock>
                    {validationErrors.tone.length > 0 && (
                        <ValidationError>
                            {validationErrors.tone[0]}
                        </ValidationError>
                    )}
                    <InputBlock>
                        <InputLabel htmlFor="temperature">
                            Temperature:{" "}
                        </InputLabel>
                        <NumberRangeInput
                            min={0}
                            max={1}
                            type="number"
                            id="temperature"
                            name="temperature"
                            value={config.temperature}
                            onChange={handleConfigChange}
                        />
                    </InputBlock>
                    {validationErrors.temperature.length > 0 && (
                        <ValidationError>
                            {validationErrors.temperature[0]}
                        </ValidationError>
                    )}
                    <SaveBtn onClick={saveConfig}>Save</SaveBtn>
                </ContentBlock>
            </ModalContent>
        </SettingsContainer>
    );
};

export default SettingsModal;
