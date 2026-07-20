function addBook() {

const tbody = document.querySelector("#booksTable tbody");

const tr = document.createElement("tr");

tr.innerHTML = `
<td><input type="text" placeholder="اسم الكتاب"></td>
<td><input type="number" value="1" min="1"></td>
<td><input type="text" placeholder="رقم حجز الكتاب"></td>
<td><button type="button" onclick="deleteBook(this)">❌</button></td>
`;

tbody.appendChild(tr);

}

function deleteBook(btn){

btn.closest("tr").remove();

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
function saveOrder(){

const order=document.getElementById("orderNo").value;
const name=document.getElementById("name").value;
const phone=document.getElementById("phone1").value;

const books=document.querySelectorAll("#booksTable tbody tr").length;

const tbody=document.querySelector("#ordersTable tbody");

const tr=document.createElement("tr");

tr.innerHTML=`
<td>${order}</td>
<td>${name}</td>
<td>${phone}</td>
<td>${books}</td>
<td><button type="button">فتح</button></td>
`;

tbody.appendChild(tr);

clearForm();

}
window.onload=function(){

addBook();

};
