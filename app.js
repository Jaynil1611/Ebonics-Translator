
var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output-div");

var translateButton = document.querySelector("#trans-button");

var clearButton = document.querySelector("#clear-button");

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url = 'https://api.funtranslations.com/translate/ebonics.json';


function executeFetchCall(inputText) {
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(resp => {
            // console.log(resp);
            outputDiv.innerText = resp.contents.translated;
        })
        .catch(errorHandler);
}

function getTranslatedURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

function errorHandler(error) {
    alert("The server is busy. Please try again after some time.");
    console.log(error);
}

function clickHandler(event) {
    if (textInput.value !== "") {
        executeFetchCall(textInput.value)
    }
    else alert("Please enter text");
}

function clearClickHandler(event) {
    textInput.value = "";
    outputDiv.innerHTML = "";
}

clearButton.addEventListener('click',clearClickHandler)
translateButton.addEventListener('click', clickHandler);