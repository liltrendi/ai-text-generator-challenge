export enum EBrandColors {
    white = "#ffffff",
    lightWhite1 = "#f1f1f1",
    lightWhite2 = "#E0E0E0",
    lightGray1 = "#A4A9BF",
    lightGray2 = "#9F9F9F",
    midGray = "#656C8C",
    darkGray = "#2D3142",
    pink = "#FF007A",
    green = "#46B455",
    black = "#000000",
}

export enum EBrandFonts {
    poppins = "Poppins",
    inter = "Inter",
}

export interface ICustomTheme {
    colors: typeof EBrandColors;
    fonts: typeof EBrandFonts;
}
