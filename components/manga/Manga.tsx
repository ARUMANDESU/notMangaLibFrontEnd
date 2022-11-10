import React from 'react';
import {IManga} from '../../models/types';
import Image from "next/image";
import {Box, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Manga = ({manga}: { manga: IManga }) => {
    const img = "https://www.kirikiribasara.com/wp-content/uploads/2021/09/bncoversg.jpg"
    return (
        <Grid2 xs={2.4}>
            <Box sx={{
                width: 250,
                height: 480,
                flexGrow: 1
            }}>
                <Box sx={{
                    width: 250,
                    height: 400,
                    flexGrow: 1
                }} style={{position: "relative"}}>
                    <Image src={img} alt={manga.name + " " + manga.author} fill={true} className={"image-fit-contain"}/>
                </Box>
                <Typography>
                    {manga.name}
                </Typography>
            </Box>
        </Grid2>
    )
}
export default Manga;