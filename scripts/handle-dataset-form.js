let myForm = document.getElementById("submit-dataset-form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    if (title.value === "" || description.value === "") {
        alert("Поля должны быть заполнены!!!");
    }
}
)