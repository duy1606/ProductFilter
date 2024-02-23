
var products = document.querySelector('.products')
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(item=>{
            var newProduct =document.createElement('div')
            newProduct.classList.add('product')
            newProduct.innerHTML=`<img src="${item.image}" alt="">
                                  <div class="info">
                                     <div class="name">${item.title}</div>
                                     <div class="price">${item.price}</div>
                                 </div>`
             products.appendChild(newProduct)
         })
    })
var input =document.querySelector('.search input')
input.addEventListener('input',function(e){
    let inputText = e.target.value.trim().toLowerCase()
    let listProductDOM = document.querySelectorAll('.product')
    listProductDOM.forEach(item=>{
        if(item.innerText.toLowerCase().includes(inputText))
            item.classList.remove('hide')
        else
            item.classList.add('hide')
    })
})

