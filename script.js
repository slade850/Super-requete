/* import axios from 'axios'; */
const key = "21EQ57wGpPpPmELaGfFWV82MpGclZK8f";
let choix = "";
let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${choix}&limit=25&offset=0&rating=G&lang=fr`
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let techs = ["tech1","tech2","tech3","tech4"];
    let val ="";
    let tech = techs.map(x => {
        if(document.getElementById(x).checked){
            val = document.getElementById(x).value;
        }
    }) 
    choix = document.getElementById("input").value;

    switch(val) {
        case "XMLhttp":
            const req = new XMLHttpRequest();
            console.log("xml");
            console.log(choix);
            break;
        case "Fetch":
            console.log("fetch");
            break;
        case  "axios":
            console.log("axios");
            break;
        case "jQuery":
            console.log("jquery");         
    }
    
})