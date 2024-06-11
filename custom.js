
let resultbox= document.getElementById('result')

function sidduAppend(item){
    resultbox.value += item;
}

function displayResult(){
    try{
        resultbox.value = eval(resultbox.value);
    }

    catch(e){
        resul.value='Error'
    }
}

function clearResult(){
    resultbox.value='';
}


function deleteLast(){
    resultbox.value =resultbox.value.slice(0,-1)
}