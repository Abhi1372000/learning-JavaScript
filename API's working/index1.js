const request = new XMLHttpRequest(); // getting a API using XMLHttp Request

request.addEventListener("readystatechange", ()=>{
    
})

request.open('GET', 'http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5');

request.send();