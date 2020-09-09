(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{505:function(e,t,r){"use strict";r.r(t);var a=r(27),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rest-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[e._v("#")]),e._v(" REST API")]),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),r("blockquote",[r("p",[e._v("REST : 웹 (HTTP) 의 장점을 활용한 아키텍쳐")])]),e._v(" "),r("h3",{attrs:{id:"_1-rest-representational-state-transfer-기본"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-rest-representational-state-transfer-기본"}},[e._v("#")]),e._v(" 1. REST (REpresentational State Transfer) 기본")]),e._v(" "),r("ul",[r("li",[r("h3",{attrs:{id:"rest의-요소"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest의-요소"}},[e._v("#")]),e._v(" REST의 요소")]),e._v(" "),r("ul",[r("li",[r("h4",{attrs:{id:"method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#method"}},[e._v("#")]),e._v(" Method")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Method")]),e._v(" "),r("th",[e._v("의미")]),e._v(" "),r("th",[e._v("Idempotent")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("POST")]),e._v(" "),r("td",[e._v("Create")]),e._v(" "),r("td",[e._v("No")])]),e._v(" "),r("tr",[r("td",[e._v("GET")]),e._v(" "),r("td",[e._v("Select")]),e._v(" "),r("td",[e._v("Yes")])]),e._v(" "),r("tr",[r("td",[e._v("PUT")]),e._v(" "),r("td",[e._v("Update")]),e._v(" "),r("td",[e._v("Yes")])]),e._v(" "),r("tr",[r("td",[e._v("DELETE")]),e._v(" "),r("td",[e._v("Delete")]),e._v(" "),r("td",[e._v("Yes")])])])]),e._v(" "),r("blockquote",[r("p",[e._v("Idempotent : 한 번 수행하냐, 여러 번 수행했을 때 결과가 같나?")])]),e._v(" "),r("br")]),e._v(" "),r("li",[r("h4",{attrs:{id:"resource"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[e._v("#")]),e._v(" Resource")]),e._v(" "),r("ul",[r("li",[e._v("http://myweb/users와 같은 URI")]),e._v(" "),r("li",[e._v("모든 것을 Resource (명사)로 표현하고, 세부 Resource에는 id를 붙임")])]),e._v(" "),r("br")]),e._v(" "),r("li",[r("h4",{attrs:{id:"message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[e._v("#")]),e._v(" Message")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("메시지 포맷이 존재")]),e._v(" "),r("p",[e._v(": JSON, XML 과 같은 형태가 있음 (최근에는 JSON 을 씀)")]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('HTTP POST, http://myweb/users/\n{\n\t"users" : {\n\t\t"name" : "terry"\n\t}\n}\n')])])])])]),e._v(" "),r("br")])])]),e._v(" "),r("li",[r("h3",{attrs:{id:"rest-특징"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-특징"}},[e._v("#")]),e._v(" REST 특징")]),e._v(" "),r("ul",[r("li",[r("h4",{attrs:{id:"uniform-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uniform-interface"}},[e._v("#")]),e._v(" Uniform Interface")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("HTTP 표준만 맞는다면, 어떤 기술도 가능한 Interface 스타일")]),e._v(" "),r("p",[e._v("예) REST API 정의를 HTTP + JSON로 하였다면, C, Java, Python, IOS 플랫폼 등 특정 언어나 기술에 종속 받지 않고, 모든 플랫폼에 사용이 가능한 Loosely Coupling 구조")])]),e._v(" "),r("li",[r("p",[e._v("포함")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Self-Descriptive Messages")]),e._v(" "),r("ul",[r("li",[e._v("API 메시지만 보고, API를 이해할 수 있는 구조 (Resource, Method를 이용해 무슨 행위를 하는지 직관적으로 이해할 수 있음)")])])]),e._v(" "),r("li",[r("p",[e._v("HATEOAS(Hypermedia As The Engine Of Application State)")]),e._v(" "),r("ul",[r("li",[e._v("Application의 상태(State)는 Hyperlink를 통해 전이되어야 함.")]),e._v(" "),r("li",[e._v("서버는 현재 이용 가능한 다른 작업에 대한 하이퍼링크를 포함하여 응답해야 함.")])])]),e._v(" "),r("li",[r("p",[e._v("Resource Identification In Requests")])]),e._v(" "),r("li",[r("p",[e._v("Resource Manipulation Through Representations")])])])])])]),e._v(" "),r("li",[r("h4",{attrs:{id:"statelessness"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#statelessness"}},[e._v("#")]),e._v(" Statelessness")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("즉, HTTP Session과 같은 컨텍스트 저장소에 "),r("strong",[r("u",[e._v("상태 정보 저장 안함")])])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Request만 Message로 처리")]),e._v("하면 되고, 컨텍스트 정보를 신경쓰지 않아도 되므로, "),r("strong",[e._v("구현이 단순해짐")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("따라서, REST API 실행중 실패가 발생한 경우, Transaction 복구를 위해 기존의 상태를 저장할 필요가 있다. (POST Method 제외)")])])])]),e._v(" "),r("li",[r("h4",{attrs:{id:"resource-지향-아키텍쳐-roa-resource-oriented-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource-지향-아키텍쳐-roa-resource-oriented-architecture"}},[e._v("#")]),e._v(" Resource 지향 아키텍쳐 (ROA : Resource Oriented Architecture)")]),e._v(" "),r("ul",[r("li",[e._v("Resource 기반의 복수형 명사 형태의 정의를 권장.")])])]),e._v(" "),r("li",[r("h4",{attrs:{id:"client-server-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-server-architecture"}},[e._v("#")]),e._v(" Client-Server Architecture")])]),e._v(" "),r("li",[r("h4",{attrs:{id:"cache-ability"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-ability"}},[e._v("#")]),e._v(" Cache Ability")])]),e._v(" "),r("li",[r("h4",{attrs:{id:"layered-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#layered-system"}},[e._v("#")]),e._v(" Layered System")])]),e._v(" "),r("li",[r("h4",{attrs:{id:"code-on-demand-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-on-demand-optional"}},[e._v("#")]),e._v(" Code On Demand(Optional)")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);