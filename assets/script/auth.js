// Get name of file uploaded and render it in the DOM 
let fileInput = document.querySelectorAll(".upload");
console.log(fileInput)
fileInput.forEach(el => {
    console.log(el)
    el.onchange = () => {
        if (el.files.length > 0) {
            const fileName = el.parentNode.querySelector(".file-name");
            fileName.textContent = el.files[0].name;
            fileName.classList.add("show-file-name")
            console.log(fileName)

        }
    }
})
const fileName = fileInput[0].parentNode.querySelector(".file-name");
console.log(fileName)
