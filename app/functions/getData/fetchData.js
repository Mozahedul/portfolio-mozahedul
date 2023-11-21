async function fetchServerData(uri) {
  const response = await fetch(uri);
  const data = response.ok && (await response.json());
  return data;
}

export default fetchServerData;
