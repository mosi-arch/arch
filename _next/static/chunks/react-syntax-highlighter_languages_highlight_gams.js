(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_gams"],{

/***/ "./node_modules/highlight.js/lib/languages/gams.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gams.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction anyNumberOfTimes(re) {\n  return concat('(', re, ')*');\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/** @type LanguageFn */\nfunction gams(hljs) {\n  const KEYWORDS = {\n    keyword:\n      'abort acronym acronyms alias all and assign binary card diag display ' +\n      'else eq file files for free ge gt if integer le loop lt maximizing ' +\n      'minimizing model models ne negative no not option options or ord ' +\n      'positive prod put putpage puttl repeat sameas semicont semiint smax ' +\n      'smin solve sos1 sos2 sum system table then until using while xor yes',\n    literal:\n      'eps inf na',\n    built_in:\n      'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy ' +\n      'cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact ' +\n      'floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max ' +\n      'min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power ' +\n      'randBinomial randLinear randTriangle round rPower sigmoid sign ' +\n      'signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt ' +\n      'tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp ' +\n      'bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt ' +\n      'rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear ' +\n      'jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion ' +\n      'handleCollect handleDelete handleStatus handleSubmit heapFree ' +\n      'heapLimit heapSize jobHandle jobKill jobStatus jobTerminate ' +\n      'licenseLevel licenseStatus maxExecError sleep timeClose timeComp ' +\n      'timeElapsed timeExec timeStart'\n  };\n  const PARAMS = {\n    className: 'params',\n    begin: /\\(/,\n    end: /\\)/,\n    excludeBegin: true,\n    excludeEnd: true\n  };\n  const SYMBOLS = {\n    className: 'symbol',\n    variants: [\n      {\n        begin: /=[lgenxc]=/\n      },\n      {\n        begin: /\\$/\n      }\n    ]\n  };\n  const QSTR = { // One-line quoted comment string\n    className: 'comment',\n    variants: [\n      {\n        begin: '\\'',\n        end: '\\''\n      },\n      {\n        begin: '\"',\n        end: '\"'\n      }\n    ],\n    illegal: '\\\\n',\n    contains: [hljs.BACKSLASH_ESCAPE]\n  };\n  const ASSIGNMENT = {\n    begin: '/',\n    end: '/',\n    keywords: KEYWORDS,\n    contains: [\n      QSTR,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.C_NUMBER_MODE\n    ]\n  };\n  const COMMENT_WORD = /[a-z0-9&#*=?@\\\\><:,()$[\\]_.{}!+%^-]+/;\n  const DESCTEXT = { // Parameter/set/variable description text\n    begin: /[a-z][a-z0-9_]*(\\([a-z0-9_, ]*\\))?[ \\t]+/,\n    excludeBegin: true,\n    end: '$',\n    endsWithParent: true,\n    contains: [\n      QSTR,\n      ASSIGNMENT,\n      {\n        className: 'comment',\n        // one comment word, then possibly more\n        begin: concat(\n          COMMENT_WORD,\n          // [ ] because \\s would be too broad (matching newlines)\n          anyNumberOfTimes(concat(/[ ]+/, COMMENT_WORD))\n        ),\n        relevance: 0\n      }\n    ]\n  };\n\n  return {\n    name: 'GAMS',\n    aliases: ['gms'],\n    case_insensitive: true,\n    keywords: KEYWORDS,\n    contains: [\n      hljs.COMMENT(/^\\$ontext/, /^\\$offtext/),\n      {\n        className: 'meta',\n        begin: '^\\\\$[a-z0-9]+',\n        end: '$',\n        returnBegin: true,\n        contains: [\n          {\n            className: 'meta-keyword',\n            begin: '^\\\\$[a-z0-9]+'\n          }\n        ]\n      },\n      hljs.COMMENT('^\\\\*', '$'),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.APOS_STRING_MODE,\n      // Declarations\n      {\n        beginKeywords:\n          'set sets parameter parameters variable variables ' +\n          'scalar scalars equation equations',\n        end: ';',\n        contains: [\n          hljs.COMMENT('^\\\\*', '$'),\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.QUOTE_STRING_MODE,\n          hljs.APOS_STRING_MODE,\n          ASSIGNMENT,\n          DESCTEXT\n        ]\n      },\n      { // table environment\n        beginKeywords: 'table',\n        end: ';',\n        returnBegin: true,\n        contains: [\n          { // table header row\n            beginKeywords: 'table',\n            end: '$',\n            contains: [DESCTEXT]\n          },\n          hljs.COMMENT('^\\\\*', '$'),\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.QUOTE_STRING_MODE,\n          hljs.APOS_STRING_MODE,\n          hljs.C_NUMBER_MODE\n          // Table does not contain DESCTEXT or ASSIGNMENT\n        ]\n      },\n      // Function definitions\n      {\n        className: 'function',\n        begin: /^[a-z][a-z0-9_,\\-+' ()$]+\\.{2}/,\n        returnBegin: true,\n        contains: [\n          { // Function title\n            className: 'title',\n            begin: /^[a-z0-9_]+/\n          },\n          PARAMS,\n          SYMBOLS\n        ]\n      },\n      hljs.C_NUMBER_MODE,\n      SYMBOLS\n    ]\n  };\n}\n\nmodule.exports = gams;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dhbXMuanM/N2Q5ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9nYW1zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gYW55TnVtYmVyT2ZUaW1lcyhyZSkge1xuICByZXR1cm4gY29uY2F0KCcoJywgcmUsICcpKicpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZ2FtcyhobGpzKSB7XG4gIGNvbnN0IEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWJvcnQgYWNyb255bSBhY3JvbnltcyBhbGlhcyBhbGwgYW5kIGFzc2lnbiBiaW5hcnkgY2FyZCBkaWFnIGRpc3BsYXkgJyArXG4gICAgICAnZWxzZSBlcSBmaWxlIGZpbGVzIGZvciBmcmVlIGdlIGd0IGlmIGludGVnZXIgbGUgbG9vcCBsdCBtYXhpbWl6aW5nICcgK1xuICAgICAgJ21pbmltaXppbmcgbW9kZWwgbW9kZWxzIG5lIG5lZ2F0aXZlIG5vIG5vdCBvcHRpb24gb3B0aW9ucyBvciBvcmQgJyArXG4gICAgICAncG9zaXRpdmUgcHJvZCBwdXQgcHV0cGFnZSBwdXR0bCByZXBlYXQgc2FtZWFzIHNlbWljb250IHNlbWlpbnQgc21heCAnICtcbiAgICAgICdzbWluIHNvbHZlIHNvczEgc29zMiBzdW0gc3lzdGVtIHRhYmxlIHRoZW4gdW50aWwgdXNpbmcgd2hpbGUgeG9yIHllcycsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdlcHMgaW5mIG5hJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdhYnMgYXJjY29zIGFyY3NpbiBhcmN0YW4gYXJjdGFuMiBCZXRhIGJldGFSZWcgYmlub21pYWwgY2VpbCBjZW50cm9weSAnICtcbiAgICAgICdjb3MgY29zaCBjdlBvd2VyIGRpdiBkaXYwIGVEaXN0IGVudHJvcHkgZXJyb3JmIGV4ZWNTZWVkIGV4cCBmYWN0ICcgK1xuICAgICAgJ2Zsb29yIGZyYWMgZ2FtbWEgZ2FtbWFSZWcgbG9nIGxvZ0JldGEgbG9nR2FtbWEgbG9nMTAgbG9nMiBtYXBWYWwgbWF4ICcgK1xuICAgICAgJ21pbiBtb2QgbmNwQ00gbmNwRiBuY3BWVXBvdyBuY3BWVXNpbiBub3JtYWwgcGkgcG9seSBwb3dlciAnICtcbiAgICAgICdyYW5kQmlub21pYWwgcmFuZExpbmVhciByYW5kVHJpYW5nbGUgcm91bmQgclBvd2VyIHNpZ21vaWQgc2lnbiAnICtcbiAgICAgICdzaWduUG93ZXIgc2luIHNpbmggc2xleHAgc2xsb2cxMCBzbHJlYyBzcWV4cCBzcWxvZzEwIHNxciBzcXJlYyBzcXJ0ICcgK1xuICAgICAgJ3RhbiB0YW5oIHRydW5jIHVuaWZvcm0gdW5pZm9ybUludCB2Y1Bvd2VyIGJvb2xfYW5kIGJvb2xfZXF2IGJvb2xfaW1wICcgK1xuICAgICAgJ2Jvb2xfbm90IGJvb2xfb3IgYm9vbF94b3IgaWZUaGVuIHJlbF9lcSByZWxfZ2UgcmVsX2d0IHJlbF9sZSByZWxfbHQgJyArXG4gICAgICAncmVsX25lIGdkYXkgZ2RvdyBnaG91ciBnbGVhcCBnbWlsbGlzZWMgZ21pbnV0ZSBnbW9udGggZ3NlY29uZCBneWVhciAnICtcbiAgICAgICdqZGF0ZSBqbm93IGpzdGFydCBqdGltZSBlcnJvckxldmVsIGV4ZWNFcnJvciBnYW1zUmVsZWFzZSBnYW1zVmVyc2lvbiAnICtcbiAgICAgICdoYW5kbGVDb2xsZWN0IGhhbmRsZURlbGV0ZSBoYW5kbGVTdGF0dXMgaGFuZGxlU3VibWl0IGhlYXBGcmVlICcgK1xuICAgICAgJ2hlYXBMaW1pdCBoZWFwU2l6ZSBqb2JIYW5kbGUgam9iS2lsbCBqb2JTdGF0dXMgam9iVGVybWluYXRlICcgK1xuICAgICAgJ2xpY2Vuc2VMZXZlbCBsaWNlbnNlU3RhdHVzIG1heEV4ZWNFcnJvciBzbGVlcCB0aW1lQ2xvc2UgdGltZUNvbXAgJyArXG4gICAgICAndGltZUVsYXBzZWQgdGltZUV4ZWMgdGltZVN0YXJ0J1xuICB9O1xuICBjb25zdCBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuICBjb25zdCBTWU1CT0xTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC89W2xnZW54Y109L1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCQvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBRU1RSID0geyAvLyBPbmUtbGluZSBxdW90ZWQgY29tbWVudCBzdHJpbmdcbiAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1xcJydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIidcbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gIH07XG4gIGNvbnN0IEFTU0lHTk1FTlQgPSB7XG4gICAgYmVnaW46ICcvJyxcbiAgICBlbmQ6ICcvJyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFFTVFIsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbiAgY29uc3QgQ09NTUVOVF9XT1JEID0gL1thLXowLTkmIyo9P0BcXFxcPjw6LCgpJFtcXF1fLnt9ISslXi1dKy87XG4gIGNvbnN0IERFU0NURVhUID0geyAvLyBQYXJhbWV0ZXIvc2V0L3ZhcmlhYmxlIGRlc2NyaXB0aW9uIHRleHRcbiAgICBiZWdpbjogL1thLXpdW2EtejAtOV9dKihcXChbYS16MC05XywgXSpcXCkpP1sgXFx0XSsvLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICBlbmQ6ICckJyxcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgUVNUUixcbiAgICAgIEFTU0lHTk1FTlQsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICAvLyBvbmUgY29tbWVudCB3b3JkLCB0aGVuIHBvc3NpYmx5IG1vcmVcbiAgICAgICAgYmVnaW46IGNvbmNhdChcbiAgICAgICAgICBDT01NRU5UX1dPUkQsXG4gICAgICAgICAgLy8gWyBdIGJlY2F1c2UgXFxzIHdvdWxkIGJlIHRvbyBicm9hZCAobWF0Y2hpbmcgbmV3bGluZXMpXG4gICAgICAgICAgYW55TnVtYmVyT2ZUaW1lcyhjb25jYXQoL1sgXSsvLCBDT01NRU5UX1dPUkQpKVxuICAgICAgICApLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnR0FNUycsXG4gICAgYWxpYXNlczogWydnbXMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKC9eXFwkb250ZXh0LywgL15cXCRvZmZ0ZXh0LyksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxcJFthLXowLTldKycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46ICdeXFxcXCRbYS16MC05XSsnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXConLCAnJCcpLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAvLyBEZWNsYXJhdGlvbnNcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczpcbiAgICAgICAgICAnc2V0IHNldHMgcGFyYW1ldGVyIHBhcmFtZXRlcnMgdmFyaWFibGUgdmFyaWFibGVzICcgK1xuICAgICAgICAgICdzY2FsYXIgc2NhbGFycyBlcXVhdGlvbiBlcXVhdGlvbnMnLFxuICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkNPTU1FTlQoJ15cXFxcKicsICckJyksXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgQVNTSUdOTUVOVCxcbiAgICAgICAgICBERVNDVEVYVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyAvLyB0YWJsZSBlbnZpcm9ubWVudFxuICAgICAgICBiZWdpbktleXdvcmRzOiAndGFibGUnLFxuICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyAvLyB0YWJsZSBoZWFkZXIgcm93XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAndGFibGUnLFxuICAgICAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgICAgICBjb250YWluczogW0RFU0NURVhUXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXConLCAnJCcpLFxuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgICAgICAgIC8vIFRhYmxlIGRvZXMgbm90IGNvbnRhaW4gREVTQ1RFWFQgb3IgQVNTSUdOTUVOVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogL15bYS16XVthLXowLTlfLFxcLSsnICgpJF0rXFwuezJ9LyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyAvLyBGdW5jdGlvbiB0aXRsZVxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgYmVnaW46IC9eW2EtejAtOV9dKy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIFBBUkFNUyxcbiAgICAgICAgICBTWU1CT0xTXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBTWU1CT0xTXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/gams.js\n");

/***/ })

}]);