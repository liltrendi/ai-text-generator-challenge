import { renderHook, act } from "@testing-library/react-hooks";
import { useMenu } from "@/hooks/useMenu";

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
}));

jest.mock("../useAuth", () => ({
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

describe("useMenu()", () => {
    describe("given that the hook is called", () => {
        it("should default to a non visible logout menu by default", () => {
            const {
                result: { current },
            } = renderHook(() => useMenu());
            expect(current.visible).toBe(false);
        });

        it("should toggle visibility when the toggle setter is invoked", () => {
            const hook = renderHook(() => useMenu());
            expect(hook.result.current.visible).toBe(false);
            act(() => {
                hook.result.current.toggle();
            });
            expect(hook.result.current.visible).toBe(true);
            act(() => {
                hook.result.current.toggle();
            });
            expect(hook.result.current.visible).toBe(false);
        });

        it("should navigate to the login page when handleLogout is invoked", async () => {
            const hook = renderHook(() => useMenu());
            await act(async () => {
                await hook.result.current.handleLogout();
            });
            expect(mockRouterPush).toHaveBeenCalledTimes(1);
            expect(mockRouterPush).toHaveBeenCalledWith("/login");
        });
    });
});
