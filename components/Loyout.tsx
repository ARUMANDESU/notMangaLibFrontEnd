import Navigation from "./Navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    );
}
