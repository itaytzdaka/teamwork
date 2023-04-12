(() => {

    const logoArray = [
        {
            name: "teamWork",
            src1: "./assets/img/TEAMWORK LOGO.svg",
            src2: "./assets/img/TEAMWORK LOGO.svg",
            span: "מהיום הכל במקום אחד"
        },
        {
            name: "MultiNet",
            src1: "./assets/img/cropped-logo-white-01.png",
            src2: "./assets/img/cropped-logo-blue-01.png",
            span: "מהיום הכל במקום אחד"
        },
        {
            name: "PURPLELENS",
            src1: "./assets/img/purplelens.png",
            src2: "./assets/img/purplelens.png",
            span: "מהיום הכל במקום אחד"
        },
        {
            name: "Meat2me",
            src1: "./assets/img/LOGO MEAT PNG.png",
            src2: "./assets/img/LOGO MEAT PNG.png",
            span: "מהיום הכל במקום אחד"
        },
        {
            name: "CONTACT",
            src1: "./assets/img/unnamed.png",
            src2: "./assets/img/unnamed.png",
            span: "מהיום הכל במקום אחד"
        },
        {
            name: "PILATES",
            src1: "./assets/img/pilates logo.png",
            src2: "./assets/img/pilates logo.png",
            span: "מהיום הכל במקום אחד"
        },

    ];

    const ul = document.querySelector("ul");


    // add list to ul in the html and handle onclick
    logoArray.forEach((logo, index) => {


        const li = document.createElement("li");
        li.innerHTML = `
        <div class="logo-container">
            <img src="${logo.src1}" alt="">
            <span>מהיום הכל במקום אחד</span>
        </div>
        `;

        li.addEventListener("click", (e) => {

            //remove .active
            const liArray = document.querySelectorAll("li");
            liArray.forEach(li => {
                li.classList.remove("active");
            })

            //add .active
            e.currentTarget.classList.add("active");

            
            //change src to default
            const images = document.querySelectorAll("img");
            images.forEach((img,index)=>{
                img.src=logoArray[index].src1;
            });


            //change active img src
            const img = e.currentTarget.querySelector("img");
            img.src = logoArray[index].src2;

        });

        ul.appendChild(li);
    });

})();