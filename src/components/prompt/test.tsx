import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Prompt from "@/components/prompt";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

describe("<Prompt />", () => {
    describe("given that the component is mounted", () => {
        render(
            <ThemeProvider theme={theme}>
                <Prompt appendToStatefulChatHistory={() => ({})} />
            </ThemeProvider>
        );
    });

    it("should render an empty input field", () => {
        expect(screen.queryByTestId("chat-prompt-input")).toBeInTheDocument();
        expect(screen.queryByTestId("chat-prompt-input")).toHaveDisplayValue(
            ""
        );
    });
});
