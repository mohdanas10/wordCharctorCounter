let textbox = document.getElementById("textbox");

textbox.addEventListener('input',function(){
    var text = this.value ;
    let char = text.length;

    document.getElementById("char").innerHTML = char ;
    let word = text.split(" ");
    let cleanList = word.filter(function(elm){
        return elm !="";

    })
    console.log(cleanList);
    document.getElementById("word").innerHTML = cleanList.length;
})