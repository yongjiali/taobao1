;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-taocanyuliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M467.55681 466.111503m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z" fill="" ></path>' +
    '' +
    '<path d="M371.443896 466.111503m-27.460833 0a27.460833 27.460833 0 1 0 54.921665 0 27.460833 27.460833 0 1 0-54.921665 0Z" fill="" ></path>' +
    '' +
    '<path d="M275.330981 466.111503m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z" fill="" ></path>' +
    '' +
    '<path d="M838.278052 140.194778c-13.730416 0-25.292872 11.562456-25.292872 25.292872v598.357092c0 28.90614-23.124912 52.031052-52.031052 52.031052H256.54199c-28.90614 0-52.031052-23.124912-52.031051-52.031052V165.48765c0-13.730416-11.562456-25.292872-25.292873-25.292872s-25.292872 11.562456-25.292872 25.292872v598.357092c0 56.366972 46.249824 102.616796 102.616796 102.616796h504.412138c56.366972 0 102.616796-46.249824 102.616796-102.616796V165.48765c0-13.730416-11.562456-25.292872-25.292872-25.292872z" fill="" ></path>' +
    '' +
    '<path d="M739.274524 678.57163H273.885674c-13.730416 0-25.292872 11.562456-25.292872 25.292872s11.562456 25.292872 25.292872 25.292873h464.666196c13.730416 0 25.292872-11.562456 25.292872-25.292873s-10.839802-25.292872-24.570218-25.292872z" fill="" ></path>' +
    '' +
    '<path d="M248.592802 591.130558c0 13.730416 11.562456 25.292872 25.292872 25.292872h464.666196c13.730416 0 25.292872-11.562456 25.292872-25.292872s-11.562456-25.292872-25.292872-25.292873H273.885674c-13.730416 0-25.292872 11.562456-25.292872 25.292873z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)