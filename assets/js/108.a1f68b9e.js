(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{489:function(t,r,s){"use strict";s.r(r);var a=s(29),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"마이크로서비스-아키텍처-msa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#마이크로서비스-아키텍처-msa"}},[t._v("#")]),t._v(" 마이크로서비스 아키텍처(MSA)")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MSA는 소프트웨어 개발 기법 중 하나로, 어플리케이션 단위를 '목적'으로 나누는 것이 핵심\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"monolithic-vs-msa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monolithic-vs-msa"}},[t._v("#")]),t._v(" Monolithic vs MSA")]),t._v(" "),s("p",[t._v("MSA가 도입되기 전, Monolithic 아키텍처 방식으로 개발이 이루어졌다. Monolithic의 사전적 정의에 맞게 '한 덩어리'에 해당하는 구조로 이루어져 있다. 모든 기능을 하나의 어플리케이션에서 비즈니스 로직을 구성해 운영한다. 따라서 개발을 하거나 환경설정에 있어서 간단한 장점이 있어 작은 사이즈의 프로젝트에서는 유리하지만, 시스템이 점점 확장되거나 큰 프로젝트에서는 단점들이 존재한다.")]),t._v(" "),s("ul",[s("li",[t._v("빌드/테스트 시간의 증가 : 하나를 수정해도 시스템 전체를 빌드해야 함. 즉, 유지보수가 힘들다")]),t._v(" "),s("li",[t._v("작은 문제가 시스템 전체에 문제를 일으킴 : 만약 하나의 서비스 부분에 트래픽 문제로 서버가 다운되면, 모든 서비스 이용이 불가능할 것이다.")]),t._v(" "),s("li",[t._v("확장성에 불리 : 서비스 마다 이용률이 다를 수 있다. 하나의 서비스를 확장하기 위해 전체 프로젝트를 확장해야 한다.")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("MSA는 좀 더 세분화 시킨 아키텍처라고 말할 수 있다. 한꺼번에 비즈니스 로직을 구성하던 Monolithic 방식과는 다르게 기능(목적)별로 컴포넌트를 나누고 조합할 수 있도록 구축한다.")]),t._v(" "),s("img",{attrs:{src:"https://www.redhat.com/cms/managed-files/monolithic-vs-microservices.png"}}),t._v(" "),s("img",{attrs:{src:"https://miro.medium.com/max/1250/1*V_mvV0mbfcBoCcirDgsvZw.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("MSA에서 각 컴포넌트는 API를 통해 다른 서비스와 통신을 하는데, 모든 서비스는 각각 독립된 서버로 운영하고 배포하기 때문에 서로 의존성이 없다. 하나의 서비스에 문제가 생겨도 다른 서비스에는 영향을 끼치지 않으며, 서비스 별로 부분적인 확장이 가능한 장점이 있다.")]),t._v(" "),s("img",{attrs:{src:"http://clipsoft.co.kr/wp/wp-content/uploads/2020/06/leh_6.png"}}),t._v(" "),s("p",[t._v("즉, 서비스 별로 개발팀이 꾸려지면 다른 팀과 의존없이 팀 내에서 피드백을 빠르게 할 수 있고, 비교적 유연하게 운영이 가능할 것이다.")]),t._v(" "),s("p",[t._v("좋은 점만 있지는 않다. MSA는 서비스 별로 호출할 때 API로 통신하므로 속도가 느리다. 그리고 서비스 별로 통신에 맞는 데이터로 맞추는 과정이 필요하기도 하다. Monolithic 방식은 하나의 프로세스 내에서 진행되기 때문에 속도 면에서는 MSA보다 훨씬 빠를 것이다. 또한, MSA는 DB 또한 개별적으로 운영되기 때문에 트랜잭션으로 묶기 힘든 점도 있다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("따라서, 서비스별로 분리를 하면서 얻을 수 있는 장점도 있지만, 그만큼 체계적으로 준비돼 있지 않으면 MSA로 인해 오히려 프로젝트 성능이 떨어질 수도 있다는 점을 알고있어야 한다. 정답이 정해져 있는 것이 아니라, 프로젝트 목적, 현재 상황에 맞는 아키텍처 방식이 무엇인지 설계할 때부터 잘 고민해서 선택하자.")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"참고-자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/@shaul1991/%EC%B4%88%EB%B3%B4%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%9D%BC%EC%A7%80-%EB%8C%80%EC%84%B8-msa-%EB%84%88-%EB%AD%90%EB%8B%88-efba5cfafdeb",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://clipsoft.co.kr/wp/blog/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98msa-%EA%B0%9C%EB%85%90/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=e.exports}}]);