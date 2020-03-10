(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{309:function(v,_,t){"use strict";t.r(_);var r=t(19),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"프로세스-스레드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-스레드"}},[v._v("#")]),v._v(" 프로세스 & 스레드")]),v._v(" "),t("hr"),v._v(" "),t("br"),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("프로세스")]),v._v(" : 프로그램을 메모리 상에서 실행중인 작업")]),v._v(" "),t("p",[t("strong",[v._v("스레드")]),v._v(" : 프로세스 안에서 실행되는 여러 흐름 단위")])]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("기본적으로 프로세스마다 최소 1개의 스레드 소유 (메인 스레드 포함)")]),v._v(" "),t("br"),v._v(" "),t("img",{attrs:{src:"https://camo.githubusercontent.com/3dc4ad61f03160c310a855a4bd68a9f2a2c9a4c7/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393938383931343635433637433330363036"}}),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"프로세스는-각각-별도의-주소공간-할당-독립적"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스는-각각-별도의-주소공간-할당-독립적"}},[v._v("#")]),v._v(" 프로세스는 각각 별도의 주소공간 할당 (독립적)")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("Code")]),v._v(" : 코드 자체를 구성하는 메모리 영역(프로그램 명령)")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Data")]),v._v(" : 전역변수, 정적변수, 배열 등 (초기화된 데이터)")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Heap")]),v._v(" : 동적 할당 시 사용 (new(), mallock() 등)")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Stack")]),v._v(" : 지역변수, 매개변수, 리턴 값 (임시 메모리 영역)")])])]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("스레드는 Stack만 따로 할당 받고 나머지 영역은 서로 공유")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("하나의 프로세스가 생성될 때, 기본적으로 하나의 스레드 같이 생성")]),v._v(" "),t("br"),v._v(" "),t("p",[t("strong",[v._v("프로세스는 자신만의 고유 공간과 자원을 할당받아 사용")]),v._v("하는데 반해, "),t("strong",[v._v("스레드는 다른 스레드와 공간, 자원을 공유하면서 사용")]),v._v("하는 차이가 존재함")]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"멀티프로세스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#멀티프로세스"}},[v._v("#")]),v._v(" 멀티프로세스")]),v._v(" "),t("blockquote",[t("p",[v._v("하나의 컴퓨터에 여러 CPU 장착 → 하나 이상의 프로세스들을 동시에 처리(병렬)")])]),v._v(" "),t("p",[t("strong",[v._v("장점")]),v._v(" : 안전성 (메모리 침범 문제를 OS 차원에서 해결)")]),v._v(" "),t("p",[t("strong",[v._v("단점")]),v._v(" : 각각 독립된 메모리 영역을 갖고 있어, 작업량 많을 수록 오버헤드 발생. Context Switching으로 인한 성능 저하")]),v._v(" "),t("br"),v._v(" "),t("p",[t("strong",[t("em",[v._v("Context Switching")]),v._v("이란?")])]),v._v(" "),t("p",[v._v("프로세스의 상태 정보를 저장하고 복원하는 일련의 과정")]),v._v(" "),t("p",[v._v("즉, 동작 중인 프로세스가 대기하면서 해당 프로세스의 상태를 보관하고, 대기하고 있던 다음 순번의 프로세스가 동작하면서 이전에 보관했던 프로세스 상태를 복구하는 과정을 말함")]),v._v(" "),t("p",[v._v("→ 프로세스는 각 독립된 메모리 영역을 할당받아 사용되므로, 캐시 메모리 초기화와 같은 무거운 작업이 진행되었을 때 오버헤드가 발생할 문제가 존재함")]),v._v(" "),t("br"),v._v(" "),t("br"),v._v(" "),t("h4",{attrs:{id:"멀티-스레드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#멀티-스레드"}},[v._v("#")]),v._v(" 멀티 스레드")]),v._v(" "),t("blockquote",[t("p",[v._v("하나의 응용 프로그램에서 여러 스레드를 구성해 각 스레드가 하나의 작업을 처리하는 것")])]),v._v(" "),t("p",[v._v("스레드들이 공유 메모리를 통해 다수의 작업을 동시에 처리하도록 해줌")]),v._v(" "),t("br"),v._v(" "),t("p",[t("strong",[v._v("장점")]),v._v(" : 독립적인 프로세스에 비해 공유 메모리만큼의 시간, 자원 손실이 감소\n전역 변수와 정적 변수에 대한 자료 공유 가능")]),v._v(" "),t("p",[t("strong",[v._v("단점")]),v._v(" : 안전성 문제. 하나의 스레드가 데이터 공간 망가뜨리면, 모든 스레드가 작동 불능 상태 (공유 메모리를 갖기 때문)")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("멀티스레드의 안전성에 대한 단점은 Critical Section 기법을 통해 대비함")]),v._v(" "),t("p",[v._v("하나의 스레드가 공유 데이터 값을 변경하는 시점에 다른 스레드가 그 값을 읽으려할 때 발생하는 문제를 해결하기 위한 동기화 과정")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("상호 배제, 진행, 한정된 대기를 충족해야함\n")])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);