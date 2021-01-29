import axios from "axios";
import { AppProps } from "next/app";
import "../styles/tailwind.css";

axios.defaults.baseURL = "http://localhost:5500/api";
axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
