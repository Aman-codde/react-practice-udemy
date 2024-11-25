import { useState } from 'react';
import classes from './NewPost.module.css';

export default function NewPost(props){
    const [eneteredAuthor, setEnteredAuthor] = useState('');
    const [eneteredBody, setEnteredBody] = useState('');

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const postData = {
            author: eneteredAuthor,
            body: eneteredBody
        }
        props.onAddPost(postData);
        props.onCancel();
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <p className={classes.title}>Add New Task</p>
            <p>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={authorChangeHandler}
                />
            </p>            
           <p>
                <label htmlFor="body">About</label>
                <textarea 
                    id="body"
                    rows={3}
                    required
                    onChange={bodyChangeHandler}
                />
           </p> 
           <button className={classes.btn}>Submit</button>  
           <button type='button' className={`${classes.btn} ${classes.cancelBtn}`} onClick={props.onCancel}>Cancel</button>       
        </form>
    )
}