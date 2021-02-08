const searchResult = () => {
    const searchInput = document.getElementById('searchbar').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(error=>{
            displayError(error)
        })
}
const displayError = () =>{
    const notFound=document.getElementById('noFound');
    notFound.innerText="Sorry! Your Foods Item Not Found OR You Can Try First Latter Search"  
}
const displayFood = mealFood => {
    const container = document.getElementById('container-div')
    mealFood.forEach(mealFood => {
        const mealList = mealFood.strMeal;
        const mealDiv = document.createElement('div');
        mealDiv.className = 'foodList-wrapper'
        const mealInfo = `
    <div class="card">
    <img onclick="displayDetails('${mealFood.idMeal}')" id="detail" src="${mealFood.strMealThumb}" class="card-img-top" alt="food Image">
    <div class="card-body">
        <h5 class="card-title">${mealList}</h5>
    </div>
    </div>      
      `;
        mealDiv.innerHTML = mealInfo;
        container.appendChild(mealDiv);
    });
};
const displayDetails = mealDetls => {
    const urlIno = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetls}`
    fetch(urlIno)
        .then(res => res.json())
        .then(data => rendarInfo(data.meals[0]))
}
const rendarInfo = foodIngrdns => {
    const divInfo = document.getElementById('detailsInfo');
    divInfo.innerHTML = `
 <div class="card" style="width: 25rem;">
<img src="${foodIngrdns.strMealThumb}" class="card-img-top" alt="food image">
<div class="card-body">
    <h3>${foodIngrdns.strMeal}</h3>
    <h4>Ingredients Lists</h4>
    <h6>${foodIngrdns.strIngredient1}</h6>
    <h6>${foodIngrdns.strIngredient2}</h6>
    <h6>${foodIngrdns.strIngredient3}</h6>
    <h6>${foodIngrdns.strIngredient4}</h6>
    <h6>${foodIngrdns.strIngredient5}</h6>
    <h6>${foodIngrdns.strIngredient6}</h6>
    <h6>${foodIngrdns.strIngredient7}</h6>
    <h6>${foodIngrdns.strIngredient8}</h6>
    <h6>${foodIngrdns.strIngredient8}</h6>
    <h6>${foodIngrdns.strIngredient9}</h6>
  
</div>
</div>
    `
}