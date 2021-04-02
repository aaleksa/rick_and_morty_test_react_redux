const API_URL = 'https://rickandmortyapi.com/api';
const apiEndpoints = {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode",
};

async function getList(nameList) {
  let json = {};
  const url = `${apiEndpoints[nameList]}`;
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
  // console.log('json', json);
  return json;
}


async function getMultipleList(nameList,arrayCard) {
  let json = {};
  const url = `${apiEndpoints[nameList]}/${arrayCard}`;
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

async function getListSelectedPage(strUrl) {
  let json = {};
  const url = `${apiEndpoints.characters}/?${strUrl}`;
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

async function getListFilter(nameList,filter) {
  // console.log('getListFilter',filter)

  let json = {};
  const url = `${apiEndpoints[nameList]}/?${filter}`;
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