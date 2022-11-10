import Head from 'next/head'
import Image from 'next/image'
import { IManga } from '../models/types'
import styles from '../styles/Home.module.css'

export default function Home({mangas}: { mangas: IManga[] }) {

    return (
        <div className={styles.container}>
            <div>
                <Image src={"http://localhost:5000/static/manga/6124f367ea7b3.png"} alt={"img"}
                       width={500}
                       height={300}
                       max-width={768}
                      max-height={1208}/>
            </div>

            {mangas.map((manga) => {
                return (
                    <div key={manga.id}>
                        <h1>{manga.id}</h1>
                        <h2>{manga.name}</h2>
                        <h2>{manga.description}</h2>
                        <h2>{manga.author}</h2>
                        <h2>{manga.type}</h2>
                    </div>
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