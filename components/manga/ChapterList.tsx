import React from "react";
import { Box, List } from "@mui/material";
import { IChapter } from "../../models/types";

const ChapterList = ({ chapters }: { chapters: IChapter[] }) => {
    return (
        <List>
            {chapters.map((chapter) => {
                return (
                    <Box key={chapter.id} sx={{ width: "100%", height: 50 }}>
                        {chapter.volumeNumber}
                        {chapter.chapterNumber}
                        {chapter.title}
                        {chapter.date}
                    </Box>
                );
            })}
        </List>
    );
};

export default ChapterList;
