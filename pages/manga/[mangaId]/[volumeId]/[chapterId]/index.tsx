import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { IChapter, serverUrl } from "../../../../../models/types";
import Image from "next/image";

const Index = ({ chapter }: { chapter: IChapter }) => {
    const router = useRouter();
    const { mangaId, volumeId, chapterId } = router.query;
    return (
        <div>
            <h1>{mangaId}</h1>
            <h1>{volumeId}</h1>
            <h1>{chapterId}</h1>
            <>
                {chapter.images?.map((image) => {
                    if (image != "") {
                        return (
                            <Image
                                src={serverUrl + image}
                                alt="something"
                                layout="responsive"
                                width={1920}
                                height={1080}
                            />
                        );
                    }
                })}
            </>
        </div>
    );
};

export default Index;

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{
    mangaId: string;
}> = async (context) => {
    const params = context.params!;
    const data = await fetch(
        `${serverUrl}manga/${params.mangaId}/${params.volumeId}/${params.chapterId}`
    )
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.error(err);
        });

    return {
        props: { chapter: data.chapter },
    };
};
