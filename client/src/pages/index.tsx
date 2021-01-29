import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

import Logo from "../images/logo.svg";

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Shout</title>
      </Head>
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 bg-white">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Logo className="mr-2 w-9 h-9" />
            </a>
          </Link>
          <span className="text-2xl font-semibold">
            <Link href="/">Social Shout</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
