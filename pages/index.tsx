import Image from "next/image";
import Manga from "../components/manga/Manga";
import { IManga, serverUrl } from "../models/types";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";

export default function Home({ mangas }: { mangas: IManga[] }) {
    return (
        <div>
            {/*<Image src={`${serverUrl}static/images/HomePageImage.png`}
                   alt={"HomePageImage"}
                   width={"1920"}
                   height={"400"}
            />*/}

            <Image
                src={`${serverUrl}static/images/HomePageImage.png`}
                alt={"HomePageImage"}
                layout="responsive"
                width={"1920"}
                height={"400"}
            />
            <Box className="ml-5 px-12 pt-20">
                <Typography variant="h4">Catalog</Typography>
                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 0.1 }}>
                    {mangas.map((manga) => {
                        return <Manga manga={manga} key={manga.id} />;
                    })}
                </Grid2>
            </Box>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch(`${serverUrl}`);
    const data = await response.json();
    return {
        props: { mangas: data.manga },
    };
}
