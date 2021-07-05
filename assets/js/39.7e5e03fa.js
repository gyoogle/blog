(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{420:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java-고유-락-intrinsic-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-고유-락-intrinsic-lock"}},[t._v("#")]),t._v(" [Java] 고유 락 (Intrinsic Lock)")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"intrinsic-lock-synchronized-block-reentrancy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intrinsic-lock-synchronized-block-reentrancy"}},[t._v("#")]),t._v(" Intrinsic Lock / Synchronized Block / Reentrancy")]),t._v(" "),a("p",[t._v("Intrinsic Lock (= monitor lock = monitor) : Java의 모든 객체는 lock을 갖고 있음.")]),t._v(" "),a("p",[a("em",[t._v("Synchronized 블록은 Intrinsic Lock을 이용해서, Thread의 접근을 제어함.")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thread-safe 하지 않은 연산")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h5",{attrs:{id:"q-count-문이-atomic-연산인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-count-문이-atomic-연산인가"}},[t._v("#")]),t._v(" Q) ++count 문이 atomic 연산인가?")]),t._v(" "),a("p",[t._v("A) read (count 값을 읽음) -> modify (count 값 수정) -> write (count 값 저장)의 과정에서, 여러 Thread가 "),a("strong",[t._v("공유 자원(count)으로 접근할 수 있으므로, 동시성 문제가 발생")]),t._v("함.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"synchronized-블록을-사용한-thread-safe-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-블록을-사용한-thread-safe-case"}},[t._v("#")]),t._v(" Synchronized 블록을 사용한 Thread-safe Case")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" lock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 모든 객체가 가능 (Lock이 있음)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 단계 (1)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lock을 이용하여, count 변수에의 접근을 막음")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n        단계 (2)\n        synchronized(this) { // this도 객체이므로 lock으로 사용 가능\n        \treturn ++count;\n        }\n        */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    단계 (3)\n    public synchronized int increase() {\n    \treturn ++count;\n    }\n    */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[t._v("단계 3과 같이 "),a("em",[t._v("lock 생성 없이 synchronized 블록 구현 가능")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"reentrancy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reentrancy"}},[t._v("#")]),t._v(" Reentrancy")]),t._v(" "),a("p",[t._v("재진입 : Lock을 획득한 Thread가 같은 Lock을 얻기 위해 대기할 필요가 없는 것")]),t._v(" "),a("p",[t._v("(Lock의 획득이 '"),a("strong",[t._v("호출 단위")]),t._v("'가 아닌 "),a("strong",[t._v("Thread 단위")]),t._v("로 일어나는 것)")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reentrancy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b가 Synchronized로 선언되어 있더라도, a 진입시 lock을 획득하였음.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b를 호출할 수 있게 됨.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reentrancy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"structured-lock-vs-reentrant-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structured-lock-vs-reentrant-lock"}},[t._v("#")]),t._v(" Structured Lock vs Reentrant Lock")]),t._v(" "),a("p",[a("strong",[t._v("Structured Lock (구조적 Lock) : 고유 lock을 이용한 동기화")])]),t._v(" "),a("p",[t._v("(Synchronized 블록 단위로 lock의 획득 / 해제가 일어나므로)")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("따라서,")]),t._v(" "),a("p",[t._v("A획득 -> B획득 -> B해제 -> A해제는 가능하지만,")]),t._v(" "),a("p",[t._v("A획득 -> B획득 -> A해제 -> B해제는 불가능함.")]),t._v(" "),a("p",[t._v("이것을 가능하게 하기 위해서는 "),a("strong",[t._v("Reentrant Lock (명시적 Lock) 을 사용")]),t._v("해야 함.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"visibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visibility"}},[t._v("#")]),t._v(" Visibility")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("가시성 : 여러 Thread가 동시에 작동하였을 때, 한 Thread가 쓴 값을 다른 Thread가 볼 수 있는지, 없는지 여부")])]),t._v(" "),a("li",[a("p",[t._v("문제 : 하나의 Thread가 쓴 값을 다른 Thread가 볼 수 있느냐 없느냐. (볼 수 없으면 문제가 됨)")])]),t._v(" "),a("li",[a("p",[t._v("Lock : Structure Lock과 Reentrant Lock은 Visibility를 보장.")])]),t._v(" "),a("li",[a("p",[t._v("원인 :")])])]),t._v(" "),a("ol",[a("li",[t._v("최적화를 위해 Compiler나 CPU에서 발생하는 코드 재배열로 인해서.")]),t._v(" "),a("li",[t._v("CPU core의 cache 값이 Memory에 제때 쓰이지 않아 발생하는 문제.")])]),t._v(" "),a("br")])}),[],!1,null,null,null);s.default=r.exports}}]);