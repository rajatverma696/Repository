
const fetchButton = document.getElementById("fetchButton");
const dataContainer = document.getElementById("dataContainer");

fetchButton.addEventListener("click", () => {
    dataContainer.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
           
            dataContainer.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        })
        .catch((error) => {
            dataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        });
});
