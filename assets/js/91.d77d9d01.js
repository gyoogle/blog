(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{460:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"세마포어-semaphore-뮤텍스-mutex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#세마포어-semaphore-뮤텍스-mutex"}},[t._v("#")]),t._v(" 세마포어(Semaphore) & 뮤텍스(Mutex)")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("p",[t._v("공유된 자원에 여러 프로세스가 동시에 접근하면서 문제가 발생할 수 있다. 이때 공유된 자원의 데이터는 한 번에 하나의 프로세스만 접근할 수 있도록 제한을 둬야 한다.")]),t._v(" "),a("p",[t._v("이를 위해 나온 것이 바로 "),a("strong",[t._v("'세마포어'")])]),t._v(" "),a("p",[a("strong",[t._v("세마포어")]),t._v(" : 멀티프로그래밍 환경에서 공유 자원에 대한 접근을 제한하는 방법")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"임계-구역-critical-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임계-구역-critical-section"}},[t._v("#")]),t._v(" 임계 구역(Critical Section)")]),t._v(" "),a("p",[t._v("여러 프로세스가 데이터를 공유하며 수행될 때, "),a("strong",[t._v("각 프로세스에서 공유 데이터를 접근하는 프로그램 코드 부분")])]),t._v(" "),a("p",[t._v("공유 데이터를 여러 프로세스가 동시에 접근할 때 잘못된 결과를 만들 수 있기 때문에, 한 프로세스가 임계 구역을 수행할 때는 다른 프로세스가 접근하지 못하도록 해야 한다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"세마포어-p-v-연산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#세마포어-p-v-연산"}},[t._v("#")]),t._v(" 세마포어 P, V 연산")]),t._v(" "),a("p",[t._v("P : 임계 구역 들어가기 전에 수행\n( 프로세스 진입 여부를 자원의 개수(S)를 통해 결정)")]),t._v(" "),a("p",[t._v("V : 임계 구역에서 나올 때 수행\n( 자원 반납 알림, 대기 중인 프로세스를 깨우는 신호 )")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"구현-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구현-방법"}},[t._v("#")]),t._v(" 구현 방법")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --- 임계 구역 ---")]),t._v("\n\nV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("procedure")]),t._v(" P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e 최초 S값은 1임")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" S"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" wait  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e S가 0면 1이 될때까지 기다려야 함")]),t._v("\n    S :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e S를 0로 만들어 다른 프로세스가 들어 오지 못하도록 함")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" P\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--- 임계 구역 ---")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("procedure")]),t._v(" V"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e 현재상태는 S가 0임")]),t._v("\n    S :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--\x3e S를 1로 원위치시켜 해제하는 과정")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" V\n")])])]),a("p",[t._v("이를 통해, 한 프로세스가 P 혹은 V를 수행하고 있는 동안 프로세스가 인터럽트 당하지 않게 된다.\nP와 V를 사용하여 임계 구역에 대한 상호배제 구현이 가능하게 되었다.")]),t._v(" "),a("br"),t._v(" "),a("p",[a("em",[a("strong",[t._v("예시")])])]),t._v(" "),a("blockquote",[a("p",[t._v("최초 S 값은 1이고, 현재 해당 구역을 수행할 프로세스 A, B가 있다고 가정하자")])]),t._v(" "),a("ol",[a("li",[t._v("먼저 도착한 A가 P(S)를 실행하여 S를 0으로 만들고 임계구역에 들어감")]),t._v(" "),a("li",[t._v("그 뒤에 도착한 B가 P(S)를 실행하지만 S가 0이므로 대기 상태")]),t._v(" "),a("li",[t._v("A가 임계구역 수행을 마치고 V(S)를 실행하면 S는 다시 1이 됨")]),t._v(" "),a("li",[t._v("B는 이제 P(S)에서 while문을 빠져나올 수 있고, 임계구역으로 들어가 수행함")])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("뮤텍스")]),t._v(" : 임계 구역을 가진 스레드들의 실행시간이 서로 겹치지 않고 각각 단독으로 실행되게 하는 기술")]),t._v(" "),a("blockquote",[a("p",[t._v("상호 배제("),a("strong",[t._v("Mut")]),t._v("ual "),a("strong",[t._v("Ex")]),t._v("clusion)의 약자임")])]),t._v(" "),a("p",[t._v("해당 접근을 조율하기 위해 lock과 unlock을 사용한다.")]),t._v(" "),a("ul",[a("li",[t._v("lock : 현재 임계 구역에 들어갈 권한을 얻어옴 ( 만약 다른 프로세스/스레드가 임계 구역 수행 중이면 종료할 때까지 대기 )")]),t._v(" "),a("li",[t._v("unlock : 현재 임계 구역을 모두 사용했음을 알림. ( 대기 중인 다른 프로세스/스레드가 임계 구역에 진입할 수 있음 )")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("뮤텍스는 상태가 0, 1로 "),a("strong",[t._v("이진 세마포어")]),t._v("로 부르기도 함")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"뮤텍스-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뮤텍스-알고리즘"}},[t._v("#")]),t._v(" 뮤텍스 알고리즘")]),t._v(" "),a("ol",[a("li",[a("h4",{attrs:{id:"데커-dekker-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데커-dekker-알고리즘"}},[t._v("#")]),t._v(" 데커(Dekker) 알고리즘")]),t._v(" "),a("p",[t._v("flag와 turn 변수를 통해 임계 구역에 들어갈 프로세스/스레드를 결정하는 방식")]),t._v(" "),a("ul",[a("li",[t._v("flag : 프로세스 중 누가 임계영역에 진입할 것인지 나타내는 변수")]),t._v(" "),a("li",[t._v("turn : 누가 임계구역에 들어갈 차례인지 나타내는 변수")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 프로세스 i가 임계 구역 진입 시도")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 프로세스 j가 현재 임계 구역에 있는지 확인")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("turn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// j가 임계 구역 사용 중이면")]),t._v("\n            flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 프로세스 i 진입 취소")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("turn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// turn이 j에서 변경될 때까지 대기")]),t._v("\n            flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// j turn이 끝나면 다시 진입 시도")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ------- 임계 구역 ---------")]),t._v("\n\nturn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 임계 구역 사용 끝나면 turn을 넘김")]),t._v("\nflag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// flag 값을 false로 바꿔 임계 구역 사용 완료를 알림")]),t._v("\n")])])]),a("br")]),t._v(" "),a("li",[a("h4",{attrs:{id:"피터슨-peterson-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#피터슨-peterson-알고리즘"}},[t._v("#")]),t._v(" 피터슨(Peterson) 알고리즘")]),t._v(" "),a("p",[t._v("데커와 유사하지만, 상대방 프로세스/스레드에게 진입 기회를 양보하는 것에 차이가 있음")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 프로세스 i가 임계 구역 진입 시도")]),t._v("\n    turn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 다른 프로세스에게 진입 기회 양보")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" turn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 다른 프로세스가 진입 시도하면 대기")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ------- 임계 구역 ---------")]),t._v("\n\nflag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// flag 값을 false로 바꿔 임계 구역 사용 완료를 알림")]),t._v("\n")])])]),a("br")]),t._v(" "),a("li",[a("h4",{attrs:{id:"제과점-bakery-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제과점-bakery-알고리즘"}},[t._v("#")]),t._v(" 제과점(Bakery) 알고리즘")]),t._v(" "),a("p",[t._v("여러 프로세스/스레드에 대한 처리가 가능한 알고리즘. 가장 작은 수의 번호표를 가지고 있는 프로세스가 임계 구역에 진입한다.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    isReady"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 번호표 받을 준비")]),t._v("\n    number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 현재 실행 중인 프로세스 중에 가장 큰 번호 배정 ")]),t._v("\n    isReady"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 번호표 수령 완료")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 모든 프로세스 번호표 비교")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isReady"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비교 프로세스가 번호표 받을 때까지 대기")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 프로세스 j가 번호표 가지고 있어야 함")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 프로세스 j의 번호표 < 프로세스 i의 번호표")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ------- 임계 구역 ---------")]),t._v("\n\nnumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 임계 구역 사용 종료")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);