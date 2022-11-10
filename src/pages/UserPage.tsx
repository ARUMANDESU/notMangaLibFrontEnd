import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStores } from "../context/StoreContext";
import { initialUser, IUser, IUserStore } from "../models/types";

const UserProfile = () => {
    const [user, setUser] = useState({} as IUser);
    async function GetUserData(id: string | undefined): Promise<IUser> {
        const user: IUser = initialUser;
        await axios
            .get(`http://localhost:5000/user/${id}`, { withCredentials: true })
            .then((res) => {
                user.id = res.data.user.id;
                user.name = res.data.user.name;
                user.email = res.data.user.email;
                user.imgUrl = "";
                user.role = res.data.user.role;
            });

        return user;
    }

    const { id } = useParams();
    const rootStore = useStores();
    const userStore = rootStore.UserStore;

    useEffect(() => {
        GetUserData(id).then((data) => {
            setUser(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            <Avatar src={user.imgUrl}></Avatar>
            <div>Username: {user.name}</div>
            <div>Email: {user.email}</div>
        </>
    );
};

export default UserProfile;
