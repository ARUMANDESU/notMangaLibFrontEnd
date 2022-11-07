import { create } from "mobx-persist";
import { UserStore } from "./UserStore";

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

export class RootStoreIml {
  UserStore: UserStore;

  constructor() {
    this.UserStore = new UserStore(this);
    hydrate("User", this.UserStore);
  }
}

export const RootStore = new RootStoreIml();
