import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "@/app/login/page";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

const inputs = {
    invalidEmail: "hello world",
    validEmail: "hey@hey.com",
    emptyPassword: "",
    shortPassword: "dh",
    weakPassword: "heythere",
    strongPassword: "23JumpStreet",
};

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

describe("<LoginPage />", () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>
        );
    });

    describe("given that the login page is just loaded", () => {
        it("should render the logo of the page", () => {
            expect(screen.queryByTestId("login-logo")).toBeInTheDocument();
        });

        it("should render the title of the page", () => {
            expect(screen.queryByTestId("login-title")).toBeInTheDocument();
        });

        it("should render the subtitle of the page", () => {
            expect(screen.queryByTestId("login-subtitle")).toBeInTheDocument();
        });

        it("should render an empty email input field", () => {
            const emailInput = screen.queryByTestId("login-email-input");
            expect(emailInput).toHaveDisplayValue("");
        });

        it("should render an empty password input field", () => {
            const passwordInput = screen.queryByTestId("login-password-input");
            expect(passwordInput).toHaveDisplayValue("");
        });

        it("should not render any validation errors yet", () => {
            const emailValidationSpan = screen.queryByTestId(
                "email-validation-error"
            );
            const passwordValidationSpan = screen.queryByTestId(
                "password-validation-error"
            );
            expect(emailValidationSpan).not.toBeInTheDocument();
            expect(passwordValidationSpan).not.toBeInTheDocument();
        });

        it("should render the login button of the page", () => {
            expect(screen.queryByTestId("login-btn")).toBeInTheDocument();
        });

        describe("given that the email input field is typed into", () => {
            it("should update the value to the newly typed text", async () => {
                const emailInput = screen.getByTestId("login-email-input");
                await act(async () => {
                    await userEvent.type(emailInput, inputs.invalidEmail);
                });
                expect(emailInput).toHaveDisplayValue(inputs.invalidEmail);
            });

            describe("given that the email text is not valid", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("login-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.invalidEmail);
                    });
                });

                it("should show an email validation error", () => {
                    const emailValidationSpan = screen.queryByTestId(
                        "email-validation-error"
                    );
                    expect(emailValidationSpan).toBeInTheDocument();
                    expect(emailValidationSpan?.textContent).toBe(
                        "Email is not valid"
                    );
                });
            });

            describe("given that the email text is valid", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("login-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.validEmail);
                    });
                });

                it("should remove the email validation error from the dom", () => {
                    const emailValidationSpan = screen.queryByTestId(
                        "email-validation-error"
                    );
                    expect(emailValidationSpan).not.toBeInTheDocument();
                });
            });
        });

        describe("given that the password input field is typed into", () => {
            it("should update the value to the newly typed text", async () => {
                const passwordInput = screen.getByTestId(
                    "login-password-input"
                );
                await act(async () => {
                    await userEvent.type(passwordInput, inputs.shortPassword);
                });
                expect(passwordInput).toHaveDisplayValue(inputs.shortPassword);
            });

            describe("given that the password text is empty", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "login-password-input"
                    );
                    // type something into the input
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                    // delete the entire input to mimic an empty input
                    await act(async () => {
                        await userEvent.clear(passwordInput);
                    });
                });

                it("should show an 'insufficient length' password validation error", () => {
                    const passwordValidationSpan = screen.queryByTestId(
                        "password-validation-error"
                    );
                    expect(passwordValidationSpan).toBeInTheDocument();
                    expect(passwordValidationSpan?.textContent).toBe(
                        "Password cannot be empty"
                    );
                });
            });

            describe("given that the password text is valid", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "login-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                });

                it("should remove the password validation error from the dom", () => {
                    const passwordValidationSpan = screen.queryByTestId(
                        "password-validation-error"
                    );
                    expect(passwordValidationSpan).not.toBeInTheDocument();
                });
            });
        });

        describe("given that the login button is pressed", () => {
            describe("and an email validation error exists", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("login-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.invalidEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "login-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                });

                it.skip("should abort the login process", () => {
                    screen.debug(undefined, Infinity);
                });
            });

            describe("and a password validation error exists", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("login-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.validEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "login-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.weakPassword
                        );
                    });
                });

                it.skip("should abort the login process", () => {
                    screen.debug(undefined, Infinity);
                });
            });

            describe("and both an email and password validation error exist", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("login-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.invalidEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "login-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.shortPassword
                        );
                    });
                });

                it.skip("should abort the login process", () => {
                    screen.debug(undefined, Infinity);
                });
            });

            describe("and both the email and password fields are valid", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("login-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.validEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "login-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                });

                it.skip("should perform the login process", () => {
                    screen.debug(undefined, Infinity);
                });
            });
        });
    });
});
