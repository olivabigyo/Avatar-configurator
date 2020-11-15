
// Variables
const girl = document.getElementById("Girl");
const girlConfig = {};

// Variables for form inputs
const skinSelect = document.getElementById("skin-tone-select");
const mouthSelect = document.getElementById("mouth-select");
const hairSelect = document.getElementById("hair-select");
const hairColorSelect = document.getElementById("hair-color-select");
const dressSelect = document.getElementById("dress-select");
const dressColorSelect = document.getElementById("dress-color-select");
const accessoriesSelect = document.getElementById("accessories-select");

// Event listeners for form inputs
skinSelect.addEventListener("change", function (ev) {
    selectColor("skin", this.value);
});

mouthSelect.addEventListener("change", function (ev) {
    selectPart("Mouth", parseInt(this.value));
});

hairSelect.addEventListener("change", function (ev) {
    selectPart("Hair", this.selectedIndex);
});

hairColorSelect.addEventListener("change", function (ev) {
    selectColor("hair", this.value);
});

dressSelect.addEventListener("change", function (ev) {
    selectPart("Dress", this.selectedIndex);
});

dressColorSelect.addEventListener("change", function (ev) {
    selectColor("dress", this.value);
});

accessoriesSelect.addEventListener("change", function (ev) {
    selectPart("Accessory", this.value);
});

// Functions

// Hair, Mouth and Accessories selection with active class
const selectPart = (part, id) => {
    if (part === "Hair") {
        selectPart("Hair-front", id);
        selectPart("Hair-back", id);
        return;
    }

    $(girl).find(`#${part} .sel`).removeClass("active");
    const part_id = typeof (id) === "number" ? `#${part}-${id}` : `#${id}`;
    $(girl).find(part_id).addClass("active");
}

// Skin-color, Hair-color and Dress-color selection with data-attributum
const selectColor = (part, id) => {
    girl.setAttribute(`data-${part}`, id);
};
