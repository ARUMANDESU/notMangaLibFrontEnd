import React from "react";
import { Link } from "react-router-dom";
import { useStores } from "../context/StoreContext";

const Navigation = () => {
   const rootStore = useStores();
   const userStore = rootStore.UserStore;
   const user = userStore.user;
   return (
      <div>
         {"Navigation:  "}
         <Link to="/" className="link">
            {"HOME"}
         </Link>
         <Link to={`/user/${user.id}`} className="link">
            {"UserPage"}
         </Link>
         <Link to={`/user/1`} className="link">
            {"UserPage"}
         </Link>
      </div>
   );
};

export default Navigation;
