import "styled-components";
import { theme } from "@/theme";

type TCustomTheme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends TCustomTheme {}
}
