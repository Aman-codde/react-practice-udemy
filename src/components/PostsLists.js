import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

export default function PostsLists(){
    const [eneteredAuthor, setEnteredAuthor] = useState('');
    const [eneteredBody, setEnteredBody] = useState('');
    const [showModal,setShowModal] = useState(true);

    function onAuthorChange(event){
        setEnteredAuthor(event.target.value);
    }
    function onBodyChange(event){
        setEnteredBody(event.target.value);
    }

    function modalHandler(){
        setShowModal(!showModal)
    }

    return(
        <>
            {showModal &&
            (<Modal handleClick={modalHandler}>
                <NewPost onAuthorChange={onAuthorChange} onBodyChange={onBodyChange}/>
            </Modal>)}
            <ul>
            <Post author ={eneteredAuthor} body = {eneteredBody}/>
            <Post author ={2} body = {1}/>
            </ul>
        </> 
    )
}