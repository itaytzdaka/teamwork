(() => {

    const liArray = document.querySelectorAll("li");

    liArray.forEach(li => {

        li.addEventListener("click", (liClicked) => {
            liArray.forEach(li => {
                li.classList.remove("active");
            })
            liClicked.currentTarget.classList.add("active");
        })
    });
})();