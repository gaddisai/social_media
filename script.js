let userId;
let users=[]
function showLogin(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((data)=>displayUsers(data))
    .catch((error)=>console.log(error));
}
function showPosts(id){
    let str=""
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        data && data.map((value)=>{
            str+=`
            <div>
            <b>${value.title}</b>
            <p>${value.body}</p></div>
            `;
           });
        content.innerHTML=str;
    })
    .catch((err)=>console.log(err))
}

function showAlbums(id){
    let str=""
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        data && data.map((value)=>{
            str+=`
            <div>
            <b>${value.title}</b>
            </div>
            `;
        });
        content.innerHTML=str;
    })
    .catch((err)=>console.log(err))
}
function showProfile(id){
    let str=""
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
            str+=`
            <div>
            <tr>
                <td><b>Name:</b>    </td>
                <td>${data.name}</td>
            </tr><br>
            <tr>
                <td><b>username:</b>    </td>
                <td>${data.username}</td>
            </tr><br>
            <tr>
                <td><b>email:</b>      </td>
                <td>${data.email}</td>
            </tr><br>
            <tr>
                <td><b>phone:</b>   </td>
                <td>${data.phone}</td>
            </tr><br>
            <tr>
                <td><b>website:</b> </td>
                <td>${data.website}</td>
            </tr><br>
            <tr>    
                <td><b>company:</b> </td>
                <td>${data.company.name}</td>
            </tr><br>
            </div>
            `;
        content.innerHTML=str;
    })
    .catch((err)=>console.log(err))
}

function showUsername(username){
    let str = `<h3 class="text-white">${username}</h3>`;
    let user=document.getElementById('username');
    user.innerHTML=str;
}
function showTodo(id){
    let str=""
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        data && data.map((value)=>{
            str+=`
            <div>
            <input type="checkbox" ${value.completed && "checked"}><b>${value.title}</b><br>
            <b>${value.completed}</b>
            </div>
            `;
        });
        content.innerHTML=str;
    })
    .catch((err)=>console.log(err))
}


function showHome(){
    userId = selUser.value;
    let selectedUser = selUser.options[selUser.selectedIndex].text;
    let str = `<div>
    <div class="d-flex flex-row bg-primary p-2">
    <div class="col-6">
    <h3 class="text-white">Quick Connect</h3>
    </div>
    <div id="username" class="col-6 d-flex flex-row justify-content-end"></div>
    </div>
    <div class="d-flex flex-row">
    <div class="col-2">
    <div class="d-flex flex-column mt-5">
    <h4 class="p-2">
    <a href="#" class="p-2" onclick="showPosts(${userId})">Home</a>
    </h4>
    <h4 class="p-2">
    <a href="#" class="p-2" onclick="showAlbums(${userId})">Album</a>
    </h4>
    <h4 class="p-2">
    <a href="#" class="p-2" onclick="showProfile(${userId})">Profile</a>
    </h4>
    <h4 class="p-2">
    <a href="#" class="p-2" onclick="showTodo(${userId})">Todo</a>
    </h4>
    <h4 class="p-2">
    <a href="#" class="p-2" onclick="showLogin()">Logout</a>
    </h4>
    </div>
    </div>
    <div class="col-10" id="content"></div>
    </div>
    </div>
    `;           
    root.innerHTML = str;
    showPosts(userId);
    showUsername(selectedUser);
}

function displayUsers(data){
    let str=`
    <div class="container-fluid d-flex flex-column justify-content-center" style="height: 100vh;">
    <div class="row d-flex justify-content-end">
    <div class="card m-5" style="width: 450px;">
    <div class="card-body ">
    <h3 class="text-white mb-3">QuickConnect</h3>
    <select class="w-100 bg-black text-white p-2" id="selUser">
    <option value=''>Select User</option>`;
    data.map((value)=>{
        str+=`<option value=${value.id}>${value.name}</option>`
    });
    str+=`</select>
    <div class="mt-4">
    <button class="btn btn-dark w-100" onclick="showHome()">Log in</button>
    </div>
    </div>
    </div>
    </div>
    </div>`;
    root.innerHTML=str;
}