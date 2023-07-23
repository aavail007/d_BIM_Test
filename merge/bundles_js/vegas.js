!function(n, t) {
  "function" == typeof define && define.amd ? define(function() {
      return t(n)
  }) : t(n)
}(this, function(n) {
  var t = function() {
      function y(n) {
          return null == n ? String(n) : st[li.call(n)] || "object"
      }
      function h(n) {
          return "function" == y(n)
      }
      function k(n) {
          return null != n && n == n.window
      }
      function tt(n) {
          return null != n && n.nodeType == n.DOCUMENT_NODE
      }
      function a(n) {
          return "object" == y(n)
      }
      function p(n) {
          return a(n) && !k(n) && Object.getPrototypeOf(n) == Object.prototype
      }
      function it(n) {
          var i = !!n && "length"in n && n.length
            , r = t.type(n);
          return "function" != r && !k(n) && ("array" == r || 0 === i || "number" == typeof i && i > 0 && i - 1 in n)
      }
      function ni(n) {
          return b.call(n, function(n) {
              return null != n
          })
      }
      function ti(n) {
          return n.length > 0 ? t.fn.concat.apply([], n) : n
      }
      function w(n) {
          return n.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
      }
      function ht(n) {
          return n in ft ? ft[n] : ft[n] = new RegExp("(^|\\s)" + n + "(\\s|$)")
      }
      function ct(n, t) {
          return "number" != typeof t || ui[w(n)] ? t : t + "px"
      }
      function ii(n) {
          var t, i;
          return ut[n] || (t = u.createElement(n),
          u.body.appendChild(t),
          i = getComputedStyle(t, "").getPropertyValue("display"),
          t.parentNode.removeChild(t),
          "none" == i && (i = "block"),
          ut[n] = i),
          ut[n]
      }
      function lt(n) {
          return "children"in n ? c.call(n.children) : t.map(n.childNodes, function(n) {
              if (1 == n.nodeType)
                  return n
          })
      }
      function at(n, t) {
          for (var r = n ? n.length : 0, i = 0; r > i; i++)
              this[i] = n[i];
          this.length = r;
          this.selector = t || ""
      }
      function vt(n, t, i) {
          for (r in t)
              i && (p(t[r]) || v(t[r])) ? (p(t[r]) && !p(n[r]) && (n[r] = {}),
              v(t[r]) && !v(n[r]) && (n[r] = []),
              vt(n[r], t[r], i)) : t[r] !== f && (n[r] = t[r])
      }
      function d(n, i) {
          return null == i ? t(n) : t(n).filter(i)
      }
      function o(n, t, i, r) {
          return h(t) ? t.call(n, i, r) : t
      }
      function rt(n, t, i) {
          null == i ? n.removeAttribute(t) : n.setAttribute(t, i)
      }
      function l(n, t) {
          var i = n.className || ""
            , r = i && i.baseVal !== f;
          return t === f ? r ? i.baseVal : i : void (r ? i.baseVal = t : n.className = t)
      }
      function yt(n) {
          try {
              return n ? "true" == n || ("false" == n ? !1 : "null" == n ? null : +n + "" == n ? +n : /^[\[\{]/.test(n) ? t.parseJSON(n) : n) : n
          } catch (i) {
              return n
          }
      }
      function pt(n, t) {
          t(n);
          for (var i = 0, r = n.childNodes.length; r > i; i++)
              pt(n.childNodes[i], t)
      }
      var f, r, t, s, g, nt, e = [], ri = e.concat, b = e.filter, c = e.slice, u = n.document, ut = {}, ft = {}, ui = {
          "column-count": 1,
          columns: 1,
          "font-weight": 1,
          "line-height": 1,
          opacity: 1,
          "z-index": 1,
          zoom: 1
      }, et = /^\s*<(\w+|!)[^>]*>/, fi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ei = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, wt = /^(?:body|html)$/i, oi = /([A-Z])/g, si = ["val", "css", "html", "text", "data", "width", "height", "offset"], ot = u.createElement("table"), bt = u.createElement("tr"), kt = {
          tr: u.createElement("tbody"),
          tbody: ot,
          thead: ot,
          tfoot: ot,
          td: bt,
          th: bt,
          "*": u.createElement("div")
      }, hi = /complete|loaded|interactive/, ci = /^[\w-]*$/, st = {}, li = st.toString, i = {}, dt = u.createElement("div"), gt = {
          tabindex: "tabIndex",
          readonly: "readOnly",
          "for": "htmlFor",
          "class": "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable"
      }, v = Array.isArray || function(n) {
          return n instanceof Array
      }
      ;
      return i.matches = function(n, t) {
          var u, e, r, f;
          return !t || !n || 1 !== n.nodeType ? !1 : (u = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.matchesSelector,
          u) ? u.call(n, t) : (r = n.parentNode,
          f = !r,
          f && (r = dt).appendChild(n),
          e = ~i.qsa(r, t).indexOf(n),
          f && dt.removeChild(n),
          e)
      }
      ,
      g = function(n) {
          return n.replace(/-+(.)?/g, function(n, t) {
              return t ? t.toUpperCase() : ""
          })
      }
      ,
      nt = function(n) {
          return b.call(n, function(t, i) {
              return n.indexOf(t) == i
          })
      }
      ,
      i.fragment = function(n, i, r) {
          var e, s, o;
          return fi.test(n) && (e = t(u.createElement(RegExp.$1))),
          e || (n.replace && (n = n.replace(ei, "<$1><\/$2>")),
          i === f && (i = et.test(n) && RegExp.$1),
          i in kt || (i = "*"),
          o = kt[i],
          o.innerHTML = "" + n,
          e = t.each(c.call(o.childNodes), function() {
              o.removeChild(this)
          })),
          p(r) && (s = t(e),
          t.each(r, function(n, t) {
              si.indexOf(n) > -1 ? s[n](t) : s.attr(n, t)
          })),
          e
      }
      ,
      i.Z = function(n, t) {
          return new at(n,t)
      }
      ,
      i.isZ = function(n) {
          return n instanceof i.Z
      }
      ,
      i.init = function(n, r) {
          var e;
          if (!n)
              return i.Z();
          if ("string" == typeof n)
              if (n = n.trim(),
              "<" == n[0] && et.test(n))
                  e = i.fragment(n, RegExp.$1, r),
                  n = null;
              else {
                  if (r !== f)
                      return t(r).find(n);
                  e = i.qsa(u, n)
              }
          else {
              if (h(n))
                  return t(u).ready(n);
              if (i.isZ(n))
                  return n;
              if (v(n))
                  e = ni(n);
              else if (a(n))
                  e = [n],
                  n = null;
              else if (et.test(n))
                  e = i.fragment(n.trim(), RegExp.$1, r),
                  n = null;
              else {
                  if (r !== f)
                      return t(r).find(n);
                  e = i.qsa(u, n)
              }
          }
          return i.Z(e, n)
      }
      ,
      t = function(n, t) {
          return i.init(n, t)
      }
      ,
      t.extend = function(n) {
          var t, i = c.call(arguments, 1);
          return "boolean" == typeof n && (t = n,
          n = i.shift()),
          i.forEach(function(i) {
              vt(n, i, t)
          }),
          n
      }
      ,
      i.qsa = function(n, t) {
          var u, i = "#" == t[0], f = !i && "." == t[0], r = i || f ? t.slice(1) : t, e = ci.test(r);
          return n.getElementById && e && i ? (u = n.getElementById(r)) ? [u] : [] : 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType ? [] : c.call(e && !i && n.getElementsByClassName ? f ? n.getElementsByClassName(r) : n.getElementsByTagName(t) : n.querySelectorAll(t))
      }
      ,
      t.contains = u.documentElement.contains ? function(n, t) {
          return n !== t && n.contains(t)
      }
      : function(n, t) {
          for (; t && (t = t.parentNode); )
              if (t === n)
                  return !0;
          return !1
      }
      ,
      t.type = y,
      t.isFunction = h,
      t.isWindow = k,
      t.isArray = v,
      t.isPlainObject = p,
      t.isEmptyObject = function(n) {
          var t;
          for (t in n)
              return !1;
          return !0
      }
      ,
      t.isNumeric = function(n) {
          var t = Number(n)
            , i = typeof n;
          return null != n && "boolean" != i && ("string" != i || n.length) && !isNaN(t) && isFinite(t) || !1
      }
      ,
      t.inArray = function(n, t, i) {
          return e.indexOf.call(t, n, i)
      }
      ,
      t.camelCase = g,
      t.trim = function(n) {
          return null == n ? "" : String.prototype.trim.call(n)
      }
      ,
      t.uuid = 0,
      t.support = {},
      t.expr = {},
      t.noop = function() {}
      ,
      t.map = function(n, t) {
          var i, r, u, f = [];
          if (it(n))
              for (r = 0; r < n.length; r++)
                  i = t(n[r], r),
                  null != i && f.push(i);
          else
              for (u in n)
                  i = t(n[u], u),
                  null != i && f.push(i);
          return ti(f)
      }
      ,
      t.each = function(n, t) {
          var i, r;
          if (it(n)) {
              for (i = 0; i < n.length; i++)
                  if (t.call(n[i], i, n[i]) === !1)
                      return n
          } else
              for (r in n)
                  if (t.call(n[r], r, n[r]) === !1)
                      return n;
          return n
      }
      ,
      t.grep = function(n, t) {
          return b.call(n, t)
      }
      ,
      n.JSON && (t.parseJSON = JSON.parse),
      t.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
          st["[object " + t + "]"] = t.toLowerCase()
      }),
      t.fn = {
          constructor: i.Z,
          length: 0,
          forEach: e.forEach,
          reduce: e.reduce,
          push: e.push,
          sort: e.sort,
          splice: e.splice,
          indexOf: e.indexOf,
          concat: function() {
              for (var t, r = [], n = 0; n < arguments.length; n++)
                  t = arguments[n],
                  r[n] = i.isZ(t) ? t.toArray() : t;
              return ri.apply(i.isZ(this) ? this.toArray() : this, r)
          },
          map: function(n) {
              return t(t.map(this, function(t, i) {
                  return n.call(t, i, t)
              }))
          },
          slice: function() {
              return t(c.apply(this, arguments))
          },
          ready: function(n) {
              return hi.test(u.readyState) && u.body ? n(t) : u.addEventListener("DOMContentLoaded", function() {
                  n(t)
              }, !1),
              this
          },
          get: function(n) {
              return n === f ? c.call(this) : this[n >= 0 ? n : n + this.length]
          },
          toArray: function() {
              return this.get()
          },
          size: function() {
              return this.length
          },
          remove: function() {
              return this.each(function() {
                  null != this.parentNode && this.parentNode.removeChild(this)
              })
          },
          each: function(n) {
              return e.every.call(this, function(t, i) {
                  return n.call(t, i, t) !== !1
              }),
              this
          },
          filter: function(n) {
              return h(n) ? this.not(this.not(n)) : t(b.call(this, function(t) {
                  return i.matches(t, n)
              }))
          },
          add: function(n, i) {
              return t(nt(this.concat(t(n, i))))
          },
          is: function(n) {
              return this.length > 0 && i.matches(this[0], n)
          },
          not: function(n) {
              var i = [], r;
              return h(n) && n.call !== f ? this.each(function(t) {
                  n.call(this, t) || i.push(this)
              }) : (r = "string" == typeof n ? this.filter(n) : it(n) && h(n.item) ? c.call(n) : t(n),
              this.forEach(function(n) {
                  r.indexOf(n) < 0 && i.push(n)
              })),
              t(i)
          },
          has: function(n) {
              return this.filter(function() {
                  return a(n) ? t.contains(this, n) : t(this).find(n).size()
              })
          },
          eq: function(n) {
              return -1 === n ? this.slice(n) : this.slice(n, +n + 1)
          },
          first: function() {
              var n = this[0];
              return n && !a(n) ? n : t(n)
          },
          last: function() {
              var n = this[this.length - 1];
              return n && !a(n) ? n : t(n)
          },
          find: function(n) {
              var r = this;
              return n ? "object" == typeof n ? t(n).filter(function() {
                  var n = this;
                  return e.some.call(r, function(i) {
                      return t.contains(i, n)
                  })
              }) : 1 == this.length ? t(i.qsa(this[0], n)) : this.map(function() {
                  return i.qsa(this, n)
              }) : t()
          },
          closest: function(n, r) {
              var u = []
                , f = "object" == typeof n && t(n);
              return this.each(function(t, e) {
                  for (; e && !(f ? f.indexOf(e) >= 0 : i.matches(e, n)); )
                      e = e !== r && !tt(e) && e.parentNode;
                  e && u.indexOf(e) < 0 && u.push(e)
              }),
              t(u)
          },
          parents: function(n) {
              for (var i = [], r = this; r.length > 0; )
                  r = t.map(r, function(n) {
                      if ((n = n.parentNode) && !tt(n) && i.indexOf(n) < 0)
                          return (i.push(n),
                          n)
                  });
              return d(i, n)
          },
          parent: function(n) {
              return d(nt(this.pluck("parentNode")), n)
          },
          children: function(n) {
              return d(this.map(function() {
                  return lt(this)
              }), n)
          },
          contents: function() {
              return this.map(function() {
                  return this.contentDocument || c.call(this.childNodes)
              })
          },
          siblings: function(n) {
              return d(this.map(function(n, t) {
                  return b.call(lt(t.parentNode), function(n) {
                      return n !== t
                  })
              }), n)
          },
          empty: function() {
              return this.each(function() {
                  this.innerHTML = ""
              })
          },
          pluck: function(n) {
              return t.map(this, function(t) {
                  return t[n]
              })
          },
          show: function() {
              return this.each(function() {
                  "none" == this.style.display && (this.style.display = "");
                  "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = ii(this.nodeName))
              })
          },
          replaceWith: function(n) {
              return this.before(n).remove()
          },
          wrap: function(n) {
              var r = h(n), i, u;
              return this[0] && !r && (i = t(n).get(0),
              u = i.parentNode || this.length > 1),
              this.each(function(f) {
                  t(this).wrapAll(r ? n.call(this, f) : u ? i.cloneNode(!0) : i)
              })
          },
          wrapAll: function(n) {
              if (this[0]) {
                  t(this[0]).before(n = t(n));
                  for (var i; (i = n.children()).length; )
                      n = i.first();
                  t(n).append(this)
              }
              return this
          },
          wrapInner: function(n) {
              var i = h(n);
              return this.each(function(r) {
                  var u = t(this)
                    , f = u.contents()
                    , e = i ? n.call(this, r) : n;
                  f.length ? f.wrapAll(e) : u.append(e)
              })
          },
          unwrap: function() {
              return this.parent().each(function() {
                  t(this).replaceWith(t(this).children())
              }),
              this
          },
          clone: function() {
              return this.map(function() {
                  return this.cloneNode(!0)
              })
          },
          hide: function() {
              return this.css("display", "none")
          },
          toggle: function(n) {
              return this.each(function() {
                  var i = t(this);
                  (n === f ? "none" == i.css("display") : n) ? i.show() : i.hide()
              })
          },
          prev: function(n) {
              return t(this.pluck("previousElementSibling")).filter(n || "*")
          },
          next: function(n) {
              return t(this.pluck("nextElementSibling")).filter(n || "*")
          },
          html: function(n) {
              return 0 in arguments ? this.each(function(i) {
                  var r = this.innerHTML;
                  t(this).empty().append(o(this, n, i, r))
              }) : 0 in this ? this[0].innerHTML : null
          },
          text: function(n) {
              return 0 in arguments ? this.each(function(t) {
                  var i = o(this, n, t, this.textContent);
                  this.textContent = null == i ? "" : "" + i
              }) : 0 in this ? this.pluck("textContent").join("") : null
          },
          attr: function(n, t) {
              var i;
              return "string" != typeof n || 1 in arguments ? this.each(function(i) {
                  if (1 === this.nodeType)
                      if (a(n))
                          for (r in n)
                              rt(this, r, n[r]);
                      else
                          rt(this, n, o(this, t, i, this.getAttribute(n)))
              }) : 0 in this && 1 == this[0].nodeType && null != (i = this[0].getAttribute(n)) ? i : f
          },
          removeAttr: function(n) {
              return this.each(function() {
                  1 === this.nodeType && n.split(" ").forEach(function(n) {
                      rt(this, n)
                  }, this)
              })
          },
          prop: function(n, t) {
              return n = gt[n] || n,
              1 in arguments ? this.each(function(i) {
                  this[n] = o(this, t, i, this[n])
              }) : this[0] && this[0][n]
          },
          removeProp: function(n) {
              return n = gt[n] || n,
              this.each(function() {
                  delete this[n]
              })
          },
          data: function(n, t) {
              var i = "data-" + n.replace(oi, "-$1").toLowerCase()
                , r = 1 in arguments ? this.attr(i, t) : this.attr(i);
              return null !== r ? yt(r) : f
          },
          val: function(n) {
              return 0 in arguments ? (null == n && (n = ""),
              this.each(function(t) {
                  this.value = o(this, n, t, this.value)
              })) : this[0] && (this[0].multiple ? t(this[0]).find("option").filter(function() {
                  return this.selected
              }).pluck("value") : this[0].value)
          },
          offset: function(i) {
              if (i)
                  return this.each(function(n) {
                      var r = t(this)
                        , u = o(this, i, n, r.offset())
                        , f = r.offsetParent().offset()
                        , e = {
                          top: u.top - f.top,
                          left: u.left - f.left
                      };
                      "static" == r.css("position") && (e.position = "relative");
                      r.css(e)
                  });
              if (!this.length)
                  return null;
              if (u.documentElement !== this[0] && !t.contains(u.documentElement, this[0]))
                  return {
                      top: 0,
                      left: 0
                  };
              var r = this[0].getBoundingClientRect();
              return {
                  left: r.left + n.pageXOffset,
                  top: r.top + n.pageYOffset,
                  width: Math.round(r.width),
                  height: Math.round(r.height)
              }
          },
          css: function(n, i) {
              var u, e, o, f;
              if (arguments.length < 2) {
                  if (u = this[0],
                  "string" == typeof n)
                      return u ? u.style[g(n)] || getComputedStyle(u, "").getPropertyValue(n) : void 0;
                  if (v(n))
                      return u ? (e = {},
                      o = getComputedStyle(u, ""),
                      t.each(n, function(n, t) {
                          e[t] = u.style[g(t)] || o.getPropertyValue(t)
                      }),
                      e) : void 0
              }
              if (f = "",
              "string" == y(n))
                  i || 0 === i ? f = w(n) + ":" + ct(n, i) : this.each(function() {
                      this.style.removeProperty(w(n))
                  });
              else
                  for (r in n)
                      n[r] || 0 === n[r] ? f += w(r) + ":" + ct(r, n[r]) + ";" : this.each(function() {
                          this.style.removeProperty(w(r))
                      });
              return this.each(function() {
                  this.style.cssText += ";" + f
              })
          },
          index: function(n) {
              return n ? this.indexOf(t(n)[0]) : this.parent().children().indexOf(this[0])
          },
          hasClass: function(n) {
              return n ? e.some.call(this, function(n) {
                  return this.test(l(n))
              }, ht(n)) : !1
          },
          addClass: function(n) {
              return n ? this.each(function(i) {
                  if ("className"in this) {
                      s = [];
                      var r = l(this)
                        , u = o(this, n, i, r);
                      u.split(/\s+/g).forEach(function(n) {
                          t(this).hasClass(n) || s.push(n)
                      }, this);
                      s.length && l(this, r + (r ? " " : "") + s.join(" "))
                  }
              }) : this
          },
          removeClass: function(n) {
              return this.each(function(t) {
                  if ("className"in this) {
                      if (n === f)
                          return l(this, "");
                      s = l(this);
                      o(this, n, t, s).split(/\s+/g).forEach(function(n) {
                          s = s.replace(ht(n), " ")
                      });
                      l(this, s.trim())
                  }
              })
          },
          toggleClass: function(n, i) {
              return n ? this.each(function(r) {
                  var u = t(this)
                    , e = o(this, n, r, l(this));
                  e.split(/\s+/g).forEach(function(n) {
                      (i === f ? !u.hasClass(n) : i) ? u.addClass(n) : u.removeClass(n)
                  })
              }) : this
          },
          scrollTop: function(n) {
              if (this.length) {
                  var t = "scrollTop"in this[0];
                  return n === f ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                      this.scrollTop = n
                  }
                  : function() {
                      this.scrollTo(this.scrollX, n)
                  }
                  )
              }
          },
          scrollLeft: function(n) {
              if (this.length) {
                  var t = "scrollLeft"in this[0];
                  return n === f ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                      this.scrollLeft = n
                  }
                  : function() {
                      this.scrollTo(n, this.scrollY)
                  }
                  )
              }
          },
          position: function() {
              if (this.length) {
                  var u = this[0]
                    , n = this.offsetParent()
                    , i = this.offset()
                    , r = wt.test(n[0].nodeName) ? {
                      top: 0,
                      left: 0
                  } : n.offset();
                  return i.top -= parseFloat(t(u).css("margin-top")) || 0,
                  i.left -= parseFloat(t(u).css("margin-left")) || 0,
                  r.top += parseFloat(t(n[0]).css("border-top-width")) || 0,
                  r.left += parseFloat(t(n[0]).css("border-left-width")) || 0,
                  {
                      top: i.top - r.top,
                      left: i.left - r.left
                  }
              }
          },
          offsetParent: function() {
              return this.map(function() {
                  for (var n = this.offsetParent || u.body; n && !wt.test(n.nodeName) && "static" == t(n).css("position"); )
                      n = n.offsetParent;
                  return n
              })
          }
      },
      t.fn.detach = t.fn.remove,
      ["width", "height"].forEach(function(n) {
          var i = n.replace(/./, function(n) {
              return n[0].toUpperCase()
          });
          t.fn[n] = function(r) {
              var e, u = this[0];
              return r === f ? k(u) ? u["inner" + i] : tt(u) ? u.documentElement["scroll" + i] : (e = this.offset()) && e[n] : this.each(function(i) {
                  u = t(this);
                  u.css(n, o(this, r, i, u[n]()))
              })
          }
      }),
      ["after", "prepend", "before", "append"].forEach(function(r, e) {
          var o = e % 2;
          t.fn[r] = function() {
              var s, r, h = t.map(arguments, function(n) {
                  var r = [];
                  return s = y(n),
                  "array" == s ? (n.forEach(function(n) {
                      return n.nodeType !== f ? r.push(n) : t.zepto.isZ(n) ? r = r.concat(n.get()) : void (r = r.concat(i.fragment(n)))
                  }),
                  r) : "object" == s || null == n ? n : i.fragment(n)
              }), c = this.length > 1;
              return h.length < 1 ? this : this.each(function(i, f) {
                  r = o ? f : f.parentNode;
                  f = 0 == e ? f.nextSibling : 1 == e ? f.firstChild : 2 == e ? f : null;
                  var s = t.contains(u.documentElement, r);
                  h.forEach(function(i) {
                      if (c)
                          i = i.cloneNode(!0);
                      else if (!r)
                          return t(i).remove();
                      r.insertBefore(i, f);
                      s && pt(i, function(t) {
                          if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                              var i = t.ownerDocument ? t.ownerDocument.defaultView : n;
                              i.eval.call(i, t.innerHTML)
                          }
                      })
                  })
              })
          }
          ;
          t.fn[o ? r + "To" : "insert" + (e ? "Before" : "After")] = function(n) {
              return t(n)[r](this),
              this
          }
      }),
      i.Z.prototype = at.prototype = t.fn,
      i.uniq = nt,
      i.deserializeValue = yt,
      t.zepto = i,
      t
  }();
  return n.Zepto = t,
  void 0 === n.$ && (n.$ = t),
  function(t) {
      function u(n) {
          return n._zid || (n._zid = it++)
      }
      function v(n, t, i, r) {
          if (t = y(t),
          t.ns)
              var f = tt(t.ns);
          return (o[u(n)] || []).filter(function(n) {
              return n && (!t.e || n.e == t.e) && (!t.ns || f.test(n.ns)) && (!i || u(n.fn) === u(i)) && (!r || n.sel == r)
          })
      }
      function y(n) {
          var t = ("" + n).split(".");
          return {
              e: t[0],
              ns: t.slice(1).sort().join(" ")
          }
      }
      function tt(n) {
          return new RegExp("(?:^| )" + n.replace(" ", " .* ?") + "(?: |$)")
      }
      function p(n, t) {
          return n.del && !d && n.e in l || !!t
      }
      function w(n) {
          return g[n] || d && l[n] || n
      }
      function b(n, i, f, s, h, c, l) {
          var a = u(n)
            , v = o[a] || (o[a] = []);
          i.split(/\s/).forEach(function(i) {
              var u, o;
              if ("ready" == i)
                  return t(document).ready(f);
              u = y(i);
              u.fn = f;
              u.sel = h;
              u.e in g && (f = function(n) {
                  var i = n.relatedTarget;
                  if (!i || i !== this && !t.contains(this, i))
                      return u.fn.apply(this, arguments)
              }
              );
              u.del = c;
              o = c || f;
              u.proxy = function(t) {
                  if (t = e(t),
                  !t.isImmediatePropagationStopped()) {
                      t.data = s;
                      var i = o.apply(n, t._args == r ? [t] : [t].concat(t._args));
                      return i === !1 && (t.preventDefault(),
                      t.stopPropagation()),
                      i
                  }
              }
              ;
              u.i = v.length;
              v.push(u);
              "addEventListener"in n && n.addEventListener(w(u.e), u.proxy, p(u, l))
          })
      }
      function s(n, t, i, r, f) {
          var e = u(n);
          (t || "").split(/\s/).forEach(function(t) {
              v(n, t, i, r).forEach(function(t) {
                  delete o[e][t.i];
                  "removeEventListener"in n && n.removeEventListener(w(t.e), t.proxy, p(t, f))
              })
          })
      }
      function e(n, i) {
          return (i || !n.isDefaultPrevented) && (i || (i = n),
          t.each(ut, function(t, r) {
              var u = i[t];
              n[t] = function() {
                  return this[r] = nt,
                  u && u.apply(i, arguments)
              }
              ;
              n[r] = a
          }),
          n.timeStamp || (n.timeStamp = Date.now()),
          (i.defaultPrevented !== r ? i.defaultPrevented : "returnValue"in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (n.isDefaultPrevented = nt)),
          n
      }
      function k(n) {
          var t, i = {
              originalEvent: n
          };
          for (t in n)
              rt.test(t) || n[t] === r || (i[t] = n[t]);
          return e(i, n)
      }
      var r, it = 1, h = Array.prototype.slice, c = t.isFunction, i = function(n) {
          return "string" == typeof n
      }, o = {}, f = {}, d = "onfocusin"in n, l = {
          focus: "focusin",
          blur: "focusout"
      }, g = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
      };
      f.click = f.mousedown = f.mouseup = f.mousemove = "MouseEvents";
      t.event = {
          add: b,
          remove: s
      };
      t.proxy = function(n, r) {
          var f = 2 in arguments && h.call(arguments, 2), e;
          if (c(n))
              return e = function() {
                  return n.apply(r, f ? f.concat(h.call(arguments)) : arguments)
              }
              ,
              e._zid = u(n),
              e;
          if (i(r))
              return f ? (f.unshift(n[r], n),
              t.proxy.apply(null, f)) : t.proxy(n[r], n);
          throw new TypeError("expected function");
      }
      ;
      t.fn.bind = function(n, t, i) {
          return this.on(n, t, i)
      }
      ;
      t.fn.unbind = function(n, t) {
          return this.off(n, t)
      }
      ;
      t.fn.one = function(n, t, i, r) {
          return this.on(n, t, i, r, 1)
      }
      ;
      var nt = function() {
          return !0
      }
        , a = function() {
          return !1
      }
        , rt = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/
        , ut = {
          preventDefault: "isDefaultPrevented",
          stopImmediatePropagation: "isImmediatePropagationStopped",
          stopPropagation: "isPropagationStopped"
      };
      t.fn.delegate = function(n, t, i) {
          return this.on(t, n, i)
      }
      ;
      t.fn.undelegate = function(n, t, i) {
          return this.off(t, n, i)
      }
      ;
      t.fn.live = function(n, i) {
          return t(document.body).delegate(this.selector, n, i),
          this
      }
      ;
      t.fn.die = function(n, i) {
          return t(document.body).undelegate(this.selector, n, i),
          this
      }
      ;
      t.fn.on = function(n, u, f, e, o) {
          var l, y, v = this;
          return n && !i(n) ? (t.each(n, function(n, t) {
              v.on(n, u, f, t, o)
          }),
          v) : (i(u) || c(e) || e === !1 || (e = f,
          f = u,
          u = r),
          (e === r || f === !1) && (e = f,
          f = r),
          e === !1 && (e = a),
          v.each(function(i, r) {
              o && (l = function(n) {
                  return s(r, n.type, e),
                  e.apply(this, arguments)
              }
              );
              u && (y = function(n) {
                  var f, i = t(n.target).closest(u, r).get(0);
                  if (i && i !== r)
                      return (f = t.extend(k(n), {
                          currentTarget: i,
                          liveFired: r
                      }),
                      (l || e).apply(i, [f].concat(h.call(arguments, 1))))
              }
              );
              b(r, n, e, f, u, y || l)
          }))
      }
      ;
      t.fn.off = function(n, u, f) {
          var e = this;
          return n && !i(n) ? (t.each(n, function(n, t) {
              e.off(n, u, t)
          }),
          e) : (i(u) || c(f) || f === !1 || (f = u,
          u = r),
          f === !1 && (f = a),
          e.each(function() {
              s(this, n, f, u)
          }))
      }
      ;
      t.fn.trigger = function(n, r) {
          return n = i(n) || t.isPlainObject(n) ? t.Event(n) : e(n),
          n._args = r,
          this.each(function() {
              n.type in l && "function" == typeof this[n.type] ? this[n.type]() : "dispatchEvent"in this ? this.dispatchEvent(n) : t(this).triggerHandler(n, r)
          })
      }
      ;
      t.fn.triggerHandler = function(n, r) {
          var u, f;
          return this.each(function(e, o) {
              u = k(i(n) ? t.Event(n) : n);
              u._args = r;
              u.target = o;
              t.each(v(o, n.type || n), function(n, t) {
                  return f = t.proxy(u),
                  u.isImmediatePropagationStopped() ? !1 : void 0
              })
          }),
          f
      }
      ;
      "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n) {
          t.fn[n] = function(t) {
              return 0 in arguments ? this.bind(n, t) : this.trigger(n)
          }
      });
      t.Event = function(n, t) {
          var u, o, r;
          if (i(n) || (t = n,
          n = t.type),
          u = document.createEvent(f[n] || "Events"),
          o = !0,
          t)
              for (r in t)
                  "bubbles" == r ? o = !!t[r] : u[r] = t[r];
          return u.initEvent(n, o, !0),
          e(u)
      }
  }(t),
  function(t) {
      function k(n, i, r) {
          var u = t.Event(i);
          return t(n).trigger(u, r),
          !u.isDefaultPrevented()
      }
      function u(n, t, i, r) {
          if (n.global)
              return k(t || e, i, r)
      }
      function d(n) {
          n.global && 0 == t.active++ && u(n, null, "ajaxStart")
      }
      function g(n) {
          n.global && !--t.active && u(n, null, "ajaxStop")
      }
      function a(n, t) {
          var i = t.context;
          return t.beforeSend.call(i, n, t) === !1 || u(t, i, "ajaxBeforeSend", [n, t]) === !1 ? !1 : void u(t, i, "ajaxSend", [n, t])
      }
      function v(n, t, i, r) {
          var f = i.context
            , e = "success";
          i.success.call(f, n, e, t);
          r && r.resolveWith(f, [n, e, t]);
          u(i, f, "ajaxSuccess", [t, i, n]);
          y(e, t, i)
      }
      function f(n, t, i, r, f) {
          var e = r.context;
          r.error.call(e, i, t, n);
          f && f.rejectWith(e, [i, t, n]);
          u(r, e, "ajaxError", [i, r, n || t]);
          y(t, i, r)
      }
      function y(n, t, i) {
          var r = i.context;
          i.complete.call(r, t, n);
          u(i, r, "ajaxComplete", [t, i]);
          g(i)
      }
      function nt(n, t, r) {
          if (r.dataFilter == i)
              return n;
          var u = r.context;
          return r.dataFilter.call(u, n, t)
      }
      function i() {}
      function tt(n) {
          return n && (n = n.split(";", 2)[0]),
          n && (n == b ? "html" : n == w ? "json" : ft.test(n) ? "script" : et.test(n) && "xml") || "text"
      }
      function h(n, t) {
          return "" == t ? n : (n + "&" + t).replace(/[&?]{1,2}/, "?")
      }
      function it(n) {
          n.processData && n.data && "string" != t.type(n.data) && (n.data = t.param(n.data, n.traditional));
          !n.data || n.type && "GET" != n.type.toUpperCase() && "jsonp" != n.dataType || (n.url = h(n.url, n.data),
          n.data = void 0)
      }
      function o(n, i, r, u) {
          return t.isFunction(i) && (u = r,
          r = i,
          i = void 0),
          t.isFunction(r) || (u = r,
          r = void 0),
          {
              url: n,
              data: i,
              success: r,
              dataType: u
          }
      }
      function p(n, i, r, u) {
          var f, e = t.isArray(i), o = t.isPlainObject(i);
          t.each(i, function(i, s) {
              f = t.type(s);
              u && (i = r ? u : u + "[" + (o || "object" == f || "array" == f ? i : "") + "]");
              !u && e ? n.add(s.name, s.value) : "array" == f || !r && "object" == f ? p(n, s, r, i) : n.add(i, s)
          })
      }
      var s, r, rt = +new Date, e = n.document, ut = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ft = /^(?:text|application)\/javascript/i, et = /^(?:text|application)\/xml/i, w = "application/json", b = "text/html", ot = /^\s*$/, c = e.createElement("a"), l;
      c.href = n.location.href;
      t.active = 0;
      t.ajaxJSONP = function(i, r) {
          if (!("type"in i))
              return t.ajax(i);
          var u, p, l = i.jsonpCallback, h = (t.isFunction(l) ? l() : l) || "Zepto" + rt++, s = e.createElement("script"), c = n[h], y = function(n) {
              t(s).triggerHandler("error", n || "abort")
          }, o = {
              abort: y
          };
          return r && r.promise(o),
          t(s).on("load error", function(e, l) {
              clearTimeout(p);
              t(s).off().remove();
              "error" != e.type && u ? v(u[0], o, i, r) : f(null, l || "error", o, i, r);
              n[h] = c;
              u && t.isFunction(c) && c(u[0]);
              c = u = void 0
          }),
          a(o, i) === !1 ? (y("abort"),
          o) : (n[h] = function() {
              u = arguments
          }
          ,
          s.src = i.url.replace(/\?(.+)=\?/, "?$1=" + h),
          e.head.appendChild(s),
          i.timeout > 0 && (p = setTimeout(function() {
              y("timeout")
          }, i.timeout)),
          o)
      }
      ;
      t.ajaxSettings = {
          type: "GET",
          beforeSend: i,
          success: i,
          error: i,
          complete: i,
          context: null,
          global: !0,
          xhr: function() {
              return new n.XMLHttpRequest
          },
          accepts: {
              script: "text/javascript, application/javascript, application/x-javascript",
              json: w,
              xml: "application/xml, text/xml",
              html: b,
              text: "text/plain"
          },
          crossDomain: !1,
          timeout: 0,
          processData: !0,
          cache: !0,
          dataFilter: i
      };
      t.ajax = function(u) {
          var b, ut, o = t.extend({}, u || {}), p = t.Deferred && t.Deferred(), y, g, et;
          for (s in t.ajaxSettings)
              void 0 === o[s] && (o[s] = t.ajaxSettings[s]);
          if (d(o),
          o.crossDomain || (b = e.createElement("a"),
          b.href = o.url,
          b.href = b.href,
          o.crossDomain = c.protocol + "//" + c.host != b.protocol + "//" + b.host),
          o.url || (o.url = n.location.toString()),
          (ut = o.url.indexOf("#")) > -1 && (o.url = o.url.slice(0, ut)),
          it(o),
          y = o.dataType,
          g = /\?.+=\?/.test(o.url),
          g && (y = "jsonp"),
          o.cache !== !1 && (u && u.cache === !0 || "script" != y && "jsonp" != y) || (o.url = h(o.url, "_=" + Date.now())),
          "jsonp" == y)
              return g || (o.url = h(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")),
              t.ajaxJSONP(o, p);
          var ft, w = o.accepts[y], rt = {}, k = function(n, t) {
              rt[n.toLowerCase()] = [n, t]
          }, st = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : n.location.protocol, l = o.xhr(), ht = l.setRequestHeader;
          if (p && p.promise(l),
          o.crossDomain || k("X-Requested-With", "XMLHttpRequest"),
          k("Accept", w || "*/*"),
          (w = o.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]),
          l.overrideMimeType && l.overrideMimeType(w)),
          (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && k("Content-Type", o.contentType || "application/x-www-form-urlencoded"),
          o.headers)
              for (r in o.headers)
                  k(r, o.headers[r]);
          if (l.setRequestHeader = k,
          l.onreadystatechange = function() {
              if (4 == l.readyState) {
                  l.onreadystatechange = i;
                  clearTimeout(ft);
                  var n, r = !1;
                  if (l.status >= 200 && l.status < 300 || 304 == l.status || 0 == l.status && "file:" == st) {
                      if (y = y || tt(o.mimeType || l.getResponseHeader("content-type")),
                      "arraybuffer" == l.responseType || "blob" == l.responseType)
                          n = l.response;
                      else {
                          n = l.responseText;
                          try {
                              n = nt(n, y, o);
                              "script" == y ? eval(n) : "xml" == y ? n = l.responseXML : "json" == y && (n = ot.test(n) ? null : t.parseJSON(n))
                          } catch (u) {
                              r = u
                          }
                          if (r)
                              return f(r, "parsererror", l, o, p)
                      }
                      v(n, l, o, p)
                  } else
                      f(l.statusText || null, l.status ? "error" : "abort", l, o, p)
              }
          }
          ,
          a(l, o) === !1)
              return l.abort(),
              f(null, "abort", l, o, p),
              l;
          if (et = "async"in o ? o.async : !0,
          l.open(o.type, o.url, et, o.username, o.password),
          o.xhrFields)
              for (r in o.xhrFields)
                  l[r] = o.xhrFields[r];
          for (r in rt)
              ht.apply(l, rt[r]);
          return o.timeout > 0 && (ft = setTimeout(function() {
              l.onreadystatechange = i;
              l.abort();
              f(null, "timeout", l, o, p)
          }, o.timeout)),
          l.send(o.data ? o.data : null),
          l
      }
      ;
      t.get = function() {
          return t.ajax(o.apply(null, arguments))
      }
      ;
      t.post = function() {
          var n = o.apply(null, arguments);
          return n.type = "POST",
          t.ajax(n)
      }
      ;
      t.getJSON = function() {
          var n = o.apply(null, arguments);
          return n.dataType = "json",
          t.ajax(n)
      }
      ;
      t.fn.load = function(n, i, r) {
          if (!this.length)
              return this;
          var f, s = this, e = n.split(/\s/), u = o(n, i, r), h = u.success;
          return e.length > 1 && (u.url = e[0],
          f = e[1]),
          u.success = function(n) {
              s.html(f ? t("<div>").html(n.replace(ut, "")).find(f) : n);
              h && h.apply(s, arguments)
          }
          ,
          t.ajax(u),
          this
      }
      ;
      l = encodeURIComponent;
      t.param = function(n, i) {
          var r = [];
          return r.add = function(n, i) {
              t.isFunction(i) && (i = i());
              null == i && (i = "");
              this.push(l(n) + "=" + l(i))
          }
          ,
          p(r, n, i),
          r.join("&").replace(/%20/g, "+")
      }
  }(t),
  function(n) {
      n.fn.serializeArray = function() {
          var i, t, r = [], u = function(n) {
              return n.forEach ? n.forEach(u) : void r.push({
                  name: i,
                  value: n
              })
          };
          return this[0] && n.each(this[0].elements, function(r, f) {
              t = f.type;
              i = f.name;
              i && "fieldset" != f.nodeName.toLowerCase() && !f.disabled && "submit" != t && "reset" != t && "button" != t && "file" != t && ("radio" != t && "checkbox" != t || f.checked) && u(n(f).val())
          }),
          r
      }
      ;
      n.fn.serialize = function() {
          var n = [];
          return this.serializeArray().forEach(function(t) {
              n.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
          }),
          n.join("&")
      }
      ;
      n.fn.submit = function(t) {
          if (0 in arguments)
              this.bind("submit", t);
          else if (this.length) {
              var i = n.Event("submit");
              this.eq(0).trigger(i);
              i.isDefaultPrevented() || this.get(0).submit()
          }
          return this
      }
  }(t),
  function() {
      try {
          getComputedStyle(void 0)
      } catch (i) {
          var t = getComputedStyle;
          n.getComputedStyle = function(n, i) {
              try {
                  return t(n, i)
              } catch (r) {
                  return null
              }
          }
      }
  }(),
  t
});
!function(n) {
  "use strict";
  function r(i, r) {
      this.elmt = i;
      this.settings = n.extend({}, t, n.vegas.defaults, r);
      this.slide = this.settings.slide;
      this.total = this.settings.slides.length;
      this.noshow = this.total < 2;
      this.paused = !this.settings.autoplay || this.noshow;
      this.ended = !1;
      this.$elmt = n(i);
      this.$timer = null;
      this.$overlay = null;
      this.$slide = null;
      this.timeout = null;
      this.first = !0;
      this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"];
      this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"];
      this.settings.transitionRegister instanceof Array || (this.settings.transitionRegister = [this.settings.transitionRegister]);
      this.settings.animationRegister instanceof Array || (this.settings.animationRegister = [this.settings.animationRegister]);
      this.transitions = this.transitions.concat(this.settings.transitionRegister);
      this.animations = this.animations.concat(this.settings.animationRegister);
      this.support = {
          objectFit: "objectFit"in document.body.style,
          transition: "transition"in document.body.style || "WebkitTransition"in document.body.style,
          video: n.vegas.isVideoCompatible()
      };
      !0 === this.settings.shuffle && this.shuffle();
      this._init()
  }
  var t = {
      slide: 0,
      delay: 5e3,
      loop: !0,
      preload: !1,
      preloadImage: !1,
      preloadVideo: !1,
      timer: !0,
      overlay: !1,
      autoplay: !0,
      shuffle: !1,
      cover: !0,
      color: null,
      align: "center",
      valign: "center",
      firstTransition: null,
      firstTransitionDuration: null,
      transition: "fade",
      transitionDuration: 1e3,
      transitionRegister: [],
      animation: null,
      animationDuration: "auto",
      animationRegister: [],
      slidesToKeep: 1,
      init: function() {},
      play: function() {},
      pause: function() {},
      walk: function() {},
      slides: []
  }
    , i = {};
  r.prototype = {
      _init: function() {
          var i, u, r, f, o = "BODY" === this.elmt.tagName, s = this.settings.timer, e = this.settings.overlay, t = this;
          this._preload();
          o || (u = n('<div class="vegas-content-scrollable">'),
          i = n('<div class="vegas-content">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")),
          this.$elmt.css("padding") || i.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")),
          this.$elmt.css("padding", 0),
          this.$elmt.clone(!0).children().appendTo(i),
          this.elmt.innerHTML = "");
          s && this.support.transition && (f = n('<div class="vegas-timer"><div class="vegas-timer-progress">'),
          this.$timer = f,
          this.$elmt.prepend(f));
          e && (r = n('<div class="vegas-overlay">'),
          "string" == typeof e && r.css("background-image", "url(" + e + ")"),
          this.$overlay = r,
          this.$elmt.prepend(r));
          this.$elmt.addClass("vegas-container");
          o || (this.$elmt.append(u),
          u.append(i));
          setTimeout(function() {
              t.trigger("init");
              t._goto(t.slide);
              t.settings.autoplay && t.trigger("play")
          }, 1)
      },
      _preload: function() {
          for (var n = 0; n < this.settings.slides.length; n++)
              (this.settings.preload || this.settings.preloadImages) && this.settings.slides[n].src && ((new Image).src = this.settings.slides[n].src),
              (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[n].video && (this.settings.slides[n].video instanceof Array ? this._video(this.settings.slides[n].video) : this._video(this.settings.slides[n].video.src))
      },
      _random: function(n) {
          return n[Math.floor(Math.random() * n.length)]
      },
      _slideShow: function() {
          var n = this;
          1 < this.total && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function() {
              n.next()
          }, this._options("delay")))
      },
      _timer: function(n) {
          var t = this;
          clearTimeout(this.timeout);
          this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"),
          this.ended || this.paused || this.noshow || n && setTimeout(function() {
              t.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", t._options("delay") - 100 + "ms")
          }, 100))
      },
      _video: function(n) {
          var t, u, r = n.toString();
          return i[r] ? i[r] : (n instanceof Array || (n = [n]),
          (t = document.createElement("video")).preload = !0,
          n.forEach(function(n) {
              (u = document.createElement("source")).src = n;
              t.appendChild(u)
          }),
          i[r] = t)
      },
      _fadeOutSound: function(n, t) {
          var r = this
            , u = t / 10
            , i = n.volume - .09;
          0 < i ? (n.volume = i,
          setTimeout(function() {
              r._fadeOutSound(n, t)
          }, u)) : n.pause()
      },
      _fadeInSound: function(n, t) {
          var r = this
            , u = t / 10
            , i = n.volume + .09;
          i < 1 && (n.volume = i,
          setTimeout(function() {
              r._fadeInSound(n, t)
          }, u))
      },
      _options: function(n, t) {
          return void 0 === t && (t = this.slide),
          void 0 !== this.settings.slides[t][n] ? this.settings.slides[t][n] : this.settings[n]
      },
      _goto: function(t) {
          function w() {
              h._timer(!0);
              setTimeout(function() {
                  i && (h.support.transition ? (o.css("transition", "all " + u + "ms").addClass("vegas-transition-" + i + "-out"),
                  o.each(function() {
                      var n = o.find("video").get(0);
                      n && (n.volume = 1,
                      h._fadeOutSound(n, u))
                  }),
                  f.css("transition", "all " + u + "ms").addClass("vegas-transition-" + i + "-in")) : f.fadeIn(u));
                  for (var n = 0; n < o.length - h.settings.slidesToKeep; n++)
                      o.eq(n).remove();
                  h.trigger("walk");
                  h._slideShow()
              }, 100)
          }
          void 0 === this.settings.slides[t] && (t = 0);
          this.slide = t;
          var f, l, a, r, v, o = this.$elmt.children(".vegas-slide"), b = this.settings.slides[t].src, s = this.settings.slides[t].video, y = this._options("delay"), k = this._options("align"), d = this._options("valign"), e = this._options("cover"), g = this._options("color") || this.$elmt.css("background-color"), h = this, nt = o.length, i = this._options("transition"), u = this._options("transitionDuration"), c = this._options("animation"), p = this._options("animationDuration");
          this.settings.firstTransition && this.first && (i = this.settings.firstTransition || i);
          this.settings.firstTransitionDuration && this.first && (u = this.settings.firstTransitionDuration || u);
          this.first && (this.first = !1);
          "repeat" !== e && (!0 === e ? e = "cover" : !1 === e && (e = "contain"));
          ("random" === i || i instanceof Array) && (i = i instanceof Array ? this._random(i) : this._random(this.transitions));
          ("random" === c || c instanceof Array) && (c = c instanceof Array ? this._random(c) : this._random(this.animations));
          ("auto" === u || y < u) && (u = y);
          "auto" === p && (p = y);
          f = n('<div class="vegas-slide"><\/div>');
          this.support.transition && i && f.addClass("vegas-transition-" + i);
          this.support.video && s ? ((r = s instanceof Array ? this._video(s) : this._video(s.src)).loop = void 0 === s.loop || s.loop,
          r.muted = void 0 === s.mute || s.mute,
          !1 === r.muted ? (r.volume = 0,
          this._fadeInSound(r, u)) : r.pause(),
          a = n(r).addClass("vegas-video").css("background-color", g),
          this.support.objectFit ? a.css("object-position", k + " " + d).css("object-fit", e).css("width", "100%").css("height", "100%") : "contain" === e && a.css("width", "100%").css("height", "100%"),
          f.append(a)) : (v = new Image,
          l = n('<div class="vegas-slide-inner"><\/div>').css("background-image", 'url("' + b + '")').css("background-color", g).css("background-position", k + " " + d),
          "repeat" === e ? l.css("background-repeat", "repeat") : l.css("background-size", e),
          this.support.transition && c && l.addClass("vegas-animation-" + c).css("animation-duration", p + "ms"),
          f.append(l));
          this.support.transition || f.css("display", "none");
          nt ? o.eq(nt - 1).after(f) : this.$elmt.prepend(f);
          o.css("transition", "all 0ms").each(function() {
              this.className = "vegas-slide";
              "VIDEO" === this.tagName && (this.className += " vegas-video");
              i && (this.className += " vegas-transition-" + i,
              this.className += " vegas-transition-" + i + "-in")
          });
          h._timer(!1);
          r ? (4 === r.readyState && (r.currentTime = 0),
          r.play(),
          w()) : (v.src = b,
          v.complete ? w() : v.onload = w)
      },
      _end: function() {
          this.ended = !this.settings.autoplay;
          this._timer(!1);
          this.trigger("end")
      },
      shuffle: function() {
          for (var i, t, n = this.total - 1; 0 < n; n--)
              t = Math.floor(Math.random() * (n + 1)),
              i = this.settings.slides[n],
              this.settings.slides[n] = this.settings.slides[t],
              this.settings.slides[t] = i
      },
      play: function() {
          this.paused && (this.paused = !1,
          this.next(),
          this.trigger("play"))
      },
      pause: function() {
          this._timer(!1);
          this.paused = !0;
          this.trigger("pause")
      },
      toggle: function() {
          this.paused ? this.play() : this.pause()
      },
      playing: function() {
          return !this.paused && !this.noshow
      },
      current: function(n) {
          return n ? {
              slide: this.slide,
              data: this.settings.slides[this.slide]
          } : this.slide
      },
      jump: function(n) {
          n < 0 || n > this.total - 1 || n === this.slide || (this.slide = n,
          this._goto(this.slide))
      },
      next: function() {
          if (this.slide++,
          this.slide >= this.total) {
              if (!this.settings.loop)
                  return this._end();
              this.slide = 0
          }
          this._goto(this.slide)
      },
      previous: function() {
          if (this.slide--,
          this.slide < 0) {
              if (!this.settings.loop)
                  return void this.slide++;
              this.slide = this.total - 1
          }
          this._goto(this.slide)
      },
      trigger: function(n) {
          var t = [];
          t = "init" === n ? [this.settings] : [this.slide, this.settings.slides[this.slide]];
          this.$elmt.trigger("vegas" + n, t);
          "function" == typeof this.settings[n] && this.settings[n].apply(this.$elmt, t)
      },
      options: function(i, r) {
          var u = this.settings.slides.slice();
          if ("object" == typeof i)
              this.settings = n.extend({}, t, n.vegas.defaults, i);
          else {
              if ("string" != typeof i)
                  return this.settings;
              if (void 0 === r)
                  return this.settings[i];
              this.settings[i] = r
          }
          this.settings.slides !== u && (this.total = this.settings.slides.length,
          this.noshow = this.total < 2,
          this._preload())
      },
      destroy: function() {
          clearTimeout(this.timeout);
          this.$elmt.removeClass("vegas-container");
          this.$elmt.find("> .vegas-slide").remove();
          this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt);
          this.$elmt.find("> .vegas-wrapper").remove();
          this.settings.timer && this.$timer.remove();
          this.settings.overlay && this.$overlay.remove();
          this.elmt._vegas = null
      }
  };
  n.fn.vegas = function(n) {
      var t, u = arguments, i = !1;
      if (void 0 === n || "object" == typeof n)
          return this.each(function() {
              this._vegas || (this._vegas = new r(this,n))
          });
      if ("string" == typeof n) {
          if (this.each(function() {
              var r = this._vegas;
              if (!r)
                  throw new Error("No Vegas applied to this element.");
              "function" == typeof r[n] && "_" !== n[0] ? t = r[n].apply(r, [].slice.call(u, 1)) : i = !0
          }),
          i)
              throw new Error('No method "' + n + '" in Vegas.');
          return void 0 !== t ? t : this
      }
  }
  ;
  n.vegas = {};
  n.vegas.defaults = t;
  n.vegas.isVideoCompatible = function() {
      return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
  }
}(window.jQuery || window.Zepto || window.m4q)
