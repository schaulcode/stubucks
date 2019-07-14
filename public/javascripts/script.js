var cat = document.getElementsByClassName('cat');

const getProducts = (e) =>{
    e.preventDefault();
    var xhttp = new XMLHttpRequest()

    document.getElementById("item-title").innerText = e.target.innerText;
    console.log(e.target.innerHTML);

    xhttp.onreadystatechange = ()=>{
        console.log(xhttp.readyState,xhttp.status)
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var responseText = JSON.parse(xhttp.responseText)
            console.log(responseText[0])
            let text = '';
            for(let i = 0; i< responseText.length; i++){
                text += '<div class="items">'+
                '<img src="/images/'+responseText[i].pic+'" alt="">'+
                '<h4>'+responseText[i].name+'</h4>'+
                '<h4>'+responseText[i].size+'</h4>'+
                '<h4>'+responseText[i].price+'</h4>'+
                '<p>'+responseText[i].desc+'</p>'+
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