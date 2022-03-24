function averageNumberOfArray(){
    let numbers = prompt('Vergul vasitesile ededler daxil edin: ');
    let array = numbers.split(',');
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < array.length; i++){
        sum = Number(sum) + Number(array[i]);
        avg = Number(sum) / array.length;
    }
    alert(avg);
}
averageNumberOfArray();