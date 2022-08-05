(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{313:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"c-구조체-메모리-크기-struct-memory-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-구조체-메모리-크기-struct-memory-size"}},[t._v("#")]),t._v(" [C] 구조체 메모리 크기 (Struct Memory Size)")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("typedef struct 선언 시, 변수 선언에 대한 메모리 공간 크기에 대해 알아보자")]),t._v(" "),s("blockquote",[s("p",[t._v("기업 필기 테스트에서 자주 나오는 유형이기도 함")])]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("char")]),t._v(" : 1바이트")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("int")]),t._v(" : 4바이트")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("double")]),t._v(" : 8바이트")])])]),t._v(" "),s("br"),t._v(" "),s("p",[s("code",[t._v("sizeof")]),t._v(" 메소드를 통해 해당 변수의 사이즈를 알 수 있음")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"크기-계산"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크기-계산"}},[t._v("#")]),t._v(" 크기 계산")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("student")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"메모리 크기 = %d/n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("char는 1바이트고, int는 4바이트라서 5바이트가 필요하다.")]),t._v(" "),s("p",[t._v("하지만 메모리 공간은 5가 아닌 "),s("strong",[t._v("8이 찍힐 것이다")]),t._v(".")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("Why?")])])]),t._v(" "),s("p",[t._v("구조체가 메모리 공간을 잡는 원리에는 크게 두가지 규칙이 있다.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("각각의 멤버를 저장하기 위해서는 "),s("strong",[t._v("기본 4바이트 단위로 구성")]),t._v("된다. (4의 배수 단위)\n즉, char 데이터 1개를 저장할 때 이 1개의 데이터를 읽어오기 위해서 1바이트를 읽어오는 것이 아니라 이 데이터가 포함된 '4바이트'를 읽는다.")])]),t._v(" "),s("li",[s("p",[t._v("구조체 각 멤버 중에서 가장 큰 멤버의 크기에 영향을 받는다.")])])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이 규칙이 적용된 메모리 공간은 아래와 같을 것이다.")]),t._v(" "),s("p",[t._v("a는 char형이지만, 기본 4바이트 단위 구성으로 인해 3바이트의 여유공간이 생긴다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://camo.githubusercontent.com/f9eb14b84377841df883b2cacf184484a55a3bdb/687474703a2f2f706f737466696c6573322e6e617665722e6e65742f32303135303933305f3137372f736861726f6e6963686f79615f3134343335393934313737333865614371355f504e472f254231254238254331254236254333254243254335254139254231254532332e706e673f747970653d7732"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("그렇다면 이와 같을 때는 어떨까?")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("student")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("img",{attrs:{src:"https://camo.githubusercontent.com/2a254912497d190fe86f7b02ecfa6fec10d17a48/687474703a2f2f706f737466696c657331352e6e617665722e6e65742f32303135303933305f31342f736861726f6e6963686f79615f31343433353939363631323436424777654b5f504e472f254231254437254238254232312e706e673f747970653d7732"}}),t._v(" "),s("p",[t._v("똑같이 8바이트가 필요하며, char형으로 선언된 a,b가 4바이트 안에 함께 들어가고 2바이트의 여유 공간이 생긴다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이제부터 헷갈리는 경우다.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("student")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("구성은 같지만, 순서가 다르다.")]),t._v(" "),s("p",[t._v("자료타입은 일치하지만, 선언된 순서에 따라 할당되는 메모리 공간이 아래와 같이 달라진다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://camo.githubusercontent.com/7aa49bc03def2071d08449ddc3868211569f4ff6/687474703a2f2f706f737466696c657331352e6e617665722e6e65742f32303135303933305f3134322f736861726f6e6963686f79615f313434333539393736333537346a6b734b575f504e472f254231254437254238254232322e706e673f747970653d7732"}}),t._v(" "),s("p",[t._v("이 경우에는 총 12바이트가 필요하게 된다.")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("student")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("두 규칙이 모두 적용되는 상황이다. b가 double로 8바이트이므로 기본 공간이 8바이트로 설정된다. 하지만 a와 c는 8바이트로 해결이 가능하기 때문에 16바이트로 해결이 가능하다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://camo.githubusercontent.com/47fb0019805cb35b0ad936883a9a075adcbcb11c/687474703a2f2f706f737466696c6573342e6e617665722e6e65742f32303135303933305f38332f736861726f6e6963686f79615f3134343336303031393230353658494163345f504e472f254231254437254238254232342e706e673f747970653d7732"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" [참고자료]")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://blog.naver.com/PostView.nhn?blogId=sharonichoya&logNo=220495444611",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);