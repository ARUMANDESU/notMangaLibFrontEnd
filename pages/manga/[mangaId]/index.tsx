import React from 'react';
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()
    const {mangaId} = router.query
    return (
        <div>
            {mangaId}
        </div>
    )
}
export default Index;