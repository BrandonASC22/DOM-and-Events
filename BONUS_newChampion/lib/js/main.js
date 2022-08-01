let newDiv = document.createElement("div");

let main_container = document.getElementsByClassName("main_container")[0];

main_container.appendChild(newDiv);

newDiv.classList.add("champ_container", "pyke");

let newContent = document.createTextNode("Pyke, the bloodharbor ripper");

newDiv.style["background-image"] = "url(\"../../assets/pyke.jpg\")";

newDiv.style["color"] = "#92fdfe";
