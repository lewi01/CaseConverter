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
        properSentence[i].charAt(0).toUpperCase() + 
        properSentence[i].slice(1);
        result.push(firstLetter);  
    }
    textarea.value = result.join(' ')

});

document.getElementById("sentence-case").addEventListener("click",function(){
    let sentence = textarea.value.toLowerCase().split('. ');
    let result =[];
    for(let i=0;i<sentence.length;i++){
        sentence[i] = 
        sentence[i].charAt(0).toUpperCase() + 
        sentence[i].slice(1);
        result.push(sentence[i]);  
    }
    textarea.value = result.join('. ')

});
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

document.getElementById("save-text-file").addEventListener("click",function(){
    let savetext = textarea.value;
    let file = document.getElementById("text-file").value;

    download(file, savetext);
},false);


