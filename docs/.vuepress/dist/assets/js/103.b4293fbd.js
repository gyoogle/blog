(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{256:function(a,t,s){"use strict";s.r(t);var n=s(19),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"싱글톤-패턴-singleton-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#싱글톤-패턴-singleton-pattern"}},[a._v("#")]),a._v(" 싱글톤 패턴(Singleton pattern)")]),a._v(" "),s("hr"),a._v(" "),s("br"),a._v(" "),s("blockquote",[s("p",[a._v("애플리케이션이 시작될 때, 어떤 클래스가 최초 한 번만 메모리를 할당(static)하고 해당 메모리에 인스턴스를 만들어 사용하는 패턴")])]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("즉, 싱글톤 패턴은 '하나'의 인스턴스만 생성하여 사용하는 디자인 패턴이다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("인스턴스가 필요할 때, 똑같은 인스턴스를 만들지 않고 기존의 인스턴스를 활용하는 것!\n")])])]),s("br"),a._v(" "),s("p",[a._v("생성자가 여러번 호출되도, 실제로 생성되는 객체는 하나이며 최초로 생성된 이후에 호출된 생성자는 이미 생성한 객체를 반환시키도록 만드는 것이다")]),a._v(" "),s("p",[a._v("(java에서는 생성자를 private으로 선언해 다른 곳에서 생성하지 못하도록 만들고, getInstance() 메소드를 통해 받아서 사용하도록 구현한다)")]),a._v(" "),s("br"),a._v(" "),s("h4",{attrs:{id:"왜-쓰나요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#왜-쓰나요"}},[a._v("#")]),a._v(" "),s("em",[a._v("왜 쓰나요?")])]),a._v(" "),s("p",[a._v("먼저, 객체를 생성할 때마다 메모리 영역을 할당받아야 한다. 하지만 한번의 new를 통해 객체를 생성한다면 메모리 낭비를 방지할 수 있다.")]),a._v(" "),s("p",[a._v("또한 싱글톤으로 구현한 인스턴스는 '전역'이므로, 다른 클래스의 인스턴스들이 데이터를 공유하는 것이 가능한 장점이 있다.")]),a._v(" "),s("br"),a._v(" "),s("h4",{attrs:{id:"많이-사용하는-경우가-언제인가요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#많이-사용하는-경우가-언제인가요"}},[a._v("#")]),a._v(" "),s("em",[a._v("많이 사용하는 경우가 언제인가요?")])]),a._v(" "),s("p",[a._v("주로 공통된 객체를 여러개 생성해서 사용해야하는 상황")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("데이터베이스에서 커넥션풀, 스레드풀, 캐시, 로그 기록 객체 등\n")])])]),s("p",[a._v("안드로이드 앱 : 각 액티비티 들이나, 클래스마다 주요 클래스들을 하나하나 전달하는게 번거롭기 때문에 싱글톤 클래스를 만들어 어디서든 접근하도록 설계")]),a._v(" "),s("p",[a._v("또한 인스턴스가 절대적으로 한 개만 존재하는 것을 보증하고 싶을 때 사용함")]),a._v(" "),s("br"),a._v(" "),s("h4",{attrs:{id:"단점도-있나요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단점도-있나요"}},[a._v("#")]),a._v(" "),s("em",[a._v("단점도 있나요?")])]),a._v(" "),s("p",[a._v("객체 지향 설계 원칙 중에 "),s("code",[a._v("개방-폐쇄 원칙")]),a._v("이란 것이 존재한다.")]),a._v(" "),s("p",[a._v("만약 싱글톤 인스턴스가 혼자 너무 많은 일을 하거나, 많은 데이터를 공유시키면 다른 클래스들 간의 결합도가 높아지게 되는데, 이때 개방-폐쇄 원칙이 위배된다.")]),a._v(" "),s("p",[a._v("결합도가 높아지게 되면, 유지보수가 힘들고 테스트도 원활하게 진행할 수 없는 문제점이 발생한다.")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("또한, 멀티 스레드 환경에서 동기화 처리를 하지 않았을 때, 인스턴스가 2개가 생성되는 문제도 발생할 수 있다.")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("따라서, 반드시 싱글톤이 필요한 상황이 아니면 지양하는 것이 좋다고 한다. (설계 자체에서 싱글톤 활용을 원활하게 할 자신이 있으면 괜찮음)")]),a._v(" "),s("br"),a._v(" "),s("br"),a._v(" "),s("h3",{attrs:{id:"멀티스레드-환경에서-안전한-싱글톤-만드는-법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#멀티스레드-환경에서-안전한-싱글톤-만드는-법"}},[a._v("#")]),a._v(" 멀티스레드 환경에서 안전한 싱글톤 만드는 법")]),a._v(" "),s("hr"),a._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"lazy-initialization-게으른-초기화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-initialization-게으른-초기화"}},[a._v("#")]),a._v(" Lazy Initialization (게으른 초기화)")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),a._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n     \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("private static으로 인스턴스 변수 만듬")]),a._v(" "),s("p",[a._v("private으로 생성자를 만들어 외부에서의 생성을 막음")]),a._v(" "),s("p",[a._v("synchronized 동기화를 활용해 스레드를 안전하게 만듬")]),a._v(" "),s("blockquote",[s("p",[a._v("하지만, synchronized는 큰 성능저하를 발생시키므로 권장하지 않는 방법")])]),a._v(" "),s("br")]),a._v(" "),s("li",[s("h4",{attrs:{id:"lazy-initialization-double-checked-locking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-initialization-double-checked-locking"}},[a._v("#")]),a._v(" Lazy Initialization + Double-checked Locking")]),a._v(" "),s("blockquote",[s("p",[a._v("1번의 성능저하를 완화시키는 방법")])]),a._v(" "),s("br"),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),a._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                    instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadSafe_Lazy_Initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("br"),a._v(" "),s("p",[a._v("1번과는 달리, 먼저 조건문으로 인스턴스의 존재 여부를 확인한 다음 두번째 조건문에서 synchronized를 통해 동기화를 시켜 인스턴스를 생성하는 방법")]),a._v(" "),s("p",[a._v("스레드를 안전하게 만들면서, 처음 생성  이후에는 synchronized를 실행하지 않기 때문에 성능저하 완화가 가능함")]),a._v(" "),s("blockquote",[s("p",[a._v("하지만 완전히 완벽한 방법은 아님")])]),a._v(" "),s("br")]),a._v(" "),s("li",[s("h4",{attrs:{id:"initialization-on-demand-holder-idiom-holder에-의한-초기화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialization-on-demand-holder-idiom-holder에-의한-초기화"}},[a._v("#")]),a._v(" Initialization on demand holder idiom (holder에 의한 초기화)")]),a._v(" "),s("p",[a._v("클래스 안에 클래스(holder)를 두어 JVM의 클래스 로더 매커니즘과 클래스가 로드되는 시점을 이용한 방법")]),a._v(" "),s("br"),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Something")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Something")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LazyHolder")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Something")]),a._v(" INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Something")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Something")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LazyHolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("br"),a._v(" "),s("p",[a._v("2번처럼 동기화를 사용하지 않는 방법을 안하는 이유는, 개발자가 직접 동기화 문제에 대한 코드를 작성하면서 회피하려고 하면 프로그램 구조가 그만큼 복잡해지고 비용 문제가 발생할 수 있음. 또한 코드 자체가 정확하지 못할 때도 많음")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("이 때문에, 3번과 같은 방식으로 JVM의 클래스 초기화 과정에서 보장되는 "),s("code",[a._v("원자적 특성")]),a._v("을 이용해 싱글톤의 초기화 문제에 대한 책임을 JVM에게 떠넘기는 걸 활용함")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("클래스 안에 선언한 클래스인 holder에서 선언된 인스턴스는 static이기 때문에 클래스 로딩시점에서 한번만 호출된다. 또한 final을 사용해서 다시 값이 할당되지 않도록 만드는 방식을 사용한 것")]),a._v(" "),s("blockquote",[s("p",[a._v("실제로 가장 많이 사용되는 일반적인 싱글톤 클래스 사용 방법이 3번이다.")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);