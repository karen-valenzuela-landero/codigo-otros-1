const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');   //const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //
  console.log(data); 

  $n.textContent = data.name;      //$n.textContent = '${dataOBJ.name}';
  $b.textContent = data.blog;      // $b.textContent = '${data.blog}';
  $l.textContent = data.location;      // $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`  //faltó $
}

displayUser('stolinski').catch(handleError);

//referencia a Async Await: https://lenguajejs.com/javascript/asincronia/async-await/
//referencia a textContent: https://www.javascripttutorial.net/javascript-dom/javascript-textcontent/