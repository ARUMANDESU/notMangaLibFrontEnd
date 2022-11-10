import Button from "@mui/material/Button/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IManga } from "../models/types";

const HomePage = () => {
    const [mangas, setMangas] = useState([] as IManga[]);
    const GetHomePageManga = async (): Promise<IManga[]> => {
        let manga: IManga[] = [];
        await axios
            .get("http://localhost:5000/", { withCredentials: true })
            .then((res) => {
                manga = res.data.manga;
            });
        return manga;
    };

    useEffect(() => {
        return () => {
            GetHomePageManga().then((res) => {
                setMangas(res);
            });
        };
    }, []);

    return (
        <>
            <h1>HomePage!</h1>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            {mangas.map((manga) => {
                return (
                    <div key={manga.id}>
                        <h1>{manga.name}</h1>
                    </div>
                );
            })}
        </>
    );
};

export default HomePage;
