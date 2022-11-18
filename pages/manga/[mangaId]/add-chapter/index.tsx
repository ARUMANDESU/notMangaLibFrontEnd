import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { CloudUpload, Create, Delete } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Image from "next/image";
import { serverUrl } from "../../../../models/types";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    const { mangaId } = router.query;
    const [images, setImages] = useState(null as FileList | null);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get("images"));
        const response = await fetch(
            `${serverUrl}manga/add-chapter/${mangaId}`,
            {
                method: "POST",
                credentials: "include",
                body: data,
            }
        );
        await response.json().then((res) => {
            router.push(
                `http://localhost:3000/manga/${mangaId}/${res.volumeNumber}/${res.chapterNumber}`
            );
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: "warning.main",
                        width: 56,
                        height: 56,
                    }}
                >
                    <Create sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Chapter
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Chapter
                    </Button>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoComplete="given-name"
                                name="chapterNumber"
                                type="number"
                                required
                                fullWidth
                                id="chapterNumber"
                                label="Chapter"
                                autoFocus
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoComplete="given-name"
                                name="volumeNumber"
                                type="number"
                                required
                                fullWidth
                                id="volumeNumber"
                                label="Volume"
                                autoFocus
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="title"
                                label="Title"
                                type="text"
                                id="title"
                                autoComplete="title"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label className="uploader-label">
                                <Box
                                    className="uploader-label-caption"
                                    sx={{ minWidth: 250, minHeight: 350 }}
                                >
                                    <CloudUpload />
                                    <Typography>
                                        Click or drag the images to upload
                                    </Typography>
                                </Box>
                                <input
                                    type="file"
                                    aria-label="File browser example"
                                    accept="image/*"
                                    multiple={true}
                                    name="images"
                                    id="images"
                                    onChange={(e) => {
                                        setImages(e.target.files);
                                    }}
                                    hidden={true}
                                />
                            </label>
                        </Grid>
                        <Grid item sx={{ width: "100%", height: "100%" }}>
                            {images != null &&
                                Array.from<File>(images).map((image) => {
                                    return (
                                        <>
                                            <Image
                                                src={URL.createObjectURL(image)}
                                                alt={image.name}
                                                layout="responsive"
                                                width={400}
                                                height={600}
                                            />
                                        </>
                                    );
                                })}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Index;
