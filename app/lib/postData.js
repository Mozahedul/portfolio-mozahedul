const postData = async (uri, data) => {
  const response = await fetch(uri, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  const info = response.ok && (await response.json());
  return info;
};

export default postData;
