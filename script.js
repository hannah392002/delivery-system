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

alert("سيتم إضافة الحفظ الكامل في الجزء القادم");

}

window.onload=function(){

addBook();

}
