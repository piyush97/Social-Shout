import axios from "axios";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

axios.defaults.baseURL = "http://localhost:5500/api";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
