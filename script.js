const addButton= document.querySelector('.add-button');
const formContainer= document.querySelector('form')
// form should appear after clicking add button

formContainer.style.display='none';
addButton.addEventListener('click',function(){
    if(formContainer.style.display==='none'){
    formContainer.style.display="flex";}
    else{
    formContainer.style.display='none';
    }
})
formContainer.addEventListener('submit',function(event){
    event.preventDefault();
const myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title=title,
  this.author=author,
  this.pages=pages,
  this.read=read
}
addBookToLibrary();

function addBookToLibrary() {
  // do stuff here
    const title= document.getElementById('title');
    const author=document.getElementById('author');
    const pages=document.getElementById('pages');
    const read=document.getElementById('read');
    if(read.checked){
       read.value='read';
    }
    else{
        read.value='unread';

    }
    const obj= new Book(title.value,author.value,pages.value,read.value);

    myLibrary.push(obj);
    clearForm(title,author,pages,read);
    displayBook();

    }

    //clear the form after clicking submit button
    function clearForm(title,author,pages,read){
        title.value="";
        author.value="";
        pages.value="";
        read.checked=false;
        read="";

    }
    // display the book in the table
    function displayBook(){
        const table=document.querySelector('table')
        myLibrary.forEach((element) => {
            const tr=document.createElement('tr');
          for(let key in element){
            const td=document.createElement('td');
            td.textContent=element[key];

            tr.append(td);
          }
    //delete the entry
          const actionTd = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add("delete");
                actionTd.append(deleteButton);
                tr.append(actionTd);
                table.append(tr);
                deleteButton.addEventListener('click',()=>{
                    table.removeChild(tr);
                })
        });    
    }


});

