const attr_toggle = "data-toggle"; //Atributo para saber qué elemento se modifica.
const attr_target = "data-target"; //Atributo para mostrar elementos (con id).
const attr_dismiss = "data-dismiss"; //Atributo para ocultar elementos (con id).
const class_modal = "modal"; //Clase para modales, html.
const dropdown_class = "dropdown"; //Clase para el dropdown.
const dropdown_toggle = "dropdown-toggle"; //Toogle del dropdown.
const dropdown_menu_class = "dropdown-menu"; //Clase para el menú que tiene el dropdwon.
const navbar_toggle = "navbar-toggle"; //Clase para poder usar toogle.
const menu_collapse_class = "navbar-collapse"; //Clase para colapsar el menú, navbar.
const class_show = "show"; //Clase para mostrar elemento.

document.addEventListener("DOMContentLoaded", function() {
    //Botones para abrir el modal.
    let modal_open_buttons = document.querySelectorAll(`[${attr_toggle}='${class_modal}']`)

    modal_open_buttons.forEach(element => {
        element.addEventListener("click", OpenModal);
    });

    //Botones que cierran un modal
    let modal_close_buttons = document.querySelectorAll(`[${attr_dismiss}]`)

    modal_close_buttons.forEach(element => {
        element.addEventListener("click", CloseModal);
    });

    //Dropdown del submenú.
    let dropdown_buttons = document.querySelectorAll(`.${dropdown_class} > .${dropdown_toggle}`);

    dropdown_buttons.forEach(element => {
        element.addEventListener("click", ToggleDropdown);
    });

    //Collapse del menú.
    let collapse_menu_buttons = document.querySelectorAll(`.${navbar_toggle}`);

    collapse_menu_buttons.forEach(element => {
        element.addEventListener("click", ToggleMenu);//Toogle menu, si le das click se abre, otra vez se cierra.
    });
});

/**
 * Muestra un modal.
 * @param {PointerEvent} e 
 */
function OpenModal(e) {
    //Se obtiene el selector del elemento que queremos mostrar.
    let modal_selector = e.target.getAttribute(attr_target);

    //Se obtiene el elemento a partir del DOM.
    let modal = document.querySelector(modal_selector);
    console.log(modal_selector);

    //Agregar la clase para mostrar el modal.
    modal.classList.add(class_show);
}

/**
 * Cerrar un modal.
 * @param {PointerEvent} e 
 */
function CloseModal(e) {
    //Se obtiene el selector del elemento que queremos ocultar.
    let modal_selector = e.target.getAttribute(attr_dismiss);

    //Se obtiene el elemento a partir del DOM.
    let modal = document.querySelector(modal_selector);

    //Cambiamos la clase para que sí se muestre.
    modal.classList.remove(class_show);
}

/**
 * Abrir y cerrar el dropdown, submenú.
 * @param {PointerEvent} e 
 */
function ToggleDropdown(e) {
    e.preventDefault();//Prevenir que se recargue la pag.

    //Se obtiene 
    let submenu = e.target.parentNode.querySelector(`.${dropdown_menu_class}`);

    //Si ya tiene una clase, se quita; sino se agrega.
    submenu.classList.toggle(class_show);
}

/**
 * Abrir y cerrar el menú usando toogle.
 * @param {PointerEvent} e 
 */
function ToggleMenu(e) {
    e.preventDefault();//Prevenir que se recargue la pag.

    let menu = e.target.parentNode.querySelector(`.${menu_collapse_class}`);

    menu.classList.toggle(class_show);
}