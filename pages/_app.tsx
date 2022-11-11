import '../styles/globals.css'
import type {AppProps} from 'next/app'
import { StoreProvider } from '../store/StoreContext'
import Loyout from '../components/Loyout'
import axios from "axios";
import * as https from "https";


axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized:false
})
export default function App({Component, pageProps}: AppProps) {
    return (
        <StoreProvider>
            <Loyout>
                <Component {...pageProps} />
            </Loyout>
        </StoreProvider>
    )
}
