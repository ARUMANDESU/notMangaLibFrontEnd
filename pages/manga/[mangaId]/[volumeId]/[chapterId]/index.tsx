import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { IChapter, serverUrl } from "../../../../../utils/models";
import Image from "next/image";

const Index = ({ chapter }: { chapter: IChapter }) => {
    const router = useRouter();
    const { mangaId, volumeId, chapterId } = router.query;

    useEffect(() => {
        if (chapter == null) {
            router.push(`/manga/${mangaId}`);
        }
    }, []);

    if (chapter != null) {
        return (
            <div>
                <h3>volume: {volumeId}</h3>
                <h3>chapter: {chapterId}</h3>
                <>
                    {chapter.images?.map((image) => {
                        if (image != "") {
                            return (
                                <Image
                                    key={image.slice(0, 3)}
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
    }
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
            console.log(err);
        });
    return {
        props: { chapter: data.chapter },
    };
};
