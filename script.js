const key = "21EQ57wGpPpPmELaGfFWV82MpGclZK8f";
let choix = "";
let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${choix}&limit=25&offset=0&rating=G&lang=fr`
const req = new XMLHttpRequest();

