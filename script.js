var image= document.getElementById('img1')
var button= document.getElementById('nr1')
button.addEventListener('click', function () {
  image.src="download.jpeg"
  var node = document.createElement('li');
  node.appendChild(document.createTextNode('Mere'))
 
  document.querySelector('ul').appendChild(node)
})
var button= document.getElementById('nr2')
button.addEventListener('click', function () {
  image.src="download (1).jpeg"
  var node = document.createElement('li')
node.appendChild(document.createTextNode('pere'))
 
document.querySelector('ul').appendChild(node)
})
var button= document.getElementById('nr3')
button.addEventListener('click', function () {
  image.src="prune.jpeg"
  var node = document.createElement('li');
node.appendChild(document.createTextNode('prune'));
 
document.querySelector('ul').appendChild(node);
})
var button= document.getElementById('nr4')
button.addEventListener('click', function () {
  var list = document.getElementById('list')
  var lastChild = list.lastChild
  list.removeChild(lastChild)
  
})
