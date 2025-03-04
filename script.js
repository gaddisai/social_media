let users=[]
function showLogin(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((data)=>displayUsers(data))
    .catch((error)=>console.log(error));
}
function displayUsers(data){
    let str=`
    <div class="container-fluid d-flex flex-column justify-content-center" style="height: 100vh;">
    <div class="row d-flex justify-content-end">
    <div class="card m-5" style="width: 450px;">
    <div class="card-body ">
    <h3 class="text-white mb-3">Login</h3>
    <select class="w-100 bg-black text-white p-2">
    <option vlaue=''>Select User</option>`;
    data.map((value)=>{
        str+=`<option value=${value.id}>${value.name}</option>`
    });
    str+=`</select>
    <div class="mt-4">
    <button class="btn btn-dark w-100">Log in</button>
    </div>
    </div>
    </div>
    </div>
    </div>`;
    
    root.innerHTML=str;
}