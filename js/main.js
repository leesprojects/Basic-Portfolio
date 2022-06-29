function loadHtml(){
    

    id = "header-imported"
    filename = "header.html"
    console.log("div id: " + id + ", filename: ", filename);
    let xhttp;
    let element = document.getElementById(id);
    let file = filename;
    console.log("file: " + file);
    console.log("element: " + element);

    if(file){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){element.innerHTML = this.responseText;} //Good request
                if(this.status == 400){element.innerHTML = "<h1>Page not found</h1>";} //Bad request
            }
        }
        xhttp.open("GET", 'templates/' + file, true); //Initialise request
        xhttp.send(); //Send request
        return;
    }
}