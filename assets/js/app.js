const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');   //const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.text(); //agregado-> Data declarado para linea 12 (obtengo el JSON en un Objeto String)
  const dataOBJ = JSON.parse(data); //agregado-> data lo convierto en Objeto JSON para poder acceder a sus datos
  console.log(data); //Para ver el Objeto String

  console.log(response);//agregado ->test para ver que tiene la respuesta de la linea 9
  console.log(dataOBJ);//agregado ->test para ver el Objeto JSON
  console.log(dataOBJ['name'], dataOBJ["blog"], dataOBJ["location"]); //test para ver que trae

  $n.textContent = dataOBJ.name;      //$n.textContent = '${dataOBJ.name}';
  $b.textContent = dataOBJ.blog;      // $b.textContent = '${data.blog}';
  $l.textContent = dataOBJ.location;      // $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`  //faltó $
}

displayUser('stolinski').catch(handleError);

//referencia a Async Await: https://lenguajejs.com/javascript/asincronia/async-await/
//referencia a textContent: https://www.javascripttutorial.net/javascript-dom/javascript-textcontent/