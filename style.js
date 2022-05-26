let colorarray = ["blue", "red", "purple", "green", "orange", "black", "brown","grey", "yellow", "pink"]

//function made so that boxes of colors will be made with a background color that is in the array above
function colors() {
    for (let i = 0; i < colorarray.length; i++) {
        document.querySelector(".styleimages").innerHTML += `
    <div class="colors center"id="color${i}" style="background-color:${colorarray[i]}">
        <button class="button"id="btn${i}">Click for styling<button>
    </div>`
    }
    stylepage();
}

//this event listener is to make the whole page the color of the box selected
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
 