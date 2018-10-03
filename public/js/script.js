// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]; 
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]; 
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]; 
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]; 


function toggleDrum(drumType, index) {
   
   if (drumType === undefined || index === undefined || index > drumType.length-1 || index < 0) {
        console.log('drumtype =' + drumType);
        console.log('index = ' + index); 
        console.log('Accepted range is 0-15: ', index ); 
         
        return; 
    };
     
     
   // console.log('Arguments are valid');
   // console.log(drumType); 
    switch (drumType) {
        case 'kicks':
                //modify false to true and true to false based on index that is passed. 
            return kicks[index] ? kicks[index] = false : kicks[index] = true;  
            
        
        case 'snares':
            
            return snares[index] ? snares[index] = false : snares[index] = true;
            
        
        case 'hiHats':
        
            return hiHats[index] ? hiHats[index] = false : hiHats[index] = true;
            

        case 'rideCymbals':
        
        return rideCymbals[index] ? rideCymbals[index] = false : rideCymbals[index] = true
            
        default:
        return console.log('Something went wrong in the Switch Statment'); 
            
        }
    
};

function clear(array){
    if(typeof array === 'object'){
        let i; 
        for(i = 0; i < array.length; i++){
            array[i] = false; 
             
        };  
    }; 
    console.log(array); 

};

clear(hiHats); 

//End of Function 
   
//toggleDrum('kicks', 15); 



