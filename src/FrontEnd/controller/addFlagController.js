class addFlagController {
    constructor() {
        this.content = document.querySelector("#content");
        this.init();
    }

    init() {
        const View = new addFlagView();

        this.content.innerHTML = View.render();

        const btnCancel = document.querySelector("#btn-cancel");
        btnCancel.addEventListener("click", () => {
            new Router().goTo("addTask");
        })

        const btnSave = document.querySelector("#btn-save");
        btnSave.addEventListener("click", () => {
            const flagValue = document.querySelector(".table-task button.active").value;           
            new Router().goTo("addTask", flagValue);
        });

        const flagButtons = document.querySelectorAll(".table-task button");
        flagButtons.forEach(button => {
            button.addEventListener("click", () => {
                flagButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}
