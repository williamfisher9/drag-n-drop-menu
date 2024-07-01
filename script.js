const items = document.querySelectorAll(".item");

const leftMenu = document.getElementById("leftMenu");
const rightMenu = document.getElementById("rightMenu");

const menus = document.querySelectorAll(".menu")

let selected = null;

items.forEach((item) => {
    item.addEventListener("dragstart", (event) => {
        item.style.opacity = "0.5";
        item.style.boxShadow = "2px 2px 2px white, -2px -2px 2px white";
        
        selected = event.target;

        console.log(selected)

        

    })

    item.addEventListener("dragend", (event) => {
        item.style.opacity = "1";
        item.style.boxShadow = "none";
    })
});

menus.forEach((menu) => {
    menu.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    menu.addEventListener("drop", (event) => {
        event.preventDefault();
        menu.appendChild(selected);
    });

})
