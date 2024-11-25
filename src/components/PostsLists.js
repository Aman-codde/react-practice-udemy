import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

export default function PostsLists(props){
    const [posts,setPosts]=useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts])
    }
    return(
        <>
            {props.showModal &&
            (<Modal handleClick={props.onHideModal}>
                <NewPost 
                    onCancel={props.onHideModal}
                    onAddPost={addPostHandler}/>
            </Modal>)}

            {posts.length > 0 && (
            <ul>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>)}

            {posts.length === 0 && (
                <div>
                    <h2>There are no posts yet.</h2>
                    <p>Add some posts!</p>
                </div>
            )}
        </> 
    )
}