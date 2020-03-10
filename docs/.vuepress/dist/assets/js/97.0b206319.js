(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{259:function(v,_,t){"use strict";t.r(_);var r=t(19),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"객체지향-프로그래밍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#객체지향-프로그래밍"}},[v._v("#")]),v._v(" 객체지향 프로그래밍")]),v._v(" "),t("hr"),v._v(" "),t("br"),v._v(" "),t("p",[v._v("보통 OOP라고 많이 부른다. 객체지향은 수 없이 많이 들어왔지만, 이게 뭔지 설명해달라고 하면 말문이 막힐 때가 많다. 개념부터 살펴보자.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("객체지향 패러다임이 나오기 이전의 패러다임들부터 간단하게 살펴보자.")]),v._v(" "),t("p",[v._v("패러다임의 발전 과정을 보면 점점 개발자들이 "),t("strong",[v._v("편하게 개발할 수 있도록 개선되는 방식")]),v._v("으로 나아가고 있는 걸 확인할 수 있다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("가장 먼저 "),t("strong",[v._v("순차적, 비구조적 프로그래밍")]),v._v("이 있다.  말 그대로 순차적으로 코딩해나가는 것이다.")]),v._v(" "),t("p",[v._v("필요한 게 있으면 계속 순서대로 추가해가며 구현하는 방식이다. 직관적일 것처럼 생각되지만, 점점 규모가 커지게 되면 어떻게 될까?")]),v._v(" "),t("p",[v._v("이런 비구조적 프로그래밍에서는 "),t("strong",[v._v("goto문을 활용")]),v._v("한다. 만약 이전에 작성했던 코드가 다시 필요하면 그 곳으로 이동하기 위한 것이다. 점점 규모가 커지면 goto문을 무분별하게 사용하게 되고, 마치 실뜨기를 하는 것처럼 베베 꼬이게 된다. (코드 안에서 위로 갔다가 아래로 갔다가..뒤죽박죽) 나중에 코드가 어떻게 연결되어 있는지 확인조차 하지 못하게 될 문제점이 존재한다.")]),v._v(" "),t("blockquote",[t("p",[v._v("이러면, 코딩보다 흐름을 이해하는 데 시간을 다 소비할 가능성이 크다")])]),v._v(" "),t("p",[v._v("오늘날 수업을 듣거나 공부하면서 "),t("code",[v._v("goto문은 사용하지 않는게 좋다!")]),v._v("라는 말을 분명 들어봤을 것이다. goto문은 장기적으로 봤을 때 크게 도움이 되지 않는 구현 방식이기 때문에 그런 것이었다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("이런 문제점을 해결하기 위해 탄생한 것이 바로 "),t("strong",[v._v("절차적, 구조적 프로그래밍")]),v._v("이다. 이건 대부분 많이 들어본 패러다임일 것이다.")]),v._v(" "),t("p",[t("strong",[v._v("반복될 가능성이 있는 것들을 재사용이 가능한 함수(프로시저)로 만들어 사용")]),v._v("하는 프로그래밍 방식이다.")]),v._v(" "),t("p",[v._v("여기서 보통 절차라는 의미는 함수(프로시저)를 뜻하고, 구조는 모듈을 뜻한다. 모듈이 함수보다 더 작은 의미이긴 하지만, 요즘은 큰 틀로 같은 의미로 쓰이고 있다.")]),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"프로시저는-뭔가요"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로시저는-뭔가요"}},[v._v("#")]),v._v(" "),t("em",[v._v("프로시저는 뭔가요?")])]),v._v(" "),t("p",[v._v("반환값(리턴)이 따로 존재하지 않는 함수를 뜻한다. 예를 들면, printf와 같은 함수는 반환값을 얻기 위한 것보단, 화면에 출력하는 용도로 쓰이는 함수다. 이와 같은 함수를 프로시저로 부른다.")]),v._v(" "),t("p",[v._v("(정확히 말하면 printf는 int형을 리턴해주기는 함. 하지만 목적 자체는 프로시저에 가까움)")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("하지만 이런 패러다임도 문제점이 존재한다. 바로 "),t("code",[v._v("너무 추상적")]),v._v("이라는 것..")]),v._v(" "),t("p",[v._v("실제로 사용되는 프로그램들은 추상적이지만은 않다. 함수는 논리적 단위로 표현되지만, 실제 데이터에 해당하는 변수나 상수 값들은 물리적 요소로 되어있기 때문이다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("도서관리 프로그램이 있다고 가정해보자.")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("책에 해당하는 자료형(필드)를 구현해야 한다. \n또한 책과 관련된 함수를 구현해야 한다. \n구조적인 프로그래밍에서는 이들을 따로 만들어야 한다. \n결국 많은 데이터를 만들어야 할 때, 구분하기 힘들고 비효율적으로 코딩할 가능성이 높아진다.\n")])])]),t("p",[v._v("책에 대한 자료형, 책에 대한 함수가 물리적으론 같이 있을 수 있지만 (같은 위치에 기록)")]),v._v(" "),t("p",[v._v("논리적으로는 함께할 수 없는 구조가 바로 "),t("code",[v._v("구조적 프로그래밍")]),v._v("이다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("따라서, 이를 한번에 묶기 위한 패러다임이 탄생한다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("바로 "),t("strong",[v._v("객체지향 프로그래밍")]),v._v("이다.")]),v._v(" "),t("p",[v._v("우리가 vo를 만들 때와 같은 형태다. 클래스마다 필요한 필드를 선언하고, getter와 setter로 구성된 모습으로 해결한다. 바로 "),t("strong",[v._v("특정한 개념의 함수와 자료형을 함께 묶어서 관리하기 위해 탄생")]),v._v("한 것!")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("가장 중요한 점은, "),t("strong",[v._v("객체 내부에 자료형(필드)와 함수(메소드)가 같이 존재하는 것")]),v._v("이다.")]),v._v(" "),t("p",[v._v("이제 도서관리 프로그램을 만들 때, 해당하는 책의 제목, 저자, 페이지와 같은 자료형과 읽기, 예약하기 등 메소드를 '책'이라는 객체에 한번에 묶어서 저장하는 것이 가능해졌다.")]),v._v(" "),t("p",[v._v("이처럼 가능한 모든 물리적, 논리적 요소를 객체로 만드려는 것이 "),t("code",[v._v("객체지향 프로그래밍")]),v._v("이라고 말할 수 있다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("객체지향으로 구현하게 되면, 객체 간의 독립성이 생기고 중복코드의 양이 줄어드는 장점이 있다. 또한 독립성이 확립되면 유지보수에도 도움이 될 것이다.")]),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"특징"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[v._v("#")]),v._v(" 특징")]),v._v(" "),t("p",[v._v("객체지향의 패러다임이 생겨나면서 크게 4가지 특징을 갖추게 되었다.")]),v._v(" "),t("p",[v._v("이 4가지 특성을 잘 이해하고 구현해야 객체를 통한 효율적인 구현이 가능해진다.")]),v._v(" "),t("br"),v._v(" "),t("ol",[t("li",[t("h4",{attrs:{id:"추상화-abstraction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#추상화-abstraction"}},[v._v("#")]),v._v(" 추상화(Abstraction)")]),v._v(" "),t("blockquote",[t("p",[v._v("필요로 하는 속성이나 행동을 추출하는 작업")])]),v._v(" "),t("p",[v._v("추상적인 개념에 의존하여 설계해야 유연함을 갖출 수 있다.")]),v._v(" "),t("p",[v._v("즉, 세부적인 사물들의 공통적인 특징을 파악한 후 하나의 집합으로 만들어내는 것이 추상화다")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("ex. 아우디, BMW, 벤츠는 모두 '자동차'라는 공통점이 있다.\n\n자동차라는 추상화 집합을 만들어두고, 자동차들이 가진 공통적인 특징들을 만들어 활용한다.\n")])])]),t("p",[t("em",[t("strong",[v._v("'왜 필요하죠?'")])])]),v._v(" "),t("p",[v._v("예를 들면, '현대'와 같은 다른 자동차 브랜드가 추가될 수도 있다. 이때 추상화로 구현해두면 다른 곳의 코드는 수정할 필요 없이 추가로 만들 부분만 새로 생성해주면 된다.")]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"캡슐화-encapsulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#캡슐화-encapsulation"}},[v._v("#")]),v._v(" 캡슐화(Encapsulation)")]),v._v(" "),t("blockquote",[t("p",[v._v("낮은 결합도를 유지할 수 있도록 설계하는 것")])]),v._v(" "),t("p",[v._v("쉽게 말하면, "),t("strong",[v._v("한 곳에서 변화가 일어나도 다른 곳에 미치는 영향을 최소화 시키는 것")]),v._v("을 말한다.")]),v._v(" "),t("p",[v._v("(객체가 내부적으로 기능을 어떻게 구현하는지 감추는 것!)")]),v._v(" "),t("p",[v._v("결합도가 낮도록 만들어야 하는 이유가 무엇일까? "),t("strong",[v._v("결합도(coupling)란, 어떤 기능을 실행할 때 다른 클래스나 모듈에 얼마나 의존적인가를 나타내는 말")]),v._v("이다.")]),v._v(" "),t("p",[v._v("즉, 독립적으로 만들어진 객체들 간의 의존도가 최대한 낮게 만드는 것이 중요하다. 객체들 간의 의존도가 높아지면 굳이 객체 지향으로 설계하는 의미가 없어진다.")]),v._v(" "),t("p",[v._v("우리는 소프트웨어 공학에서 "),t("strong",[v._v("객체 안의 모듈 간의 요소가 밀접한 관련이 있는 것으로 구성하여 응집도를 높이고 결합도를 줄여야 요구사항 변경에 대처하는 좋은 설계 방법")]),v._v("이라고 배운다.")]),v._v(" "),t("p",[v._v("이것이 바로 "),t("code",[v._v("캡슐화")]),v._v("와 크게 연관된 부분이라고 할 수 있다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("그렇다면, 캡슐화는 어떻게 높은 응집도와 낮은 결합도를 갖게 할까?")]),v._v(" "),t("p",[v._v("바로 "),t("strong",[v._v("정보 은닉")]),v._v("을 활용한다.")]),v._v(" "),t("p",[v._v("외부에서 접근할 필요가 없는 것들은 private으로 접근하지 못하도록 제한을 두는 것이다.")]),v._v(" "),t("p",[v._v("(객체안의 필드를 선언할 때 private으로 선언하라는 말이 바로 이 때문!!)")]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"상속"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#상속"}},[v._v("#")]),v._v(" 상속")]),v._v(" "),t("blockquote",[t("p",[v._v("일반화 관계(Generalization)라고도 하며, 여러 개체들이 지닌 공통된 특성을 부각시켜 하나의 개념이나 법칙으로 성립하는 과정")])]),v._v(" "),t("p",[v._v("일반화(상속)은 또 다른 캡슐화다.")]),v._v(" "),t("p",[t("strong",[v._v("자식 클래스를 외부로부터 은닉하는 캡슐화의 일종")]),v._v("이라고 말할 수 있다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("아까 자동차를 통해 예를 들어 추상화를 설명했었다. 여기에 추가로 대리 운전을 하는 사람 클래스가 있다고 생각해보자. 이때, 자동차의 자식 클래스에 해당하는 벤츠, BMW, 아우디 등은 캡슐화를 통해 은닉해둔 상태다.\n"),t("br")]),v._v(" "),t("p",[v._v("사람 클래스의 관점으로는, 구체적인 자동차의 종류가 숨겨져 있는 상태다. 대리 운전자 입장에서는 자동차의 종류가 어떤 것인지는 운전하는데 크게 중요하지 않다.")]),v._v(" "),t("p",[v._v("새로운 자동차들이 추가된다고 해도, 사람 클래스는 영향을 받지 않는 것이 중요하다. 그러므로 캡슐화를 통해 사람 클래스 입장에서는 확인할 수 없도록 구현하는 것이다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("이처럼, 상속 관계에서는 단순히 하나의 클래스 안에서 속성 및 연산들의 캡슐화에 한정되지 않는다. 즉, 자식 클래스 자체를 캡슐화하여 '사람 클래스'와 같은 외부에 은닉하는 것으로 확장되는 것이다.")]),v._v(" "),t("p",[v._v("이처럼 자식 클래스를 캡슐화해두면, 외부에선 이러한 클래스들에 영향을 받지 않고 개발을 이어갈 수 있는 장점이 있다.")]),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"상속-재사용의-단점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#상속-재사용의-단점"}},[v._v("#")]),v._v(" 상속 재사용의 단점")]),v._v(" "),t("p",[v._v("상속을 통한 재사용을 할 때 나타나는 단점도 존재한다.")]),v._v(" "),t("ol",[t("li",[v._v("상위 클래스(부모 클래스)의 변경이 어려워진다.")])]),v._v(" "),t("blockquote",[t("p",[v._v("부모 클래스에 의존하는 자식 클래스가 많을 때, 부모 클래스의 변경이 필요하다면?")]),v._v(" "),t("p",[v._v("이를 의존하는 자식 클래스들이 영향을 받게 된다.")])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("불필요한 클래스가 증가할 수 있다.")])]),v._v(" "),t("blockquote",[t("p",[v._v("유사기능 확장시, 필요 이상의 불필요한 클래스를 만들어야 하는 상황이 발생할 수 있다.")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("상속이 잘못 사용될 수 있다.")])]),v._v(" "),t("blockquote",[t("p",[v._v("같은 종류가 아닌 클래스의 구현을 재사용하기 위해 상속을 받게 되면, 문제가 발생할 수 있다. 상속 받는 클래스가 부모 클래스와 IS-A 관계가 아닐 때 이에 해당한다.")])]),v._v(" "),t("br"),v._v(" "),t("p",[t("em",[t("strong",[v._v("해결책은?")])])]),v._v(" "),t("p",[v._v("객체 조립(Composition), 컴포지션이라고 부르기도 한다.")]),v._v(" "),t("p",[v._v("객체 조립은, "),t("strong",[v._v("필드에서 다른 객체를 참조하는 방식으로 구현")]),v._v("된다.")]),v._v(" "),t("p",[v._v("상속에 비해 비교적 런타임 구조가 복잡해지고, 구현이 어려운 단점이 존재하지만 변경 시 유연함을 확보하는데 장점이 매우 크다.")]),v._v(" "),t("p",[v._v("따라서 같은 종류가 아닌 클래스를 상속하고 싶을 때는 객체 조립을 우선적으로 적용하는 것이 좋다.")]),v._v(" "),t("br"),v._v(" "),t("p",[t("em",[t("strong",[v._v("그럼 상속은 언제 사용?")])])]),v._v(" "),t("ul",[t("li",[v._v("IS-A 관계가 성립할 때")]),v._v(" "),t("li",[v._v("재사용 관점이 아닌, 기능의 확장 관점일 때")])]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"다형성-polymorphism"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#다형성-polymorphism"}},[v._v("#")]),v._v(" 다형성(Polymorphism)")]),v._v(" "),t("blockquote",[t("p",[v._v("서로 다른 클래스의 객체가 같은 메시지를 받았을 때 각자의 방식으로 동작하는 능력")])]),v._v(" "),t("p",[v._v("객체 지향의 핵심과도 같은 부분이다.")]),v._v(" "),t("p",[v._v("다형성은, 상속과 함께 활용할 때 큰 힘을 발휘한다. 이와 같은 구현은 코드를 간결하게 해주고, 유연함을 갖추게 해준다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("즉, "),t("strong",[v._v("부모 클래스의 메소드를 자식 클래스가 오버라이딩해서 자신의 역할에 맞게 활용하는 것이 다형성")]),v._v("이다.")]),v._v(" "),t("p",[v._v("이처럼 다형성을 사용하면, 구체적으로 현재 어떤 클래스 객체가 참조되는 지는 무관하게 프로그래밍하는 것이 가능하다.")]),v._v(" "),t("p",[v._v("상속 관계에 있으면, 새로운 자식 클래스가 추가되어도 부모 클래스의 함수를 참조해오면 되기 때문에 다른 클래스는 영향을 받지 않게 된다.")])])]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"객체-지향-설계-과정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#객체-지향-설계-과정"}},[v._v("#")]),v._v(" 객체 지향 설계 과정")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("제공해야 할 기능을 찾고 세분화한다. 그리고 그 기능을 알맞은 객체에 할당한다.")])]),v._v(" "),t("li",[t("p",[v._v("기능을 구현하는데 필요한 데이터를 객체에 추가한다.")])]),v._v(" "),t("li",[t("p",[v._v("그 데이터를 이용하는 기능을 넣는다.")])]),v._v(" "),t("li",[t("p",[v._v("기능은 최대한 캡슐화하여 구현한다.")])]),v._v(" "),t("li",[t("p",[v._v("객체 간에 어떻게 메소드 요청을 주고받을 지 결정한다.")])])]),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"객체-지향-설계-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#객체-지향-설계-원칙"}},[v._v("#")]),v._v(" 객체 지향 설계 원칙")]),v._v(" "),t("p",[v._v("SOLID라고 부르는 5가지 설계 원칙이 존재한다.")]),v._v(" "),t("ol",[t("li",[t("h4",{attrs:{id:"srp-single-responsibility-단일-책임-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#srp-single-responsibility-단일-책임-원칙"}},[v._v("#")]),v._v(" SRP(Single Responsibility) - 단일 책임 원칙")]),v._v(" "),t("p",[v._v("클래스는 단 한 개의 책임을 가져야 한다.")]),v._v(" "),t("p",[v._v("클래스를 변경하는 이유는 단 한개여야 한다.")]),v._v(" "),t("p",[v._v("이를 지키지 않으면, 한 책임의 변경에 의해 다른 책임과 관련된 코드에 영향이 갈 수 있다.")]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"ocp-open-closed-개방-폐쇄-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ocp-open-closed-개방-폐쇄-원칙"}},[v._v("#")]),v._v(" OCP(Open-Closed) - 개방-폐쇄 원칙")]),v._v(" "),t("p",[v._v("확장에는 열려 있어야 하고, 변경에는 닫혀 있어야 한다.")]),v._v(" "),t("p",[v._v("기능을 변경하거나 확장할 수 있으면서, 그 기능을 사용하는 코드는 수정하지 않는다.")]),v._v(" "),t("p",[v._v("이를 지키지 않으면, instanceof와 같은 연산자를 사용하거나 다운 캐스팅이 일어난다.")]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"lsp-liskov-substitution-리스코프-치환-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lsp-liskov-substitution-리스코프-치환-원칙"}},[v._v("#")]),v._v(" LSP(Liskov Substitution) - 리스코프 치환 원칙")]),v._v(" "),t("p",[v._v("상위 타입의 객체를 하위 타입의 객체로 치환해도, 상위 타입을 사용하는 프로그램은 정상적으로 동작해야 한다.")]),v._v(" "),t("p",[v._v("상속 관계가 아닌 클래스들을 상속 관계로 설정하면, 이 원칙이 위배된다.")]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"isp-interface-segregation-인터페이스-분리-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isp-interface-segregation-인터페이스-분리-원칙"}},[v._v("#")]),v._v(" ISP(Interface Segregation) - 인터페이스 분리 원칙")]),v._v(" "),t("p",[v._v("인터페이스는 그 인터페이스를 사용하는 클라이언트를 기준으로 분리해야 한다.")]),v._v(" "),t("p",[v._v("각 클라이언트가 필요로 하는 인터페이스들을 분리함으로써, 각 클라이언트가 사용하지 않는 인터페이스에 변경이 발생하더라도 영향을 받지 않도록 만들어야 한다.")]),v._v(" "),t("br")]),v._v(" "),t("li",[t("h4",{attrs:{id:"dip-dependency-inversion-의존-역전-원칙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dip-dependency-inversion-의존-역전-원칙"}},[v._v("#")]),v._v(" DIP(Dependency Inversion) - 의존 역전 원칙")]),v._v(" "),t("p",[v._v("고수준 모듈은 저수준 모듈의 구현에 의존해서는 안된다.")]),v._v(" "),t("p",[v._v("저수준 모듈이 고수준 모듈에서 정의한 추상 타입에 의존해야 한다.")]),v._v(" "),t("p",[v._v("즉, 저수준 모듈이 변경돼도 고수준 모듈은 변경할 필요가 없는 것이다.")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);