function reverse(text){  
    let newReversed = "";      
     for (let i = text.length - 1; i >= 0; i--){ 
         newReversed += text[i];    
     }
     return newReversed;
  }
  let text  = prompt('Metn daxil edin');
  alert(reverse(text));