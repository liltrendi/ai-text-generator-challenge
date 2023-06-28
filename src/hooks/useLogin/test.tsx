import { renderHook, act } from "@testing-library/react-hooks";
import { useLogin } from "@/hooks/useLogin";

const inputs = {
    invalidEmail: "hello world",
    validEmail: "hey@hey.com",
    shortPassword: "dh",
    weakPassword: "heythere",
    strongPassword: "23JumpStreet",
};

describe("useLogin()", () => {
    describe("given that the hook is called", () => {
        it("should initially have the email and password as empty", () => {
            const {
                result: { current },
            } = renderHook(() => useLogin());
            expect(current.email).toBe("");
            expect(current.password).toBe("");
        });

        describe("given that nothing is typed into the email/password fields", () => {
            it("should not update the email or password vars", () => {
                const { result } = renderHook(() => useLogin());
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
                expect(result.current.email).toBe("");
                expect(result.current.password).toBe("");
            });
        });

        describe("given that something is typed in either email/password input fields", () => {
            it("should update the email when handleText is called with the email name", () => {
                const { result } = renderHook(() => useLogin());
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
                const { result } = renderHook(() => useLogin());
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
        });

        describe("given that an invalid email is used", () => {
            it("should populate the validation errors array", () => {
                const { result } = renderHook(() => useLogin());
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
                const { result } = renderHook(() => useLogin());
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
                const { result } = renderHook(() => useLogin());
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

        describe("given that a valid email is used", () => {
            it("should clear the email validation array", () => {
                const { result } = renderHook(() => useLogin());
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
                const { result } = renderHook(() => useLogin());
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
    });
});
