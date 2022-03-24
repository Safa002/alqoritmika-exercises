function numberOfSpaces(){
    let sum = 0;
    let space;
    sentence = prompt('Cumle daxil edin: ');
    sentenceSeparated = sentence.split(' ');
    for(let i = 0; i < sentenceSeparated.length; i++){
        space = sentenceSeparated[i].length;
        sum = sum + space;
    }
    alert(sentence.length - sum);
}
numberOfSpaces();