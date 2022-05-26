let colorarray = ["blue", "red", "purple", "green", "orange", "black", "brown","grey", "yellow", "pink"]
function colors() {
    for (let i = 0; i < colorarray.length; i++) {
        document.querySelector(".styleimages").innerHTML += `
    <div class="colors center"id="color${i}" style="background-color:${colorarray[i]}">
        <button class="button"id="btn${i}">Click for styling<button>
    </div>`
    }
    stylepage();
}
function stylepage(){
for(let i=0; i < colorarray.length; i++){
    document.getElementById("btn"+i).addEventListener("click", function(e) {
        e.preventDefault();
        document.body.style.backgroundColor = colorarray[i];
        console.log("hello");
    })
}
}


colors();
 