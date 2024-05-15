"use strict";

const toyCategoryDropdown = document.getElementById("toyCategoryDropdown");
const toyList = document.getElementById("toyList");
const toDetailRow = document.getElementById("toyDetailRow");
const toyName = document.getElementById("toyName");
const toManufacturer = document.getElementById("toyManufacturer");
const toyAge = document.getElementById("toyAge");

window.onload = () => {
    toyCategoryDropdown.onchange= onToyCategoryDropdownChange;
    toyList.onchange = onToyListChange;
};

function onToyCategoryDropdownChange() {
    let selectCategory = toyCategoryDropdown.value; 
    toyList.options.length = 0;
    let toysInCategory = getToysForCategory(selectCategory);

    for (let toy of toysInCategory) {
        addNameToToyList(toy);
    }
}

function addNameToToyList(toyName) {
    let option = document.createElement("option");
    option.value = toy.name;
    option.innerHTML = toy.name;
    toyList.appendChild(option);
}

function getToysForCategory(category) {
    if (category === "action_figures") {
        return toys.Toys["Action Figures"];
    } else if (category === "educational_toys") {
        return toys.Toys["Educational Toys"];
    } else if (category === "outdoor_toys") {
        return toys.Toys["Outdoor Toys"];
    } else {
        console.log("unknown category");
        return [];
    }
}
function getToyByName(toyName) { 
    let selectCategory = toyCategoryDropdown.value;
    let toys = getToysForCategory(selectCategory);

    for (let toy of toys) {
        if (toy.name === toyName) {
            return toy;
        }
    }
}
function onToyListChange() {
    let selectedToyName = toyList.value;

    let selectedToy = getToyByName(selectedToyName);
    
    showDetailRow();

    toyName.innerHTML = selectedToy.name;
    toManufacturer.innerHTML = selectedToy.manufacturer;
    toyAge.innerHTML = selectedToy.age_range;

}
 function showDetailRow() {
    toDetailRow.style.display = "block";
 }
function hideDetailRow() { 
    toDetailRow.style.display = "none";
}