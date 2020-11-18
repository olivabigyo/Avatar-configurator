
// Variables
const boy = document.getElementById("Boy");
const girl = document.getElementById("Girl");
const boyConfig = {};
const girlConfig = {};

// Variables for form inputs
const skinSelect = document.getElementById("skin-tone-select");
const mouthSelect = document.getElementById("mouth-select");
const hairSelect = document.getElementById("hair-select");
const hairColorSelect = document.getElementById("hair-color-select");
const shirtSelect = document.getElementById("shirt-select");
const shirtColorSelect = document.getElementById("shirt-color-select");
const accessoriesSelect = document.getElementById("accessories-select");

// Event listeners for form inputs

// change the selection with mouseclick or keyboard etc.
skinSelect.addEventListener("change", function (ev) {
    selectColor("skin", this.value);
});
// change the selection by scrolling with the mouse wheel over the selection input field
skinSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectColor("skin", this.value);
});

mouthSelect.addEventListener("change", function (ev) {
    selectPart("mouth", parseInt(this.value));
});
mouthSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectPart("mouth", parseInt(this.value));
});

hairSelect.addEventListener("change", function (ev) {
    selectPart("hair", this.selectedIndex);
});
hairSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectPart("hair", this.selectedIndex);
});

hairColorSelect.addEventListener("change", function (ev) {
    selectColor("hair", this.value);
});
hairColorSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectColor("hair", this.value);
});

shirtSelect.addEventListener("change", function (ev) {
    selectPart("shirt", this.selectedIndex);
});
shirtSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectPart("shirt", this.selectedIndex);
});

shirtColorSelect.addEventListener("change", function (ev) {
    selectColor("shirt", this.value);
});
shirtColorSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectColor("shirt", this.value);
});

accessoriesSelect.addEventListener("change", function (ev) {
    selectPart("Accessory", this.value);
});
accessoriesSelect.addEventListener("wheel", function (ev) {
    ev.preventDefault();
    if (ev.deltaY < 0) {
        if (this.selectedIndex <= 0) return;
        this.selectedIndex -= 1;
    }
    if (ev.deltaY > 0) {
        if (this.selectedIndex >= this.length - 1) return;
        this.selectedIndex += 1;
    }
    selectPart("Accessory", this.value);
});

// Functions

// Hair, Mouth and Accessories selection with active class
const selectPart = (part, id) => {
    if (part === "hair") {
        selectPart("hair-front", id);
        selectPart("hair-back", id);
        return;
    }

    $(boy).find(`.${part} .selectable`).removeClass("active");
    $(girl).find(`.${part} .selectable`).removeClass("active");

    const part_id = typeof (id) === "number" ? `.${part}-${id}` : `.${id}`;
    $(boy).find(part_id).addClass("active");
    $(girl).find(part_id).addClass("active");
}

// Skin-color, Hair-color and Shirt/Dress-color selection with data-attributum
const selectColor = (part, id) => {
    boy.setAttribute(`data-${part}`, id);
    girl.setAttribute(`data-${part}`, id);
};
