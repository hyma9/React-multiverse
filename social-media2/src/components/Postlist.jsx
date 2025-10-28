import {useContext, useEffect, useState} from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcomemsg from "./Welcomemsg";
import Loadingspinner from "./Loadingspinner";

    const Postlist = () => {
    const { postList,fetching } = useContext(PostListContext);


    

    
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