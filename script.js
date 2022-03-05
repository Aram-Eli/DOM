// var input = document.getElementById("userinput");
// var button = document.getElementById("enter");
// var ul = document.querySelector("ul");


// function inputLength() {
//     return input.value.length;
// }

// function createListElement() {
//     var div = document.createElement("div");
//     var li = document.createElement("li");
//     var delButton = document.createElement("button");
//     div.classList.add("wrapper");
//     ul.appendChild(div);
//     div.append(li, delButton);
//     li.classList.add("taskClass");
//     li.appendChild(document.createTextNode(input.value));
//     input.value = "";
//     delButton.classList.add("delClass");
//     delButton.innerHTML = 'Del';
// }

// function addListAfterClick() {
//         if (inputLength() > 0) {
//            createListElement();
//         }
//     }

// function addListAfterKeypress(event) {
//         if (inputLength() > 0 && event.keyCode === 13) {
//            createListElement();
//         }
//     }

// function doneTask(task) {
//     if (task.target.tagName === "LI"){
//         task.target.classList.toggle("done");
//     }
// }

// function deleteListElement(element) {
//     if (element.target.className === "delClass") {
//         element.target.parentElement.remove();
//     }
// }

// function handleUiClick (element) {
//     doneTask(element);
//     deleteListElement(element);
// }
    
// ul.addEventListener("click", handleUiClick);

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);


// var input = document.getElementById("userinput");
// var button = document.getElementById("enter");
// var ul = document.querySelector("ul");


// function inputLength() {
//     return input.value.length;
// }

// function createListElement() {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
// }

// function addListAfterClick() {
//         if (inputLength() > 0) {
//             createListElement();
//         }
//     }

// function addListAfterKeypress(event) {
//         if (inputLength() > 0 && event.keyCode === 13 ) {
//             createListElement();
//         }
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
        var div = document.createElement("div");
        var li = document.createElement("li");
        var delButton = document.createElement("button");
        div.classList.add("wrapper");
        li.classList.add("taskClass");
        ul.appendChild(div);
        div.append(li, delButton);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        delButton.classList.add("delClass");
        delButton.innerHTML = "Del";
}

function addListAfterClick() {
        if (inputLength() > 0) {
            createListElement();
        }
    }

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13 ) {
            createListElement();
        }
}

function doneTask(task) {
        if (task.target.tagName === "LI") {
            task.target.classList.toggle("done");
        }
}

function deleteListElement(element) {
    if (element.target.className === "delClass") {
        element.target.parentElement.remove();
    }
}

function handleUiClick(element) {
    doneTask(element);
    deleteListElement(element);
}



ul.addEventListener("click", handleUiClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// var input = document.getElementById("userinput");
// var button = document.getElementById("enter");
// var ul = document.querySelector("ul");
// var li = document.getElementsByTagName("li");


// function inputLength() {
//     return input.value.length;
// }

// function createListElement() {
//         var li = document.createElement("li");
//         var button = document.createElement("button");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         li.appendChild(button);
//         button.innerHTML = "delete";
//         input.value = "";

//         liEvent();
//         buttonListElement();
// }

// function addListAfterClick() {
//         if (inputLength() > 0) {
//             createListElement();
//         }
//     }

// function addListAfterKeypress(event) {
//         if (inputLength() > 0 && event.keyCode === 13 ) {
//             createListElement();
//         }
// }

// function liEvent() {
//     for (i = 0; i < li.length; i++) {
//         li[i].addEventListener("click", changeClass)
//     }
// }

// function changeClass() {
//     this.classList.toggle("done");
// }

// function buttonListElement() {
//     var button = document.querySelectorAll("li button");
//     for( i = 0; i < button.length; i++ ) {
//         button[i].addEventListener("click", clearElement)
//     }
// }

// function clearElement() {
//     for ( i = 0; i < li.length; i++ ) {
//         this.parentNode.remove()
//     }
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

// liEvent();
// buttonListElement();

