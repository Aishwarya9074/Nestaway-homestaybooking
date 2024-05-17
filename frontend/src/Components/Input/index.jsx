import "./input.css";

const Input=({className='',type='text',onChange})=>{
    return <input className={`custom-input${className}`} type={type} onChange={onChange} />

}
export default Input;