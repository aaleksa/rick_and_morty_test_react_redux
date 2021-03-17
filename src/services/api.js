const API_URL = 'https://rickandmortyapi.com/api';
const apiEndpoints = {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode",
};

async function getList() {
  let json = {};
  const url = `${apiEndpoints.characters}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  if (response.ok) {
    json = await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  console.log('json', json);
  return json;
}


async function getMultipleList(arrayCard) {
  let json = {};
  const url = `${apiEndpoints.characters}/${arrayCard}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  if (response.ok) {
    json = await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  console.log('json', json);
  return json;
}

async function getListSelectedPage(event) {
  const numberPage = event.target.textContent;

  let json = {};
  const url = `${apiEndpoints.characters}/?page=${numberPage}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.ok) {
    json = await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  console.log('json', json);
  return json;
}

async function getListFilter(filter) {
  console.log('getListFilter',filter)

  let json = {};
  const url = `${apiEndpoints.characters}/?${filter}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });
  if (response.ok) {
    json = await response.json();

  } else {
    alert("Ошибка HTTP: " + response.status);
  }
  return json;
}

export default {
  getList,
  getListFilter,
  getListSelectedPage,
  getMultipleList,
}