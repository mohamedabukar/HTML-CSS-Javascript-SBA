const dispnme = document.forms["uname"].querySelector("input");
const dispfood = document.forms["ufood"].querySelector("input");
const dispsport = document.forms["usport"].querySelector("input");

//Event listener made so that after each key pressed for name of user the letter is displayed only if it is a letter

dispnme.addEventListener("keyup", function (e) {
    e.preventDefault();
    const term = e.target.value;
    // let trimterm = term.at( -1);
    if (!((/^[a-zA-Z]+$/.test(term)) || term.length == 0)) {
        document.querySelector(".spanwelcome").innerHTML = `
        <p>Only letters allowed for name</p>
        `;
        document.querySelector("#tname").innerHTML = `
        <p>Only letters allowed for name</p>
        `;
    } else {
        document.querySelector(".spanwelcome").innerHTML = `
    ${term}
    `;
    document.querySelector("#tname").innerHTML = `
        ${term}
        `;
    }

})

//event listener added for data to go into table

dispfood.addEventListener("keyup", function (e){
    e.preventDefault();
    const term = e.target.value;
    document.querySelector("#tfood").innerHTML = `
    ${term}`;
})

dispsport.addEventListener("keyup", function (e){
    e.preventDefault();
    const term = e.target.value;
    document.querySelector("#tsport").innerHTML = `
    ${term}`;
})

