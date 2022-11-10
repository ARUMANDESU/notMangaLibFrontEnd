import Navigation from "./Navigation";
import { ReactNode } from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
const theme = createTheme({palette:{mode:"dark"}});
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navigation />
                <main>{children}</main>
            </ThemeProvider>
        </>
    );
}
