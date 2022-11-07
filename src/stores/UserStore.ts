import { IUserStore } from "../models/types";
import { makeObservable, observable } from "mobx";
import { RootStoreIml } from "./RootStore";
import { persist } from "mobx-persist";



const userInitialState: IUserStore = {
  id: 0,
  email: "",
  name: "",
  isAuth: false,
  role: "",
  imgUrl: "",
};

export class UserStore {
  root: RootStoreIml;
  @persist("object") user: IUserStore;

  constructor(root: RootStoreIml) {
    this.user = userInitialState;
    this.root = root;
    makeObservable(this, {
      user: observable,
    });
  }


  setUser(
    id: number,
    name: string,
    email: string,
    imgUrl: string,
    role: string
  ) {
    this.user = {
      id,
      name,
      email,
      isAuth: true,
      imgUrl,
      role: role,
    };
  }

  removeUser() {
    this.user = userInitialState;
  }
}
