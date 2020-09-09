(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{444:function(t,r,e){"use strict";e.r(r);var a=e(27),i=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tcp-ip-흐름제어-혼잡제어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-흐름제어-혼잡제어"}},[t._v("#")]),t._v(" TCP/IP (흐름제어/혼잡제어)")]),t._v(" "),e("hr"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"들어가기-전"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#들어가기-전"}},[t._v("#")]),t._v(" 들어가기 전")]),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"tcp-통신이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-통신이란"}},[t._v("#")]),t._v(" TCP 통신이란?")]),t._v(" "),e("ul",[e("li",[t._v("네트워크 통신에서 신뢰적인 연결방식")]),t._v(" "),e("li",[t._v("TCP는 기본적으로 unreliable network에서, reliable network를 보장할 수 있도록 하는 프로토콜")]),t._v(" "),e("li",[t._v("TCP는 network congestion avoidance algorithm을 사용\n"),e("br"),t._v(" "),e("br")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"reliable-network를-보장한다는-것은-4가지-문제점-존재"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reliable-network를-보장한다는-것은-4가지-문제점-존재"}},[t._v("#")]),t._v(" reliable network를 보장한다는 것은 4가지 문제점 존재")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("손실")]),t._v(" : packet이 손실될 수 있는 문제")]),t._v(" "),e("li",[e("strong",[t._v("순서 바뀜")]),t._v(" : packet의 순서가 바뀌는 문제")]),t._v(" "),e("li",[e("strong",[t._v("Congestion")]),t._v(" : 네트워크가 혼잡한 문제")]),t._v(" "),e("li",[e("strong",[t._v("Overload")]),t._v(" : receiver가 overload 되는 문제\n"),e("br"),t._v(" "),e("br")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"흐름제어-혼잡제어란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#흐름제어-혼잡제어란"}},[t._v("#")]),t._v(" 흐름제어/혼잡제어란?")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("흐름제어")]),t._v(" (endsystem 대 endsystem)\n"),e("ul",[e("li",[t._v("송신측과 수신측의 데이터 처리 속도 차이를 해결하기 위한 기법")]),t._v(" "),e("li",[t._v("Flow Control은 receiver가 packet을 지나치게 많이 받지 않도록 조절하는 것")]),t._v(" "),e("li",[t._v("기본 개념은 receiver가 sender에게 현재 자신의 상태를 feedback 한다는 점\n"),e("br"),t._v(" "),e("br")])])]),t._v(" "),e("li",[e("strong",[t._v("혼잡제어")]),t._v(" : 송신측의 데이터 전달과 네트워크의 데이터 처리 속도 차이를 해결하기 위한 기법\n"),e("br"),t._v(" "),e("br")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"전송의-전체-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#전송의-전체-과정"}},[t._v("#")]),t._v(" 전송의 전체 과정")]),t._v(" "),e("ul",[e("li",[t._v("Application layer : sender application layer가 socket에 data를 씀.")]),t._v(" "),e("li",[t._v("Transport layer : data를 segment에 감싼다. 그리고 network layer에 넘겨줌.")]),t._v(" "),e("li",[t._v("그러면 아랫단에서 어쨋든 receiving node로 전송이 됨. 이 때,  sender의 send buffer에 data를 저장하고, receiver는 receive buffer에 data를 저장함.")]),t._v(" "),e("li",[t._v("application에서 준비가 되면 이 buffer에 있는 것을 읽기 시작함.")]),t._v(" "),e("li",[t._v("따라서 flow control의 핵심은 이 receiver buffer가 넘치지 않게 하는 것임.")]),t._v(" "),e("li",[t._v("따라서 receiver는 RWND(Receive WiNDow) : receive buffer의 남은 공간을 홍보함")])])])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"_1-흐름제어-flow-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-흐름제어-flow-control"}},[t._v("#")]),t._v(" 1. 흐름제어 (Flow Control)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("수신측이 송신측보다 데이터 처리 속도가 빠르면 문제없지만, 송신측의 속도가 빠를 경우 문제가 생긴다.")])]),t._v(" "),e("li",[e("p",[t._v("수신측에서 제한된 저장 용량을 초과한 이후에 도착하는 데이터는 손실 될 수 있으며, 만약 손실 된다면 불필요하게 응답과 데이터 전송이 송/수신 측 간에 빈번이 발생한다.")])]),t._v(" "),e("li",[e("p",[t._v("이러한 위험을 줄이기 위해 송신 측의 데이터 전송량을 수신측에 따라 조절해야한다.")])])]),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"해결방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#해결방법"}},[t._v("#")]),t._v(" 해결방법")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Stop and Wait")]),t._v(" : 매번 전송한 패킷에 대해 확인 응답을 받아야만 그 다음 패킷을 전송하는 방법")]),t._v(" "),e("ul",[e("li",[e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/263B7D4E5715ECEB32"}})])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Sliding Window")]),t._v(" (Go Back N ARQ)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("수신측에서 설정한 윈도우 크기만큼 송신측에서 확인응답없이 세그먼트를 전송할 수 있게 하여 데이터 흐름을 동적으로 조절하는 제어기법")])]),t._v(" "),e("li",[e("p",[t._v("목적 : 전송은 되었지만, acked를 받지 못한 byte의 숫자를 파악하기 위해 사용하는 protocol")]),t._v(" "),e("p",[t._v("LastByteSent - LastByteAcked <= ReceivecWindowAdvertised")]),t._v(" "),e("p",[t._v("(마지막에 보내진 바이트 - 마지막에 확인된 바이트 <= 남아있는 공간) ==")]),t._v(" "),e("p",[t._v("(현재 공중에 떠있는 패킷 수 <= sliding window)")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("동작방식")]),t._v(" : 먼저 윈도우에 포함되는 모든 패킷을 전송하고, 그 패킷들의 전달이 확인되는대로 이 윈도우를 옆으로 옮김으로써 그 다음 패킷들을 전송")]),t._v(" "),e("ul",[e("li",[e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/253F7E485715ED5F27"}})])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Window")]),t._v(" : TCP/IP를 사용하는 모든 호스트들은 송신하기 위한 것과 수신하기 위한 2개의 Window를 가지고 있다. 호스트들은 실제 데이터를 보내기 전에 '3 way handshaking'을 통해 수신 호스트의 receive window size에 자신의 send window size를 맞추게 된다.")])])])])]),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"세부구조"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#세부구조"}},[t._v("#")]),t._v(" 세부구조")]),t._v(" "),e("ol",[e("li",[e("h5",{attrs:{id:"송신-버퍼"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#송신-버퍼"}},[t._v("#")]),t._v(" 송신 버퍼")]),t._v(" "),e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/22532F485715EDF218"}}),t._v("\n- 200 이전의 바이트는 이미 전송되었고, 확인응답을 받은 상태\n- 200 ~ 202 바이트는 전송되었으나 확인응답을 받지 못한 상태\n- 203 ~ 211 바이트는 아직 전송이 되지 않은 상태\n"),e("br")]),t._v(" "),e("li",[e("h5",{attrs:{id:"수신-윈도우"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#수신-윈도우"}},[t._v("#")]),t._v(" 수신 윈도우")]),t._v(" "),e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/25403A485715EE362B"}}),t._v(" "),e("br")]),t._v(" "),e("li",[e("h5",{attrs:{id:"송신-윈도우"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#송신-윈도우"}},[t._v("#")]),t._v(" 송신 윈도우")]),t._v(" "),e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/2520244B5715EE6A14"}}),t._v("\n- 수신 윈도우보다 작거나 같은 크기로 송신 윈도우를 지정하게되면 흐름제어가 가능하다.\n"),e("br")]),t._v(" "),e("li",[e("h5",{attrs:{id:"송신-윈도우-이동"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#송신-윈도우-이동"}},[t._v("#")]),t._v(" 송신 윈도우 이동")]),t._v(" "),e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/227DC8505715EEBA0A"}}),t._v("\n-  Before : 203 ~ 204를 전송하면 수신측에서는 확인 응답 203을 보내고, 송신측은 이를 받아 after 상태와 같이 수신 윈도우를 203 ~ 209 범위로 이동\n- after : 205 ~ 209가 전송 가능한 상태\n"),e("br"),t._v(" "),e("br")]),t._v(" "),e("li",[t._v("Selected Repeat")])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"_2-혼잡제어-congestion-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-혼잡제어-congestion-control"}},[t._v("#")]),t._v(" 2. 혼잡제어 (Congestion Control)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("송신측의 데이터는 지역망이나 인터넷으로 연결된 대형 네트워크를 통해 전달된다. 만약 한 라우터에 데이터가 몰릴 경우, 자신에게 온 데이터를 모두 처리할 수 없게 된다. 이런 경우 호스트들은 또 다시 재전송을 하게되고 결국 혼잡만 가중시켜 오버플로우나 데이터 손신을 발생시키게 된다. 따라서 이러한 네트워크의 혼잡을 피하기 우해 송신측에서 보내는 데이터의 전송속도를 강제로 줄이게 되는데, 이러한 작업을 혼잡제어라고 한다.\n"),e("br")])]),t._v(" "),e("li",[e("p",[t._v("또한 네트워크 내에 패킷의 수가 과도하게 증가하는 현상을 혼잡이라 하며, 혼잡 현상을 방지하거나 제거하는 기능을 "),e("strong",[t._v("혼잡제어")]),t._v("라고 한다.\n"),e("br")])]),t._v(" "),e("li",[e("p",[t._v("흐름제어가 송신측과 수신측 사이의 전송속도를 다루는데 반해, 혼잡제어는 호스트와 라우터를포함한 보다 넓은 관점에서 전송 문제를 다루게 된다.")])])]),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"해결-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#해결-방법"}},[t._v("#")]),t._v(" 해결 방법")]),t._v(" "),e("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/256E39425715F10103"}}),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"aimd-additive-increase-multiplicative-decrease"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aimd-additive-increase-multiplicative-decrease"}},[t._v("#")]),t._v(" AIMD(Additive Increase / Multiplicative Decrease)")]),t._v(" "),e("ul",[e("li",[t._v("처음에 패킷을 하나씩 보내고 이것이 문제없이 도착하면 window 크기(단위 시간 내에 보내는 패킷의 수)를 1씩 증가시켜가며 전송하는 방법")]),t._v(" "),e("li",[t._v("패킷 전송에 실패하거나 일정 시간을 넘으면 패킷의 보내는 속도를 절반으로 줄인다.")]),t._v(" "),e("li",[t._v("공평한 방식으로, 여러 호스트가 한 네트워크를 공유하고 있으면 나중에 진입하는 쪽이 처음에는 불리하지만, 시간이 흐르면 평형상태로 수렴하게 되는 특징이 있다.")]),t._v(" "),e("li",[t._v("문제점은 초기에 네트워크의 높은 대역폭을 사용하지 못하여 오랜 시간이 걸리게 되고, 네트워크가 혼잡해지는 상황을 미리 감지하지 못한다. 즉, 네트워크가 혼잡해지고 나서야 대역폭을 줄이는 방식이다.\n"),e("br")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"slow-start-느린-시작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slow-start-느린-시작"}},[t._v("#")]),t._v(" Slow Start (느린 시작)")]),t._v(" "),e("ul",[e("li",[t._v("AIMD 방식이 네트워크의 수용량 주변에서는 효율적으로 작동하지만, 처음에 전송 속도를 올리는데 시간이 오래 걸리는 단점이 존재했다.")]),t._v(" "),e("li",[t._v("Slow Start 방식은 AIMD와 마찬가지로 패킷을 하나씩 보내면서 시작하고, 패킷이 문제없이 도착하면 각각의 ACK 패킷마다 window size를 1씩 늘려준다. 즉, 한 주기가 지나면 window size가 2배로 된다.")]),t._v(" "),e("li",[t._v("전송속도는 AIMD에 반해 지수 함수 꼴로 증가한다. 대신에 혼잡 현상이 발생하면 window size를 1로 떨어뜨리게 된다.")]),t._v(" "),e("li",[t._v("처음에는 네트워크의 수용량을 예상할 수 있는 정보가 없지만, 한번 혼잡 현상이 발생하고 나면 네트워크의 수용량을 어느 정도 예상할 수 있다.")]),t._v(" "),e("li",[t._v("그러므로 혼잡 현상이 발생하였던 window size의 절반까지는 이전처럼 지수 함수 꼴로 창 크기를 증가시키고 그 이후부터는 완만하게 1씩 증가시킨다.\n"),e("br")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"fast-retransmit-빠른-재전송"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-retransmit-빠른-재전송"}},[t._v("#")]),t._v(" Fast Retransmit (빠른 재전송)")]),t._v(" "),e("ul",[e("li",[t._v("빠른 재전송은 TCP의 혼잡 조절에 추가된 정책이다.")]),t._v(" "),e("li",[t._v("패킷을 받는 쪽에서 먼저 도착해야할 패킷이 도착하지 않고 다음 패킷이 도착한 경우에도 ACK 패킷을 보내게 된다.")]),t._v(" "),e("li",[t._v("단, 순서대로 잘 도착한 마지막 패킷의 다음 패킷의 순번을 ACK 패킷에 실어서 보내게 되므로, 중간에 하나가 손실되게 되면 송신 측에서는 순번이 중복된 ACK 패킷을 받게 된다. 이것을 감지하는 순간 문제가 되는 순번의 패킷을 재전송 해줄 수 있다.")]),t._v(" "),e("li",[t._v("중복된 순번의 패킷을 3개 받으면 재전송을 하게 된다. 약간 혼잡한 상황이 일어난 것이므로 혼잡을 감지하고 window size를 줄이게 된다.\n"),e("br")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"fast-recovery-빠른-회복"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-recovery-빠른-회복"}},[t._v("#")]),t._v(" Fast Recovery (빠른 회복)")]),t._v(" "),e("ul",[e("li",[t._v("혼잡한 상태가 되면 window size를 1로 줄이지 않고 반으로 줄이고 선형증가시키는 방법이다. 이 정책까지 적용하면 혼잡 상황을 한번 겪고 나서부터는 순수한 AIMD 방식으로 동작하게 된다.")])])])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h4",{attrs:{id:"참고자료"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" [참고자료]")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.brianstorti.com/tcp-flow-control/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.brianstorti.com/tcp-flow-control/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=i.exports}}]);