// // Arrow function to fetch users
// const fetchUsers = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json()) // convert response to JSON
//         .then(data => {
//             console.log("Users data:", data); // print the data
//         })
//         .catch(error => console.error("Error fetching users:", error));
// }

// // Call the function
// fetchUsers();


const fetchUsers = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(response => response.map(user => console.log(user.name)))
    .catch(err => console.log(err))
}

fetchUsers()