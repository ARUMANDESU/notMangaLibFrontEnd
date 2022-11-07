import React, { ReactNode, useContext } from "react";
import { RootStore, RootStoreIml } from "../stores/RootStore";

export const StoreContext = React.createContext<RootStoreIml>(RootStore);

export const useAuth = (): boolean =>
  (useContext(StoreContext) as RootStoreIml).UserStore.user.isAuth;

export const useStores = () => useContext(StoreContext) as RootStoreIml;

interface IStoreProvider {
  children: ReactNode;
}

export const StoreProvider: React.FC<IStoreProvider> = ({ children }) => {
  const rootStore = RootStore as RootStoreIml;
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};
