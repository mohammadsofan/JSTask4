
function getData() {

   axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
      .then(function (response) {
         const recipes = response.data.recipes;

         const result = recipes.map(function (ele) {
            return `
            <div class='child'>
               <img src='${ele.image_url}'/>
               <h2>${ele.title}</h2>
               <a href="details.html?recipe_id=${ele.recipe_id}">see details</a>
            </div>
         `;

         }).join('');

         document.querySelector('.parent').innerHTML = result;

      })
      .catch(function (error) {
         console.log(error);
      });
}

getData();