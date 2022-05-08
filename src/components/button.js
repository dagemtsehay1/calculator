const Button = ({text,color,handleClick}) => {
    const bootstrapClass = "btn w-100 btn-"+ color;
    return ( 
        <div className="col">
            <button className={bootstrapClass} onClick={()=>handleClick(text)}>{text}</button>
        </div>
     );
}
 
export default Button;