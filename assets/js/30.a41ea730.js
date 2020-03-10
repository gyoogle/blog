(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{252:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cpp-입출력-실행속도-줄이는-법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpp-입출력-실행속도-줄이는-법"}},[t._v("#")]),t._v(" [Cpp] 입출력 실행속도 줄이는 법")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("p",[t._v("C++로 알고리즘 문제를 풀 때, "),a("code",[t._v("cin, cout")]),t._v("은 실행속도가 느리다. 하지만 최적화 방법을 이용하면 실행속도 단축에 효율적이다.")]),t._v(" "),a("p",[t._v("만약 "),a("code",[t._v("cin, cout")]),t._v("을 문제풀이에 사용하고 싶다면, 시간을 단축하고 싶다면 사용하자")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("최적화 시 거의 절반의 시간이 단축된다.\n")])])]),a("br"),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ios_base "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync_with_stdio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[a("code",[t._v("ios_base")]),t._v("는 c++에서 사용하는 iostream의 cin, cout 등을 함축한다.")]),t._v(" "),a("p",[a("code",[t._v("sync_with_stdio(false)")]),t._v("는 c언어의 stdio.h와 동기화하지만, 그 안에서 활용하는 printf, scanf, getchar, fgets, puts, putchar 등은 false로 동기화하지 않음을 뜻한다.")]),t._v(" "),a("br"),t._v(" "),a("p",[a("em",[a("strong",[t._v("주의")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("따라서, cin/scanf와 cout/printf를 같이 쓰면 문제가 발생하므로 조심하자\n")])])]),a("p",[t._v("또한, 이는 싱글 스레드 환경에서만 효율적일뿐(즉, 알고리즘 문제 풀이할 때) 실무에선 사용하지 말자")]),t._v(" "),a("p",[t._v("그리고 크게 차이 안나므로 그냥 "),a("code",[t._v("printf/scanf")]),t._v(" 써도 된다!")])])}),[],!1,null,null,null);s.default=e.exports}}]);