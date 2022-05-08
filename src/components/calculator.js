import Button from "./button";
import { useState } from "react";

const Calculator = () => {
    const [sign, setSign] = useState('');
    const [sum, setSum] = useState(null);
    const [num, setNum] = useState(0);
    const [display, setDisplay] = useState(false);
    const [equal, setEqual] = useState(0);

    const handleSignClick = (value)=>{
        if (sum===null){
            setSum(parseInt(num));
            setNum(0);
        }

        if (value === '+'){
            setSum(sum + parseInt(num));
            setNum(0);
        }
        if (value === '-'){
            setSum(sum - parseInt(num));
            setNum(0);
        }
        if (value === '*'){
            setSum(sum * parseInt(num));
            setNum(0);
        }
        if (value === '/'){
            setSum(sum / parseInt(num));
            setNum(0);
        }
        setSign(value);
    }

    const clearAll = () => {
        setSign('');
        setNum(0);
        setSum(0);
        setDisplay(false);
    }

    const handleNum = (value) => {
        setDisplay(false);
        if (num !==0){
            setNum(""+num+value);
        }
        else{
            setNum(value);
        }
    }

    const handleEqual = () => {
        setEqual(sum+parseInt(num));
        setSum(0);
        setNum(0);
        setSign("=");
        setDisplay(true);
    }

    return ( 
        <div style={{width: 600}} className="border border-1 border-dark rounded mx-auto my-5 p-3">
            <p className="text-secondary">{sum}</p>
            <div className="row">
                <div className="col-9">
                    <p className="text-secondary">{num}</p>
                </div>
                <div className="col-3">
                    <p className="text-secondary">{sign}</p>
                </div>
            </div>
            {display && <p className="text-dark h4">{equal}</p>}
            <hr className="border border-1 border-dark"/>
            <div className="row my-2">
                <Button text={7} color="dark" handleClick={handleNum}/>
                <Button text={8} color="dark" handleClick={handleNum}/>
                <Button text={9} color="dark" handleClick={handleNum}/>
                <Button text="Del" color="danger"/>
            </div>
            <div className="row my-2">
                <Button text={4} color="dark" handleClick={handleNum}/>
                <Button text={5} color="dark" handleClick={handleNum}/>
                <Button text={6} color="dark" handleClick={handleNum}/>
                <Button text="+" color="warning" handleClick={handleSignClick}/>
            </div>
            <div className="row my-2">
                <Button text={1} color="dark" handleClick={handleNum}/>
                <Button text={2} color="dark" handleClick={handleNum}/>
                <Button text={3} color="dark" handleClick={handleNum}/>
                <Button text="-" color="warning" handleClick={handleSignClick}/>
            </div>
            <div className="row my-2">
                <Button text="." color="warning"/>
                <Button text={0} color="dark"  handleClick={handleNum}/>
                <Button text="*" color="warning" handleClick={handleSignClick}/>
                <Button text="/" color="warning" handleClick={handleSignClick}/>
            </div>
            <div className="row my-2">
                <Button text="=" color="success" handleClick={handleEqual}/>
                <Button text="CE" color="danger" handleClick={clearAll}/>
            </div>

        </div>
     );
}
 
export default Calculator;