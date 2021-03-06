import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const Button = styled.button`
        color: #38385D;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #38385D;
        border-radius: 3px;
        `;

export default function CountryCapitalGame({ data }) {
    // Use console.log() for debugging

    const [clickedValue, setClickedValue] = useState([]);
    const [isMatch, setIsMatch] = useState(false);
    const [dataArray, setDataArray] = useState([]);


    useEffect(()=>{

   const array = Object.keys(data).reduce((accu, value)=>{
    return accu.concat([data[value], value]);   
    }, []);

    array.sort(function() {
        return (0.5-Math.random());
    });

    setDataArray(array);
    },[]);


    const buttonClickHandler = (event, value) => {
        if(!isMatch && clickedValue.length ===2){
            document.getElementById(clickedValue[0]).style.removeProperty('background-color');
            document.getElementById(clickedValue[1]).style.removeProperty('background-color');
        }

        if(clickedValue.length === 1){
            console.log('test');
            if(clickedValue[0] !== value){

                Object.keys(data).map((key) => {
                    if((value === key && data[key] === clickedValue[0]) || 
                       (value === data[key] && key === clickedValue[0])){
                       setIsMatch(true);
                       setDataArray(dataArray.filter((val)=>{
                           return val !== value && val !== clickedValue[0];
                       }));
                    }
                });

                if(!isMatch){
                    document.getElementById(clickedValue[0]).style.backgroundColor = "#FF6347";
                    document.getElementById(value).style.backgroundColor = "#FF6347";
                }

            
            setClickedValue([...clickedValue, value]);
            }
        }else{
            event.currentTarget.style.backgroundColor = '#89CFF0';
            setIsMatch(false);
            setClickedValue([value]);
        }
     
    
}
    

    return (
        <div>
        
        {dataArray.map((val) => {
            return <Button key={val} id={val} onClick={(event) => buttonClickHandler(event, val)}>{val}</Button> 
        })}
        {dataArray.length === 0 && <p>Congratulations</p>}
        </div>
    );
}
