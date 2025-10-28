import { createContext, useReducer,useState,useCallback,useEffect } from "react";


export const PostListContext=createContext({
    postList:[],
    fetching:false,
    addPost:()=>{},
    deletePost:()=>{},
    likePost:()=>{}
});


const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList
    if (action.type==='DELETE-POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)
    }
    else if(action.type==='ADD-POST'){
        newPostList=[action.payload,...currPostList]
    }
    else if(action.type==='ADD-INITIAL-POSTS'){
    newPostList = action.payload.posts; 
}
    else if (action.type === 'INCREMENT-REACTION') {
    newPostList = currPostList.map(post => {
        if (post.id === action.payload.postId) {
            return { ...post, reactions: Number(post.reactions) + 1 };
        }
        return post;
    });
}
    return newPostList
}

export const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);
        const [fetching,setFetching]=useState(false);

  

    const addPost=(post)=>{
          dispatchPostList({
            type:'ADD-POST',
            payload:post,
          })
    }

    const addInitialPosts=(posts)=>{
          dispatchPostList({
            type:'ADD-INITIAL-POSTS',
            payload:{
                posts
            }
          })
    }


    const deletePost=(postId)=>{
        dispatchPostList({
            type:'DELETE-POST',
            payload:{
                postId,
            }
        })

    }

    const likePost = (postId) => {
    dispatchPostList({
        type: 'INCREMENT-REACTION',
        payload: { postId }
    });
};

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
    <PostListContext.Provider value={{ postList,addPost,deletePost,fetching,likePost}}>{children}</PostListContext.Provider>
    )
    
}
const DEFAULT_POST_LIST=[
//     {
//     id:1,
//     title:"going to mathura",
//     body:"vacation",
//     reactions:2,
//     userId:"user-9",
//     tags:["vacation","mathura"]
// },
// {
//     id:2,
//     title:"going to dwaraka",
//     body:"vacation",
//     reactions:5,
//     userId:"user-10",
//     tags:["vacation","dwaraka"]
// }
]

// import { createContext, useReducer } from "react";

// // ✅ Named context export
// export const PostListContext = createContext({
//   postList: [],
//   addPost: () => {},
//   addInitialPosts: () => {},
//   deletePost: () => {},
//   likePost: () => {}
// });

// // ✅ Reducer using if...else
// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;

//   if (action.type === 'DELETE-POST') {
//     newPostList = currPostList.filter(post => post.id !== action.payload.postId);
//   } else if (action.type === 'ADD-POST') {
//     newPostList = [action.payload, ...currPostList];
//   } else if (action.type === 'ADD-INITIAL-POSTS') {
//     newPostList = action.payload.posts;
//   } else if (action.type === 'INCREMENT-REACTION') {
//     newPostList = currPostList.map(post =>
//       post.id === action.payload.postId
//         ? { ...post, reactions: Number(post.reactions) + 1 }
//         : post
//     );
//   }

//   return newPostList;
// };

// // ✅ Named provider export
// export const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     dispatchPostList({
//       type: 'ADD-POST',
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions,
//         userId,
//         tags
//       }
//     });
//   };

//   const addInitialPosts = (posts) => {
//     dispatchPostList({
//       type: 'ADD-INITIAL-POSTS',
//       payload: { posts }
//     });
//   };

//   const deletePost = (postId) => {
//     dispatchPostList({
//       type: 'DELETE-POST',
//       payload: { postId }
//     });
//   };

//   const likePost = (postId) => {
//     dispatchPostList({
//       type: 'INCREMENT-REACTION',
//       payload: { postId }
//     });
//   };

//   return (
//     <PostListContext.Provider value={{ postList, addPost, deletePost, addInitialPosts, likePost }}>
//       {children}
//     </PostListContext.Provider>
//   );
// };

// // ✅ Consistent ID types
// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "going to mathura",
//     body: "vacation",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "mathura"]
//   },
//   {
//     id: 2,
//     title: "going to dwaraka",
//     body: "vacation",
//     reactions: 5,
//     userId: "user-10",
//     tags: ["vacation", "dwaraka"]
//   }
// ];
