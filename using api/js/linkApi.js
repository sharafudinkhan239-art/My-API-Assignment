console.log("Start");
fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>
    response.json())
    .then(data => {

        let output = "";

        data.forEach(user => {
            output += `
            <h2>${user.name}
            </h2>
                <p>Email : ${user.email}</p>
                <p>Phone : ${user.phone}</P>
                <hr>
                `;
        });

        document.getElementById("users").innerHTML = output;
    })
    .catch(error => {
        console.log("Error;",error);
    });