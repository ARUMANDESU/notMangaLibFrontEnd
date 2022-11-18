import React from "react";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";

const MangaDescription = ({
    author,
    status,
    genre,
    description,
}: {
    author: string;
    status: string;
    genre: string[];
    description: string;
}) => {
    return (
        <>
            <Typography variant="h6" sx={{ my: 1 }}>
                {`Author: ${author}`}
            </Typography>
            <Typography variant="h6" sx={{ my: 1 }}>
                {`Title status: `}
                <Chip label={status} variant="outlined" />
            </Typography>
            <Typography variant="h6" sx={{ my: 1 }}>
                {`Title type: `}
                <Chip label={genre[0]} variant="outlined" />
            </Typography>
            <Divider />
            <Typography variant="subtitle1">
                {`Description: `}
                <br />
                {description}
            </Typography>
        </>
    );
};

export default MangaDescription;
