import {NextRouter, useRouter} from "next/router";

export const handlenNotAuth=({status,router=useRouter()}:{status:number,router:NextRouter})=>{
    if(status==303){
        router.push(`http://localhost:3000/auth/signin`);
    }
}