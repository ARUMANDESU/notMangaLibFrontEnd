import React from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {IManga, serverUrl} from "../../../models/types";
import Image from "next/image";
import {Chip, Divider, Grid} from '@mui/material';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Index = ({manga}: { manga: IManga }) => {
    const router = useRouter()
    const {mangaId} = router.query
    const genre = manga.type.split(",")
    return (
        <Grid container component="main" sx={{height: '100vh',paddingTop:15,backgroundColor:"#3a3a3a"}}>
            <Grid
                item
                xs={false}
                sm={4}
                md={5}
                sx={{paddingLeft:8}}
            >
                <Image src={manga.mangaImg} alt={manga.name} width={350} height={580}/>
            </Grid>
            <Grid item xs={12} sm={8} md={7} >
                <Typography variant="h3" sx={{mb:5}}>
                    {manga.name}
                </Typography >
                <Typography variant="h6" sx={{my:1}}>
                    {`Author: ${manga.author}`}
                </Typography>
                <Typography variant="h6" sx={{my:1}}>
                    {`Title status: `}<Chip label={manga.status} variant="outlined"/>
                </Typography>
                <Typography variant="h6" sx={{my:1}}>
                    {`Title type: `}<Chip label={genre[0]} variant="outlined"/>
                </Typography>
                <Divider />
                <Typography variant="subtitle1">
                    {`Description: `}
                    <br/>
                    {manga.description}
                </Typography>

            </Grid>
        </Grid>
    )
}
export default Index;

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{ mangaId: string }> = async context => {
    const params = context.params!;
    const data = await fetch(`${serverUrl}manga/${params.mangaId}`).then(res => {
        return res.json()
    }).catch((err) => {
        console.error(err)
    })

    return {
        props: {manga: data.manga},
    }
};