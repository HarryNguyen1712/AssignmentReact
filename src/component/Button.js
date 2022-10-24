function Button({className,title, onClick}){
    let Button="button"

    const props={}
    props.className=className
    props.onClick=onClick;
    return(
        <Button {...props}>{title}</Button>
    )
}
export default Button;