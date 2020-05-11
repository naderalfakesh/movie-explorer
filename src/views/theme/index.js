import React from 'react'
import { createMuiTheme, responsiveFontSizes ,ThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
        text:{
            primary: "#abb7c4",
            secondary: "#abb7c4",
            disabled: "#abb7c4",
        }
    },
    status: {
        danger: 'orange',
    },
});
theme = responsiveFontSizes(theme);

export default function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
