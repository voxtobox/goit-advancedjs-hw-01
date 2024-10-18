const storageItemName = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};

const lStorage = window.localStorage;
const form = document.querySelector('.feedback-form');
const fEmail = form.elements.email;
const fMsg = form.elements.message;

const fData = lStorage.getItem(storageItemName);
if (fData) {
    formData = JSON.parse(fData);
    fEmail.value = formData.email;
    fMsg.value = formData.message;
}

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value;
    lStorage.setItem(storageItemName, JSON.stringify(formData));
  });

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (fEmail.value && fMsg.value) {
        console.log(formData);
        lStorage.removeItem(storageItemName);
        formData.email = "";
        formData.message = "";
        form.reset();
    } else {
        window.alert("Fill please all fields");
    }
  });