function biggerThanAverage(){
    let numbers = prompt('Vergul vasitesile ededler daxil edin: ');
    let array = numbers.split(',');
    let bigger = [];
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < array.length; i++){
        sum = Number(sum) + Number(array[i]);
        avg = Number(sum) / array.length;
        if(avg < Number(array[i])){
            bigger.push(Number(array[i]));
        }
    }
    alert(bigger)
}
biggerThanAverage();