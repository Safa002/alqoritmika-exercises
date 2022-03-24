function howMany(){
    word=prompt('Her hansi bir soz daxil edin: ');
    a = word.split('');
    for(let i = 0; i < a.length; i++){  
        let count=0;
        for(let j = 0; j < a.length; j++){
            if(a[i] === a[j]){
                count = count + 1;
            }
        }
        if(count > 0){
        alert(a[i] + ': ' + count);
        }
    }
}
howMany();