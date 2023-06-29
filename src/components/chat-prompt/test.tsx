import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatPrompt from "@/components/chat-prompt";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

describe("<ChatPrompt />", () => {
    describe("given that the component is mounted", () => {
        render(
            <ThemeProvider theme={theme}>
                <ChatPrompt />
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
