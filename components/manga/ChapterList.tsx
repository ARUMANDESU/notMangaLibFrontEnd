import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { IChapter } from "../../utils/models";
import Link from "next/link";

const ChapterList = ({ chapters }: { chapters: IChapter[] }) => {
    return (
        <List dense={true}>
            {chapters.map((chapter) => {
                return (
                    <ListItem key={chapter.id} sx={{ p: 0 }}>
                        <Box
                            sx={{
                                width: "100%",
                                height: 50,
                                display: { xs: "flex", md: "flex" },
                                alignItems: "center",
                                backgroundColor: "#1e1b1b",
                                "&:hover": {
                                    backgroundColor: "#000000",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    pl: 2.5,
                                    "&:hover": {
                                        color: "#90caf9",
                                    },
                                }}
                            >
                                <Link
                                    href={`/manga/${chapter.mangaId}/${chapter.volumeNumber}/${chapter.chapterNumber}`}
                                >
                                    {"Volume "}
                                    {chapter.volumeNumber}
                                    {" Chapter "}
                                    {chapter.chapterNumber}
                                    {" - "}
                                    {chapter.title}
                                </Link>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <Box>{chapter.dateString}</Box>
                            <Box sx={{ flexGrow: 0.1 }}></Box>
                        </Box>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default ChapterList;
