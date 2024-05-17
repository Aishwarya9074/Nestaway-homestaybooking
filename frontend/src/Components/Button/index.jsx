import "./button.css";

const Button=({children="Add",onClick,className=' '})=>{
    return <div className="button">
        <button className={`custom-btn${className}`} onClick={onClick}>{children}</button>
    </div>

}

export default Button;
