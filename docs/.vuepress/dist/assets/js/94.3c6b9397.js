(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{272:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"클린코드와-시큐어코딩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클린코드와-시큐어코딩"}},[t._v("#")]),t._v(" 클린코드와 시큐어코딩")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"전문가들이-표현한-클린코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전문가들이-표현한-클린코드"}},[t._v("#")]),t._v(" 전문가들이 표현한 '클린코드'")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("`한 가지를 제대로 한다.`\n\n`단순하고 직접적이다.`\n\n`특정 목적을 달성하는 방법은 하나만 제공한다.`\n\n`중복 줄이기, 표현력 높이기, 초반부터 간단한 추상화 고려하기 이 세가지가 비결`\n\n`코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로 수행하는 것`\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"클린코드란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클린코드란"}},[t._v("#")]),t._v(" 클린코드란?")]),t._v(" "),a("p",[t._v("코드를 작성하는 의도와 목적이 명확하며, 다른 사람이 쉽게 읽을 수 있어야 함")]),t._v(" "),a("blockquote",[a("p",[t._v("즉, 가독성이 좋아야 한다.")])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"가독성을-높인다는-것은"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가독성을-높인다는-것은"}},[t._v("#")]),t._v(" 가독성을 높인다는 것은?")]),t._v(" "),a("p",[t._v("다른 사람이 코드를 봐도, 자유롭게 수정이 가능하고 버그를 찾고 변경된 내용이 어떻게 상호작용하는지 이해하는 시간을 최소화 시키는 것...")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("클린코드를 만들기 위한 규칙이 있다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-네이밍-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-네이밍-naming"}},[t._v("#")]),t._v(" 1.네이밍(Naming)")]),t._v(" "),a("blockquote",[a("p",[t._v("변수, 클래스, 메소드에 의도가 분명한 이름을 사용한다.")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" elapsedTimeInDays"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" daysSinceCreation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fileAgeInDays"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("잘못된 정보를 전달할 수 있는 이름을 사용하지 않는다.")]),t._v(" "),a("p",[t._v("범용적으로 사용되는 단어 사용 X (aix, hp 등)")]),t._v(" "),a("p",[t._v("연속된 숫자나 불용어를 덧붙이는 방식은 피해야함")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_2-주석달기-comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-주석달기-comment"}},[t._v("#")]),t._v(" 2.주석달기(Comment)")]),t._v(" "),a("blockquote",[a("p",[t._v("코드를 읽는 사람이 코드를 작성한 사람만큼 잘 이해할 수 있도록 도와야 함")])]),t._v(" "),a("p",[t._v("주석은 반드시 달아야 할 이유가 있는 경우에만 작성하도록 한다.")]),t._v(" "),a("p",[t._v("즉, 코드를 빠르게 유추할 수 있는 내용에는 주석을 사용하지 않는 것이 좋다.")]),t._v(" "),a("p",[t._v("설명을 위한 설명은 달지 않는다.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 주어진 'name'으로 노드를 찾거나 아니면 null을 반환한다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 만약 depth <= 0이면 'subtree'만 검색한다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 만약 depth == N 이면 N 레벨과 그 아래만 검색한다.")]),t._v("\nNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindNodeInSubtree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" subtree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_3-꾸미기-aesthetics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-꾸미기-aesthetics"}},[t._v("#")]),t._v(" 3.꾸미기(Aesthetics)")]),t._v(" "),a("blockquote",[a("p",[t._v("보기좋게 배치하고 꾸민다. 보기 좋은 코드가 읽기도 좋다.")])]),t._v(" "),a("p",[t._v("규칙적인 들여쓰기와 줄바꿈으로 가독성을 향상시키자")]),t._v(" "),a("p",[t._v("일관성있고 간결한 패턴을 적용해 줄바꿈한다.")]),t._v(" "),a("p",[t._v("메소드를 이용해 불규칙한 중복 코드를 제거한다.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("클래스 전체를 하나의 그룹이라고 생각하지 말고, 그 안에서도 여러 그룹으로 나누는 것이 읽기에 좋다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_4-흐름제어-만들기-making-control-flow-easy-to-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-흐름제어-만들기-making-control-flow-easy-to-read"}},[t._v("#")]),t._v(" 4.흐름제어 만들기(Making control flow easy to read)")]),t._v(" "),a("br"),t._v(" "),a("ul",[a("li",[a("p",[t._v("왼쪽에는 변수를, 오른쪽에는 상수를 두고 비교")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bytes_received "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" bytest_expected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br")]),t._v(" "),a("li",[a("p",[t._v("부정이 아닌 긍정을 다루자")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a!=b는 부정")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// same")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// different")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br")]),t._v(" "),a("li",[a("p",[t._v("if/else를 사용하며, 삼항 연산자는 매우 간단한 경우만 사용")])]),t._v(" "),a("li",[a("p",[t._v("do/while 루프는 피하자")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_5-착한-함수-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-착한-함수-function"}},[t._v("#")]),t._v(" 5.착한 함수(Function)")]),t._v(" "),a("blockquote",[a("p",[t._v("함수는 가급적 작게, 한번에 하나의 작업만 수행하도록 작성")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("온라인 투표로 예를 들어보자")]),t._v(" "),a("p",[t._v("사용자가 추천을 하거나, 이미 선택한 추천을 변경하기 위해 버튼을 누르면 vote_change(old_vote, new_bote) 함수를 호출한다고 가정해보자")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("vote_changed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("old_vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_vote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_score")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" old_vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Up'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tscore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Down'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Down'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tscore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Up'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tscore "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old_vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Up'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_score")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("총점을 변경해주는 한 가지 역할을 하는 함수같지만, 두가지 일을 하고 있다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("old_vote와 new_vote의 상태에 따른 score 계산")])]),t._v(" "),a("li",[a("p",[t._v("총점을 계산")])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("별도로 함수로 분리하여 가독성을 향상시키자")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("vote_value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Up'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Down'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("vote_changed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("old_vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_vote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_score")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vote_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old_vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이전 값 제거")]),t._v("\n    score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vote_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 새로운 값 더함")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_score")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("훨씬 깔끔한 코드가 되었다!")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"코드리뷰-리팩토링"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코드리뷰-리팩토링"}},[t._v("#")]),t._v(" 코드리뷰 & 리팩토링")]),t._v(" "),a("p",[t._v("레거시 코드(테스트가 불가능하거나 어려운 코드)를 클린 코드로 만드는 방법")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("코드리뷰를 통해 냄새나는 코드를 발견")]),t._v("하면, "),a("strong",[t._v("리팩토링을 통해 점진적으로 개선")]),t._v("해나간다.")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"코드-인스펙션-code-inspection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#코드-인스펙션-code-inspection"}},[t._v("#")]),t._v(" 코드 인스펙션(code inspection)")]),t._v(" "),a("p",[t._v("작성한 개발 소스 코드를 분석하여 개발 표준에 위배되엇거나 잘못 작성된 부분을 수정하는 작업")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"절차-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#절차-과정"}},[t._v("#")]),t._v(" 절차 과정")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Planning : 계획 수립")])]),t._v(" "),a("li",[a("p",[t._v("Overview : 교육과 역할 정의")])]),t._v(" "),a("li",[a("p",[t._v("Preparation : 인스펙션을 위한 인터뷰, 산출물, 도구 준비")])]),t._v(" "),a("li",[a("p",[t._v("Meeting : 검토 회의로 각자 역할을 맡아 임무 수행")])]),t._v(" "),a("li",[a("p",[t._v("Rework : 발견한 결함을 수정하고 재검토 필요한지 여부 결정")])]),t._v(" "),a("li",[a("p",[t._v("Fellow-up : 보고된 결함 및 이슈가 수정되었는지 확인하고 시정조치 이행")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"리팩토링"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리팩토링"}},[t._v("#")]),t._v(" 리팩토링")]),t._v(" "),a("p",[t._v("냄새나는 코드를 점진적으로 반복 수행되는 과정을 통해 코드를 조금씩 개선해나가는 것")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"리팩토링-대상"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리팩토링-대상"}},[t._v("#")]),t._v(" 리팩토링 대상")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("메소드 정리 : 그룹으로 묶을 수 있는 코드, 수식을 메소드로 변경함")])]),t._v(" "),a("li",[a("p",[t._v("객체 간의 기능 이동 : 메소드 기능에 따른 위치 변경, 클래스 기능을 명확히 구분")])]),t._v(" "),a("li",[a("p",[t._v("데이터 구성 : 캡슐화 기법을 적용해 데이터 접근 관리")])]),t._v(" "),a("li",[a("p",[t._v("조건문 단순화 : 조건 논리를 단순하고 명확하게 작성")])]),t._v(" "),a("li",[a("p",[t._v("메소드 호출 단순화 : 메소드 이름이나 목적이 맞지 않을 때 변경")])]),t._v(" "),a("li",[a("p",[t._v("클래스 및 메소드 일반화 : 동일 기능 메소드가 여러개 있으면 수퍼클래스로 이동")])])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"리팩토링-진행-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리팩토링-진행-방법"}},[t._v("#")]),t._v(" 리팩토링 진행 방법")]),t._v(" "),a("p",[t._v("아키텍처 관점 시작 → 디자인 패턴 적용 → 단계적으로 하위 기능에 대한 변경으로 진행")]),t._v(" "),a("p",[t._v("의도하지 않은 기능 변경이나 버그 발생 대비해 회귀테스트 진행")]),t._v(" "),a("p",[t._v("이클립스와 같은 IDE 도구로 이용")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"시큐어-코딩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시큐어-코딩"}},[t._v("#")]),t._v(" 시큐어 코딩")]),t._v(" "),a("blockquote",[a("p",[t._v("안전한 소프트웨어를 개발하기 위해, 소스코드 등에 존재할 수 있는 잠재적인 보안약점을 제거하는 것")])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"보안-약점을-노려-발생하는-사고사례들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보안-약점을-노려-발생하는-사고사례들"}},[t._v("#")]),t._v(" 보안 약점을 노려 발생하는 사고사례들")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SQL 인젝션 취약점으로 개인유출 사고 발생")])]),t._v(" "),a("li",[a("p",[t._v("URL 파라미터 조작 개인정보 노출")])]),t._v(" "),a("li",[a("p",[t._v("무작위 대입공격 기프트카드 정보 유출")])])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"sql-인젝션-예시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-인젝션-예시"}},[t._v("#")]),t._v(" SQL 인젝션 예시")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("안전하지 않은 코드")])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("String query "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM users WHERE userid = \'"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" userid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\'"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AND password = \'"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\'"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nStatement stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createStatement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nResultSet rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("executeQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("ul",[a("li",[a("strong",[t._v("안전한 코드")])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("String query "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM users WHERE userid = ? + "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(' ?"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPrepareStatement stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prepareStatement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nResultSet rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("executeQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("적절한 검증 작업이 수행되어야 안전함")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("입력받는 값으 변수를 "),a("code",[t._v("$")]),t._v(" 대신 "),a("code",[t._v("#")]),t._v("을 사용하면서 바인딩 처리로 시큐어 코딩이 가능하다.")]),t._v(" "),a("br")])}),[],!1,null,null,null);s.default=e.exports}}]);