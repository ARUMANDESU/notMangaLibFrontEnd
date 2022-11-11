import {action, makeObservable, observable} from "mobx";
import { RootStoreIml } from "./RootStore";
import { persist } from "mobx-persist";
import {enableStaticRendering, useStaticRendering} from "mobx-react";
import { IUserStore } from "../models/types";
import {cookies} from "next/headers";
import { NextResponse } from "next/server";



if (typeof window !== "undefined") {
  const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
  enableStaticRendering(isServer);
}

const userInitialState: IUserStore = {
  id: null,
  email: null,
  name: null,
  isAuth: false,
  role: null,
  imgUrl: null,
};

export class UserStore {
  root: RootStoreIml;
  @persist("object") user: IUserStore;

  constructor(root: RootStoreIml) {
    this.user = userInitialState;
    this.root = root;
    makeObservable(this, {
      user: observable,
      setUser:action,
      removeUser:action,
      signInUser:action,
      signUpUser:action,
      Logout:action
    });
  }


  setUser(user:IUserStore) {
    this.user = {
      id:user.id,
      name:user.name,
      email:user.email,
      isAuth: true,
      imgUrl:user.imgUrl,
      role: user.role,
    };
  }

  removeUser() {
    this.user = userInitialState;
  }

  async signInUser(params: any = {}){
    await fetch(`http://localhost:5000/signin`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params),
    }).then(res=>res.json()).then((data)=>{this.setUser(data.user)})
  }

  async signUpUser(params:any={}){
    return  await fetch('http://localhost:5000/signup',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(params),
    }).then(res=>{return  res.json()})
  }

  async Logout(){
    await fetch('http://localhost:5000/logout',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials:"include",
    }).then(()=>{this.removeUser()}).catch((err)=>{
      console.error(err)})
  }
}
