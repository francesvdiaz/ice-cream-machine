window.addEventListener("load", function() {
  const button = document.getElementById("enter")

  button.addEventListener("click", function(event){
    event.preventDefault();

    let flav1 = document.getElementById("input1").value;
    let flav2 = document.getElementById("input2").value;
    let flav3 = document.getElementById("input3").value;

    const favArray = [flav1,flav2,flav3];
    
    const list = document.createElement("ul");
    body = document.querySelector("body");
    body.append(list);

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    favArray.forEach(function (element) {
      li = document.createElement("li");
      li.append(element);
      list.append(li);
  });
});
});