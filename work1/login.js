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

function checkUserInfor(username,password){
    for(let i of userData){
        if(username == i.username){
            if(password == i.password){
                return window.location.replace("./index.html")
            }
        }
    }
    return window.alert("Your username or password is incorrect. Please try again.")
}

const login = document.getElementById("login");

login.addEventListener("click",(e)=>{
    e.preventDefault();
    const username_login = document.getElementById("username").value;
    const password_login = document.getElementById("password").value;
    checkUserInfor(username_login,password_login);
})

const username = document.getElementById("username");
username.addEventListener("input",(e)=>{
    for(let i of userData){
        if(document.getElementById("username").value == i.username){
            const pfp = document.getElementById("pfp");
            pfp.src = i.pfp;
            break
        }
        else{
            const pfp = document.getElementById("pfp");
            pfp.src = "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1";
        }
    }
})