if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
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
  if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  var menuItems;
  var latestVersions;
  (function () {
    fetch('/versions.json')
      .then(function (res) {
        return res.json()
      }).then(function (data) {
        menuItems = Object.assign({}, data.versions)
        latestVersions = Object.assign({}, data.latest)
      })
  })()

  setTimeout(function () {
      var allversions = document.getElementById('dropdown-menu-links')
      var majorVersion = document.createElement('p')
      majorVersion.classList.add('dropdown-item', 'major-version')
      var dividerDiv = document.createElement('div')
      dividerDiv.classList.add('dropdown-divider')
      var minorVersion = document.createElement('a')
      minorVersion.classList.add('dropdown-item', 'minor-version')
      // create array of major versions
      var menuItemsArray = Object.keys(menuItems).map(function (key) {
        return [Number(key), Object.keys(menuItems[key]).map(function (lastKey) {
          return Number(lastKey)
        })]
      })

      menuItemsArray.forEach(function (el) {
        majorVersion.innerHTML = el
        if (allversions) {
          allversions.appendChild(majorVersion)
        }

      })
      console.log('menuItemsArray', menuItemsArray, 'menu', allversions);
    },
    250);

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