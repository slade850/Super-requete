
const btn = document.getElementById("btn");
const content = document.getElementById("content");


btn.addEventListener('click', () => {
    let techs = ["tech1","tech2","tech3","tech4"];
    let val ="";
    techs.map(x => {
        if(document.getElementById(x).checked){
            val = document.getElementById(x).value;
        }
    })
    const key = "21EQ57wGpPpPmELaGfFWV82MpGclZK8f"; 
    let choix = document.getElementById("input").value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${choix}&limit=25&offset=0&rating=G&lang=fr`
    switch(val) {
        case "XMLhttp":
            console.log("xml")
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
                if (xhr.status == 200) {
                    let rep = JSON.parse(xhr.response);
                    data = rep.data;
                    content.innerHTML = ""; //pour vider les images d'une precedente requete
                    data.map(x => {
                    var image = document.createElement("img");
                    image.setAttribute("src", x.images.downsized.url);
                    content.appendChild(image);
                })
                    
                    console.log(rep);
                    
                    }
            break;
        case "Fetch":
            console.log("fetch");
            fetch(url, {
                method:"get"
            })
            .then(Response => Response.json())
            .then(data => {
                let rep = data.data;
                content.innerHTML = "";
                rep.map(x => {
                    var image = document.createElement("img");
                    image.setAttribute("src", x.images.downsized.url);
                    content.appendChild(image);
                })
            })
            break;
        case  "axios":
            console.log("axios");
            axios.get(url)
                      .then((response) => {
                        let data = response.data.data;
                        content.innerHTML = "";
                        data.map(x => {
                        var image = document.createElement("img");
                        image.setAttribute("src", x.images.downsized.url);
                        content.appendChild(image);
                })
                      }, 
                      (error) => {
                      
                      } )
            break;
        case "jQuery":
            console.log("jquery");
            $.get(url).done(function(data) {
                let rep = data.data;
                content.innerHTML = "";
                rep.map(x => {
                    var image = document.createElement("img");
                    image.setAttribute("src", x.images.downsized.url);
                    content.appendChild(image);
                })
            })
            .fail(function() {
            alert("error");
            })
            .always(function() {

            });
            break;      
    }
})