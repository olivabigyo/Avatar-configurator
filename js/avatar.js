
// Variables
const boy = document.getElementById("Boy");
const girl = document.getElementById("Girl");
const boyConfig = {};
const girlConfig = {};

const makeSelectHandler = (elementId, handler) => {
    const element = document.getElementById(elementId);
    // change the selection with mouseclick or keyboard etc.
    element.addEventListener("change", () => {
        handler(element);
    });
    // change the selection by scrolling with the mouse wheel over the selection input field
    element.addEventListener("wheel", (ev) => {
        ev.preventDefault();
        if (ev.deltaY < 0) {
            if (element.selectedIndex <= 0) return;
            element.selectedIndex -= 1;
        }
        if (ev.deltaY > 0) {
            if (element.selectedIndex >= element.length - 1) return;
            element.selectedIndex += 1;
        }
        handler(element);
    }, { passive: false });
    return element;
};

// Variables for form inputs
const skinSelect = makeSelectHandler("skin-tone-select", (element) => selectColor("skin", element.value));
const mouthSelect = makeSelectHandler("mouth-select", (element) => selectPart("mouth", parseInt(element.value)));
const hairSelect = makeSelectHandler("hair-select", (element) => selectPart("hair", element.selectedIndex));
const hairColorSelect = makeSelectHandler("hair-color-select", (element) => selectColor("hair", element.value));
const shirtSelect = makeSelectHandler("shirt-select", (element) => selectPart("shirt", element.selectedIndex));
const dressSelect = makeSelectHandler("dress-select", (element) => selectPart("dress", element.selectedIndex));
const shirtColorSelect = makeSelectHandler("shirt-color-select", (element) => selectColor("shirt", element.value));
const dressColorSelect = makeSelectHandler("dress-color-select", (element) => selectColor("dress", element.value));
const accessoriesSelect = makeSelectHandler("accessories-select", (element) => selectPart("Accessory", element.value));

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

// Skin-color, Hair-color and Dress-color selection with data-attributum
const selectColor = (part, id) => {
    boy.setAttribute(`data-${part}`, id);
    girl.setAttribute(`data-${part}`, id);
};
