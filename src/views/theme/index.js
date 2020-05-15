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
        text: {
            primary: "#abb7c4",
            secondary: "#abb7c4",
            disabled: "#abb7c4",
        },
        action: {
            hover: "#dcf836",
        },
    },
    status: {
        danger: "orange",
    },
});
theme = responsiveFontSizes(theme);

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
