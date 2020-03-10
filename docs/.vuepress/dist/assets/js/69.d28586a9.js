(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{307:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"로드-밸런싱-load-balancing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로드-밸런싱-load-balancing"}},[t._v("#")]),t._v(" 로드 밸런싱(Load Balancing)")]),t._v(" "),e("hr"),t._v(" "),e("br"),t._v(" "),e("blockquote",[e("p",[t._v("둘 이상의 CPU or 저장장치와 같은 컴퓨터 자원들에게 작업을 나누는 것")])]),t._v(" "),e("br"),t._v(" "),e("img",{attrs:{src:"https://camo.githubusercontent.com/b59f02d63a1372b35abffa94e241b9b8d27447f3/68747470733a2f2f7777772e6564756361746976652e696f2f6170692f636f6c6c656374696f6e2f353636383633393130313431393532302f353634393035303232353334343531322f706167652f353734373937363230373037333238302f696d6167652f353639363435393134383039393538342e706e67"}}),t._v(" "),e("p",[t._v("요즘 시대에는 웹사이트에 접속하는 인원이 급격히 늘어나게 되었다.")]),t._v(" "),e("p",[t._v("따라서 이 사람들에 대해 모든 트래픽을 감당하기엔 1대의 서버로는 부족하다. 대응 방안으로 하드웨어의 성능을 올리거나(Scale-up) 여러대의 서버가 나눠서 일하도록 만드는 것(Scale-out)이 있다.")]),t._v(" "),e("p",[t._v("하드웨어 향상 비용이 더욱 비싸기도 하고, 서버가 여러대면 무중단 서비스를 제공하는 환경 구성이 용이하므로 Scale-out이 효과적이다. 이때 여러 서버에게 균등하게 트래픽을 분산시켜주는 것이 바로 "),e("strong",[t._v("로드 밸런싱")]),t._v("이다.")]),t._v(" "),e("br"),t._v(" "),e("p",[e("strong",[t._v("로드 밸런싱")]),t._v("은 분산식 웹 서비스로, 여러 서버에 부하(Load)를 나누어주는 역할을 한다. Load Balancer를 클라이언트와 서버 사이에 두고, 부하가 일어나지 않도록 여러 서버에 분산시켜주는 방식이다. 서비스를 운영하는 사이트의 규모에 따라 웹 서버를 추가로 증설하면서 로드 밸런서로 관리해주면 웹 서버의 부하를 해결할 수 있다.")]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"로드-밸런서가-서버를-선택하는-방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로드-밸런서가-서버를-선택하는-방식"}},[t._v("#")]),t._v(" 로드 밸런서가 서버를 선택하는 방식")]),t._v(" "),e("ul",[e("li",[t._v("라운드 로빈(Round Robin) : CPU 스케줄링의 라운드 로빈 방식 활용")]),t._v(" "),e("li",[t._v("Least Connections : 연결 개수가 가장 적은 서버 선택 (트래픽으로 인해 세션이 길어지는 경우 권장)")]),t._v(" "),e("li",[t._v("Source : 사용자 IP를 해싱하여 분배 (특정 사용자가 항상 같은 서버로 연결되는 것 보장)")])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"로드-밸런서-장애-대비"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로드-밸런서-장애-대비"}},[t._v("#")]),t._v(" 로드 밸런서 장애 대비")]),t._v(" "),e("p",[t._v("서버를 분배하는 로드 밸런서에 문제가 생길 수 있기 때문에 로드 밸런서를 이중화하여 대비한다.")]),t._v(" "),e("blockquote",[e("p",[t._v("Active 상태와 Passive 상태")])]),t._v(" "),e("br"),t._v(" "),e("h4",{attrs:{id:"참고자료"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" [참고자료]")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://www.educative.io/courses/grokking-the-system-design-interview/3jEwl04BL7Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://nesoy.github.io/articles/2018-06/Load-Balancer",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=s.exports}}]);