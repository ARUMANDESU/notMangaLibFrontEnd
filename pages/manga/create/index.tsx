import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { CloudUpload, Create, Delete } from "@mui/icons-material";
import { useRouter } from "next/router";
import { serverUrl } from "../../../models/types";

const Index = () => {
    const router = useRouter();
    const [mangaCover, setMangaCover] = useState(null as File | null);
    useEffect(() => {
        setMangaCover(null);
    }, []);

    const handleDeleteMangaCover = () => {
        setMangaCover(null);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (mangaCover == null) {
            return;
        }
        const data = new FormData(event.currentTarget);
        data.append("mangaImg", mangaCover!);
        const response = await fetch(`${serverUrl}manga/create`, {
            method: "POST",
            credentials: "include",
            body: data,
        });
        await response.json().then((res) => {
            router.push(`http://localhost:3000/manga/${res.id}`);
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
                        bgcolor: "secondary.main",
                        width: 56,
                        height: 56,
                    }}
                >
                    <Create sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create Manga
                </Typography>
                <Box>
                    <Typography className="mt-10">Manga Cover</Typography>
                    {mangaCover != null ? (
                        <>
                            <Box
                                sx={{
                                    minWidth: 250,
                                    minHeight: 350,
                                    backgroundSize: "cover",
                                }}
                                style={{
                                    backgroundImage: `url('${URL.createObjectURL(
                                        mangaCover
                                    )}')`,
                                }}
                            >
                                <Button
                                    sx={{
                                        bgcolor: "#141414",
                                        color: "white",
                                        "&:hover": { bgcolor: "#f44336" },
                                    }}
                                    onClick={handleDeleteMangaCover}
                                >
                                    <Delete />
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <label className="uploader-label">
                                <Box
                                    className="uploader-label-caption"
                                    sx={{ minWidth: 250, minHeight: 350 }}
                                >
                                    <CloudUpload />
                                    <Typography>
                                        Click or drag the image to upload
                                    </Typography>
                                </Box>
                                <input
                                    type="file"
                                    aria-label="File browser example"
                                    accept="image/*"
                                    name="mangaImg"
                                    id="mangaImg"
                                    onChange={(e) => {
                                        setMangaCover(e.target.files![0]);
                                    }}
                                    hidden={true}
                                />
                            </label>
                        </>
                    )}
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                rows={5}
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                autoComplete="description"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="author"
                                label="Author"
                                type="text"
                                id="author"
                                autoComplete="author"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-select"
                                select
                                label="Manga Type"
                                name="type"
                                onChange={(e) => {}}
                                SelectProps={{
                                    native: true,
                                }}
                                helperText="Please select manga type"
                                defaultValue="manga"
                            >
                                <option value={"manga"}>{"Manga"}</option>
                                <option value={"manhwa"}>{"Manhwa"}</option>
                                <option value={"manhua"}>{"Manhua"}</option>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-select"
                                select
                                label="Status"
                                name="status"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText="Please select status"
                                defaultValue="ongoing"
                            >
                                <option value={"ongoing"}>{"Ongoing"}</option>
                                <option value={"finished"}>{"Finished"}</option>
                                <option value={"announce"}>{"Announce"}</option>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Manga
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
export default Index;
