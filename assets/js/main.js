$(function () {

  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  function navHeight() {
    var navHeight = document.querySelector('nav').offsetHeight
    $('.wrapper').css({
      "padding-top": navHeight + 'px'
    })
  }

  navHeight()

  window.addEventListener('resize', navHeight)
  window.addEventListener('orientationchange', navHeight)

  var majorVersion = document.createElement('p')
  majorVersion.classList.add('dropdown-item major-version')
  var dividerDiv = document.createElement('div')
  dividerDiv.classList.add('dropdown-divider')
  var minorVersion = document.createElement('a')
  minorVersion.classList.add('dropdown-item minor-version')
  var menuItems;
  (function () {
    fetch('/versions.json')
      .then(function (res) {
        res = res.json()
      }).then(function (data) {
        menuItems = data
      })
  })

  console.log(typeof menuItems, menuItems);

  // for each major in .json create
  //                   <p class='dropdown-item major-version'> major </p>
  //                  <div class="dropdown-divider" ></div>   
  // for each minor in major version create 
  //                           <a class='dropdown-item minor-version' href="/5/major/minor">5. major. minor</a>
  // append minor to major
  // append major to id(dopdown-menu-links)
  //  while (major.lopp.not.last) add( '<div class = "dropdown-divider" > < /div>')
  // 
})