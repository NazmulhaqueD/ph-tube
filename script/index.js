
function categoriesLoader(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response)=> response.json())
    .then((data) => displayCategories(data.categories))
}



const displayCategories=(categories)=>{
    const categoryContainer = document.getElementById("category-container");

    for(const cat of categories){
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
        <button class="btn">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}
categoriesLoader()

