(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{516:function(v,_,t){"use strict";t.r(_);var r=t(27),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"브라우저-동작-방법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-동작-방법"}},[v._v("#")]),v._v(" 브라우저 동작 방법")]),v._v(" "),t("hr"),v._v(" "),t("br"),v._v(" "),t("p",[t("em",[t("strong",[v._v('"브라우저가 어떻게 동작하는지 아세요?"')])])]),v._v(" "),t("p",[v._v("웹 서핑하다보면 우리는 여러 url을 통해 사이트를 돌아다닌다. 이 url이 입력되었을 때 어떤 과정을 거쳐서 출력되는걸까?")]),v._v(" "),t("p",[v._v("web의 기본적인 개념이지만 설명하기 무지 어렵다.. 렌더링..? 파싱..?")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("브라우저 주소 창에 "),t("a",{attrs:{href:"http://naver.com",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://naver.com"),t("OutboundLink")],1),v._v("을 입력했을 때 어떤 과정을 거쳐서 네이버 페이지가 화면에 보이는 지 알아보자")]),v._v(" "),t("blockquote",[t("p",[v._v("오픈 소스 브라우저(크롬, 파이어폭스, 사파리 등)로 접속했을 때로 정리")])]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"브라우저-주요-기능"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-주요-기능"}},[v._v("#")]),v._v(" 브라우저 주요 기능")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("사용자가 선택한 자원을 서버에 요청, 브라우저에 표시")]),v._v(" "),t("p",[v._v("자원은 html 문서, pdf, image 등 다양한 형태")]),v._v(" "),t("p",[v._v("자원의 주소는 URI에 의해 정해짐")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("브라우저는 html과 css 명세에 따라 html 파일을 해석해서 표시함")]),v._v(" "),t("p",[v._v("이 '명세'는 웹 표준화 기구인 "),t("code",[v._v("W3C(World wide web Consortium)")]),v._v("에서 정해짐")]),v._v(" "),t("blockquote",[t("p",[v._v("예전 브라우저들은 일부만 명세에 따라 구현하고 독자적 방법으로 확장했음")]),v._v(" "),t("p",[v._v("(결국 "),t("strong",[v._v("심각한 호환성 문제")]),v._v(" 발생... 그래서 요즘은 대부분 모두 표준 명세를 따름)")])]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("브라우저가 가진 인터페이스는 보통 비슷비슷한 요소들이 존재")]),v._v(" "),t("blockquote",[t("p",[v._v("시간이 지나면서, 사용자에게 필요한 서비스들로 서로 모방하며 갖춰지게 된 것")])]),v._v(" "),t("ul",[t("li",[v._v("URI 입력하는 주소 표시 줄")]),v._v(" "),t("li",[v._v("이전 버튼, 다음 버튼")]),v._v(" "),t("li",[v._v("북마크(즐겨찾기)")]),v._v(" "),t("li",[v._v("새로 고침 버튼")]),v._v(" "),t("li",[v._v("홈 버튼")])]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"브라우저-기본-구조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-기본-구조"}},[v._v("#")]),v._v(" 브라우저 기본 구조")]),v._v(" "),t("hr"),v._v(" "),t("img",{attrs:{src:"https://d2.naver.com/content/images/2015/06/helloworld-59361-1.png"}}),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"사용자-인터페이스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용자-인터페이스"}},[v._v("#")]),v._v(" 사용자 인터페이스")]),v._v(" "),t("p",[v._v("주소 표시줄, 이전/다음 버튼, 북마크 등 사용자가 활용하는 서비스들\n(요청한 페이지를 보여주는 창을 제외한 나머지 부분)")]),v._v(" "),t("h4",{attrs:{id:"브라우저-엔진"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-엔진"}},[v._v("#")]),v._v(" 브라우저 엔진")]),v._v(" "),t("p",[v._v("사용자 인터페이스와 렌더링 엔진 사이의 동작 제어")]),v._v(" "),t("h4",{attrs:{id:"렌더링-엔진"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#렌더링-엔진"}},[v._v("#")]),v._v(" 렌더링 엔진")]),v._v(" "),t("p",[v._v("요청한 콘텐츠 표시 (html 요청이 들어오면? → html, css 파싱해서 화면에 표시)")]),v._v(" "),t("h4",{attrs:{id:"통신"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#통신"}},[v._v("#")]),v._v(" 통신")]),v._v(" "),t("p",[v._v("http 요청과 같은 네트워크 호출에 사용\n(플랫폼의 독립적인 인터페이스로 구성되어있음)")]),v._v(" "),t("h4",{attrs:{id:"ui-백엔드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui-백엔드"}},[v._v("#")]),v._v(" UI 백엔드")]),v._v(" "),t("p",[v._v("플랫폼에서 명시하지 않은 일반적 인터페이스. 콤보 박스 창같은 기본적 장치를 그림")]),v._v(" "),t("h4",{attrs:{id:"자바스크립트-해석기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트-해석기"}},[v._v("#")]),v._v(" 자바스크립트 해석기")]),v._v(" "),t("p",[v._v("자바스크립트 코드를 해석하고 실행")]),v._v(" "),t("h4",{attrs:{id:"자료-저장소"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자료-저장소"}},[v._v("#")]),v._v(" 자료 저장소")]),v._v(" "),t("p",[v._v("쿠키 등 모든 종류의 자원을 하드 디스크에 저장하는 계층")]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"렌더링이란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#렌더링이란"}},[v._v("#")]),v._v(" 렌더링이란?")]),v._v(" "),t("p",[v._v("웹 분야를 공부하다보면 "),t("strong",[v._v("렌더링")]),v._v("이라는 말을 많이 본다. 동작 과정에 대해 좀 더 자세히 알아보자")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("렌더링 엔진은 요청 받은 내용을 브라우저 화면에 표시해준다.")]),v._v(" "),t("p",[v._v("기본적으로 html, xml 문서와 이미지를 표시할 수 있음")]),v._v(" "),t("p",[v._v("추가로 플러그인이나 브라우저 확장 기능으로 pdf 등 다른 유형도 표시가 가능함")]),v._v(" "),t("p",[v._v("(추가로 확장이 필요한 유형은 바로 뜨지 않고 팝업으로 확장 여부를 묻는 것을 볼 수 있을 것임)")]),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"렌더링-엔진-종류"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#렌더링-엔진-종류"}},[v._v("#")]),v._v(" 렌더링 엔진 종류")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("크롬, 사파리 : 웹킷(Webkit) 엔진 사용")])]),v._v(" "),t("li",[t("p",[v._v("파이어폭스 : 게코(Gecko) 엔진 사용")])])]),v._v(" "),t("br"),v._v(" "),t("p",[t("strong",[v._v("웹킷(Webkit)")]),v._v(" : 최초 리눅스 플랫폼에 동작하기 위한 오픈소스 엔진\n(애플이 맥과 윈도우에서 사파리 브라우저를 지원하기 위해 수정을 더했음)")]),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"렌더링-동작-과정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#렌더링-동작-과정"}},[v._v("#")]),v._v(" 렌더링 동작 과정")]),v._v(" "),t("img",{attrs:{src:"https://d2.naver.com/content/images/2015/06/helloworld-59361-2.png"}}),v._v(" "),t("br"),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("먼저 html 문서를 파싱한다.\n\n그리고 콘텐츠 트리 내부에서 태그를 모두 DOM 노드로 변환한다.\n\n그 다음 외부 css 파일과 함께 포함된 스타일 요소를 파싱한다.\n\n이 스타일 정보와 html 표시 규칙은 \n렌더 트리라고 부르는 또 다른 트리를 생성한다.\n\n이렇게 생성된 렌더 트리는 정해진 순서대로 화면에 표시되는데, \n생성 과정이 끝났을 때 배치가 진행되면서 \n노드가 화면의 정확한 위치에 표시되는 것을 의미한다.\n\n이후에 UI 백엔드에서 렌더 트리의 각 노드를 가로지으며 \n형상을 만드는 그리기 과정이 진행된다.\n\n이러한 과정이 점진적으로 진행되며, 렌더링 엔진은 좀더 빠르게 \n사용자에게 제공하기 위해 모든 html을 파싱할 때까지 기다리지 않고 \n배치와 그리기 과정을 시작한다. (마치 비동기처럼..?)\n\n전송을 받고 기다리는 동시에 받은 내용을 먼저 화면에 보여준다\n(우리가 웹페이지에 접속할 때 한꺼번에 뜨지 않고 점점 화면에 나오는 것이 이 때문!!!)\n")])])]),t("br"),v._v(" "),t("p",[t("em",[t("strong",[v._v("DOM이란?")])])]),v._v(" "),t("p",[v._v("Document Object Model(문서 객체 모델)")]),v._v(" "),t("p",[v._v("웹페이지 소스를 까보면 "),t("code",[v._v("<html>, <body>")]),v._v("와 같은 태그들이 존재한다. 이를 Javascript가 활용할 수 있는 객체로 만들면 "),t("code",[v._v("문서 객체")]),v._v("가 된다.")]),v._v(" "),t("p",[v._v("모델은 말 그대로, 모듈화로 만들었다거나 객체를 인식한다라고 해석하면 된다.")]),v._v(" "),t("p",[v._v("즉, "),t("strong",[v._v("DOM은 웹 브라우저가 html 페이지를 인식하는 방식")]),v._v("을 말한다. (트리구조)")]),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"웹킷-동작-구조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#웹킷-동작-구조"}},[v._v("#")]),v._v(" 웹킷 동작 구조")]),v._v(" "),t("img",{attrs:{src:"https://d2.naver.com/content/images/2015/06/helloworld-59361-3.png"}}),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("어태치먼트")]),v._v(" : 웹킷이 렌더 트리를 생성하기 위해 DOM 노드와 스타일 정보를 연결하는 과정")])]),v._v(" "),t("p",[v._v("이제 조금 트리 구조의 진행 방식이 이해되기 시작할 것이다.")]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"파싱과-dom-트리-구축"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파싱과-dom-트리-구축"}},[v._v("#")]),v._v(" 파싱과 DOM 트리 구축")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("파싱이라는 말도 많이 들어봤을 것이다.")]),v._v(" "),t("p",[v._v("파싱은 렌더링 엔진에서 매우 중요한 과정이다.")]),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"파싱-parsing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파싱-parsing"}},[v._v("#")]),v._v(" 파싱(parsing)")]),v._v(" "),t("p",[v._v("문서 파싱은, 브라우저가 코드를 이해하고 사용할 수 있는 구조로 변환하는 것")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("문서를 가지고, "),t("strong",[v._v("어휘 분석과 구문 분석")]),v._v(" 과정을 거쳐 파싱 트리를 구축한다.")]),v._v(" "),t("p",[v._v("조금 복잡한데, 어휘 분석기를 통해 언어의 구문 규칙에 따라 문서 구조를 분석한다. 이 과정에서 구문 규칙과 일치하는 지 비교하고, 일치하는 노드만 파싱 트리에 추가시킨다.\n(끝까지 규칙이 맞지 않는 부분은 문서가 유효하지 않고 구문 오류가 포함되어 있다는 것)")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("파서 트리가 나왔다고 해서 끝이 아니다.")]),v._v(" "),t("p",[v._v("컴파일의 과정일 뿐, 다시 기계코드 문서로 변환시키는 과정까지 완료되면 최종 결과물이 나오게 된다.")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("보통 이런 파서를 생성하는 것은 문법에 대한 규칙 부여 등 복잡하고 최적화하기 힘드므로, 자동으로 생성해주는 "),t("code",[v._v("파서 생성기")]),v._v("를 많이 활용한다.")]),v._v(" "),t("blockquote",[t("p",[v._v("웹킷은 플렉스(flex)나 바이슨(bison)을 이용하여 유용하게 파싱이 가능")])]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("우리가 head 태그를 실수로 빠뜨려도, 파서가 돌면서 오류를 수정해줌 ( head 엘리먼트 객체를 암묵적으로 만들어준다)")]),v._v(" "),t("p",[v._v("결국 이 파싱 과정을 거치면서 서버로부터 받은 문서를 브라우저가 이해하고 쉽게 사용할 수 있는 DOM 트리구조로 변환시켜주는 것이다!")]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h3",{attrs:{id:"요약"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[v._v("#")]),v._v(" 요약")]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("p",[v._v("주소창에 url을 입력하고 Enter를 누르면, "),t("strong",[v._v("서버에 요청이 전송")]),v._v("됨")])]),v._v(" "),t("li",[t("p",[v._v("해당 페이지에 존재하는 여러 자원들(text, image 등등)이 보내짐")])]),v._v(" "),t("li",[t("p",[v._v("이제 브라우저는 해당 자원이 담긴 html과 스타일이 담긴 css를 W3C 명세에 따라 해석할 것임")])]),v._v(" "),t("li",[t("p",[v._v("이 역할을 하는 것이 "),t("strong",[v._v("'렌더링 엔진'")])])]),v._v(" "),t("li",[t("p",[v._v("렌더링 엔진은 우선 html 파싱 과정을 시작함. html 파서가 문서에 존재하는 어휘와 구문을 분석하면서 DOM 트리를 구축")])]),v._v(" "),t("li",[t("p",[v._v("다음엔 css 파싱 과정 시작. css 파서가 모든 css 정보를 스타일 구조체로 생성")])]),v._v(" "),t("li",[t("p",[v._v("이 2가지를 연결시켜 "),t("strong",[v._v("렌더 트리")]),v._v("를 만듬. 렌더 트리를 통해 문서가 "),t("strong",[v._v("시각적 요소를 포함한 형태로 구성")]),v._v("된 상태")])]),v._v(" "),t("li",[t("p",[v._v("화면에 배치를 시작하고, UI 백엔드가 노드를 돌며 형상을 그림")])]),v._v(" "),t("li",[t("p",[v._v("이때 빠른 브라우저 화면 표시를 위해 '배치와 그리는 과정'은 페이지 정보를 모두 받고 한꺼번에 진행되지 않음. 자원을 전송받으면, "),t("strong",[v._v("기다리는 동시에 일부분 먼저 진행하고 화면에 표시")]),v._v("함")])])]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"참고-자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[v._v("#")]),v._v(" [참고 자료]")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://d2.naver.com/helloworld/59361",target:"_blank",rel:"noopener noreferrer"}},[v._v("링크"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);