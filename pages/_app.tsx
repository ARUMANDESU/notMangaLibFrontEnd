import '../styles/globals.css'
import type {AppProps} from 'next/app'
import { StoreProvider } from '../store/StoreContext'
import Loyout from '../components/Loyout'

export default function App({Component, pageProps}: AppProps) {
    return (
        <StoreProvider>
            <Loyout>
                <Component {...pageProps} />
            </Loyout>
        </StoreProvider>
    )
}
