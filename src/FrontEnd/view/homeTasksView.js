class homeTasksView{
    constructor(tasks){
        this.tasks = tasks
    }

    async render(){
        return `
        <div class="homeTasks">
            <div class="search-container">
                <label for="search-toggle">
                    <i class="bi bi-search" style="font-size: medium;"></i>
                </label>
                <input type="search" name = "search-toggle" id = "search-toggle" class="searchTask" placeholder="Search for your task...">
            </div>
            
            <section class="tasks-container">
                <div class="select-container">
                    <select name="select">
                        <option value="Today" selected>Today</option>
                    </select>
                </div>

                ${
                    this.tasks.map(task => `
                    <div class="task">
                        <div class="radio-container">
                                <input type="radio" name="radio" value="">
                        </div>

                        <div class="info-container">
                            <div class="task-name">
                                <p>${task.nome}</p>
                            </div>

                            <div class="task-details">
                                <p>${task.description}</p>

                                <div class="category-priority-container">
                                    <div class="category-details">
                                        <p>Categoria</p>
                                    </div>

                                    <div class="priority-details">
                                        <i class="bi bi-flag"></i>
                                        <p>${task.taskPriority}</p>
                                    </div>  
                                </div>                        
                            </div>
                        </div>
                    </div>
                    `).join('')
                }
            </section>

            <section class="tasks-completed">
                <div class="select-container">
                    <select name="select">
                        <option value="completed" selected>Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
                
                <div class="task">
                    <div class="radio-container">
                            <input type="radio" name="radio" value="">
                    </div>

                    <div class="info-container">
                        <div class="task-name">
                            <p>Nome</p>
                        </div>

                        <div class="task-details">
                            <p>Data</p>                     
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `     
    }
}