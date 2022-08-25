fetch('https://raw.githubusercontent.com/Cassianosch/programador.cs-reels/develop/slider-produtos-simples/assets/data/data.json')
.then(response => response.json())
.then(data => {
    data.forEach((element) => {
        $('.js-slider').slick(
            'slickAdd',
            `<div class="card">
                <div class="like"></div>
                <img class= "products" src="${element.image}" alt="">
                <h4 class="title">${element.name}</h4>
                <div class="rating">
                    &#9733
                    &#9733
                    &#9733
                    &#9734
                    &#9734
                </div>
                <div class="price">
                    <h5>R$${element.price}</h5>
                </div>
                <a class="button" href="">Adicionar ao carrinho</a>
            </div>`
        )
    })
})