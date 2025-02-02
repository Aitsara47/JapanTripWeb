let userData = [
    {
        username : "Aitsara",
        password : "zxcv",
        email : "Aitsara@gmail.com",
        pfp : "https://cdn-images.dzcdn.net/images/artist/2111b314d9e5ced4f9808305e3f54421/1900x1900-000000-80-0-0.jpg"
    },
    {
        username : "John",
        password : "0000",
        email : "john000@gmail.com",
        pfp : "https://m.media-amazon.com/images/M/MV5BN2VmNDI3OWUtMGEyYS00Njg5LTlkNDUtOTI1MDk5MjdmYmExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
]

const submit = document.getElementById("submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    userData.push({
        username : username,
        password : password,
        email : email
    })
    window.location.replace("./login.html");
})



