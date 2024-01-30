const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {


        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("select")
        });

        const button = e.target
        const id = button.getAttribute("id");

        btn.querySelector('.color').classList.add("select");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toogle("changing")
        }, 200)

    })
})