let secaoFrutas = document.querySelector(".fruits ul")
let secaoBebidas = document.querySelector(".drinks ul")
let secaoHigiene = document.querySelector(".hygiene ul")


function listarProdutos(listaProdutos, categoriaSecao, secao){

    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto             = listaProdutos[i]
        let secaoProduto = produto.category
        
        if(secaoProduto == categoriaSecao){
            let cardProduto    = criarCardProduto(produto)
            secao.appendChild(cardProduto)
        }
    }
   
}
listarProdutos(products, "Frutas", secaoFrutas)
listarProdutos(products, "Bebidas", secaoBebidas)
listarProdutos(products, "Higiene", secaoHigiene)


function criarCardProduto(produto){

    let nome            = produto.title
    let preco           = produto.price
    let imgeUrl         = produto.image
    let imageDescr      = produto.imageDescription
    let categoria       = produto.category
  
    let productCard = document.createElement("li")
    let productImg = document.createElement("img")
    let productMain = document.createElement("main")
    let productTitle = document.createElement("h1")
    let productCategory = document.createElement("h5")
    let productPrice = document.createElement("strong")
    productCard.classList = "product"
    productImg.classList = "product-img"
    productMain.classList = "product-main"
    productTitle.classList = "product-title"
    productCategory.classList = "product-category"
    productPrice.classList = "product-price"
    
    
    if(imgeUrl == undefined){
        imgeUrl = "./img/products/no-img.svg"
    }

    productImg.src              = imgeUrl
    productImg.alt              = nome
    productImg.title            = imageDescr
    productTitle.innerText      = nome
    productCategory.innerText   = categoria
    productPrice.innerText      = `R$ ${preco}`

    productMain.append(productTitle, productCategory, productPrice)
    productCard.append(productImg, productMain)

    return productCard
}

