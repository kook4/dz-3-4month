


function HelloPage(){

    const click = () =>{
        alert('Hello World')
    }
    return(
        <>
            <button onClick={click}>click</button>
        </>
    )
}

export default HelloPage