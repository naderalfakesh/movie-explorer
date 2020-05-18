import React from "react";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
    palette: {
        // type: "light",
        primary: { main: "#0f2133" },
        // secondary: default is ok
        success: { main: "#dcf836" },
        text: {
            primary: "#abb7c4",
            secondary: "#dd003f",
            disabled: "##9ca9b7",
            hint: "#4280bf",
        },
        action: {
            hover: "#dd003f",
        },
    },
    typography: {
        fontSize: 12,
    },
    status: {
        danger: "orange",
    },
});
theme = responsiveFontSizes(theme);

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
