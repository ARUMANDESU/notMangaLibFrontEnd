import React from 'react';
import {IManga} from '../../models/types';
import Image from "next/image";
import {Box, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from 'next/link';


const Manga = ({manga}: { manga: IManga }) => {
    const img = manga.mangaImg == null ? "" : manga.mangaImg
    return (

        <Grid2 xs={2.4}>
            <Link href={`/manga/${manga.id}`}>
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
                        <Image src={img} alt={manga.name + " " + manga.author} fill={true}
                               className={"image-fit-contain"}/>
                    </Box>
                    <Typography>
                        {manga.name}
                    </Typography>
                </Box>
            </Link>

        </Grid2>
    )
}
export default Manga;