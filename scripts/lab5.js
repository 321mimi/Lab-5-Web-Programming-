// Lab5 - Working with the Document Object Model
// By Michelle Cantin

// 1. Add the following text to the element with id=”mainTitle”
// Learning about the Document Object Model
document.getElementById("mainTitle").innerHTML = "Learning about the Document Object Model";

// 2. Add the attribute to centre align the element with id=”mainTitle”
document.getElementById("mainTitle").setAttribute("align", "center");

// 3. Change the title attribute on the img tag with the following text
// JavaScript 1
document.getElementById("image1").setAttribute("title", "Javascript 1");

// 4. Add the attribute to right align the element with id=”image1”
document.getElementById("image1").setAttribute("align", "right");

// 5. Append the following text as a list item so it appears as the second item in the JavaScript Version History list
// 1.1 August 1996
var listItem = document.getElementById("list").childNodes[1];
var secondItemElement = document.createElement("li");
var secondItemText = document.createTextNode("1.1 August 1996");
secondItemElement.appendChild(secondItemText);
listItem.appendChild(secondItemElement);

// 6. Append the following text as a list item so it appears as the last item in the JavaScript Version History list
// 1.8.2 June 22, 2009
var list = document.getElementById("list");
var lastItemElement = document.createElement("li");
list.appendChild(lastItemElement);
var lastItemText = document.createTextNode("1.8.2 June 22, 2009");
lastItemElement.appendChild(lastItemText);

// 7. Change the list item that contains the text 1.6 November 9999 to now contain the
// text 1.6 November 2005
var replaceText = document.getElementsByTagName("li")[5];
replaceText.innerHTML = "1.6 November 2005";

// 8. Using the document.write method, display the number of li tags in the web page
var numberLi = document.getElementById("list").childElementCount;
var finalNumber = numberLi + 1;
document.write(finalNumber);
