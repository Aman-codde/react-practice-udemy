import classes from './Header.module.css';

export default function Header(props){
    return(
        <div className={classes.header}>
            <a href='#'>React Poster</a>
            <button className={classes.addBtn} onClick={props.onAddPost}>Add New Post</button>
        </div>
    )
}