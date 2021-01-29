import axios from "axios";
import { AppProps } from "next/app";

import "../styles/tailwind.css";

import Navbar from "../components/Navbar";
import { Fragment } from "react";

axios.defaults.baseURL = "http://localhost:5500/api";
axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
