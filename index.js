const myForm = document.getElementById("my-form")

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let ourFormData = new FormData(event.target)
    let firstName = ourFormData.get("firstName")

    let updatedHtmlContent = `
    <div class="subtitle-box">
    <h2>Welcome ${firstName}</h2>
    </div>
    <p>Thank you for registering</p>
    `

    const mainContent = document.querySelector("main")
    mainContent.innerHTML = updatedHtmlContent
})