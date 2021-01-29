import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

import { Post } from "../types";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="pt-12">
      <Head>
        <title>Social Shout</title>
      </Head>
      <div className="container flex pt-4">
        <div className="w-160">
          {posts.map((post) => (
            <div key={post.identifier}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
