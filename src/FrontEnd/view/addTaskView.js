class addTaskView{
    constructor(){}

    render(){
        return `
        <form class="form-control" id="add-task-form">
                <div class="form-tittle">
                    <h3>Add Task</h3>
                </div>
                
                <div class="form-inputs">
                    <input type = "text" placeholder = "name task" id = "taskName">
                    <input type = "text" placeholder = "description task" id = "taskDesc">
                </div>
                <div class="form-buttons">
                    <div>
                        <button class="" id="btn-stopwatch">
                            <i class="bi bi-clock"></i>
                        </button>
                        
                        <button class="" id="btn-tag">
                            <i class="bi bi-tag"></i>
                        </button>

                        <button class="" id ="btn-flag">
                            <i class="bi bi-flag"></i>
                        </button>

                    </div>

                    <div class="form-submit">
                        <button class="" id="btn-submit">
                            <i class="bi bi-send"></i>
                        </button>
                    </div>
                </div>
        </form>
        `
    }
}