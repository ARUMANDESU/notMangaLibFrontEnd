import React from "react";
import { IManga } from "../../utils/models";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const Manga = ({ manga }: { manga: IManga }) => {
    const img = manga.mangaImg == null ? "" : manga.mangaImg;
    return (
        <Grid2 xs={2.5} md={1.5}>
            <Box
                sx={{
                    width: 150,
                    height: 280,
                    flexGrow: 1,
                }}
            >
                <Link href={`/manga/${manga.id}`}>
                    <Image
                        src={img}
                        alt={manga.name + " " + manga.author}
                        width={150}
                        height={220}
                    />
                    <Typography>{manga.name}</Typography>
                </Link>
            </Box>
        </Grid2>
    );
};
export default Manga;
