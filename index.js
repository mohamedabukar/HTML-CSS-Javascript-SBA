const dispnme = document.forms["uname"].querySelector("input");


dispnme.addEventListener("keyup", function (e) {
    e.preventDefault();
    const term = e.target.value;
    // let trimterm = term.at( -1);
    document.querySelector(".spanwelcome").innerHTML = `
    ${term}
    `;

})

