(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{418:function(t,a,s){"use strict";s.r(a);var n=s(29),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"error-exception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-exception"}},[t._v("#")]),t._v(" Error & Exception")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"goal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("Error와 Exception의 차이점에 대해 설명할 수 있다.")]),t._v(" "),s("li",[t._v("Exception Handling을 할 수 있다.")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Error와 Exception은 같다고 생각할 수도 있지만 사실 큰 차이가 있습니다.")]),t._v(" "),s("p",[s("strong",[t._v("Error")]),t._v(" 는 컴파일 시 문법적인 오류와 런타임 시 널포인트 참조와 같은 오류로 프로세스에 심각한 문제를 야기 시켜 프로세스를 종료 시킬 수 있습니다.")]),t._v(" "),s("p",[s("strong",[t._v("Exception")]),t._v(" 은 컴퓨터 시스템의 동작 도중 예기치 않았던 이상 상태가 발생하여 수행 중인 프로그램이 영향을 받는 것우로 예를 들면, 연산 도중 넘침에 의해 발생한 끼어들기 등이 이에 해당합니다.")]),t._v(" "),s("p",[t._v("프로그램이 실행 중 어떤 원인에 의해서 오작동을 하거나 비정상적으로 종료되는 경우를 프로그램 오류라 하고, 프로그램 오류에는 에러(error)와 예외(exception) 두 가지로 구분할 수 있습니다. 에러는 메모리 부족이나 스택오버플로우와 같이 발생하면 복구할 수 없는 심각한 오류이고, 예외는 발생하더라도 수습할 수 있는 비교적 덜 심각한 오류입니다. 이 예외는 프로그래머가 적절히 코드를 작성해주면 비정상적인 종류를 막을 수 있습니다.")]),t._v(" "),s("p",[t._v("Error의 상황을 미리 미연에 방지하기 위해서 Exception 상황을 만들 수 있으며, java에서는 try-catch문으로 Exception handling을 할 수 있습니다.")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"exception-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-handling"}},[t._v("#")]),t._v(" Exception Handling")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("잘못된 하나로 인해 전체 시스템이 무너지는 결과를 방지하기 위한 기술적인 처리입니다. JAVA에서는 예외와 에러도 객체로 처리합니다.")]),t._v(" "),s("h5",{attrs:{id:"예외가-주로-발생하는-원인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예외가-주로-발생하는-원인"}},[t._v("#")]),t._v(" 예외가 주로 발생하는 원인")]),t._v(" "),s("ul",[s("li",[t._v("사용자의 잘못된 데이터 입력")]),t._v(" "),s("li",[t._v("잘못된 연산")]),t._v(" "),s("li",[t._v("개발자가 로직을 잘못 작성")]),t._v(" "),s("li",[t._v("하드웨어, 네트워크 오작동")]),t._v(" "),s("li",[t._v("시스템 과부하")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"throwable-클래스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throwable-클래스"}},[t._v("#")]),t._v(" Throwable 클래스")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-error-exception-001.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Throwable 클래스는 예외처리를 할 수 있는 최상위 클래스입니다. Exception과 Error는 Throwable의 상속을 받습니다.")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"error-에러"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-에러"}},[t._v("#")]),t._v(" Error (에러)")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-error-exception-003.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Error는 시스템 레벨에서 발생하여, 개발자가 어떻게 조치할 수 없는 수준을 의미합니다.")]),t._v(" "),s("br"),t._v(" "),s("ul",[s("li",[t._v("OutOfMemoryError : JVM에 설정된 메모리의 한계를 벗어난 상황일 때 발생합니다. 힙 사이즈가 부족하거나, 너무 많은 class를 로드할때, 가용가능한 swap이 없을때, 큰 메모리의 native메소드가 호출될 때 등이 있습니다. 이를 해결하기위해 dump 파일분석, jvm 옵션 수정 등이 있습니다.")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"exception-예외"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-예외"}},[t._v("#")]),t._v(" Exception (예외)")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-error-exception-002.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("예외는 개발자가 구현한 로직에서 발생하며 개발자가 다른 방식으로 처리가능한 것들로 JVM은 정상 동작합니다.")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"exception의-2가지-종류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception의-2가지-종류"}},[t._v("#")]),t._v(" Exception의 2가지 종류")]),t._v(" "),s("hr"),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("Checked Exception")]),t._v(" : 예외처리가 필수이며, 처리하지 않으면 컴파일되지 않습니다. JVM 외부와 통신(네트워크, 파일시스템 등)할 때 주로 쓰입니다.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("RuntimeException 이외에 있는 모든 예외")])]),t._v(" "),s("li",[s("p",[t._v("IOException, SQLException 등")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Unchecked Exception")]),t._v(" : 컴파일 때 체크되지 않고, Runtime에 발생하는 Exception을 말합니다.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("RuntimeException 하위의 모든 예외")])]),t._v(" "),s("li",[s("p",[t._v("NullPointerException, IndexOutOfBoundException 등")])])])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"대표적인-exception-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#대표적인-exception-class"}},[t._v("#")]),t._v(" 대표적인 Exception Class")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("NullPointerException")]),t._v(" : Null 레퍼런스를 참조할때 발생, 뭔가 동작시킬 때 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("IndexOutOfBoundsException")]),t._v(" : 배열과 유사한 자료구조(문자열, 배열, 자료구조)에서 범위를 벗어난 인덱스 번호 사용으로 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("FormatException")]),t._v(' : 문자열, 숫자, 날짜 변환 시 잘못된 데이터(ex. "123A" -> 123 으로 변환 시)로 발생하며, 보통 사용자의 입력, 외부 데이터 로딩, 결과 데이터의 변환 처리에서 자주 발생합니다.')])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ArthmeticException")]),t._v(" : 정수를 0으로 나눌때 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ClassCastException")]),t._v(" : 변환할 수 없는 타입으로 객체를 변환할 때 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("IllegalArgumentException")]),t._v(" : 잘못된 인자 전달 시 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("IOException")]),t._v(" : 입출력 동작 실패 또는 인터럽트 시 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("IllegalStateException")]),t._v(" : 객체의 상태가 매소드 호출에는 부적절한 경우에 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ConcurrentModificationException")]),t._v(" : 금지된 곳에서 객체를 동시에 수정하는것이 감지될 경우 발생합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("UnsupportedOperationException")]),t._v(" : 객체가 메소드를 지원하지 않는 경우 발생합니다.")])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"주요-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#주요-method"}},[t._v("#")]),t._v(" 주요 Method")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("printStackTrace()")]),t._v(" : 발생한 Exception의 출처를 메모리상에서 추적하면서 결과를 알려줍니다. 발생한 위치를 정확히 출력해줘서 제일 많이 쓰며 void를 반환합니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("getMessage()")]),t._v(" : 한줄로 요약된 메세지를 String으로 반환해줍니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("getStackTrace()")]),t._v(" : jdk1.4 부터 지원, printStackTrace()를 보완, StackTraceElement[] 이라는 문자열 배열로 변경해서 출력하고 저장합니다.")])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"exception-handling-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-handling-2"}},[t._v("#")]),t._v(" Exception Handling")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("JAVA에서 모든 예외가 발생하면 (XXX)Exception 객체를 생성합니다. 예외를 처리하는 방법에는 크게 2가지가 있습니다.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("직접 "),s("code",[t._v("try ~ catch")]),t._v(" 를 이용해서 예외에 대한 최종적인 책임을 지고 처리하는 방식")])]),t._v(" "),s("li",[s("p",[t._v("throws Exception 을 이용해서 발생한 예외의 책임을 호출하는 쪽이 책임지도록 하는 방식 (주로 호출하는 쪽에 예외를 보고할 때 사용합니다.)")])])]),t._v(" "),s("p",[t._v("다른 메소드의 일부분으로 동작하는 경우엔 던지는 것을 추천합니다.")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"예외-잡기-try-catch-구문"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예외-잡기-try-catch-구문"}},[t._v("#")]),t._v(" 예외 잡기 (try ~ catch 구문)")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("로직 중에 예외가 발생할지도 모르는 부분에 try ~ catch 구문으로 보험 처리합니다.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("try")]),t._v(" 에는 위험한 로직이 들어가고, "),s("code",[t._v("catch")]),t._v(" 에는 예외 발생 시 수행할 로직이 들어갑니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("try")]),t._v(" 중이라도 예외가 발생한 다음의 코드들은 실행되지 않으며 "),s("code",[t._v("catch")]),t._v(" 구문으로 넘어갑니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("catch")]),t._v(" 구문은 "),s("code",[t._v("else if")]),t._v(" 처럼 여러개 쓸 수 있습니다.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("finally")]),t._v(" 는 마지막에 실행하고 싶은 로직이 들어가며, 대표적으로 "),s("code",[t._v(".close()")]),t._v(" 가 있습니다.")])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"예외-던지기-throws-구문"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예외-던지기-throws-구문"}},[t._v("#")]),t._v(" 예외 던지기 (throws 구문)")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("예외 처리를 현재 메소드가 직접 처리하지 않고 호출한 곳에다가 예외의 발생 여부를 통보합니다. 호출한 메소드는 이걸 또 던질건지 직접 처리할 건지 정해야합니다. (return보다 강력합니다.)")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("실행 결과는 아래와 같습니다.")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" in thread "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ArithmeticException")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" by zero\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call_A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThrowsEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"참고-자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://drcarter.tistory.com/153",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://movefast.tistory.com/12?category=765934",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://sjh836.tistory.com/122",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);