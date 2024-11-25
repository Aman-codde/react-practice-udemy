import React, { useState } from "react";
import './index.css';
import PostsLists from "./components/PostsLists";
import Header from "./components/Header";

function App() {
  const [showModal,setShowModal] = useState(false);
  function addPostHandler(){
    setShowModal(true);
  }
  function hideModalHandler(){
    setShowModal(false);
  }
  return (
    <>
      <Header onAddPost={addPostHandler}/>
      <main>
        <PostsLists showModal={showModal} onHideModal={hideModalHandler}/>
      </main>
    </>
  )
}

export default App;
