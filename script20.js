fetch("https://jsonplaceholder.typicode.com/users/1",{
  method: "PUT",
  headers:{
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    name: "Muskan",
    email: "muskan@gmail.com",
    username: "muskan123"
  })
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
});