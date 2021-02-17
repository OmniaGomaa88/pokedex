let pocémonId= document.querySelector(".poke-id")
 let pocémonName = document.querySelector('.poke-name');
 let pocémonFristType = document.querySelector('.poke-type-one');
let pocémonSecType = document.querySelector('.poke-type-two');
let pocémonTypes =document.querySelector(".stats__types")
 let pocémonImages = document.querySelector(".screen__image");
 let pocémonWeight = document.querySelector('.poke-weight');
 let pocémonHeight = document.querySelector('.poke-height');
 let listItems =document.querySelector(".list-item")
 let leftScreen =document.querySelector(".main-screen")
let PrevButton =document.querySelector(".left-button")
let nextButton =document.querySelector(".right-button")
let nextUrl=null
  let prevUrl =null
const  fetch_data = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  };
fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",fetch_data )
.then(function (response) {
  return response.json();
})
.then (function (data){
  console.log(data)
   nextUrl = data.next;
   prevUrl = data.previous;
  //  console.log(prevUrl)
 
 
  let index=0
  let listItems =Array.from(document.getElementsByClassName("list-item"))
  listItems.forEach(listItem=>{
    let pokémonName=data.results[index].name
   listItem.textContent=pokémonName
  index++
  })
  })
  // button next
  
  .catch(function(error){
    console.log(error)
    
    })
    
    nextButton.addEventListener('click',function (event){
    fetch(nextUrl,fetch_data)
    .then(function(response) {
      return  response.json()
    .then(function (data){
      nextUrl = data.next;
      prevUrl = data.previous;
    let index=0
  let listItems =Array.from(document.getElementsByClassName("list-item"))
  listItems.forEach(listItem=>{
    let pokémonName=data.results[index].name
   listItem.textContent=pokémonName
  index++
  })
  PrevButton.style.backgroundColor="red"
      })
     
    })
    console.log(nextUrl)
    console.log(prevUrl)
   
    })
    // prev Button
    PrevButton.addEventListener('click',function(){
      fetch(prevUrl,fetch_data)
      .then(function(response) {
        return  response.json()
      .then(function (data){
        nextUrl = data.next;
        prevUrl = data.previous;
      let index=0
    let listItems =Array.from(document.getElementsByClassName("list-item"))
    listItems.forEach(listItem=>{
      let pokémonName=data.results[index].name
     listItem.textContent=pokémonName
    index++
    })
    nextButton.style.backgroundColor="blue"
    console.log(nextUrl)
    console.log(prevUrl)
    })
  })
})
// les information de pécomon
function pocémonInformation(id){
  let listItems =Array.from(document.getElementsByClassName("list-item"))
  listItems.forEach(listItem=>{
    listItem.addEventListener('click',function(){
      leftScreen.classList.remove("hide")
      let nom =listItem.textContent
      let pocURl="https://pokeapi.co/api/v2/pokemon/"+nom
console.log(nom)
      console.log("hi")
      fetch(pocURl,fetch_data)
      .then(function(response) {
        return  response.json()
      .then(function (data){
        let name=data.name
        let weight = data.weight
        let height = data.height
        let frontImage= data.sprites.front_default
        let backImage=data.sprites.back_default
        // afficher les data
        pocémonId.innerHTML=`<span class="poke-id">"${id}"</span>`
        pocémonName.innerHTML=`<span class="poke-name">"${name}"</span>`
        pocémonImages.innerHTML=` <div class="screen__image">
        <img src="${frontImage}" class="poke-front-image" alt="front">
        <img src="${backImage}" class="poke-back-image" alt="back">
      </div>`
        pocémonWeight.innerHTML=` <span class="poke-weight">"${weight}"</span>`
        pocémonHeight.innerHTML=` <span class="poke-height">"${height}"</span>`
          // types
          let type1=data.types[0].type.name
          pocémonFristType.textContent=type1
          if(!data.types[1]){
            pocémonSecType.style.display="none"
         }else{
          let type2=data.types[1].type.name
          pocémonSecType.textContent=type2
         }
        })
      })
    })
  })
}

pocémonInformation()

 




 

 





  
