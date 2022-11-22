import { Avatar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStores } from "../store/StoreContext";
import { useRouter } from "next/router";
import { IUserStore } from "../utils/models";
import { UserStore } from "../store/UserStore";

const ProfileIconComponent: React.FC = () => {
    const [user, setUser] = useState({} as IUserStore);
    const [userStore, setUserStore] = useState({} as UserStore);
    const rootStore = useStores();
    const router = useRouter();
    useEffect(() => {
        setUser(rootStore.UserStore.user);
        setUserStore(rootStore.UserStore);
    }, []);

    const [bIsAccountMenu, setBIsAccountMenu] = useState(false);
    const [loginMenuAnchor, setLoginMenuAnchor] = useState<null | HTMLElement>(
        null
    );

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setLoginMenuAnchor(event.currentTarget);
        setBIsAccountMenu(true);
    };
    const handleMenuClose = () => {
        setLoginMenuAnchor(null);
        setBIsAccountMenu(false);
    };
    const handleLogout = () => {
        userStore.Logout().then(() => {
            location.replace("/");
        });
    };

    const handleAccountIconPressed = () => {
        router.push(`/user/${user.id}`);
    };

    const loginMenu = (
        <Menu
            anchorEl={loginMenuAnchor}
            open={bIsAccountMenu}
            onClose={handleMenuClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            {user.isAuth ? (
                <>
                    <MenuItem>
                        <Link href={`/user/${user.id}`}>Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </>
            ) : (
                <>
                    <Link href={"/auth/signin"}>
                        <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
                    </Link>
                    <Link href={"/auth/signup"}>
                        <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
                    </Link>
                </>
            )}
        </Menu>
    );

    return (
        <Box sx={{ display: { xs: "flex" } }}>
            {user.isAuth ? (
                <>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleMenuOpen}
                    >
                        {user.imgUrl ? (
                            <Avatar src={user.imgUrl}></Avatar>
                        ) : (
                            <Avatar>
                                {user.name != null &&
                                    user.name.slice(0, 1).toUpperCase()}
                            </Avatar>
                        )}
                    </IconButton>
                </>
            ) : (
                <>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <Avatar></Avatar>
                    </IconButton>
                </>
            )}
            {loginMenu}
        </Box>
    );
};
export default ProfileIconComponent;
