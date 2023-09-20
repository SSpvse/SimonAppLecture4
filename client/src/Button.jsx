function Button (props) {

    const {children, clickFunction} = props;

    return <button onClick={clickFunction}>{children}</button>
}

export  default Button;