import React from 'react';
import {GetServerSideProps} from "next";
import {IUserStore, serverUrl} from "../../../models/types";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {Grid, Typography } from '@mui/material';
import Image from "next/image";

const avatarSx={minWidth:100,minHeight:100}
const Index = ({user}:{user:IUserStore}) => {
    return (
        <Grid container component="main" sx={{height: '100vh',paddingTop:15,backgroundColor:"#3a3a3a"}}>
            <Grid
                item
                xs={false}
                sm={4}
                md={3}
                sx={{paddingLeft:8}}
            >
                {user.imgUrl ? (
                    <Avatar src={user.imgUrl} sx={avatarSx} variant="rounded"></Avatar>
                ) : (
                    <Avatar sx={avatarSx} variant="rounded" ><Typography variant="h3">{user.name != null && user.name.slice(0, 1).toUpperCase()}</Typography> </Avatar>
                )}

            </Grid>
            <Grid item xs={12} sm={8} md={9} >
                <Typography variant="h4">
                    {user.name}
                </Typography>
                <Typography variant="h6">
                    {`Role: ${user.role}`}
                </Typography>
            </Grid>

        </Grid>
    )
}
export default Index;

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{ userId: string }> = async context => {
    const params = context.params!;
    const data = await fetch(`${serverUrl}user/${params.userId}`).then(res => {
        return res.json()
    }).catch((err) => {
        console.error(err)
    })

    return {
        props: {user: data.user},
    }
};