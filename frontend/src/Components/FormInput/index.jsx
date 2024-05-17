import "./forminput.css";
import Input from "../Input";

const FormInput=({label,type,onChange,className})=>{
    return <div className="forminput">
        <label htmlFor="">{label}</label>
        <Input type={type} onChange={onChange} className={className}/>
    </div>

}

export default FormInput;