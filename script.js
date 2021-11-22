document.getElementById("upper-case").addEventListener("click", function() {
    document.querySelector('textarea').value =
    document.querySelector('textarea').value.toUpperCase();
});


document.getElementById("lower-case").addEventListener("click", function() {
    document.querySelector('textarea').value =
    document.querySelector('textarea').value.toLowerCase();
});
let textarea = document.querySelector('textarea')
document.getElementById("proper-case").addEventListener("click",function(){
    let properSentence = textarea.value.toLowerCase().split(' ');
    let result =[];
    for(let i=0;i<properSentence.length;i++){
        let firstLetter = 
        properSentence[i].charAt(0).toUpperCase().
        concat(properSentence[i].slice(1));
        result.push(firstLetter);  
    }
    textarea.value = result.join(' ')

});

document.getElementById("sentence-case").addEventListener("click",function(){
   let sentence = textarea.value.toLowerCase().split('.');
    let results =[];
    for(let i=0;i<sentence.length;i++){
        let letter =
         sentence[i].charAt(0).toUpperCase().concat(sentence[i].slice(1)); 
        results.push(letter)
    }
    textarea.value = results.join('.')

});