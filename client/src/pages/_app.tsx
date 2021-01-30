import axios from 'axios';
import { AppProps } from 'next/app';

import '../styles/tailwind.css';
import '../styles/icons.css';

import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/auth';

axios.defaults.baseURL = 'http://localhost:5500/api';
axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    const authRoutes = ['/register', '/login'];
    const authRoute = authRoutes.includes(pathname);
    return (
        <AuthProvider>
            {!authRoute && <Navbar />}
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default App;
