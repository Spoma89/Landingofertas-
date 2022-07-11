


const arrayProductos = [
    {img: 'imgenes/pala.jpg', nombre: "Pala Apache pocera", precio: 2900,antes:3400},
    {img: 'imgenes/cable.jpg', nombre: "Cable 2.5 Normalizado rollo", precio: 5400,antes:6000},
    {img: 'imgenes/alambre.jpg', nombre: "Alambre tejido 1.80m x 10mts n°14", precio: 11000,antes:12300},
    {img: 'imgenes/membrana.jpg', nombre: "Membrana autoadhesiva 25cm xmts", precio: 400,antes:570},
    {img: 'imgenes/canilla.jpg', nombre: "Canilla pvc Duke 1/2", precio: 175,antes:220},
    {img: 'imgenes/flotante.jpg', nombre: "Flotante para tanque 3/4", precio: 450,antes:560},
    {img: 'imgenes/lija.jpg', nombre: "Lija Norton 60 80 100 ", precio: 100,antes:150},
    
    
   
]

const contenedorProductos = document.getElementById('sec')


arrayProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "card"
    div.style = "width: 18rem"
   
    div.innerHTML = `<img src=${producto.img} class="card-img-top oferta" alt="...">
  <div class="card-body">
    <h3 class="card-title">${producto.nombre}</h3>
    <p class="card-text">$ Antes ${producto.antes}</p>
    <h6 class="card-text ">$ Ahora ${producto.precio}</h6>
    
                   
                    </div>
                   
                `
    
    contenedorProductos.appendChild(div)
})


