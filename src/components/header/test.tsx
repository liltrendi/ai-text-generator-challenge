import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "@/components/header";
import { User } from "gotrue-js";
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
        };
    },
    usePathname() {
        return "/";
    },
}));

jest.mock("../../hooks/useAuth", () => ({
    useAuth: jest
        .fn()
        .mockReturnValueOnce({
            user: null,
            loading: true,
        })
        .mockReturnValue({
            user: { user_metadata: { name: "Charles Xavier" } },
            loading: false,
        }),
}));

describe("<Header />", () => {
    describe("given that the header component is rendered", () => {
        describe("and the user is not logged in", () => {
            beforeEach(() => {
                render(
                    <ThemeProvider theme={theme}>
                        <Header
                            user={null}
                            handleLogout={async () => {}}
                            menuVisible={false}
                            openSettings={() => {}}
                            toggleMenu={() => {}}
                        />
                    </ThemeProvider>
                );
            });

            it("should not render any header element, for example, the logo or avatar", () => {
                expect(
                    screen.queryByTestId("header-logo")
                ).not.toBeInTheDocument();
                expect(
                    screen.queryByTestId("header-avatar")
                ).not.toBeInTheDocument();
            });
        });

        describe("and the user is logged in", () => {
            beforeEach(() => {
                render(
                    <ThemeProvider theme={theme}>
                        <Header
                            user={
                                {
                                    user_metadata: { name: "Charles Xavier" },
                                } as User
                            }
                            handleLogout={async () => {}}
                            menuVisible
                            openSettings={() => {}}
                            toggleMenu={() => {}}
                        />
                    </ThemeProvider>
                );
            });

            it("should render the logo of the page", () => {
                expect(screen.queryByTestId("header-logo")).toBeInTheDocument();
            });

            it("should render the title of the page", () => {
                expect(
                    screen.queryByTestId("header-title")
                ).toBeInTheDocument();
            });

            it("should render the subtitle of the page", () => {
                expect(
                    screen.queryByTestId("header-subtitle")
                ).toBeInTheDocument();
            });

            it("should render the mobile subtitle of the page", () => {
                expect(
                    screen.queryByTestId("header-subtitle-mobile")
                ).toBeInTheDocument();
            });

            it("should render the settings icon", () => {
                expect(
                    screen.queryByTestId("header-avatar")
                ).toBeInTheDocument();
            });

            it("should render the logout button of the page", () => {
                expect(
                    screen.queryByTestId("header-signout-btn")
                ).toBeInTheDocument();
            });

            describe("given that the logout button is clicked", () => {
                beforeEach(async () => {
                    const logoutBtn = screen.getByTestId("header-signout-btn");

                    await act(async () => {
                        fireEvent.click(logoutBtn);
                    });
                });

                it.skip("should redirect to the login page", async () => {
                    expect(mockRouterPush).toHaveBeenCalledTimes(1);
                    expect(mockRouterPush).toHaveBeenCalledWith("/login");
                });
            });
        });
    });
});
