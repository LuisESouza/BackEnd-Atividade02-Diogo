class categoryController {
    constructor(){
        this.content = document.querySelector("#content");
        this.header = document.querySelector("header");
        this.footer = document.querySelector("footer");
        this.init();
    }

    async init() {
        const View = new categoryView();
        this.content.innerHTML = await View.render();

        const btnCreate = document.querySelector("#btn-createCategory");
        btnCreate.addEventListener("click", ()=>{
             this.footer.style.display = "none";
             this.header.style.display = "none";
             new Router().goTo("createCategory");
        })

        const btnAddCategory = document.querySelector("#btn-addCategory");
            btnAddCategory.addEventListener("click", ()=>{
            const category = document.querySelector(".Category button.active").value;
            console.log(category);
            new Router().goTo("addTask");
        });



        const categoryButtons = document.querySelectorAll(".Category button");
        categoryButtons.forEach(button => {
            button.addEventListener("click", () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        const btnClose = document.querySelector("#btn-close");
        btnClose.addEventListener("click", ()=>{
            new Router().goTo("addTask");
        })
    }
}
