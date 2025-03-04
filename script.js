let users=[]
function showLogin(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((data)=>displayUsers(data))
    .catch((error)=>console.log(error));
}

function showUser(){
    let str=`<div>
    <div class="bg-primary d-flex flex-row p-2">
    <div class="col-6">
    <h3 class="text-white">Quick Connect</h3>
    </div>
    <div class="col-6 d-flex flex-row justify-content-end">
    <h3 class="text-white">Username</h3>
    </div>
    </div>
    <div class="d-flex flex-row">
    <div class="col-2">
    <div class="d-flex flex-column mt-5">
    <h4 class="p-2"><a href="#" class="p-2">Home</a></h4>
    <h4 class="p-2"><a href="#" class="p-2">Album</a></h4>
    <h4 class="p-2"><a href="#" class="p-2">Logout</a></h4>
    </div>
    </div>
    <div class="col-10">
    <div class="d-flex flex-row">
    <h1>My Posts</h1>
    </div>
    <div class="d-flex flex-row">
    <p>Title:</p>
    </div>
    </div>
    </div>
    </div>`;           
    root.innerHTML=str;
}
function displayUsers(data){
    let str=`
    <div class="container-fluid d-flex flex-column justify-content-center" style="height: 100vh;">
    <div class="row d-flex justify-content-end">
    <div class="card m-5" style="width: 450px;">
    <div class="card-body ">
    <h3 class="text-white mb-3">QuickConnect</h3>
    <select class="w-100 bg-black text-white p-2">
    <option vlaue=''>Select User</option>`;
    data.map((value)=>{
        str+=`<option value=${value.id}>${value.name}</option>`
    });
    str+=`</select>
    <div class="mt-4">
    <button class="btn btn-dark w-100" onclick="showUser()">Log in</button>
    </div>
    </div>
    </div>
    </div>
    </div>`;
    root.innerHTML=str;
}