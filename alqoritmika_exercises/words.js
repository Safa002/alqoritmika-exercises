function word() {
    let sentence = prompt('Cumle daxil edin: ');
    let array = sentence.split(' ')
    let sentence_with_comma = ""
    for (let i = 0; i < array.length; i++) {
        sentence_with_comma = sentence_with_comma + array[i]
        if (i < array.length - 1) {
            sentence_with_comma = sentence_with_comma + ","
        }
    }
    alert(sentence_with_comma)
}
word();