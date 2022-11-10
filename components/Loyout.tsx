import Navigation from "./Navigation";
import { ReactNode } from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({palette:{mode:"dark"}});
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navigation />
                <main>{children}</main>
            </ThemeProvider>
        </>
    );
}
