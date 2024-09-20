import { Suspense } from "react";
import Post from "./post";

export default function PostView(){
    return(
      <Suspense>
        <Post/>
      </Suspense>
    )
  }