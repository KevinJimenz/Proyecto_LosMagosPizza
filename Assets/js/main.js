
const db = window.localStorage
let contadorPizza = 0
let contadorRefresco = 0
let contadorPostre = 0 
let precioPizza = 0
let precioRefresco = 0
let precioPostre = 0 
let liq = document.getElementById("liquidar")
let btn1 = document.getElementById("boton1")
btn1.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton1").value
 if(nombreProducto=="Hawaina")
   {
    contadorPizza += 1
    precioPizza+= 24000
   }
})
let btn2 = document.getElementById("boton2")
btn2.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton2").value
 if(nombreProducto=="Napolitana")
   {
    contadorPizza += 1
    precioPizza+= 22000
   }
})
let btn3 = document.getElementById("boton3")
btn3.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton3").value
 if(nombreProducto=="Pepperoni")
   {
    contadorPizza += 1
    precioPizza+= 25000
   }
})
let btn4 = document.getElementById("boton4")
btn4.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton4").value
 if(nombreProducto=="4Quesos")
   {
    contadorPizza += 1
    precioPizza+= 27000
   }
})
let btn5 = document.getElementById("boton5")
btn5.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton5").value
 if(nombreProducto=="Marinara")
   {
    contadorPizza += 1
    precioPizza+= 30000
   }
})
let btn6 = document.getElementById("boton6")
btn6.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton6").value
 if(nombreProducto=="CocaCola")
   {
    contadorRefresco += 1
    precioRefresco+= 3000
   }
})
let btn7 = document.getElementById("boton7")
btn7.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton7").value
 if(nombreProducto=="Sprite")
   {
    contadorRefresco += 1
    precioRefresco+= 3000
   }
})
let btn8 = document.getElementById("boton8")
btn8.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton8").value
 if(nombreProducto=="Agua")
   {
    contadorRefresco += 1
    precioRefresco+= 2500
   }
})
let btn9 = document.getElementById("boton9")
btn9.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton9").value
 if(nombreProducto=="JugoHit")
   {
    contadorRefresco += 1
    precioRefresco+= 4500
   }
})
let btn10 = document.getElementById("boton10")
btn10.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton10").value
 if(nombreProducto=="Tiramisú")
   {
    contadorPostre += 1
    precioPostre+= 6500
   }
})
let btn11 = document.getElementById("boton11")
btn11.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton11").value
 if(nombreProducto=="Brownies")
   {
    contadorPostre += 1
    precioPostre+= 4500
   }
})
let btn12 = document.getElementById("boton12")
btn12.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton12").value
 if(nombreProducto=="Frutas")
   {
    contadorPostre += 1
    precioPostre+= 7500
   }
})
let btn13 = document.getElementById("boton13")
btn13.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton13").value
 if(nombreProducto=="Mousse")
   {
    contadorPostre += 1
    precioPostre+= 5500
   }
})
let btn14 = document.getElementById("boton14")
btn14.addEventListener("click",function agregar (){
let nombreProducto = document.getElementById("boton14").value
 if(nombreProducto=="Crepe")
   {
    contadorPostre += 1
    precioPostre+= 8500
   }
})
const liquidar =() => {
    let objeto = {
        precioTotal: parseInt(precioPizza + precioRefresco + precioPostre + 1500)
    }
    db.setItem(Math.round(Math.random(1, 100) * 1000),JSON.stringify(objeto))
   cargar()
}

const cargar = () =>{
    let llaves = Object.keys(db);
    llaves.map((llave)=>{
        let registros = JSON.parse(db.getItem(llave));
        let precioTotal = registros.precioTotal
        liq.innerHTML += `<h1> Precio Total: ${precioTotal} </h1>
        <h1> Cantidad Pizzas: ${contadorPizza} </h1>
        <h1> Cantidad Refrescos: ${contadorRefresco} </h1>
        <h1> Cantidad Postres : ${contadorPostre} </h1>
        <h1> Valor envio: 1500 </h1>`
    })
  
}
