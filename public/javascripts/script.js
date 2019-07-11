var cat = document.getElementsByClassName('cat');

const getProducts = (e) =>{
    e.preventDefault();
    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = ()=>{
        console.log(xhttp.readyState,xhttp.status)
        if(xhttp.readyState == 4 && xhttp.status == 200){
            console.log(xhttp.responseText)
            let text = '';
            for(let i = 0; i< xhttp.responseText.length; i++){
                text += '<div class="items">'+
                '<img src="/images/'+xhttp.responseText[i].pic+'" alt="">'+
                '<h4>'+xhttp.responseText[i].name+'</h4>'+
                '<h4>'+xhttp.responseText[i].size+'</h4>'+
                '<h4>'+xhttp.responseText[i].price+'</h4>'+
                '<p>'+xhttp.responseText[i].desc+'</p>'+
                '<button>Add+</button>'+
                '</div>'
            }
            document.getElementById("item-container").innerHTML = text
            console.log(text)
        }
    }
    console.log(e.target.href)
    xhttp.open("GET", e.target.href);
    xhttp.send();
}

for( let i = 0; i < cat.length; i++){
    cat[i].addEventListener("click", getProducts);
}