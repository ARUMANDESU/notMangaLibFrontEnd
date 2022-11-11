import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {RootStoreIml} from "../store/RootStore";
import ProfileIconComponent from "./ProfileIconComponent";
import Link from "next/link";


interface NavigationProps {
    rootStore: RootStoreIml;
}

const Navigation: React.FC = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link href={"/"}>
                        <Typography variant="h6">
                            NotMangaLib
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Box sx={{flexGrow: 0.2, display: {xs: 'none', md: 'flex'}}}>
                            <Link href={"/manga/create"}>
                                <Typography variant="h6">
                                    Add manga
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <ProfileIconComponent/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
