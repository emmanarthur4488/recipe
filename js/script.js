//Intial References
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


searchBtn.addEventListener("click",() => {
    let userInp = document.getElementById("user-inp").value;
    if(userInp.length == 0){
        result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
    }
    else{
        fetch(url + userInp)
            .then((response) => response.json())
            .then((data) => {
                let myMeal = data.meals[0];
                console.log(myMeal);
                console.log(myMeal.strMealThumb);
                console.log(myMeal.strMeal);
                console.log(myMeal.strArea);
                console.log(myMeal.strInstructions);
                console.log(myMeal.strIngredient1);
                console.log(myMeal.strIngredient2);
                console.log(myMeal.strIngredient3);
                console.log(myMeal.strIngredient4);
                console.log(myMeal.strIngredient5);
                console.log(myMeal.strIngredient6);
                console.log(myMeal.strIngredient7);
                console.log(myMeal.strIngredient8);
                console.log(myMeal.strIngredient9);
                console.log(myMeal.strIngredient10);
                console.log(myMeal.strIngredient11);
                console.log(myMeal.strIngredient12);
                console.log(myMeal.strIngredient13);
                console.log(myMeal.strIngredient14);
                console.log(myMeal.strMeasure1);
                console.log(myMeal.strMeasure2);
                console.log(myMeal.strMeasure3);
                console.log(myMeal.strMeasure4);
                console.log(myMeal.strMeasure5);
                console.log(myMeal.strMeasure6);
                console.log(myMeal.strMeasure7);
                console.log(myMeal.strMeasure8);
                console.log(myMeal.strMeasure9);
                console.log(myMeal.strMeasure10);
                console.log(myMeal.strMeasure11);
                console.log(myMeal.strMeasure12);
                console.log(myMeal.strMeasure13);
                console.log(myMeal.strMeasure14);
                let count =1;
                let ingredients = [];
                for(let i in myMeal) {
                    let ingredient ="";
                    let measure = "";
                    if(i.startsWith("strIngredient") && myMeal[i]
                    ){
                        ingredient = myMeal[i];
                        measure = myMeal[`strMeasure` + count];
                        count += 1;
                        // ingredient.push(`${measure}${ingredient}`);
                    };
                }
                console.log(ingredients);

                result.innerHTML = `<img src=${myMeal.strMealThumb}>
                <div class="details">
                    <h2>${myMeal.strMeal}</h2>
                    <h4>${myMeal.strArea}</h4>
                </div>
                <div id="ingredient-con">
                    <div class="ingredient_one">
                        <h2>${myMeal.strMeasure1} ${myMeal.strIngredient1}</h2>
                        <h2>${myMeal.strMeasure2} ${myMeal.strIngredient2}</h2>
                        <h2>${myMeal.strMeasure3} ${myMeal.strIngredient3}</h2>
                        <h2>${myMeal.strMeasure4} ${myMeal.strIngredient4}</h2>
                        <h2>${myMeal.strMeasure5} ${myMeal.strIngredient5}</h2>
                        <h2>${myMeal.strMeasure6} ${myMeal.strIngredient6}</h2>
                        <h2>${myMeal.strMeasure7} ${myMeal.strIngredient7}</h2>
                    </div>

                    <div class="ingredient_two">
                        <h2>${myMeal.strMeasure8} ${myMeal.strIngredient8}</h2>
                        <h2>${myMeal.strMeasure9} ${myMeal.strIngredient9}</h2>
                        <h2>${myMeal.strMeasure10} ${myMeal.strIngredient10}</h2>
                        <h2>${myMeal.strMeasure11} ${myMeal.strIngredient11}</h2>
                        <h2>${myMeal.strMeasure12} ${myMeal.strIngredient12}</h2>
                        <h2>${myMeal.strMeasure13} ${myMeal.strIngredient13}</h2>
                        <h2>${myMeal.strMeasure14} ${myMeal.strIngredient14}</h2>
                    </div>   
                </div>
                <div id="recipe">
                    <button id="hide-recipe">x</button>
                    <pre id="instructions">${myMeal.strInstructions}</pre>
                </div>
                <button id="show-recipe">View Recipe</button>
                `;
                let ingredientCon = document.getElementById("ingredient-con");
                let parent = document.createElement("ul");
                let recipe = document.getElementById("recipe");
                let hideRecipe = document.getElementById("hide-recipe");
                let showRecipe = document.getElementById("show-recipe");

                ingredients.forEach((i) => {
                    let child = document.createElement("li");
                    child.innerText = i;
                    parent.appendChild(child);
                    ingredientCon.appendChild(parent);
                });

                hideRecipe.addEventListener("click", () => {
                    recipe.style.display = "none";
                });
                showRecipe.addEventListener("click", () => {
                    recipe.style.display = "block";
                });
            }).catch(() =>{
                result.innerHTML = `<h3>Invalid Input</h3>`;
            });
    }

})

