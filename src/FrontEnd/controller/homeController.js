class homeController {
    constructor() {
        this.content = document.querySelector("#content");
        this.init();
    }

    async init() {
        const tasksModel = new taskModel();
        const tasks = await tasksModel.getTask();

        const View = new homeView();
        const viewTask = new homeTasksView(tasks);


        if (tasks === null || tasks.length === 0) {
            this.content.innerHTML = View.render();
        } else {
            this.content.innerHTML = await viewTask.render();
        }
    }
}