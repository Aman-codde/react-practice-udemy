import classes from './Modal.module.css';

export default function Modal(props){
    return (
        <>
            <div className={classes.backdrop} onClick={props.handleClick}/>
            <dialog open className={classes.modal}>{props.children}</dialog>
        </>
    )
}