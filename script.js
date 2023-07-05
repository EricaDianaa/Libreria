const required= function(){
    fetch("https://striveschool-api.herokuapp.com/books", {})
    .then(res=> {
         if(res.ok){
return res.json()
         }else{
            throw new Error("Errore")
         
    
}
})
.then((data)=>{
    console.log(data)
let row= document.getElementById("row")
//CREO LA CARD
data.forEach(album => {
   let col= document.createElement("div")
   col.classList.add("col", "col-sm-6", "col-md-6","col-lg-3" )
   col.innerHTML=  `
   <div id="card" class="card m-2 border border-danger h-100 m-2">
  <img src="${album.img}" class="card-img-top h-75" alt="...">
  <div class="card-body h-25">
    <h5 class="card-title">${album.title}</h5>
    <p class="card-text text-success" > $${album.price} </a>
  </div>
 <button type="button" id="text" class="btn btn-outline-danger  ">Elimina</button>
 <button type="button" id="buttonBuy" class="btn btn-outline-success  ">Compra ora</button>
</div>
   `
   row.appendChild(col)

});
//BOTTONE ELIMINA
let deletebutton= document.querySelectorAll("#text")
deletebutton.forEach((element)=>{
    element.addEventListener("click",function(){
       element.parentElement.remove() 
    })


})
//EXTRA AGGIUNGO LISTA CARELLO
let list= document.getElementById("list")
let newLi= document.createElement("p")
newLi.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart3 border border-success border-2 rounded-5 p-2" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>`
list.appendChild(newLi)


//EXTRA BOTTONE AGGIUNGI
// let card=document.querySelectorAll("#card")
 let buyButton=document.querySelectorAll("#buttonBuy")

//CREO UNA CARD QUANDO SCHIACCI BOTTONE AGGIUNGI
 buyButton.forEach((element,i)=>{
    element.addEventListener("click", function(){
let col1= document.createElement("div")
col1.classList.add("col","col-sm-6" ,"col-md-4","col-lg-3")

col1.innerHTML=  ` 
  <div id="card" class="card m-2 border border-danger h-100  m-2">
<img src = ${JSON.stringify(data[i].img)} class="card-img-top h-75 " alt="img ">
<div class="card-body h-25">
  <h5 class="card-title">${JSON.stringify(data[i].title)}</h5>
  <p class="card-text text-success" > $${JSON.stringify(data[i].price)} </a>
</div>
<button type="button" id="text1" class="btn btn-outline-danger  ">Elimina</button>

</div>`
//SALVO NEL SESSION STORAGE


const salva=sessionStorage.setItem("Carrello", JSON.stringify(data[i]))
const items= sessionStorage.getItem("Carrello")
const converte=[JSON.parse(items)]
const restart=JSON.stringify(converte)
sessionStorage.setItem("CARELLO", restart) 

// console.log(salva)
console.log(converte)
// console.log(restart)

//BOTTONE ELIMINA CARD (CARRELLO)
let deletebutton1= document.querySelectorAll("#text1")
deletebutton1.forEach((element)=>{
    element.addEventListener("click",function(){
       element.parentElement.remove()


    })
})
list.appendChild(col1)








    })
 })

})
.catch((err)=>{
    console.log("Errore", err)
})
}

required()
