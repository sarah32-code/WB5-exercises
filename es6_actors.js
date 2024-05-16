let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?","What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];
// Who is the Academy Member whose ID is 187?
let id187 = academyMembers.filter(member => member.memID === 187)
console.log(id187[0].name)
console.log("---------------------")
// Who has been in at least 3 films?
let threeFilms = academyMembers.filter(member => member.films.length >= 3)
for (let film of threeFilms) {
    console.log(film.name);
}

console.log("------------------------")
//console.log("3films: " + threeFilms[0].name)
// Who has a name that starts with "Bob"?
let bobs = academyMembers.filter(member => member.name.startsWith("Bob"))
console.log("StartswithBob" + bobs[0].name)
console.log("------------------------")

// HARDER: Which Academy Members have been in a film that starts with "A"
let aFilms = academyMembers.filter(member => member.films.filter(film => film.startsWith("A")).length > 0)
console.log(aFilms[0].name)



