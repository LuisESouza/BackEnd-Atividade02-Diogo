class categoryView {
    constructor() {}

    async render() {
        const Category = new categoryModel();
        try {
            const categories = await Category.getCategory();

            return `
            <div class="chooseCategory">
                <div>
                    <div class = "close-container">
                        <button id = "btn-close"><i class = "bi bi-x"></i></button>
                    </div>

                    <div class="chooseCategory-tittle">
                        <h4>Choose Category</h4>
                    </div>                  

                    <span class="line"></span>
        
                    <section class="chooseCategory-container">
                        ${categories.map(category => `
                            <div class="Category">
                                <button id = "btn-category" class = "" style="background-color: ${category.color};" value = "${category.categoryTask, category.color}">
                                    <i class="" style="color: white;"></i>
                                </button>   
                                <div class="text-category">
                                    <p>${category.categoryTask}</p>
                                </div>
                            </div>
                        `).join('')}

                        <div class="Category">
                            <button id="btn-createCategory" class="btn-createCategory" style="cursor:pointer; background-color: #80FFD1; padding: 20px; border-radius: 10px; border: none;">
                                <i class="bi bi-plus-lg" style="color: #00A369;"></i>
                            </button>   
                            <div class="text-category">
                                <p>Create New</p>
                            </div>
                        </div>
                    </section>
                </div>
        
                <div class="div-buttonAddCategory">
                    <button id="btn-addCategory">Add Category</button>
                </div>
            </div>`;
        } catch (error) {
            console.error("Error fetching categories:", error);
            return "";
        }
    }
}
