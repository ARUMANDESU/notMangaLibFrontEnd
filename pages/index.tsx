import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {IManga} from "../models";

export default function Home({mangas}: { mangas: IManga[] }) {

    return (
        <div className={styles.container}>
            {mangas.map((manga) => {
                return (
                    <>
                        <h1>{manga.id}</h1>
                        <h2>{manga.name}</h2>
                        <h2>{manga.description}</h2>
                        <h2>{manga.author}</h2>
                        <h2>{manga.type}</h2>
                    </>
                )
            })}
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