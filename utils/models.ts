import { RootStoreIml } from "../store/RootStore";

export interface IManga {
    id: number;
    name: string;
    description: string;
    author: string;
    type: string;
    status: string;
    lastUpdatedTime: string;
    mangaImg: string;
}

export interface IUserStore {
    id: number | null;
    name: string | null;
    email: string | null;
    role: string | null;
    imgUrl: string | null;
    isAuth: boolean;
}

export interface IStoreContext {
    rootStore: RootStoreIml;
}

export interface IChapter {
    id: number | null;
    mangaId: number | null;
    chapterNumber: number | null;
    volumeNumber: number | null;
    title: string | null;
    images: string[] | null;
    dateString: string | null;
}

export const serverUrl = "http://localhost:5000/";
