fetch("https://jsonplaceholder.typicode.com/posts")
{
    method: "DELETE"
}
.then(response => response.json())
.then(data => console.log(data))