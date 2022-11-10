import Image from 'next/image'
import Manga from '../components/manga/Manga'
import {IManga} from '../models/types'
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box, Typography} from "@mui/material";
import Container from "@mui/material/Container";

export default function Home({mangas}: { mangas: IManga[] }) {

    return (
        <div>
            <Image src={"http://localhost:5000/static/images/HomePageImage.png"} alt={"HomePageImage"} width={"1920"}
                   height={"400"}/>
            <Box className="ml-5 px-12 pt-20">
                <Typography variant="h4">
                    Catalog
                </Typography>
                <Grid2 container rowSpacing={1} columnSpacing={{xs: 0.1}} >

                    {mangas.map((manga) => {
                        return (
                            <Manga manga={manga} key={manga.id}/>
                        )
                    })}
                </Grid2>
            </Box>


        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:5000/")
    const data = await response.json()
    return {
        props: {mangas: data.manga, user: data.user},
    }
}