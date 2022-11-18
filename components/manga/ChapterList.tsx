import React from "react";
import { Box, List } from "@mui/material";
import { IChapter } from "../../models/types";
import Link from "next/link";

const ChapterList = ({ chapters }: { chapters: IChapter[] }) => {
    return (
        <List>
            {chapters.map((chapter) => {
                return (
                    <Link
                        href={`/manga/${chapter.mangaId}/${chapter.volumeNumber}/${chapter.chapterNumber}`}
                    >
                        <Box
                            key={chapter.id}
                            sx={{ width: "100%", height: 50 }}
                        >
                            {chapter.volumeNumber}
                            {chapter.chapterNumber}
                            {chapter.title}
                            {chapter.date}
                        </Box>
                    </Link>
                );
            })}
        </List>
    );
};

export default ChapterList;
