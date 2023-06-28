import { renderHook, act } from "@testing-library/react-hooks";
import { useSignup } from "@/hooks/useSignup";

const inputs = {
    name: "Howard",
    invalidName: "hs",
    invalidEmail: "hello world",
    validEmail: "hey@hey.com",
    shortPassword: "dh",
    weakPassword: "heythere",
    strongPassword: "23JumpStreet",
};

describe("useSignup()", () => {
    describe("given that the hook is called", () => {
        it("should initially have the email and password as empty", () => {
            const {
                result: { current },
            } = renderHook(() => useSignup());
            expect(current.email).toBe("");
            expect(current.password).toBe("");
        });

        describe("given that nothing is typed into the name/email/password/confirmPassword fields", () => {
            it("should not update the email or password vars", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "somerandomname",
                    value: inputs.invalidEmail,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.name).toBe("");
                expect(result.current.email).toBe("");
                expect(result.current.password).toBe("");
                expect(result.current.confirmPassword).toBe("");
            });
        });

        describe("given that something is typed in either name/email/password/confirmPassword input fields", () => {
            it("should update the name when handleText is called with the 'full name' name", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "name",
                    value: inputs.weakPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.name).toBe(inputs.weakPassword);
            });

            it("should update the email when handleText is called with the email name", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "email",
                    value: inputs.invalidEmail,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.email).toBe(inputs.invalidEmail);
            });

            it("should update the password when handleText is called with the password name", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "password",
                    value: inputs.weakPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.password).toBe(inputs.weakPassword);
            });

            it("should update the confirm password when handleText is called with the confirmPassword name", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "confirmPassword",
                    value: inputs.weakPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.confirmPassword).toBe(inputs.weakPassword);
            });
        });

        describe("given that a short name is used", () => {
            it("should populate the name validation errors array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "name",
                    value: inputs.invalidName,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(
                    result.current.validationErrors.name.length
                ).toBeGreaterThan(0);
            });
        });

        describe("given that an invalid email is used", () => {
            it("should populate the validation errors array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "email",
                    value: inputs.invalidEmail,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(
                    result.current.validationErrors.email.length
                ).toBeGreaterThan(0);
            });
        });

        describe("given that a weak password is used", () => {
            it("should populate the password validation errors array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "password",
                    value: inputs.weakPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(
                    result.current.validationErrors.password.length
                ).toBeGreaterThan(0);
            });
        });

        describe("given that an invalid password is used", () => {
            it("should populate the password validation errors array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "password",
                    value: inputs.weakPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(
                    result.current.validationErrors.password.length
                ).toBeGreaterThan(0);
            });
        });

        describe("given that the confirm password input used does not match the password field", () => {
            it("should populate the password validation errors array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedPasswordEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedPasswordEvent.target = {
                    name: "password",
                    value: inputs.weakPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedPasswordEvent);
                });
                const updatedConfirmPasswordEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedConfirmPasswordEvent.target = {
                    name: "confirmPassword",
                    value: inputs.strongPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedConfirmPasswordEvent);
                });
                expect(
                    result.current.validationErrors.confirmPassword.length
                ).toBeGreaterThan(0);
            });
        });

        describe("given that a valid name is used", () => {
            it("should clear the name validation array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "name",
                    value: inputs.name,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.validationErrors.name.length).toBe(0);
            });
        });

        describe("given that a valid email is used", () => {
            it("should clear the email validation array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "email",
                    value: inputs.validEmail,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.validationErrors.email.length).toBe(0);
            });
        });

        describe("given that a valid password is used", () => {
            it("should clear the password validation array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedEvent.target = {
                    name: "password",
                    value: inputs.strongPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedEvent);
                });
                expect(result.current.validationErrors.password.length).toBe(0);
            });
        });

        describe("given that both provided passwords match", () => {
            it("should clear the confirmPassword validation array", () => {
                const { result } = renderHook(() => useSignup());
                const updatedPasswordEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedPasswordEvent.target = {
                    name: "password",
                    value: inputs.strongPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedPasswordEvent);
                });
                const updatedConfirmPasswordEvent = JSON.parse(
                    JSON.stringify(new Event("change"))
                );
                updatedConfirmPasswordEvent.target = {
                    name: "confirmPassword",
                    value: inputs.strongPassword,
                };
                act(() => {
                    result.current.handleTextChange?.(updatedConfirmPasswordEvent);
                });
                expect(result.current.validationErrors.confirmPassword.length).toBe(0);
            });
        });
    });
});
