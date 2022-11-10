export interface IUserStore {
   id: number;
   email: string;
   name: string;
   isAuth: boolean;
   role: string;
   imgUrl: string;
}

export interface IUser {
   id: number;
   email: string;
   name: string;
   role: string;
   imgUrl: string;
}

export const initialUser: IUser = {
   id: 0,
   email: "",
   name: "",
   role: "",
   imgUrl: "",
};

export interface IManga {
   id: number;
   description: string;
   name: string;
   author: string;
   imgUrl: string;
   genre: string[];
}
