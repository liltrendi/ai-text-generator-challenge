import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupPage from "@/app/signup/page";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

const inputs = {
    invalidName: "bn",
    validName: "Luke Skywalker",
    invalidEmail: "hello world",
    validEmail: "hey@hey.com",
    shortPassword: "dh",
    weakPassword: "heythere",
    strongPassword: "23JumpStreet",
    invalidConfirmPassword: "dehrfrfrandom"
};

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

jest.mock('../../hooks/useAuth', () => ({
    useAuth: jest.fn(() => ({
        user: null,
        loading: true
    }))
}))

describe("<SignupPage />", () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={theme}>
                <SignupPage />
            </ThemeProvider>
        );
    });

    describe("given that the signup page is just loaded", () => {
        it("should render the logo of the page", () => {
            expect(screen.queryByTestId("signup-logo")).toBeInTheDocument();
        });

        it("should render the title of the page", () => {
            expect(screen.queryByTestId("signup-title")).toBeInTheDocument();
        });

        it("should render the subtitle of the page", () => {
            expect(screen.queryByTestId("signup-subtitle")).toBeInTheDocument();
        });

        it("should render an empty name input field", () => {
            const nameInput = screen.queryByTestId("signup-name-input");
            expect(nameInput).toHaveDisplayValue("");
        });

        it("should render an empty email input field", () => {
            const emailInput = screen.queryByTestId("signup-email-input");
            expect(emailInput).toHaveDisplayValue("");
        });

        it("should render an empty password input field", () => {
            const passwordInput = screen.queryByTestId("signup-password-input");
            expect(passwordInput).toHaveDisplayValue("");
        });

        it("should render an empty confirmPassword input field", () => {
            const confirmPasswordInput = screen.queryByTestId("signup-confirm-password-input");
            expect(confirmPasswordInput).toHaveDisplayValue("");
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

        it("should render the signup button of the page", () => {
            expect(screen.queryByTestId("signup-btn")).toBeInTheDocument();
        });

        describe("given that the name input field is typed into", () => {
            it("should update the value to the newly typed text", async () => {
                const nameInput = screen.getByTestId("signup-name-input");
                await act(async () => {
                    await userEvent.type(nameInput, inputs.invalidName);
                });
                expect(nameInput).toHaveDisplayValue(inputs.invalidName);
            });

            describe("given that the name text is not valid", () => {
                beforeEach(async () => {
                    const nameInput = screen.getByTestId("signup-name-input");
                    await act(async () => {
                        await userEvent.type(nameInput, inputs.invalidName);
                    });
                });

                it("should show an name validation error", () => {
                    const nameValidationSpan = screen.queryByTestId(
                        "name-validation-error"
                    );
                    expect(nameValidationSpan).toBeInTheDocument();
                    expect(nameValidationSpan?.textContent).toBe(
                        "Name is too short"
                    );
                });
            });

            describe("given that the name text is valid", () => {
                beforeEach(async () => {
                    const nameInput = screen.getByTestId("signup-name-input");
                    await act(async () => {
                        await userEvent.type(nameInput, inputs.validName);
                    });
                });

                it("should remove the name validation error from the dom", () => {
                    const nameValidationSpan = screen.queryByTestId(
                        "name-validation-error"
                    );
                    expect(nameValidationSpan).not.toBeInTheDocument();
                });
            });
        });

        describe("given that the email input field is typed into", () => {
            it("should update the value to the newly typed text", async () => {
                const emailInput = screen.getByTestId("signup-email-input");
                await act(async () => {
                    await userEvent.type(emailInput, inputs.invalidEmail);
                });
                expect(emailInput).toHaveDisplayValue(inputs.invalidEmail);
            });

            describe("given that the email text is not valid", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("signup-email-input");
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
                    const emailInput = screen.getByTestId("signup-email-input");
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
                    "signup-password-input"
                );
                await act(async () => {
                    await userEvent.type(passwordInput, inputs.shortPassword);
                });
                expect(passwordInput).toHaveDisplayValue(inputs.shortPassword);
            });

            describe("given that the password text is short", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.shortPassword
                        );
                    });
                });

                it("should show an 'insufficient length' password validation error", () => {
                    const passwordValidationSpan = screen.queryByTestId(
                        "password-validation-error"
                    );
                    expect(passwordValidationSpan).toBeInTheDocument();
                    expect(passwordValidationSpan?.textContent).toBe(
                        "Password is too short"
                    );
                });
            });

            describe("given that the password text is weak", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.weakPassword
                        );
                    });
                });

                it("should show an 'invalid' password validation error", () => {
                    const passwordValidationSpan = screen.queryByTestId(
                        "password-validation-error"
                    );
                    expect(passwordValidationSpan).toBeInTheDocument();
                    expect(passwordValidationSpan?.textContent).toBe(
                        "Password must have one numeric digit, one uppercase letter and one lowercase letter"
                    );
                });
            });

            describe("given that the password text is valid", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
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

        describe("given that the confirmPassword input field is typed into", () => {
            it("should update the value to the newly typed text", async () => {
                const confirmPassword = screen.getByTestId(
                    "signup-confirm-password-input"
                );
                await act(async () => {
                    await userEvent.type(confirmPassword, inputs.invalidConfirmPassword);
                });
                expect(confirmPassword).toHaveDisplayValue(inputs.invalidConfirmPassword);
            });

            describe("given that the confirm password text does not match the password text", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                    const confirmPasswordInput = screen.getByTestId(
                        "signup-confirm-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            confirmPasswordInput,
                            inputs.invalidConfirmPassword
                        );
                    });
                });

                it("should show an 'no match' password validation error", () => {
                    const confirmPasswordValidationSpan = screen.queryByTestId(
                        "confirm-password-validation-error"
                    );
                    expect(confirmPasswordValidationSpan).toBeInTheDocument();
                    expect(confirmPasswordValidationSpan?.textContent).toBe(
                        "Passwords do not match"
                    );
                });
            });

            describe("given that the confirm password text matches with the password text", () => {
                beforeEach(async () => {
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                    const confirmPasswordInput = screen.getByTestId(
                        "signup-confirm-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            confirmPasswordInput,
                            inputs.strongPassword
                        );
                    });
                });

                it("should show an 'no match' password validation error", () => {
                    const confirmPasswordValidationSpan = screen.queryByTestId(
                        "confirm-password-validation-error"
                    );
                    expect(confirmPasswordValidationSpan).not.toBeInTheDocument();
                    expect(confirmPasswordValidationSpan?.textContent).toBe(undefined);
                });
            });
        });

        describe("given that the signup button is pressed", () => {
            describe("and an email validation error exists", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("signup-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.invalidEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                });

                it.skip("should abort the signup process", () => {
                    screen.debug(undefined, Infinity);
                });
            });

            describe("and a password validation error exists", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("signup-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.validEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.weakPassword
                        );
                    });
                });

                it.skip("should abort the signup process", () => {
                    screen.debug(undefined, Infinity);
                });
            });

            describe("and both an email and password validation error exist", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("signup-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.invalidEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.shortPassword
                        );
                    });
                });

                it.skip("should abort the signup process", () => {
                    screen.debug(undefined, Infinity);
                });
            });

            describe("and both the email and password fields are valid", () => {
                beforeEach(async () => {
                    const emailInput = screen.getByTestId("signup-email-input");
                    await act(async () => {
                        await userEvent.type(emailInput, inputs.validEmail);
                    });
                    const passwordInput = screen.getByTestId(
                        "signup-password-input"
                    );
                    await act(async () => {
                        await userEvent.type(
                            passwordInput,
                            inputs.strongPassword
                        );
                    });
                });

                it.skip("should perform the signup process", () => {
                    screen.debug(undefined, Infinity);
                });
            });
        });
    });
});
