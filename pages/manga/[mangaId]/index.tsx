import React from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {IManga} from "../../../models/types";
import Image from "next/image";

const Index = ({manga}:{manga:IManga}) => {
    const router = useRouter()
    const {mangaId} = router.query
    return (
        <div>
            {manga.mangaImg == null ? "no image" : <Image src={manga.mangaImg} alt={manga.name} width={350} height={580}/>}

        </div>
    )
}
export default Index;

export const getServerSideProps:GetServerSideProps<{ mangaId:string }> = async context => {
    const params = context.params!;
    const data = await fetch(`http://localhost:5000/manga/${params.mangaId}`).then(res=>{return res.json()}).catch((err)=>{console.error(err)})

    return {
        props: {manga: data.manga},
    }
};