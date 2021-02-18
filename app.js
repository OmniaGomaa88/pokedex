// recouper les emements
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

// .......................................................................................

  let nextUrl=null
  let prevUrl =null
  let type =" "
  // ...................................
  
  // fetch function
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
  
        nextUrl = data.next;
         prevUrl = data.previous;

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
    PrevButton.addEventListener('click',function(event){
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

// Array de tous les type 
let pocemonTyps=['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 
    'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']
// remove class type
function removeTypeClass(){
  for(let n=0;n<pocemonTyps.length;n++){
    let type=pocemonTyps[n]
    leftScreen.classList.remove(type)
  }
  }

// les information de pécomon
function pocémonInformation(){
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
        console.log(data)
        let pocId=data.id
        console.log(pocId)
        let name=data.name
        let weight = data.weight
        let height = data.height
        let frontImage= data.sprites.front_default
        let backImage=data.sprites.back_default
        // afficher les data
        pocémonName.innerHTML=`<span class="poke-name">"${name}"</span>`
        pocémonImages.innerHTML=` <div class="screen__image">
        <img src="${frontImage}" class="poke-front-image" alt="front">
        <img src="${backImage}" class="poke-back-image" alt="back">
      </div>`
        pocémonWeight.innerHTML=` <span class="poke-weight">"${weight}"</span>`
        pocémonHeight.innerHTML=` <span class="poke-height">"${height}"</span>`
           // type
        pocémonFristType.textContent=data.types[0].type.name
       console.log(pocémonFristType.textContent)
      //  ......
       function secundType(){
         if(data.types.length>1){
         let typ2=data.types[1].type.name
         pocémonSecType.textContent=typ2
       }else{
        pocémonSecType.textContent=" "
        pocémonSecType.style.display="none"
       }
      }
secundType()

      //  add le color de class
      function addColorType(){
      type=pocémonFristType.textContent
      leftScreen.classList.add(type)
    }
      removeTypeClass()
      addColorType()
  
        })
      })
    })
  })
}pocémonInformation()





 




 

 





  
