import { useState } from "react"

export const useCalculator = () => {
    const [number, setNumber] = useState('0');

    const buildNumber = (numberString: string) => {
        
        if (number.includes('.') && numberString === ".") return ;  //!! <-- Evita poner mas de un punto 
        setNumber(number + numberString)   //! <-- Sin este no se pintan los numero en el (value) de la app.
       
        // Validaciones de punto decimal 
        if(number.startsWith('0') || number.startsWith('-0')){

            if( numberString === '.'){
                return setNumber(number + numberString);
            }
            if(numberString === '0' && number.includes('.')){
                return setNumber(number + numberString)
            }
            if(numberString !== '0' && !numberString.includes('.')){
                return setNumber( numberString)
            }
        }
        
    }


   
 return{
    // Properties
    number,
    buildNumber,
    
    // Methods
 }
}
 