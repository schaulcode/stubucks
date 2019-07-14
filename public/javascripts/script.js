window.addEventListener("load", function(){
    var cat = document.getElementsByClassName('cat');

    // Category
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
                addOrderEvent();
            }
        }
        console.log(e.target.href)
        xhttp.open("GET", e.target.href);
        xhttp.send();
    }

    for( let i = 0; i < cat.length; i++){
        cat[i].addEventListener("click", getProducts);
    }

    //Order

    var items = document.getElementsByClassName("items")
    var total = 0
    const addOrder = (e) =>{
        element = (e.target.className == "items")?e.target:e.target.parentNode
        let name = element.children[1].innerText;
        let size = element.children[2].innerText;
        let price = element.children[3].innerText;
        let quanity = 1
        total += parseFloat(price);

        let order = document.createElement("div");
        order.innerHTML = `<span>${quanity} x </span><span>${name} ${(size != null)?size:''} <span> £${price}</span>`;
        document.getElementById("order-items").appendChild(order);
        document.getElementById("amount").innerText = `£${total}`;
    }

    const addOrderEvent = () =>{
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", addOrder);
            
        }
    }
    addOrderEvent();
    
})

