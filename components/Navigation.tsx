import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { RootStoreIml } from "../store/RootStore";
import ProfileIconComponent from "./ProfileIconComponent";
import Link from "next/link";

interface NavigationProps {
  rootStore: RootStoreIml;
}

const Navigation: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href={"/"}>
              NotMangaLib
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <ProfileIconComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
