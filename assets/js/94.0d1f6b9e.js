(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{545:function(t,v,a){"use strict";a.r(v);var _=a(38),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"데드락-deadlock-교착-상태"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데드락-deadlock-교착-상태"}},[t._v("#")]),t._v(" 데드락 (DeadLock, 교착 상태)")]),t._v(" "),a("blockquote",[a("p",[t._v("두 개 이상의 프로세스나 스레드가 서로 자원을 얻지 못해서 다음 처리를 하지 못하는 상태")]),t._v(" "),a("p",[t._v("무한히 다음 자원을 기다리게 되는 상태를 말한다.")]),t._v(" "),a("p",[t._v("시스템적으로 한정된 자원을 여러 곳에서 사용하려고 할 때 발생한다.")])]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("(마치, 외나무 다리의 양 끝에서 서로가 비켜주기를 기다리고만 있는 것과 같다.)")])])]),t._v(" "),a("br"),t._v(" "),a("ul",[a("li",[t._v("데드락이 일어나는 경우")])]),t._v(" "),a("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/243E89355714C26E28"}}),t._v(" "),a("p",[t._v("프로세스1과 2가 자원1, 2를 모두 얻어야 한다고 가정해보자")]),t._v(" "),a("p",[t._v("t1 : 프로세스1이 자원1을 얻음 / 프로세스2가 자원2를 얻음")]),t._v(" "),a("p",[t._v("t2 : 프로세스1은 자원2를 기다림 / 프로세스2는 자원1을 기다림")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("현재 서로 원하는 자원이 상대방에 할당되어 있어서 두 프로세스는 무한정 wait 상태에 빠짐")]),t._v(" "),a("p",[t._v("→ 이것이 바로 "),a("strong",[t._v("DeadLock")]),t._v("!!!!!!")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("(주로 발생하는 경우)")]),t._v(" "),a("blockquote",[a("p",[t._v("멀티 프로그래밍 환경에서 한정된 자원을 얻기 위해 서로 경쟁하는 상황 발생")]),t._v(" "),a("p",[t._v("한 프로세스가 자원을 요청했을 때, 동시에 그 자원을 사용할 수 없는 상황이 발생할 수 있음. 이때 프로세스는 대기 상태로 들어감")]),t._v(" "),a("p",[t._v("대기 상태로 들어간 프로세스들이 실행 상태로 변경될 수 없을 때 '교착 상태' 발생")])]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"데드락-deadlock-발생-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데드락-deadlock-발생-조건"}},[t._v("#")]),t._v(" "),a("em",[t._v("데드락(DeadLock) 발생 조건")])]),t._v(" "),a("blockquote",[a("p",[t._v("4가지 모두 성립해야 데드락 발생")]),t._v(" "),a("p",[t._v("(하나라도 성립하지 않으면 데드락 문제 해결 가능)")])]),t._v(" "),a("ol",[a("li",[a("h5",{attrs:{id:"상호-배제-mutual-exclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상호-배제-mutual-exclusion"}},[t._v("#")]),t._v(" 상호 배제(Mutual exclusion)")]),t._v(" "),a("blockquote",[a("p",[t._v("자원은 한번에 한 프로세스만 사용할 수 있음")])])]),t._v(" "),a("li",[a("h5",{attrs:{id:"점유-대기-hold-and-wait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#점유-대기-hold-and-wait"}},[t._v("#")]),t._v(" 점유 대기(Hold and wait)")]),t._v(" "),a("blockquote",[a("p",[t._v("최소한 하나의 자원을 점유하고 있으면서 다른 프로세스에 할당되어 사용하고 있는 자원을 추가로 점유하기 위해 대기하는 프로세스가 존재해야 함")])])]),t._v(" "),a("li",[a("h5",{attrs:{id:"비선점-no-preemption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비선점-no-preemption"}},[t._v("#")]),t._v(" 비선점(No preemption)")]),t._v(" "),a("blockquote",[a("p",[t._v("다른 프로세스에 할당된 자원은 사용이 끝날 때까지 강제로 빼앗을 수 없음")])])]),t._v(" "),a("li",[a("h5",{attrs:{id:"순환-대기-circular-wait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#순환-대기-circular-wait"}},[t._v("#")]),t._v(" 순환 대기(Circular wait)")]),t._v(" "),a("blockquote",[a("p",[t._v("프로세스의 집합에서 순환 형태로 자원을 대기하고 있어야 함")])])])]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"데드락-deadlock-처리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데드락-deadlock-처리"}},[t._v("#")]),t._v(" "),a("em",[t._v("데드락(DeadLock) 처리")])]),t._v(" "),a("hr"),t._v(" "),a("h5",{attrs:{id:"교착-상태를-예방-회피"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#교착-상태를-예방-회피"}},[t._v("#")]),t._v(" 교착 상태를 예방 & 회피")]),t._v(" "),a("ol",[a("li",[a("h5",{attrs:{id:"예방-prevention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예방-prevention"}},[t._v("#")]),t._v(" 예방(prevention)")]),t._v(" "),a("p",[t._v("교착 상태 발생 조건 중 하나를 제거하면서 해결한다 (자원 낭비 엄청 심함)")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("상호배제 부정 : 여러 프로세스가 공유 자원 사용")]),t._v(" "),a("li",[t._v("점유대기 부정 : 프로세스 실행전 모든 자원을 할당")]),t._v(" "),a("li",[t._v("비선점 부정 : 자원 점유 중인 프로세스가 다른 자원을 요구할 때 가진 자원 반납")]),t._v(" "),a("li",[t._v("순환대기 부정 : 자원에 고유번호 할당 후 순서대로 자원 요구")])])])]),t._v(" "),a("li",[a("h5",{attrs:{id:"회피-avoidance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#회피-avoidance"}},[t._v("#")]),t._v(" 회피(avoidance)")]),t._v(" "),a("p",[t._v("교착 상태 발생 시 피해나가는 방법")]),t._v(" "),a("blockquote",[a("p",[t._v("은행원 알고리즘(Banker's Algorithm)")]),t._v(" "),a("ul",[a("li",[t._v("은행에서 모든 고객의 요구가 충족되도록 현금을 할당하는데서 유래함")]),t._v(" "),a("li",[t._v("프로세스가 자원을 요구할 때, 시스템은 자원을 할당한 후에도 안정 상태로 남아있게 되는지 사전에 검사하여 교착 상태 회피")]),t._v(" "),a("li",[t._v("안정 상태면 자원 할당, 아니면 다른 프로세스들이 자원 해지까지 대기")])])])])]),t._v(" "),a("h5",{attrs:{id:"교착-상태를-탐지-회복"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#교착-상태를-탐지-회복"}},[t._v("#")]),t._v(" 교착 상태를 탐지 & 회복")]),t._v(" "),a("p",[t._v("교착 상태가 되도록 허용한 다음 회복시키는 방법")]),t._v(" "),a("ol",[a("li",[a("h5",{attrs:{id:"탐지-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#탐지-detection"}},[t._v("#")]),t._v(" 탐지(Detection)")]),t._v(" "),a("p",[t._v("자원 할당 그래프를 통해 교착 상태를 탐지함")]),t._v(" "),a("p",[t._v("자원 요청 시, 탐지 알고리즘을 실행시켜 그에 대한 오버헤드 발생함")])]),t._v(" "),a("li",[a("h5",{attrs:{id:"회복-recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#회복-recovery"}},[t._v("#")]),t._v(" 회복(Recovery)")]),t._v(" "),a("p",[t._v("교착 상태 일으킨 프로세스를 종료하거나, 할당된 자원을 해제시켜 회복시키는 방법")]),t._v(" "),a("blockquote",[a("h5",{attrs:{id:"프로세스-종료-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-종료-방법"}},[t._v("#")]),t._v(" 프로세스 종료 방법")]),t._v(" "),a("ul",[a("li",[t._v("교착 상태의 프로세스를 모두 중지")]),t._v(" "),a("li",[t._v("교착 상태가 제거될 때까지 하나씩 프로세스 중지")])]),t._v(" "),a("h5",{attrs:{id:"자원-선점-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자원-선점-방법"}},[t._v("#")]),t._v(" 자원 선점 방법")]),t._v(" "),a("ul",[a("li",[t._v("교착 상태의 프로세스가 점유하고 있는 자원을 선점해 다른 프로세스에게 할당 (해당 프로세스 일시정지 시킴)")]),t._v(" "),a("li",[t._v("우선 순위가 낮은 프로세스나 수행 횟수 적은 프로세스 위주로 프로세스 자원 선점")])])])])]),t._v(" "),a("h4",{attrs:{id:"주요-질문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주요-질문"}},[t._v("#")]),t._v(" 주요 질문")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("데드락(교착 상태)가 뭔가요? 발생 조건에 대해 말해보세요.")])]),t._v(" "),a("li",[a("p",[t._v("회피 기법인 은행원 알고리즘이 뭔지 설명해보세요.")])]),t._v(" "),a("li",[a("p",[t._v("기아상태를 설명하는 식사하는 철학자 문제에 대해 설명해보세요.")]),t._v(" "),a("blockquote",[a("p",[t._v("교착 상태 해결책")]),t._v(" "),a("ol",[a("li",[t._v("n명이 앉을 수 있는 테이블에서 철학자를 n-1명만 앉힘")]),t._v(" "),a("li",[t._v("한 철학자가 젓가락 두개를 모두 집을 수 있는 상황에서만 젓가락 집도록 허용")]),t._v(" "),a("li",[t._v("누군가는 왼쪽 젓가락을 먼저 집지 않고 오른쪽 젓가락을 먼저 집도록 허용")])])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);