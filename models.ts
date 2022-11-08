export interface IManga {
  id: number;
  name: string;
  description: string;
  author: string;
  type: string;
  lastUpdatedTime: string;
}

export interface IUser{
  id:number
  name:string
  email:string
  isAuth:boolean
}