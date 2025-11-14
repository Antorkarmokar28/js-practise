document
  .getElementById("delete-input")
  .addEventListener("keyup", function (event) {
    const inputValue = event.target.value;
    const deleteBtn = document.getElementById("delete-btn");
    if (inputValue === "delete") {
      deleteBtn.removeAttribute("disabled");
      const deleteItem = document.getElementById("delete-item");
      deleteItem.style.visibility = "hidden";
    } else if (inputValue !== "delete") {
      deleteBtn.setAttribute("disabled", true);
    }
  });
