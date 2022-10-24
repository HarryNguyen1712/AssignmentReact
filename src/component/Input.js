import {Fragment} from "react";

function Input({disabled,type,className,label,id,value}) {
    const Label="label"
    const Input="input"
    let props= {};
    props.type= type
    props.className=className;
    props.id=id;
    props.defaultValue=value
    props.disabled=disabled;
    if(label){
        return (
            <Fragment>
                <Label htmlFor={id}>{label}</Label>
                <Input  {...props} />
            </Fragment>
        )
    }
    else return(
        <Fragment>
        <Input/>
        </Fragment>
    )
}
export default Input;