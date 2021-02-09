(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_aspectj"],{

/***/ "./node_modules/highlight.js/lib/languages/aspectj.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/aspectj.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/*\nLanguage: AspectJ\nAuthor: Hakan Ozler <ozler.hakan@gmail.com>\nWebsite: https://www.eclipse.org/aspectj/\nDescription: Syntax Highlighting for the AspectJ Language which is a general-purpose aspect-oriented extension to the Java programming language.\nAudit: 2020\n*/\n\n/** @type LanguageFn */\nfunction aspectj(hljs) {\n  const KEYWORDS =\n    'false synchronized int abstract float private char boolean static null if const ' +\n    'for true while long throw strictfp finally protected import native final return void ' +\n    'enum else extends implements break transient new catch instanceof byte super volatile case ' +\n    'assert short package default double public try this switch continue throws privileged ' +\n    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +\n    'staticinitialization withincode target within execution getWithinTypeName handler ' +\n    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents ' +\n    'warning error soft precedence thisAspectInstance';\n  const SHORTKEYS = 'get set args call';\n\n  return {\n    name: 'AspectJ',\n    keywords: KEYWORDS,\n    illegal: /<\\/|#/,\n    contains: [\n      hljs.COMMENT(\n        /\\/\\*\\*/,\n        /\\*\\//,\n        {\n          relevance: 0,\n          contains: [\n            {\n              // eat up @'s in emails to prevent them to be recognized as doctags\n              begin: /\\w+@/,\n              relevance: 0\n            },\n            {\n              className: 'doctag',\n              begin: /@[A-Za-z]+/\n            }\n          ]\n        }\n      ),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'class',\n        beginKeywords: 'aspect',\n        end: /[{;=]/,\n        excludeEnd: true,\n        illegal: /[:;\"\\[\\]]/,\n        contains: [\n          {\n            beginKeywords: 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'\n          },\n          hljs.UNDERSCORE_TITLE_MODE,\n          {\n            begin: /\\([^\\)]*/,\n            end: /[)]+/,\n            keywords: KEYWORDS + ' ' + SHORTKEYS,\n            excludeEnd: false\n          }\n        ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface',\n        end: /[{;=]/,\n        excludeEnd: true,\n        relevance: 0,\n        keywords: 'class interface',\n        illegal: /[:\"\\[\\]]/,\n        contains: [\n          {\n            beginKeywords: 'extends implements'\n          },\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      },\n      {\n        // AspectJ Constructs\n        beginKeywords: 'pointcut after before around throwing returning',\n        end: /[)]/,\n        excludeEnd: false,\n        illegal: /[\"\\[\\]]/,\n        contains: [\n          {\n            begin: concat(hljs.UNDERSCORE_IDENT_RE, /\\s*\\(/),\n            returnBegin: true,\n            contains: [ hljs.UNDERSCORE_TITLE_MODE ]\n          }\n        ]\n      },\n      {\n        begin: /[:]/,\n        returnBegin: true,\n        end: /[{;]/,\n        relevance: 0,\n        excludeEnd: false,\n        keywords: KEYWORDS,\n        illegal: /[\"\\[\\]]/,\n        contains: [\n          {\n            begin: concat(hljs.UNDERSCORE_IDENT_RE, /\\s*\\(/),\n            keywords: KEYWORDS + ' ' + SHORTKEYS,\n            relevance: 0\n          },\n          hljs.QUOTE_STRING_MODE\n        ]\n      },\n      {\n        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition\n        beginKeywords: 'new throw',\n        relevance: 0\n      },\n      {\n        // the function class is a bit different for AspectJ compared to the Java language\n        className: 'function',\n        begin: /\\w+ +\\w+(\\.\\w+)?\\s*\\([^\\)]*\\)\\s*((throws)[\\w\\s,]+)?[\\{;]/,\n        returnBegin: true,\n        end: /[{;=]/,\n        keywords: KEYWORDS,\n        excludeEnd: true,\n        contains: [\n          {\n            begin: concat(hljs.UNDERSCORE_IDENT_RE, /\\s*\\(/),\n            returnBegin: true,\n            relevance: 0,\n            contains: [ hljs.UNDERSCORE_TITLE_MODE ]\n          },\n          {\n            className: 'params',\n            begin: /\\(/,\n            end: /\\)/,\n            relevance: 0,\n            keywords: KEYWORDS,\n            contains: [\n              hljs.APOS_STRING_MODE,\n              hljs.QUOTE_STRING_MODE,\n              hljs.C_NUMBER_MODE,\n              hljs.C_BLOCK_COMMENT_MODE\n            ]\n          },\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      hljs.C_NUMBER_MODE,\n      {\n        // annotation is also used in this language\n        className: 'meta',\n        begin: /@[A-Za-z]+/\n      }\n    ]\n  };\n}\n\nmodule.exports = aspectj;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FzcGVjdGouanM/OTgxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXNwZWN0ai5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEFzcGVjdEpcbkF1dGhvcjogSGFrYW4gT3psZXIgPG96bGVyLmhha2FuQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmVjbGlwc2Uub3JnL2FzcGVjdGovXG5EZXNjcmlwdGlvbjogU3ludGF4IEhpZ2hsaWdodGluZyBmb3IgdGhlIEFzcGVjdEogTGFuZ3VhZ2Ugd2hpY2ggaXMgYSBnZW5lcmFsLXB1cnBvc2UgYXNwZWN0LW9yaWVudGVkIGV4dGVuc2lvbiB0byB0aGUgSmF2YSBwcm9ncmFtbWluZyBsYW5ndWFnZS5cbkF1ZGl0OiAyMDIwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXNwZWN0aihobGpzKSB7XG4gIGNvbnN0IEtFWVdPUkRTID1cbiAgICAnZmFsc2Ugc3luY2hyb25pemVkIGludCBhYnN0cmFjdCBmbG9hdCBwcml2YXRlIGNoYXIgYm9vbGVhbiBzdGF0aWMgbnVsbCBpZiBjb25zdCAnICtcbiAgICAnZm9yIHRydWUgd2hpbGUgbG9uZyB0aHJvdyBzdHJpY3RmcCBmaW5hbGx5IHByb3RlY3RlZCBpbXBvcnQgbmF0aXZlIGZpbmFsIHJldHVybiB2b2lkICcgK1xuICAgICdlbnVtIGVsc2UgZXh0ZW5kcyBpbXBsZW1lbnRzIGJyZWFrIHRyYW5zaWVudCBuZXcgY2F0Y2ggaW5zdGFuY2VvZiBieXRlIHN1cGVyIHZvbGF0aWxlIGNhc2UgJyArXG4gICAgJ2Fzc2VydCBzaG9ydCBwYWNrYWdlIGRlZmF1bHQgZG91YmxlIHB1YmxpYyB0cnkgdGhpcyBzd2l0Y2ggY29udGludWUgdGhyb3dzIHByaXZpbGVnZWQgJyArXG4gICAgJ2FzcGVjdE9mIGFkdmljZWV4ZWN1dGlvbiBwcm9jZWVkIGNmbG93YmVsb3cgY2Zsb3cgaW5pdGlhbGl6YXRpb24gcHJlaW5pdGlhbGl6YXRpb24gJyArXG4gICAgJ3N0YXRpY2luaXRpYWxpemF0aW9uIHdpdGhpbmNvZGUgdGFyZ2V0IHdpdGhpbiBleGVjdXRpb24gZ2V0V2l0aGluVHlwZU5hbWUgaGFuZGxlciAnICtcbiAgICAndGhpc0pvaW5Qb2ludCB0aGlzSm9pblBvaW50U3RhdGljUGFydCB0aGlzRW5jbG9zaW5nSm9pblBvaW50U3RhdGljUGFydCBkZWNsYXJlIHBhcmVudHMgJyArXG4gICAgJ3dhcm5pbmcgZXJyb3Igc29mdCBwcmVjZWRlbmNlIHRoaXNBc3BlY3RJbnN0YW5jZSc7XG4gIGNvbnN0IFNIT1JUS0VZUyA9ICdnZXQgc2V0IGFyZ3MgY2FsbCc7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXNwZWN0SicsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC88XFwvfCMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC9cXC9cXCpcXCovLFxuICAgICAgICAvXFwqXFwvLyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBlYXQgdXAgQCdzIGluIGVtYWlscyB0byBwcmV2ZW50IHRoZW0gdG8gYmUgcmVjb2duaXplZCBhcyBkb2N0YWdzXG4gICAgICAgICAgICAgIGJlZ2luOiAvXFx3K0AvLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAvQFtBLVphLXpdKy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnYXNwZWN0JyxcbiAgICAgICAgZW5kOiAvW3s7PV0vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzo7XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzIHBlcnR5cGV3aXRoaW4gcGVydGhpcyBwZXJ0YXJnZXQgcGVyY2Zsb3diZWxvdyBwZXJjZmxvdyBpc3NpbmdsZXRvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoW15cXCldKi8sXG4gICAgICAgICAgICBlbmQ6IC9bKV0rLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyArICcgJyArIFNIT1JUS0VZUyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAga2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBpbGxlZ2FsOiAvWzpcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBBc3BlY3RKIENvbnN0cnVjdHNcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3BvaW50Y3V0IGFmdGVyIGJlZm9yZSBhcm91bmQgdGhyb3dpbmcgcmV0dXJuaW5nJyxcbiAgICAgICAgZW5kOiAvWyldLyxcbiAgICAgICAgZXhjbHVkZUVuZDogZmFsc2UsXG4gICAgICAgIGlsbGVnYWw6IC9bXCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogY29uY2F0KGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSwgL1xccypcXCgvKSxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFsgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9bOl0vLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgZW5kOiAvW3s7XS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZXhjbHVkZUVuZDogZmFsc2UsXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgaWxsZWdhbDogL1tcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBjb25jYXQoaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLCAvXFxzKlxcKC8pLFxuICAgICAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTICsgJyAnICsgU0hPUlRLRVlTLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMgcHJldmVudHMgJ25ldyBOYW1lKC4uLiksIG9yIHRocm93IC4uLicgZnJvbSBiZWluZyByZWNvZ25pemVkIGFzIGEgZnVuY3Rpb24gZGVmaW5pdGlvblxuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmV3IHRocm93JyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB0aGUgZnVuY3Rpb24gY2xhc3MgaXMgYSBiaXQgZGlmZmVyZW50IGZvciBBc3BlY3RKIGNvbXBhcmVkIHRvIHRoZSBKYXZhIGxhbmd1YWdlXG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46IC9cXHcrICtcXHcrKFxcLlxcdyspP1xccypcXChbXlxcKV0qXFwpXFxzKigodGhyb3dzKVtcXHdcXHMsXSspP1tcXHs7XS8sXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBlbmQ6IC9bezs9XS8sXG4gICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogY29uY2F0KGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSwgL1xccypcXCgvKSxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFsgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgLy8gYW5ub3RhdGlvbiBpcyBhbHNvIHVzZWQgaW4gdGhpcyBsYW5ndWFnZVxuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC9AW0EtWmEtel0rL1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3BlY3RqO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/aspectj.js\n");

/***/ })

}]);