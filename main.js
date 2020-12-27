let nameInput = document.getElementById('nameInput');
let urlInput = document.getElementById('urlInput');
let addButton = document.getElementById('addButton');
let xButton = document.getElementById('xButton');
let insideOfBookmark = document.getElementById('bookmarkBorder');
let popupOpenButton = document.getElementById('openPopup');
let outSideOfPopup = document.getElementById('outSideOfPopup');

var elements = [];
var click = true;

addButton.addEventListener('click', addBookmark);

xButton.addEventListener('click', closePopup);

popupOpenButton.addEventListener('click', openPopup);

window.onload = function () {
  if (JSON.parse(localStorage.getItem('MyBook') != null)) {
    elements = JSON.parse(localStorage.getItem('MyBook'));
    display();
  }
};

function addBookmark() {
  var bookmarkName = nameInput.value;
  var bookmarkUrl = urlInput.value;
  elements.push(bookmarkName);
  elements.push(bookmarkUrl);
  localStorage.setItem('MyBook', JSON.stringify(elements));
  urlInput.value = 'http://';
  nameInput.value = '';
  closePopup();
  display();
}

function delElements(index) {
  click = false;
  setTimeout((click = true), 99000);
  console.log(click);
  elements.splice(index, 2);
  localStorage.setItem('MyBook', JSON.stringify(elements));
  display();
}

function display() {
  if ((click = true)) {
    console.log('clicked');
    if (localStorage.getItem('MyBook') != null) {
      insideOfBookmark.innerHTML = '';
      insideOfBookmark.innerHTML +=
        '<div id="openPopup" onclick="openPopup()" class="bookmark">Add new +</div>';
      for (var i = 0; i < elements.length; i += 2) {
        insideOfBookmark.innerHTML +=
          '<a class="bookmark" href="' +
          elements[i + 1] +
          '">' +
          elements[i] +
          '<div class="xButton2" onclick="delElements(' +
          i +
          ')">X</div></a>';
      }
    }
  } else {
    console.log('over clicked');
  }
}

function openPopup() {
  document.querySelector('.popup').style.display = 'flex';
}

function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}
