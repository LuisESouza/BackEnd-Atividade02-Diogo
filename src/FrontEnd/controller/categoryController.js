class categoryController {
    constructor(){
        this.content = document.querySelector("#content");
        this.header = document.querySelector("header");
        this.footer = document.querySelector("footer");
        this.bind();
    }

    async bind() {
        const categorymodel = new categoryModel();
        const categories = await categorymodel.getCategory();

        const View = new categoryView(categories);

        this.content.innerHTML = await View.render();

        const btnCreate = document.querySelector("#btn-createCategory");
        btnCreate.addEventListener("click", ()=>{
             this.footer.style.display = "none";
             this.header.style.display = "none";
             new Router().goCreateCategory();
        })

        const btnAddCategory = document.querySelector("#btn-addCategory");
            btnAddCategory.addEventListener("click", ()=>{
            const category = document.querySelector(".Category button.active").value;

            //Passando as informacoes da category para o addTask
            new Router().goAddTask({flagValue: flagValue, category: category});
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
            new Router().goAddTask();
        })
    }
}
