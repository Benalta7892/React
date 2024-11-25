fetch("https://jsonplaceholder.typicode.com/userss")
  .then((response) => {
    // (Erreur client) 400 bad request, 401 unauthorized, 404 not found
    // (Erreur serveur) 500 internal server error, 503 service unavailable
    console.log(response);
    if (!response.ok) throw new Error(`"Erreur ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("SECOND THEN !!", data);
  })
  .catch((e) => {
    console.log(e);
  });
