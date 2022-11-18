import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { IChapter, IManga, serverUrl } from "../../../models/types";
import Image from "next/image";
import { Box, Chip, Divider, Grid, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MangaDescription from "../../../components/manga/MangaDescription";
import ChapterList from "../../../components/manga/ChapterList";
import Link from "next/link";

const Index = ({
    manga,
    chapters,
}: {
    manga: IManga;
    chapters: IChapter[];
}) => {
    const router = useRouter();
    const { mangaId } = router.query;
    const genre = manga.type.split(",");
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Grid
            container
            component="main"
            sx={{ height: "100vh", paddingTop: 15, backgroundColor: "#3a3a3a" }}
        >
            <Grid item xs={false} sm={4} md={5} sx={{ paddingLeft: 8 }}>
                <Image
                    src={manga.mangaImg}
                    alt={manga.name}
                    width={350}
                    height={580}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={7}>
                <TabContext value={value}>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        {manga.name}
                    </Typography>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Description" value="1" />
                            <Tab label="Chapters" value="2" />
                            <Tab label="Comments" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <MangaDescription
                            author={manga.author}
                            status={manga.status}
                            genre={genre}
                            description={manga.description}
                        />
                    </TabPanel>
                    <TabPanel value="2">
                        <Link href={`/manga/${manga.id}/add-chapter`}>
                            Add Chapter
                        </Link>
                        <ChapterList chapters={chapters} />
                    </TabPanel>
                    <TabPanel value="3">Comments...</TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    );
};
export default Index;

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{
    mangaId: string;
}> = async (context) => {
    const params = context.params!;
    const data = await fetch(`${serverUrl}manga/${params.mangaId}`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.error(err);
        });

    return {
        props: { manga: data.manga, chapters: data.chapters },
    };
};
