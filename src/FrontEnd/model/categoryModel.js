class categoryModel {
    constructor(){
    }

    async getCategory() {
        const apiUrl = "http://localhost:3001/category";
        try {
            const response = await fetch(apiUrl);
            const results = await response.json();

            return results;
        } catch(error) {
            console.log(error);
        }
    }

    async createCategory(category){
        try{
            const response = await fetch("http://localhost:3001/category", {
                    method: "POST",
                    body: JSON.stringify({
                        categoryTask: category.categoryTask,
                        color: category.color
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }); 
            return response;
        }catch(error){
            console.log(error
        )}
    }
}