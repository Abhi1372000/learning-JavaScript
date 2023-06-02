let pms1 = fetch("https://jsonplaceholder.typicode.com/todos/1");

pms1
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  })
  .then((value2) => console.log(value2));
