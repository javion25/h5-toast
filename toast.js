function toast(text) {
    var divEl = document.createElement('div')
    var spanEl = document.createElement('span')
    spanEl.innerHTML = text
    divEl.className = 'toast'
    divEl.appendChild(spanEl)
    document.body.appendChild(divEl)
    setTimeout(function () {
        divEl.parentNode.removeChild(divEl)
    }, 3000)
  }
