import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, 
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", 
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", 
        socialMediaPosition: "right", 
        twitter: null, 
        github: null,
        linkedin: null,
        instagram: null,
        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  // Si includeCover == false, mostrar cover vacío
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Construcción del HTML con condiciones para los datos y redes sociales
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>
        ${variables.name ? variables.name : "your name"} 
        ${variables.lastName ? variables.lastName : "your last name"}
      </h1>
      <h2>${variables.role ? variables.role : "role"}</h2>
      <h3>
        ${variables.city ? variables.city : "City"}, 
        ${variables.country ? variables.country : "Country"}
      </h3>
      <ul class="${
        variables.socialMediaPosition === "position-right"
          ? "position-right"
          : "position-left"
      }">
      <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
      <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
    </ul>
    </div>
  `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
