import React from 'react';
import {IManga} from '../../models/types';
import Image from "next/image";
import {Box, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from 'next/link';


const Manga = ({manga}: { manga: IManga }) => {
    const img = manga.mangaImg == null ? "" : manga.mangaImg
    return (

        <Grid2 xs={1.5}>
            <Link href={`/manga/${manga.id}`}>
                <Box sx={{
                    width: 150,
                    height: 280,
                    flexGrow: 1
                }}>
                    <Image src={img} alt={manga.name + " " + manga.author} width={150} height={250}/>
                    <Typography>
                        {manga.name}
                    </Typography>
                </Box>
            </Link>

        </Grid2>
    )
}
export default Manga;