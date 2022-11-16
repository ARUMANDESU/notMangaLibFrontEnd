import { create } from "mobx-persist";
import { UserStore } from "./UserStore";
import { enableStaticRendering } from "mobx-react";

const hydrate = create({
    jsonify: true,
});

export class RootStoreIml {
    UserStore: UserStore;

    constructor() {
        this.UserStore = new UserStore(this);
    }
}

export const RootStore = new RootStoreIml();
if (typeof window !== "undefined") {
    const isServer = typeof window === "undefined";
    // eslint-disable-next-line react-hooks/rules-of-hooks
    enableStaticRendering(isServer);
    hydrate("User", RootStore.UserStore);
}
