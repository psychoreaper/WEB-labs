export default async function getPokemonInfo(url) {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    let name = "<span><h3>Имя:</h3>" + data.name + "</span>";
    let abils = [];
    abils = "<span><p><h3>Способности: </h3></p>";

    //data.abilities.forEach(async (i) =>
    for (let i = 0; i < data.abilities.length; i++) {
      let [resp] = await Promise.all([fetch(data.abilities[i].ability.url)]);
      if (resp.ok) {
        let json2 = await resp.json();
        abils +=
          "<p><h4>Способность: " +
          json2.name +
          "</h4>" +
          json2.effect_entries[1].effect +
          "</p>";
      }
    }
    abils += "</span>";
    console.log(data.sprites);
    let images =
      "<span id='poke-img'><img src='" +
      data.sprites.front_default +
      "'><img src='" +
      data.sprites.back_default +
      "'></span>";
    document.getElementById("app").innerHTML =
      "<span id='poke-text'>" + name + abils + "</span>" + images;
  }
}
