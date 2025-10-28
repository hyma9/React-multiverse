import {useContext, useEffect, useState} from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcomemsg from "./Welcomemsg";
import Loadingspinner from "./Loadingspinner";

    const Postlist = () => {
    const { postList,addInitialPosts } = useContext(PostListContext);

    const [fetching,setFetching]=useState(false);

   useEffect(()=>{
        setFetching(true);

        const controller=new AbortController();
        const signal=controller.signal
        fetch('https://dummyjson.com/posts',{signal})
     .then(res => res.json())
     .then((data)=>{
        addInitialPosts(data.posts);
        setFetching(false);
    })

    return ()=>{
      controller.abort()
    }
    },[])
    

    
    return (
        <>
        {fetching&&<Loadingspinner/>}
        {!fetching&&postList.length===0 && <Welcomemsg/>}
            {!fetching&&postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};
export default Postlist;