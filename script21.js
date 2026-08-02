//put
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "put",
    headers:{
        "content-Type" : "application/json"
    },
    body:JSON.stringify({
        title:"my updated post",
        body:"hello world",
        userId:1
    })

    })
.then(response =>response.json())
.then(data => console.log(data));