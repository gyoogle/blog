(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{448:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hook"}},[t._v("#")]),t._v(" React Hook")]),t._v(" "),s("blockquote",[s("p",[t._v("useState(), useEffect() 정의")])]),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcbKGwj%2FbtqC5pwunG7%2FYkaJ6YKK5YSESx7Gs2x410%2Fimg.jpg"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("리액트의 Component는 '클래스형'과 '함수형'으로 구성되어 있다.")]),t._v(" "),s("p",[t._v("기존의 클래스형 컴포넌트에서는 몇 가지 어려움이 존재한다.")]),t._v(" "),s("ol",[s("li",[t._v("상태(State) 로직 재사용 어려움")]),t._v(" "),s("li",[t._v("코드가 복잡해짐")]),t._v(" "),s("li",[t._v("관련 없는 로직들이 함께 섞여 있어 이해가 힘듬")])]),t._v(" "),s("p",[t._v("이와 같은 어려움을 해결하기 위해, 'Hook'이 도입되었다. (16.8 버전부터)")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook"}},[t._v("#")]),t._v(" Hook")]),t._v(" "),s("ul",[s("li",[t._v("함수형 컴포넌트에서 State와 Lifecycle 기능을 연동해주는 함수")]),t._v(" "),s("li",[t._v("'클래스형'에서는 동작하지 않으며, '함수형'에서만 사용 가능")])]),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),s("p",[t._v("기본적인 Hook으로 상태관리를 해야할 때 사용하면 된다.")]),t._v(" "),s("p",[t._v("상태를 변경할 때는, "),s("code",[t._v("set")]),t._v("으로 준 이름의 함수를 호출한다.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("posts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setPosts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비구조화 할당 문법")]),t._v("\n")])])]),s("p",[s("code",[t._v("useState([]);")]),t._v("와 같이 "),s("code",[t._v("( )")]),t._v(" 안에 초기화를 설정해줄 수 있다. 현재 예제는 빈 배열을 만들어 둔 상황인 것이다.")]),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),s("p",[t._v("컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook")]),t._v(" "),s("blockquote",[s("p",[t._v("'클래스' 컴포넌트의 componentDidMount()와 componentDidUpdate()의 역할을 동시에 한다고 봐도 된다.")])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"렌더링 완료"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("posts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("posts가 변경돼 리렌더링이 되면, useEffect가 실행된다.")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"참고자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" [참고자료]")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://ko.reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);