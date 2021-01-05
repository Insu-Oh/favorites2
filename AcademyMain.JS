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
  if (JSON.parse(localStorage.getItem('AcademyLink') != null)) {
    elements = JSON.parse(localStorage.getItem('AcademyLink'));
    display();
  }
};

// Index Bookmark
function addBookmark() {
  var bookmarkName = nameInput.value;
  var bookmarkUrl = urlInput.value;
  elements.push(bookmarkName);
  elements.push(bookmarkUrl);
  localStorage.setItem('AcademyLink', JSON.stringify(elements));
  urlInput.value = 'http://';
  nameInput.value = '';
  closePopup();
  display();
}

function delElements(index) {
  click = false;
  console.log(click);
  elements.splice(index, 2);
  localStorage.setItem('AcademyLink', JSON.stringify(elements));
  display();
}

function display() {
  if ((click = true)) {
    console.log('clicked');
    if (localStorage.getItem('AcademyLink') != null) {
      insideOfBookmark.innerHTML = '';
      insideOfBookmark.innerHTML +=
        '<div id="openPopup" class="bookmark" onclick="openPopup()">Add new +</div>';
      for (var i = 0; i < elements.length; i += 2) {
        insideOfBookmark.innerHTML +=
          '<div class="bookmark"><a class="" href="' +
          elements[i + 1] +
          '">' +
          elements[i] +
          '</a><div class="xButton2" onclick="delElements(' +
          i +
          ')">X</div></div>';
      }
    }
  } else {
    console.log('over clicked');
  }
}
//end of index bookmark

function openPopup() {
  document.querySelector('.popup').style.display = 'flex';
}

function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}
