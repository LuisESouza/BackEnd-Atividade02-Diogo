class createCategoryController {
    constructor() {
        this.content = document.querySelector("#content");
        this.header = document.querySelector("header");
        this.footer = document.querySelector("footer")
        this.init();
    }

    init() {
        const View = new createCategoryView();

        this.content.innerHTML = View.render();

        const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })

        const btnCancel = document.querySelector("#btn-cancel");
        btnCancel.addEventListener("click", () => {
            this.footer.style.display = "block";
            this.header.style.display = "block";
            new Router().goAddCategory();
        })

        const btnCreate = document.querySelector("#btn-create");
        btnCreate.addEventListener("click", async () => {
            const inputValue = document.querySelector("input").value;
            const selectedColor = document.querySelector(".container-colors button.active").value;

            if(inputValue=="" && selectedColor == null){
                alert("informe um nome para a categoria");
            }else{
            try {
                
                const data = {
                    categoryTask: inputValue,
                    color: selectedColor
                }

                const response = await categorymodel.createCategory(data);
                if (response.ok) {
                    new Router().goTo("addCategory");
                    this.footer.style.display = "block";
                    this.header.style.display = "block";
                } else {
                    console.error('Erro ao criar categoria:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao criar categoria:', error);
            }
        }
        });

        const colorButtons = document.querySelectorAll(".container-colors button");
        colorButtons.forEach(button => {
            button.addEventListener("click", () => {
                colorButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}
