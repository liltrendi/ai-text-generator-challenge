import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/header";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

jest.mock("../../hooks/useAuth", () => ({
    useAuth: jest.fn(() => ({
        user: null,
        loading: true,
    })),
}));

describe("<Header />", () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        );
    });

    it.skip("renders", () => {
        screen.debug(undefined, Infinity);
    });
});
