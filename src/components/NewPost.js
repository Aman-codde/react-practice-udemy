import classes from './NewPost.module.css';

export default function NewPost(props){
    return(
        <form className={classes.form}>
            <p className={classes.title}>Add New Task</p>
            <p>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={props.onAuthorChange}
                />
            </p>            
           <p>
                <label htmlFor="body">About</label>
                <textarea 
                    id="body"
                    rows={3}
                    required
                    onChange={props.onBodyChange}
                />
           </p>          
        </form>
    )
}