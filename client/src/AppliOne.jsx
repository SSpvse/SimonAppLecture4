import Button from "./Button";

function AppliOne() {

    function clickedMe(){
        alert("Hi!")
    }

    return <>
    <h1>Hello Reactoor!</h1>
            <Button clickFunction={clickedMe} children="Click me once"/>
        <Button clickFunction={clickedMe}>Click me twice</Button>
    </>;
}

export default AppliOne;