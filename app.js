var getUI=document.getElementById('ul')


function addTodo(){

var getinp=document.getElementById('inp')
var li=document.createElement('li')
var litext=document.createTextNode(getinp.value)
li.appendChild(litext)
getUI.appendChild(li)
getinp.value=''


var del=document.createElement('button')
var delText=document.createTextNode
('DELETE')
del.appendChild(delText)
li.appendChild(del)
del.setAttribute('onclick','delFunc(this)')
var editBtn=document.createElement('button')
var editBtnText=document.createTextNode('Edit')
editBtn.appendChild(editBtnText)
li.appendChild(editBtn)
editBtn.setAttribute('onclick' , 'editfunc(this)'  )

}

function deleteAll(){

getUI.innerHTML=''


}

function delFunc(e){


    e.parentNode.remove()
}


/*var inputEl = document.getElementById("todo-input");
var ulEl = document.getElementById("todo-container");

function onTodoAdd() {
  var text = inputEl.value;

  var ulEl = document.createElement("ul");
  var ulTextNode = document.createTextNode(text);

  var editButtonEl = document.createElement("button");
  var deleteButtonEl = document.createElement("button");

  editButtonEl.setAttribute("onclick", "onEdit(this)");
  deleteButtonEl.setAttribute("onclick", "onDelete(this)");

  var editTextNode = document.createTextNode("Edit");
  var deleteTextNode = document.createTextNode("Delete");

  editButtonEl.appendChild(editTextNode);
  deleteButtonEl.appendChild(deleteTextNode);

  ulEl.appendChild(ulTextNode);
  ulEl.appendChild(editButtonEl);
  ulEl.appendChild(deleteButtonEl);

  ulEl.appendChild(ulEl);

  inputEl.value = "";
}

function onDeleteAll() {
  ulEl.innerHTML = "";
}

function onDelete(buttonEl) {
  buttonEl.parentNode.remove();
}

function Edit(buttonEl) 
{
  var newText = prompt(
    "Enter the new text",
    buttonEl.parentNode.firstChild.textContent
  );
  buttonEl.parentNode.firstChild.textContent = newText;
}*/


 function  editfunc(e){

var user=prompt(  'Enter Edit value' , e.parentNode. firstChild . nodeValue)
e.parentNode.firstChild.nodeValue=user
console.log( e.parentNode.firstChild)

 }







