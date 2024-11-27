import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

export default function PostsLists(props){
    const [posts,setPosts]=useState([]);
    const [isFetching,setIsFetching] = useState(false);

     useEffect(()=>{
        async function fetchPosts(){
            setIsFetching(true)
            const response = await fetch('http://localhost:5000/posts');
            const resData = await response.json();
            console.log("data fetched...",resData)
            setPosts(resData);
            setIsFetching(false)
        }
        fetchPosts();
     },[])  
     
     function addPostHandler(postData){
        console.log(postData)
        fetch('http://localhost:5000/posts',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type':'application/json',
            }
        });
        setPosts((existingPosts)=>[postData,...existingPosts]);
     }
    
    return(
        <>
            {props.showModal &&
            (<Modal handleClick={props.onHideModal}>
                <NewPost 
                    onCancel={props.onHideModal}
                    onAddPost={addPostHandler}/>
            </Modal>)}

            {!isFetching && posts.length > 0 && (
            <ul>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>)}

            {!isFetching && posts.length === 0 && (
                <div>
                    <h2>There are no posts yet.</h2>
                    <p>Add some posts!</p>
                </div>
            )}
            {isFetching && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading Posts...</p>
                </div>
            )}
        </> 
    )
}