(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_step21"],{

/***/ "./node_modules/highlight.js/lib/languages/step21.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/step21.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: STEP Part 21\nContributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>\nDescription: Syntax highlighter for STEP Part 21 files (ISO 10303-21).\nWebsite: https://en.wikipedia.org/wiki/ISO_10303-21\n*/\n\nfunction step21(hljs) {\n  const STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';\n  const STEP21_KEYWORDS = {\n    $pattern: STEP21_IDENT_RE,\n    keyword: 'HEADER ENDSEC DATA'\n  };\n  const STEP21_START = {\n    className: 'meta',\n    begin: 'ISO-10303-21;',\n    relevance: 10\n  };\n  const STEP21_CLOSE = {\n    className: 'meta',\n    begin: 'END-ISO-10303-21;',\n    relevance: 10\n  };\n\n  return {\n    name: 'STEP Part 21',\n    aliases: [\n      'p21',\n      'step',\n      'stp'\n    ],\n    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.\n    keywords: STEP21_KEYWORDS,\n    contains: [\n      STEP21_START,\n      STEP21_CLOSE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.COMMENT('/\\\\*\\\\*!', '\\\\*/'),\n      hljs.C_NUMBER_MODE,\n      hljs.inherit(hljs.APOS_STRING_MODE, {\n        illegal: null\n      }),\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {\n        illegal: null\n      }),\n      {\n        className: 'string',\n        begin: \"'\",\n        end: \"'\"\n      },\n      {\n        className: 'symbol',\n        variants: [\n          {\n            begin: '#',\n            end: '\\\\d+',\n            illegal: '\\\\W'\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = step21;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N0ZXAyMS5qcz8wMDgxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3RlcDIxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTVEVQIFBhcnQgMjFcbkNvbnRyaWJ1dG9yczogQWRhbSBKb3NlcGggQ29vayA8YWRhbS5qb3NlcGguY29va0BnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogU3ludGF4IGhpZ2hsaWdodGVyIGZvciBTVEVQIFBhcnQgMjEgZmlsZXMgKElTTyAxMDMwMy0yMSkuXG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fMTAzMDMtMjFcbiovXG5cbmZ1bmN0aW9uIHN0ZXAyMShobGpzKSB7XG4gIGNvbnN0IFNURVAyMV9JREVOVF9SRSA9ICdbQS1aX11bQS1aMC05Xy5dKic7XG4gIGNvbnN0IFNURVAyMV9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogU1RFUDIxX0lERU5UX1JFLFxuICAgIGtleXdvcmQ6ICdIRUFERVIgRU5EU0VDIERBVEEnXG4gIH07XG4gIGNvbnN0IFNURVAyMV9TVEFSVCA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ0lTTy0xMDMwMy0yMTsnLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcbiAgY29uc3QgU1RFUDIxX0NMT1NFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnRU5ELUlTTy0xMDMwMy0yMTsnLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTVEVQIFBhcnQgMjEnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdwMjEnLFxuICAgICAgJ3N0ZXAnLFxuICAgICAgJ3N0cCdcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsIC8vIFNURVAgMjEgaXMgY2FzZSBpbnNlbnNpdGl2ZSBpbiB0aGVvcnksIGluIHByYWN0aWNlIGFsbCBub24tY29tbWVudHMgYXJlIGNhcGl0YWxpemVkLlxuICAgIGtleXdvcmRzOiBTVEVQMjFfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNURVAyMV9TVEFSVCxcbiAgICAgIFNURVAyMV9DTE9TRSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJy9cXFxcKlxcXFwqIScsICdcXFxcKi8nKSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICAgICAgaWxsZWdhbDogbnVsbFxuICAgICAgfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgICAgICBpbGxlZ2FsOiBudWxsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IFwiJ1wiLFxuICAgICAgICBlbmQ6IFwiJ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnIycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcZCsnLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxXJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGVwMjE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/step21.js\n");

/***/ })

}]);