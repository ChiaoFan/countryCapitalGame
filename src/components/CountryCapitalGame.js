import React, {useState, useEffect} from "react";

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
                    document.getElementById(clickedValue[0]).style.backgroundColor = "red";
                    document.getElementById(value).style.backgroundColor = "red";
                }

            
            setClickedValue([...clickedValue, value]);
            }
        }else{
            event.currentTarget.style.backgroundColor = 'blue';
            setIsMatch(false);
            setClickedValue([value]);
        }
     
    
}
    

    return (
        <div>
        
        {dataArray.map((val) => {
            return <button key={val} id={val} onClick={(event) => buttonClickHandler(event, val)}>{val}</button> 
        })}
        {dataArray.length === 0 && <p>Congratulations</p>}
        </div>
    );
}
