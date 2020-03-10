(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{283:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-js-라이프사이클"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-라이프사이클"}},[t._v("#")]),t._v(" Vue.js 라이프사이클")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("무작정 프로젝트를 진행하면서 적용하다보니, 라이프사이클을 제대로 몰라서 애를 먹고있다. Vue가 가지는 라이프사이클을 제대로 이해하고 넘어가보자.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Vue.js의 라이프사이클은 크게 4가지로 나누어진다.")]),t._v(" "),s("blockquote",[s("p",[t._v("Creation, Mounting, Updating, Destruction")])]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://miro.medium.com/max/700/1*tnSXRrpLBYmfHnIagITlcg.png"}}),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creation"}},[t._v("#")]),t._v(" Creation")]),t._v(" "),s("blockquote",[s("p",[t._v("컴포넌트 초기화 단계")])]),t._v(" "),s("p",[t._v("Creation 단계에서 실행되는 훅(hook)들이 라이프사이클 중 가장 먼저 실행됨")]),t._v(" "),s("p",[t._v("아직 컴포넌트가 DOM에 추가되기 전이며 서버 렌더링에서도 지원되는 훅임")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("클라이언트와 서버 렌더링 모두에서 처리해야 할 일이 있으면, 이 단계에 적용하자")]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"beforecreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),s("p",[t._v("가장 먼저 실행되는 훅")]),t._v(" "),s("p",[t._v("아직 데이터나 이벤트가 세팅되지 않은 시점이므로 접근 불가능")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),s("p",[t._v("데이터, 이벤트가 활성화되어 접근이 가능함")]),t._v(" "),s("p",[t._v("하지만 아직 템플릿과 virtual DOM은 마운트 및 렌더링 되지 않은 상태임")])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"mounting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mounting"}},[t._v("#")]),t._v(" Mounting")]),t._v(" "),s("blockquote",[s("p",[t._v("DOM 삽입 단계")])]),t._v(" "),s("p",[t._v("초기 렌더링 직전 컴포넌트에 직접 접근이 가능하다.")]),t._v(" "),s("p",[t._v("컴포넌트 초기에 세팅되어야할 데이터들은 created에서 사용하는 것이 나음")]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"beforemount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),s("p",[t._v("템플릿이나 렌더 함수들이 컴파일된 후에 첫 렌더링이 일어나기 직전에 실행됨")]),t._v(" "),s("p",[t._v("많이 사용하지 않음")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),s("p",[t._v("컴포넌트, 템플릿, 렌더링된 DOM에 접근이 가능함")]),t._v(" "),s("p",[t._v("모든 화면이 렌더링 된 후에 실행")])])]),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"주의할-점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#주의할-점"}},[t._v("#")]),t._v(" 주의할 점")]),t._v(" "),s("p",[t._v("부모와 자식 관계의 컴포넌트에서 생각한 순서대로 mounted가 발생하지 않는다. 즉, 부모의 mounted가 자식의 mounted보다 먼저 실행되지 않음")]),t._v(" "),s("blockquote",[s("p",[t._v("부모는 자식의 mounted 훅이 끝날 때까지 기다림")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"updating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[t._v("#")]),t._v(" Updating")]),t._v(" "),s("blockquote",[s("p",[t._v("렌더링 단계")])]),t._v(" "),s("p",[t._v("컴포넌트에서 사용되는 반응형 속성들이 변경되거나 다시 렌더링되면 실행됨")]),t._v(" "),s("p",[t._v("디버깅을 위해 컴포넌트가 다시 렌더링되는 시점을 알고 싶을때 사용 가능")]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"beforeupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),s("p",[t._v("컴포넌트의 데이터가 변하여 업데이트 사이클이 시작될 때 실행됨")]),t._v(" "),s("p",[t._v("(돔이 재 렌더링되고 패치되기 직전 상태)")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),s("p",[t._v("컴포넌트의 데이터가 변하여 다시 렌더링된 이후에 실행됨")]),t._v(" "),s("p",[t._v("업데이트가 완료된 상태이므로, DOM 종속적인 연산이 가능")])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"destruction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destruction"}},[t._v("#")]),t._v(" Destruction")]),t._v(" "),s("blockquote",[s("p",[t._v("해체 단계")])]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"beforedestory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforedestory"}},[t._v("#")]),t._v(" beforeDestory")]),t._v(" "),s("p",[t._v("해체되기 직전에 호출됨")]),t._v(" "),s("p",[t._v("이벤트 리스너를 제거하거나 reactive subscription을 제거하고자 할 때 유용함")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"destroyed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),s("p",[t._v("해체된 이후에 호출됨")]),t._v(" "),s("p",[t._v("Vue 인스턴스의 모든 디렉티브가 바인딩 해제되고 모든 이벤트 리스너가 제거됨")])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"추가로-사용하는-속성들"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가로-사용하는-속성들"}},[t._v("#")]),t._v(" 추가로 사용하는 속성들")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),s("p",[t._v("템플릿에 데이터 바인딩할 수 있음")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('원본 메시지: "{{ message }}"'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('역순으로 표시한 메시지: "{{ reversedMessage }}"'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'안녕하세요'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      computed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 계산된 getter")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reversedMessage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `this` 는 vm 인스턴스를 가리킵니다.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("message의 값이 바뀌면, reversedMessage의 값도 따라 바뀜")])]),t._v(" "),s("br"),t._v(" "),s("p",[s("code",[t._v("Date.now()")]),t._v("와 같이 의존할 곳이 없는 computed 속성은 업데이트 안됨")])])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("computed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//업데이트 불가능")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("호출할 때마다 변경된 시간을 이용하고 싶으면 methods 이용")]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("p",[t._v("데이터가 변경되었을 때 호출되는 콜백함수를 정의")]),t._v(" "),s("p",[t._v("watch는 감시할 데이터를 지정하고, 그 데이터가 바뀌면 어떠한 함수를 실행하라는 방식으로 진행")])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"computed와-watch로-진행한-코드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed와-watch로-진행한-코드"}},[t._v("#")]),t._v(" computed와 watch로 진행한 코드")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("//computed\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        firstName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lastName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bar'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      computed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fullName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("br"),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("//watch\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        firstName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lastName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        fullName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Foo Bar'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      watch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("firstName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lastName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" val\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("computed는 선언형, watch는 명령형 프로그래밍 방식")]),t._v(" "),s("p",[t._v("watch를 사용하면 API를 호출하고, 그 결과에 대한 응답을 받기 전 중간 상태를 설정할 수 있으나 computed는 불가능")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("대부분의 경우 선언형 방식인 computed 사용이 더 좋으나, 데이터 변경의 응답으로 비동기식 계산이 필요한 경우나 시간이 많이 소요되는 계산을 할 때는 watch를 사용하는 것이 좋다.")])])}),[],!1,null,null,null);a.default=e.exports}}]);