function firstLetter(text, letter){
    let a = text.split(' ');
    let first_letter_text = [];
    for (let i = 0; i < a.length; i++){
        if(a[i][0] === letter){
            first_letter_text.push(a[i]);
        }
    }
    alert(first_letter_text);
}
let text = prompt('Cumle daxil edin: ');
let letter = prompt('Her hansi bir herf daxil edin: ');
firstLetter(text, letter);