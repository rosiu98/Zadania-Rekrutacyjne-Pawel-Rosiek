const btn = document.querySelector(".btn");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const popupName = document.querySelector(".popup-name");
const checkbox = document.querySelector(".checkbox");

let box = false;

// Email pattern
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      nameInput.value.trim().length === 0 ||
      emailInput.value.trim().length === 0
    ) {
      window.alert("Inputs value cannot be empty!");
      return;
    } else if (box === false) {
      window.alert(
        "To send you our promotion u have to aggre to our regulamin."
      );
      return;
    } else if (!emailInput.value.match(pattern)) {
      window.alert("Email have to be valid!");
      return;
    }

    location.href = `popup.html?${nameInput.value.trim()}`;
  });
}

if (popupName) {
  popupName.textContent = decodeURI(location.search.substring(1)) + "!";
}

if (checkbox) {
  checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("hidden");
    box = !box;
  });
}
