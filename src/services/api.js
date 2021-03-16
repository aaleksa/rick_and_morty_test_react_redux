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
  // console.log('getListFilter',filter)
  const filtersString = filter.map((item) => {
    const type = Object.keys(item);
    const value =  item[type];
    const str = type + '=' + value;
    return str;
  });
  this.filtersString = filtersString.join('&');
  console.log('filtersString',this.filtersString)
  let json = {};
  const url = `${apiEndpoints.characters}?${this.filtersString}`;
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
  getListSelectedPage
}