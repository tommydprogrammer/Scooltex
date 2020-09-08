const form = document.querySelector("form");

const formElements = {
  inputs: form.querySelectorAll("label input"),
  upload: form.querySelectorAll("label[for='upload']"),
  select: form.querySelectorAll("select")
};

const checkInput = (input) => {
  console.log(input.type);
  if (input.type === 'file' && input.value === "") {
    return
  } else if (input.value === "") {
    promptError(input);
  } else {
    console.log("reached")
    removeErrorMessage(input);
    return;
  }
};

const promptError = (input, type) => {
  const errorMessage = `
        <span class="error-text">*required</span>
    `;

  if (type === "file") {
    return
  } else {
    console.log(input.parentNode);
    if (input.classList.contains("error")) {
      return;
    }
    input.classList.add("error");
    input.parentNode.insertAdjacentHTML("beforeend", errorMessage);
  }
  

};

const removeErrorMessage = (input) => {
  console.log(input.type)

  if (input.type === 'file') {
    return
  } else {
    console.log(input.classList.contains("error"))
    if (input.classList.contains("error")) {

        input.parentNode.removeChild(input.parentNode.querySelector('span'))
        input.classList.remove("error")
    }
  }
}

formElements.inputs.forEach((input) => {
  input.addEventListener("blur", checkInput.bind(null, input));
  input.addEventListener('change', checkInput.bind(null, input))
});

formElements.select.forEach((select) => {
  select.addEventListener("blur", checkInput.bind(null, select));
  select.addEventListener('change', checkInput.bind(null, select))
});