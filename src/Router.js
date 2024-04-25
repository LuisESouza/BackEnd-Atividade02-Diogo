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

    goTo(rota, param) {
        history.pushState({}, "", rota);
        eval(`new ${this.rotas[rota]}(${param})`);
    }
}