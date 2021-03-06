function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var message = document.createTextNode(inputValue);
  li.appendChild(message);
  document.getElementById("myOl").appendChild(li);
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  span.appendChild(deleteButton);
  deleteButton.innerHTML = "X";
  span.classList.add("close");
  li.appendChild(span);
  const close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.remove();
    };
  }
}

document.querySelector("ol").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
