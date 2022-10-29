import classes from "./namePage.module.css";



function NamePage(props){
    return(
        <>
            <ul className={classes.anna}>
                <li>{props.user.name}</li>
                <li>{props.user.age}</li>
            </ul>
        </>
    )
}

export default NamePage