document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search").addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                
                } else {
                    alert("Could not load superheroes.");
                }
            }
        };
        xhr.open("GET", "superheroes.php", true);
        xhr.send();
    });
});
