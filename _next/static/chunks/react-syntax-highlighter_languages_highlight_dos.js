(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dos"],{

/***/ "./node_modules/highlight.js/lib/languages/dos.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Batch file (DOS)\nAuthor: Alexander Makarov <sam@rmcreative.ru>\nContributors: Anton Kochkov <anton.kochkov@gmail.com>\nWebsite: https://en.wikipedia.org/wiki/Batch_file\n*/\n\n/** @type LanguageFn */\nfunction dos(hljs) {\n  const COMMENT = hljs.COMMENT(\n    /^\\s*@?rem\\b/, /$/,\n    {\n      relevance: 10\n    }\n  );\n  const LABEL = {\n    className: 'symbol',\n    begin: '^\\\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\\\s+label)',\n    relevance: 0\n  };\n  return {\n    name: 'Batch file (DOS)',\n    aliases: [\n      'bat',\n      'cmd'\n    ],\n    case_insensitive: true,\n    illegal: /\\/\\*/,\n    keywords: {\n      keyword:\n        'if else goto for in do call exit not exist errorlevel defined ' +\n        'equ neq lss leq gtr geq',\n      built_in:\n        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +\n        'shift cd dir echo setlocal endlocal set pause copy ' +\n        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +\n        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +\n        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +\n        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift ' +\n        'sort start subst time title tree type ver verify vol ' +\n        // winutils\n        'ping net ipconfig taskkill xcopy ren del'\n    },\n    contains: [\n      {\n        className: 'variable',\n        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/\n      },\n      {\n        className: 'function',\n        begin: LABEL.begin,\n        end: 'goto:eof',\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {\n            begin: '([_a-zA-Z]\\\\w*\\\\.)*([_a-zA-Z]\\\\w*:)?[_a-zA-Z]\\\\w*'\n          }),\n          COMMENT\n        ]\n      },\n      {\n        className: 'number',\n        begin: '\\\\b\\\\d+',\n        relevance: 0\n      },\n      COMMENT\n    ]\n  };\n}\n\nmodule.exports = dos;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Rvcy5qcz83Y2ZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZG9zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBCYXRjaCBmaWxlIChET1MpXG5BdXRob3I6IEFsZXhhbmRlciBNYWthcm92IDxzYW1Acm1jcmVhdGl2ZS5ydT5cbkNvbnRyaWJ1dG9yczogQW50b24gS29jaGtvdiA8YW50b24ua29jaGtvdkBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXRjaF9maWxlXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZG9zKGhsanMpIHtcbiAgY29uc3QgQ09NTUVOVCA9IGhsanMuQ09NTUVOVChcbiAgICAvXlxccypAP3JlbVxcYi8sIC8kLyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDEwXG4gICAgfVxuICApO1xuICBjb25zdCBMQUJFTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXlxcXFxzKltBLVphLXouXz9dW0EtWmEtejAtOV8kI0B+Lj9dKig6fFxcXFxzK2xhYmVsKScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0JhdGNoIGZpbGUgKERPUyknLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdiYXQnLFxuICAgICAgJ2NtZCdcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdpZiBlbHNlIGdvdG8gZm9yIGluIGRvIGNhbGwgZXhpdCBub3QgZXhpc3QgZXJyb3JsZXZlbCBkZWZpbmVkICcgK1xuICAgICAgICAnZXF1IG5lcSBsc3MgbGVxIGd0ciBnZXEnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdwcm4gbnVsIGxwdDMgbHB0MiBscHQxIGNvbiBjb200IGNvbTMgY29tMiBjb20xIGF1eCAnICtcbiAgICAgICAgJ3NoaWZ0IGNkIGRpciBlY2hvIHNldGxvY2FsIGVuZGxvY2FsIHNldCBwYXVzZSBjb3B5ICcgK1xuICAgICAgICAnYXBwZW5kIGFzc29jIGF0IGF0dHJpYiBicmVhayBjYWNscyBjZCBjaGNwIGNoZGlyIGNoa2RzayBjaGtudGZzIGNscyBjbWQgY29sb3IgJyArXG4gICAgICAgICdjb21wIGNvbXBhY3QgY29udmVydCBkYXRlIGRpciBkaXNrY29tcCBkaXNrY29weSBkb3NrZXkgZXJhc2UgZnMgJyArXG4gICAgICAgICdmaW5kIGZpbmRzdHIgZm9ybWF0IGZ0eXBlIGdyYWZ0YWJsIGhlbHAga2V5YiBsYWJlbCBtZCBta2RpciBtb2RlIG1vcmUgbW92ZSBwYXRoICcgK1xuICAgICAgICAncGF1c2UgcHJpbnQgcG9wZCBwdXNoZCBwcm9tdCByZCByZWNvdmVyIHJlbSByZW5hbWUgcmVwbGFjZSByZXN0b3JlIHJtZGlyIHNoaWZ0ICcgK1xuICAgICAgICAnc29ydCBzdGFydCBzdWJzdCB0aW1lIHRpdGxlIHRyZWUgdHlwZSB2ZXIgdmVyaWZ5IHZvbCAnICtcbiAgICAgICAgLy8gd2ludXRpbHNcbiAgICAgICAgJ3BpbmcgbmV0IGlwY29uZmlnIHRhc2traWxsIHhjb3B5IHJlbiBkZWwnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvJSVbXiBdfCVbXiBdKz8lfCFbXiBdKz8hL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogTEFCRUwuYmVnaW4sXG4gICAgICAgIGVuZDogJ2dvdG86ZW9mJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBiZWdpbjogJyhbX2EtekEtWl1cXFxcdypcXFxcLikqKFtfYS16QS1aXVxcXFx3KjopP1tfYS16QS1aXVxcXFx3KidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBDT01NRU5UXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJcXFxcZCsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBDT01NRU5UXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/dos.js\n");

/***/ })

}]);