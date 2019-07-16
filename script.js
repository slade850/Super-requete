
const btn = document.getElementById("btn"); // récupération de l'élément bouton
const content = document.getElementById("content"); // récupération de la section content
let rep = []; // Variable qui servira à récupérer les données de nos requêtes  

function creat(){ // fonction qui permettra d'afficher le contenu recherché 
    content.innerHTML = ""; // pour vider les images d'une precedente requete
    rep.map(x => { 
    /*  Ont map sur le tableau “rep” qui contiens les données 
        reçus lors de la requête pour ensuite créer un balise image 
        et lui attribuer en source l’url de l’élément pointé */
    var image = document.createElement("img");
    image.setAttribute("src", x.images.downsized.url);
    content.appendChild(image);
})
};


btn.addEventListener('click', () => { // écoute du click sur le bouton 
    let techs = ["tech1","tech2","tech3","tech4"]; // tableau contenant les id des inputs radio
    let val =""; // variable vide qui sera utiliser pour récupérer la valeur de l’input radio sélectionné 
    techs.map(x => { // On boucle sur le tableau pour vérifier quel input est sélectionné avec un if 
        if(document.getElementById(x).checked){
            val = document.getElementById(x).value; // Ont attribut la valeur de la sélection à la variable val  
        }
    })
    const key = ""; // clé de notre api
    let choix = document.getElementById("input").value; // On récupère la recherche de l’utilisateur  
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${choix}&limit=25&offset=0&rating=G&lang=fr`// On crée une variable contenant l’url de l’api avec la clé et la recherche de l’utilisateur 
    switch(val) {  // On teste la valeur de la variable val, en fonction du choix de l’utilisateur la requête sera effectuée en XMLhttp, fetch, axios ou jQuery 
        case "XMLhttp":
            console.log("xml") // affiche xml dans la console pour vérifier que le switch fonction correctement 
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
                if (xhr.status == 200) { // On test le statut de la requête 
                    let data = JSON.parse(xhr.response); // on recupère les donné au format JSON
                    rep = data.data; // on attribue à la variable rep le tableau de données qui nous intéresse 
                    creat(); // On appel la fonction creat déclaré précédemment
                    }
            break;
        case "Fetch":
            console.log("fetch");
            fetch(url, {
                method:"get"
            })
            .then(Response => Response.json())
            .then(data => {
                rep = data.data;
                creat();
            })
            break;
        case  "axios":
            console.log("axios");
            axios.get(url)
                      .then((response) => {
                        rep = response.data.data;
                        creat();
                      }, 
                      (error) => {
                      
                      } )
            break;
        case "jQuery":
            console.log("jquery");
            $.get(url).done(function(data) {
                rep = data.data;
                creat();
            })
            .fail(function() {
            alert("error");
            })
            .always(function() {

            });
            break;      
    }
})
