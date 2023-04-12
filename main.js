(() => {

    const logoArray = [
        {
            name: "teamWork",
            src1: "./assets/img/TEAMWORK LOGO.svg",
            src2: "./assets/img/TEAMWORK LOGO.svg",
            span: "מהיום הכל במקום אחד",
            html: "./iframes/teamwork.html",
        },
        {
            name: "MultiNet",
            src1: "./assets/img/cropped-logo-white-01.png",
            src2: "./assets/img/cropped-logo-blue-01.png",
            span: "מהיום הכל במקום אחד",
            html: "./iframes/multiNet.html",
        },
        {
            name: "PURPLELENS",
            src1: "./assets/img/purplelens.png",
            src2: "./assets/img/purplelens.png",
            span: "מהיום הכל במקום אחד",
            html: "./iframes/purplelens.html",
        },
        {
            name: "Meat2me",
            src1: "./assets/img/LOGO MEAT PNG.png",
            src2: "./assets/img/LOGO MEAT PNG.png",
            span: "מהיום הכל במקום אחד",
            html: "./iframes/meat2me.html",
        },
        {
            name: "CONTACT",
            src1: "./assets/img/unnamed.png",
            src2: "./assets/img/unnamed.png",
            span: "מהיום הכל במקום אחד",
            html: "./iframes/contact.html",
        },
        {
            name: "PILATES",
            src1: "./assets/img/pilates logo.png",
            src2: "./assets/img/pilates logo.png",
            span: "מהיום הכל במקום אחד",
            html: "./iframes/pilates.html",
        },
    ];

    const ul = document.querySelector("ul");
    const main = document.querySelector("main");


    // For any logo add li to ul and iframe and handle onclick.
    logoArray.forEach((logo, index) => {


        const li = document.createElement("li");
        li.innerHTML = `
        <div class="logo-container">
            <img src="${logo.src1}" alt="">
            <span>מהיום הכל במקום אחד</span>
        </div>
        `;

        const iframe = document.createElement("iframe");
        iframe.src = logoArray[index].html;

        li.addEventListener("click", (e) => {

            //remove active
            const liArray = document.querySelectorAll("li");
            const iframeArray = document.querySelectorAll("iframe");

            liArray.forEach(li => {
                li.classList.remove("li-active");
            })
            iframeArray.forEach(li => {
                li.classList.remove("iframe-active");
            })

            //add .active
            e.currentTarget.classList.add("li-active");
            iframe.classList.add("iframe-active");

            
            //change src to default
            const images = document.querySelectorAll("img");
            images.forEach((img,index)=>{
                img.src=logoArray[index].src1;
            });


            //change li-active img src
            const img = e.currentTarget.querySelector("img");
            img.src = logoArray[index].src2;

        });

        //add elements to html
        
        ul.appendChild(li);
        main.appendChild(iframe);
    });

})();