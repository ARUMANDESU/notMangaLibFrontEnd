import { RootStoreIml } from "../store/RootStore";

export interface IManga {
  id: number;
  name: string;
  description: string;
  author: string;
  type: string;
  lastUpdatedTime: string;
}

export interface IUserStore{
  id:number|null
  name:string|null
  email:string|null
  role:string|null
  imgUrl:string|null
  isAuth:boolean
}

export interface IStoreContext {
  rootStore: RootStoreIml;
}
