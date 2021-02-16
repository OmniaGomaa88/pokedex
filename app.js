
  // listItem.innerHTML="OMNIAeNABILH"
// })
let item =document.getElementById("list")
let leftScreen =document.querySelector(".main-section__black")
let PrevButton =document.querySelector(".left-button")
let nextButton =document.querySelector(".right-button")
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
  for(let index=0;index<data.results.length;index++){
    console.log(data.results[index].name)
    let pokémonName=data.results[index].name
    let listItems =Array.from(document.getElementsByClassName("list-item"))
     listItems.forEach(listItem=>{
      listItem.textContent=pokémonName
     })
  }
  })
 





  
