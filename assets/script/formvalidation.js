const formElements = {
  form: document.querySelector("form"),
};
console.log(formElements.form)

const inputs = formElements.form.querySelectorAll("label input");

console.log(inputs);

const checkInput = (input) => {
  console.log(input.type);
  if (input.value === "" && input.type !== 'file') {
    promptError(input);
  } else {
    removeErrorMessage(input);
    return;
  }
};

const promptError = (input) => {
  if (input.classList.contains("error")) {
    return;
  }

  const errorMessage = `
        <span>*required</span>
    `;
  console.log(input.parentNode);
  input.classList.add("error");
  input.parentNode.insertAdjacentHTML("beforeend", errorMessage);
};

const removeErrorMessage = (input) => {
    if (input.classList.contains("error")) {
        input.parentNode.removeChild(input.parentNode.querySelector('span'))
        input.classList.remove("error")
    }
}

inputs.forEach((input) => {
  input.addEventListener("blur", checkInput.bind(null, input));
});
