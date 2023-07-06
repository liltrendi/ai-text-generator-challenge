import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Prompt from "@/components/prompt";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

const mockRouterPush = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
            push: mockRouterPush,
            replace: mockRouterPush,
        };
    },
    usePathname() {
        return "/";
    },
}));

describe("<Prompt />", () => {
    describe("given that the component is mounted", () => {
        render(
            <ThemeProvider theme={theme}>
                <Prompt
                    scrollToBottom={() => ({})}
                    updateReactiveChatHistory={() => ({})}
                    setIsBotTyping={() => {}}
                />
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
