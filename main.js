class TODO {
  constructor() {
    this.form = document.getElementById("form");
    this.list = document.getElementById("list");
    this.addtask = document.querySelector("form-control");
    this.inputFeedback = document.getElementById("input-feedback");
    this.todolist = [];
    this.count = this.todolist.length;
  }
  getinput() {
    if (this.inputFeedback !== "") {
      //create an empty todoitem and date objects
      const todoitem = {};
      const date = new Date();

      //populate todoitem oject
      todoitem.done = false;
      todoitem.id = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getTime()}`;
      todoitem.task = this.inputFeedback.value;

      /**
       * Add it to the DOM
       */
      this.todolist.unshift(todoitem);
      const item = document.createElement("LI");
      item.setAttribute("class", "list-item d-flex justify-content-between");
      item.setAttribute("id", `${todoitem.id}`);
      item.textContent = `${todoitem.task}`;

      //create check and delete icons
      const iconedit = document.createElement("I");
      iconedit.setAttribute("class", "fa fa-check mr-3 ");
      const iconedelete = document.createElement("I");
      iconedelete.setAttribute("class", "fa fa-trash m-auto");

      //create a div and add the icons
      const div = document.createElement("DIV");
      div.appendChild(iconedit);
      div.appendChild(iconedelete);
      div.setAttribute("class", "m-1 d-flex justify-content-center");

      //add the icons div to the list item generated
      item.appendChild(div);

      this.list.insertBefore(item, this.list.firstElementChild);
      this.inputFeedback.value = "";
      console.log(this.todolist);
    }
  }
  displaylist() {
    /**
     * create a list and populate items if any
     * show it on the dom
     * all new items should appear at the top of this list.
     */
    this.todolist.map(item => {
      const list = document.createElement("LI");
      list.setAttribute("class", "list-item");
      list.setAttribute("id", `${item.id}`);
      list.textContent = item.task;
      this.list.appendChild(list);
    });
  }
}

function eventlisteners() {
  const form = document.getElementById("form");

  const todo = new TODO();

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    todo.getinput();
  });
}

document.addEventListener("DOMContentLoaded", function() {
  eventlisteners();
  const todo = new TODO();
  if (todo.list.length === 0) {
    document.getElementById(
      "list"
    ).innerHTML = `<p>You are done for the day</p>`;
  } else {
    //display the list item the moment the page loads.
    todo.displaylist();
  }
});
