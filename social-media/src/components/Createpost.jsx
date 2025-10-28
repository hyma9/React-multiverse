import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const Createpost=()=>{
  const {addPost}=useContext(PostListContext)

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    userIdElement.current.value=""
    postTitleElement.current.value=""
    postBodyElement.current.value=""
    reactionsElement.current.value=""
    tagsElement.current.value=""

    addPost(userId,postTitle,postBody,reactions,tags)

  }
    return (
    <form className="create-post" onSubmit={handleSubmit}>

      <div className="mb-3">
    <label htmlFor="userId" className="form-label">enter your userid here</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="enter your user id"/>
    </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">post title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="how are you feeling today..."/>
    
  </div>

 <div className="mb-3">
    <label htmlFor="body" className="form-label">post content</label>
    <textarea rows="4" type="text" ref={postBodyElement} className="form-control" id="body" placeholder="tell us more about it"/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">number of reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="how many ppl reacted to this post"/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">enter your hashtags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="please enter your tags using space"/>
    
  </div>

  <button type="submit" className="btn btn-primary">post</button>
</form>
    ) 
}
export default Createpost;