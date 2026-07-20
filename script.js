let books = [];

function addBook() {

const table = document.querySelector("#booksTable tbody");

const row = document.createElement("tr");

row.innerHTML = `
<td><input type="text" placeholder="اسم الكتاب"></td>

<td><input type="number" value="1" min="1"></td>

<td><input type="text" placeholder="رقم الحجز"></td>

<td>
<button onclick="deleteBook(this)">
❌
</button>
</td>
`;

table.appendChild(row);

}

function deleteBook(btn){

btn.parentElement.parentElement.remove();

}
function saveOrder(){

let name=document.getElementById("name").value;

let phone=document.getElementById("phone1").value;

let order=document.getElementById("orderNo").value;

let books=document.querySelectorAll("#booksTable tbody tr").length;

let table=document.querySelector("#ordersTable tbody");

let row=document.createElement("tr");

row.innerHTML=`

<td>${order}</td>

<td>${name}</td>

<td>${phone}</td>

<td>${books}</td>

<td><button onclick="loadOrder(this)">فتح</button></td>

`;

table.appendChild(row);

clearForm();



window.onload=function(){

addBook();

}
function clearForm(){

document.getElementById("orderNo").value="";

document.getElementById("name").value="";

document.getElementById("phone1").value="";

document.getElementById("phone2").value="";

document.getElementById("address").value="";

document.querySelector("#booksTable tbody").innerHTML="";

addBook();

}

function loadOrder(btn){

alert("سيتم فتح الطلب في الخطوة القادمة");

}
