
function getDetailes() {
  const id = new URLSearchParams(window.location.search).get("recipe_id");

  axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    .then(function (response) {
      const recipe = response.data.recipe;
      const { image_url, ingredients } = recipe;

      document.querySelector("img").src = image_url;

      const result = ingredients
        .map(function (ele) {
          return `
                  <li> ${ele} </li>
              `;
        })
        .join("");

      document.querySelector("ul").innerHTML = result;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getDetailes();
