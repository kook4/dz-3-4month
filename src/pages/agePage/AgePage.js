import classes from "./agePage.module.css";

function AgePage(props){
    return(
        <>
            <ul className={classes.anna}>
                <li>{props.user.name}</li>
                <li>{props.user.age}</li>
            </ul>
        </>
    )
}

export default AgePage