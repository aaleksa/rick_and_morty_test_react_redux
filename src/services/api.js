
const API_URL = 'https://rickandmortyapi.com/api'
const apiEndpoints = {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode",
};
const apiFilter = {
  "characters": "https://rickandmortyapi.com/api/character/",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode",
};

async function getList() {
  // console.log('get list call json');

  let json = {};
  const url = `${apiEndpoints.characters}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    json = await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  console.log('json', json);
  return json;
}

async function getListFilter() {
  let json = {};
  const url = `${apiFilter.characters}/`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    json = await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  console.log('json', json);
  return json;
}

export default {
  getList,
  getListFilter,
}