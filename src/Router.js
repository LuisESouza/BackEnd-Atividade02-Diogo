class Router{
   constructor(){
        this.rotas = {
            'home': "homeController",
            'addTask': "addTaskController",
            'addFlag': "addFlagController",
            'addCategory':"categoryController",
            'createCategory':"createCategoryController",
        }
    }

    goHome(){
        this.goTo("home");
    }

    goAddTask(param){
        this.goTo("addTask", param);
    }

    goAddFlag(){
        this.goTo("addFlag");
    }

    goAddCategory(){
        this.goTo("addCategory");
    }

    goCreateCategory(){
        this.goTo("createCategory");
    }

    goTo(rota, param) {
        history.pushState({}, "", rota);
        eval(`new ${this.rotas[rota]}("${param}")`);
    }
}