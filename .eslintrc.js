module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        ],
        "react/jsx-props-no-spreading": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "no-nested-ternary": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "react/function-component-definition": "off",
        "prettier/prettier": ["warn", { printWidth: 80 }],
        "@typescript-eslint/no-empty-interface": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        // "import/no-unresolved": "off",
    },
};
