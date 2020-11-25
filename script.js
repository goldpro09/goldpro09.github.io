var logo = document.getElementById("content__logo")


function goApps(){
    window.open("https://about.google/intl/pt-BR/products/?tab=ih");
}

function goProfile(){
    window.open("https://accounts.google.com/SignOutOptions?hl=pt-BR&continue=https://www.google.com/");
}

function searchGoogle(){
    var searchText = document.getElementById('search').value;
    if(searchText != ""){
        if(searchText.includes(".com") || searchText.includes(".br") || searchText.includes("www.") || searchText.includes(".tv") || searchText.includes(".io")){
            window.open("https://"+searchText)
        }
        else if(!searchText.includes(".io")){
            window.open("https://www.google.com/search?q=" + searchText)
        }
    }   
    else{
        alert("Type something to search!!!!")
    }
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    searchGoogle();
  }
});

var removeAnimation = setTimeout(function() {
    logo.classList.remove("a-showRotate");
}, 1000)