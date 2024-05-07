class taskModel {
    constructor() {}

    async getTask() {
        const apiUrl = `http://localhost:3001/tasks`;
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async createTask(param){
        try{
            const response = await fetch("http://localhost:3001/tasks", {
                    method: "POST",
                        body: JSON.stringify({
                        nome: param.inputName,
                        description: param.inputDesc,
                        categoryTask: param.category,
                        taskPriority: param.flagValue,
                        taskReady: false,
                    }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response;
        }catch(error){console.log(error)}
    }
}
