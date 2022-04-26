var addEntryButton = document.querySelector('#add-entry-button');
var entryViewNodeList = document.querySelectorAll('.entry-view');

addEntryButton.addEventListener('click', function (event) {
  for (var i = 0; i < entryViewNodeList.length; i++) {
    if (entryViewNodeList[i].getAttribute('data-view') === 'entry-modal') {
      entryViewNodeList[i].classList.remove('hidden');
    }
  }
});
