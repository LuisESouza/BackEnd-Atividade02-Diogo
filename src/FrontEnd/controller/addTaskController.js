class addTaskController {
    constructor(param) {
        this.content = document.querySelector("#content");
        this.flag = param.flag;
        this.category = param.category;

        console.log("flag: ",this.flag);
        console.log("categoria: ",this.category);

        this.init();
    }

    init() {
        const View = new addTaskView();
        const taskmodel = new taskModel();
        this.content.innerHTML = View.render();

        const btnCock = document.querySelector('#btn-stopwatch');
        btnCock.addEventListener("click", (event) => {
            event.preventDefault();
        })

        const btnTag = document.querySelector("#btn-tag");
        btnTag.addEventListener("click", (event) => {
            event.preventDefault();
            new Router().goAddCategory();
        });

        const btnFlag = document.querySelector("#btn-flag");
        btnFlag.addEventListener("click", (event) => {
            event.preventDefault();
            new Router().goAddFlag();
        });

        const btnSubmit = document.querySelector("#btn-submit");
        btnSubmit.addEventListener("click", async (event) => {
        event.preventDefault();
        try {
            const inputName = document.querySelector("#taskName").value;
            const inputDesc = document.querySelector("#taskDesc").value;
            const flagValue = this.flag;
            const category = this.category;

            if (flagValue == null || inputName.trim() === "") {
                alert("Erro");
            } else {
                const data = {
                    inputName: inputName,
                    inputDesc: inputDesc,
                    flagValue: flagValue,
                    category: category,
                };

            const response = await taskmodel.createTask(data);
            if (response.ok) {
                new Router().goHome();
            }
        }
        } catch (error) {
            console.log(error);
        }
        });
    }
}
