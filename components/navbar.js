function navbar(){
    return `
    <div class="navbar">
    <div id="home"><a href="index.html">Home</a></div>
    <div id="Search_Bar"> 
    
        <input type="text" placeholder="Search Recepie" id="Search_Recepie">
    </div>
    <div id="Latest_Recipes"><a href="latestRecipe.html">Latest Recipes</a></div>
    <div id="Recipes_of_the_Day"><a href="RecipeOfDay.html">Recipes of the Day</a></div>

</div>`
}
export default navbar;
