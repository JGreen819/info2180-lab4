document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("search-form");
    const input = document.getElementById("query");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const query = input.value.trim()
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    result.innerHTML = xhr.responseText;
                
                } else {
                    result.textContent = "Could not load superheroes.";
                }
            }
        };
        xhr.open("GET", "superheroes.php?query=" + encodeURIComponent(query), true);
        xhr.send();
    });
});
