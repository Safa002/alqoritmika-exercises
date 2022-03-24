function commonElements(){
    let array_first = prompt('Birinci cumleni daxil edin: ');
    let a = array_first.split(' ');
    let array_second = prompt('Ikinci cumleni daxil edin: ');
    let b = array_second.split(' ');
    let common = [];
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if(a[i] === b[j]){
                common.push(a[j]);
            }
        }
    }
    alert(common);
}
commonElements();