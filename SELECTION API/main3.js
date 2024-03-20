function highlightSelection() {
  let selection = window.getSelection();
  if (selection.rangeCount > 0) {
    let range = selection.getRangeAt(0);
    let span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    range.surroundContents(span);
  }
}

function copySelection() {
  let selection = window.getSelection();
  if (selection.toString().length > 0) {
    document.execCommand('copy');
    console.log('Texto copiado al portapapeles.');
  }
}

function clearSelection() {
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE
    document.selection.empty();
  }
}




