import classes from "./Post.module.css";

export default function Post(props){
    return(
        <li className={classes.post}>
            <h1 className={classes.title}>{props.author}</h1>
            <p>{props.body}</p>
        </li>
    )
}