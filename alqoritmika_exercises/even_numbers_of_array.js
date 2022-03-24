function evenNumbersOfArray(){
    let numbers = prompt('Vergul vasitesile ededler daxil edin: ');
    let array = numbers.split(',');
    let even=[];
    for(let i = 0; i < array.length; i++){
        if (Number(array[i]) % 2 === 0){
            even.push(Number(array[i]));
        }
    }
    alert(even);
}
evenNumbersOfArray();