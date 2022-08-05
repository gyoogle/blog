(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{377:function(t,e,_){"use strict";_.r(e);var v=_(12),r=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cpu-scheduling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cpu-scheduling"}},[t._v("#")]),t._v(" CPU Scheduling")]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"_1-스케줄링"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-스케줄링"}},[t._v("#")]),t._v(" 1. 스케줄링")]),t._v(" "),e("blockquote",[e("p",[t._v("CPU 를 잘 사용하기 위해 프로세스를 잘 배정하기")])]),t._v(" "),e("ul",[e("li",[t._v("조건 : 오버헤드 ↓ / 사용률 ↑ / 기아 현상 ↓")]),t._v(" "),e("li",[t._v("목표\n"),e("ol",[e("li",[e("code",[t._v("Batch System")]),t._v(": 가능하면 많은 일을 수행. 시간(time) 보단 처리량(throughout)이 중요")]),t._v(" "),e("li",[e("code",[t._v("Interactive System")]),t._v(": 빠른 응답 시간. 적은 대기 시간.")]),t._v(" "),e("li",[e("code",[t._v("Real-time System")]),t._v(": 기한(deadline) 맞추기.")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-선점-비선점-스케줄링"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-선점-비선점-스케줄링"}},[t._v("#")]),t._v(" 2. 선점 / 비선점 스케줄링")]),t._v(" "),e("ul",[e("li",[t._v("선점 (preemptive) : OS가 CPU의 사용권을 선점할 수 있는 경우, 강제 회수하는 경우 (처리시간 예측 어려움)")]),t._v(" "),e("li",[t._v("비선점 (nonpreemptive) : 프로세스 종료 or I/O 등의 이벤트가 있을 때까지 실행 보장 (처리시간 예측 용이함)")])]),t._v(" "),e("h3",{attrs:{id:"_3-프로세스-상태"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-프로세스-상태"}},[t._v("#")]),t._v(" 3. 프로세스 상태")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/13609011/91695344-f2dfae80-eba8-11ea-9a9b-702192316170.jpeg",alt:"download (5)"}})]),t._v(" "),e("ul",[e("li",[t._v("선점 스케줄링 : "),e("code",[t._v("Interrupt")]),t._v(", "),e("code",[t._v("I/O or Event Completion")]),t._v(", "),e("code",[t._v("I/O or Event Wait")]),t._v(", "),e("code",[t._v("Exit")])]),t._v(" "),e("li",[t._v("비선점 스케줄링 : "),e("code",[t._v("I/O or Event Wait")]),t._v(", "),e("code",[t._v("Exit")])])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("프로세스의 상태 전이")])]),t._v(" "),e("p",[t._v("✓ "),e("strong",[t._v("승인 (Admitted)")]),t._v(" : 프로세스 생성이 가능하여 승인됨.")]),t._v(" "),e("p",[t._v("✓ "),e("strong",[t._v("스케줄러 디스패치 (Scheduler Dispatch)")]),t._v(" : 준비 상태에 있는 프로세스 중 하나를 선택하여 실행시키는 것.")]),t._v(" "),e("p",[t._v("✓ "),e("strong",[t._v("인터럽트 (Interrupt)")]),t._v(" : 예외, 입출력, 이벤트 등이 발생하여 현재 실행 중인 프로세스를 준비 상태로 바꾸고, 해당 작업을 먼저 처리하는 것.")]),t._v(" "),e("p",[t._v("✓ "),e("strong",[t._v("입출력 또는 이벤트 대기 (I/O or Event wait)")]),t._v(" : 실행 중인 프로세스가 입출력이나 이벤트를 처리해야 하는 경우, 입출력/이벤트가 모두 끝날 때까지 대기 상태로 만드는 것.")]),t._v(" "),e("p",[t._v("✓ "),e("strong",[t._v("입출력 또는 이벤트 완료 (I/O or Event Completion)")]),t._v(" : 입출력/이벤트가 끝난 프로세스를 준비 상태로 전환하여 스케줄러에 의해 선택될 수 있도록 만드는 것.")]),t._v(" "),e("h3",{attrs:{id:"_4-cpu-스케줄링의-종류"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-cpu-스케줄링의-종류"}},[t._v("#")]),t._v(" 4. CPU 스케줄링의 종류")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("비선점 스케줄링")]),t._v(" "),e("ol",[e("li",[t._v("FCFS (First Come First Served)\n"),e("ul",[e("li",[t._v("큐에 도착한 순서대로 CPU 할당")]),t._v(" "),e("li",[t._v("실행 시간이 짧은 게 뒤로 가면 평균 대기 시간이 길어짐")])])]),t._v(" "),e("li",[t._v("SJF (Shortest Job First)\n"),e("ul",[e("li",[t._v("수행시간이 가장 짧다고 판단되는 작업을 먼저 수행")]),t._v(" "),e("li",[t._v("FCFS 보다 평균 대기 시간 감소, 짧은 작업에 유리")])])]),t._v(" "),e("li",[t._v("HRN (Hightest Response-ratio Next)\n"),e("ul",[e("li",[t._v("우선순위를 계산하여 점유 불평등을 보완한 방법(SJF의 단점 보완)")]),t._v(" "),e("li",[t._v("우선순위 = (대기시간 + 실행시간) / (실행시간)")])])])])]),t._v(" "),e("li",[e("p",[t._v("선점 스케줄링")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Priority Scheduling")]),t._v(" "),e("ul",[e("li",[t._v("정적/동적으로 우선순위를 부여하여 우선순위가 높은 순서대로 처리")]),t._v(" "),e("li",[t._v("우선 순위가 낮은 프로세스가 무한정 기다리는 Starvation 이 생길 수 있음")]),t._v(" "),e("li",[t._v("Aging 방법으로 Starvation 문제 해결 가능")])])]),t._v(" "),e("li",[e("p",[t._v("Round Robin")]),t._v(" "),e("ul",[e("li",[t._v("FCFS에 의해 프로세스들이 보내지면 각 프로세스는 동일한 시간의 "),e("code",[t._v("Time Quantum")]),t._v(" 만큼 CPU를 할달 받음\n"),e("ul",[e("li",[e("code",[t._v("Time Quantum")]),t._v(" or "),e("code",[t._v("Time Slice")]),t._v(" : 실행의 최소 단위 시간")])])]),t._v(" "),e("li",[t._v("할당 시간("),e("code",[t._v("Time Quantum")]),t._v(")이 크면 FCFS와 같게 되고, 작으면 문맥 교환 (Context Switching) 잦아져서 오버헤드 증가")])])]),t._v(" "),e("li",[e("p",[t._v("Multilevel-Queue (다단계 큐)")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/13609011/91695428-16a2f480-eba9-11ea-8d91-17d22bab01e5.png",alt:"Untitled1"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("작업들을 여러 종류의 그룹으로 나누어 여러 개의 큐를 이용하는 기법\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/13609011/91695480-2a4e5b00-eba9-11ea-8dbf-390bf0a73c10.png",alt:"Untitled"}})])]),t._v(" "),e("li",[e("p",[t._v("우선순위가 낮은 큐들이 실행 못하는 걸 방지하고자 각 큐마다 다른 "),e("code",[t._v("Time Quantum")]),t._v("을 설정 해주는 방식 사용")])]),t._v(" "),e("li",[e("p",[t._v("우선순위가 높은 큐는 작은 "),e("code",[t._v("Time Quantum")]),t._v(" 할당. 우선순위가 낮은 큐는 큰 "),e("code",[t._v("Time Quantum")]),t._v(" 할당.")])])])]),t._v(" "),e("li",[e("p",[t._v("Multilevel-Feedback-Queue (다단계 피드백 큐)")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/13609011/91695489-2cb0b500-eba9-11ea-8578-6602fee742ed.png",alt:"Untitled2"}})]),t._v(" "),e("ul",[e("li",[t._v("다단계 큐에서 자신의 "),e("code",[t._v("Time Quantum")]),t._v("을 다 채운 프로세스는 밑으로 내려가고 자신의 "),e("code",[t._v("Time Quantum")]),t._v("을 다 채우지 못한 프로세스는 원래 큐 그대로\n"),e("ul",[e("li",[t._v("Time Quantum을 다 채운 프로세스는 CPU burst 프로세스로 판단하기 때문")])])]),t._v(" "),e("li",[t._v("짧은 작업에 유리, 입출력 위주(Interrupt가 잦은) 작업에 우선권을 줌")]),t._v(" "),e("li",[t._v("처리 시간이 짧은 프로세스를 먼저 처리하기 때문에 Turnaround 평균 시간을 줄옂줌")])])])])])]),t._v(" "),e("h3",{attrs:{id:"_5-cpu-스케줄링-척도"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-cpu-스케줄링-척도"}},[t._v("#")]),t._v(" 5. CPU 스케줄링 척도")]),t._v(" "),e("ol",[e("li",[t._v("Response Time\n"),e("ul",[e("li",[t._v("작업이 처음 실행되기까지 걸린 시간")])])]),t._v(" "),e("li",[t._v("Turnaround Time\n"),e("ul",[e("li",[t._v("실행 시간과 대기 시간을 모두 합한 시간으로 작업이 완료될 때 까지 걸린 시간")])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"출처"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#출처"}},[t._v("#")]),t._v(" 출처")]),t._v(" "),e("ul",[e("li",[t._v("스케줄링 목표 : "),e("a",{attrs:{href:"https://jhnyang.tistory.com/29?category=815411",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("프로세스 전이도 그림 출처 : "),e("a",{attrs:{href:"https://rebas.kr/852",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("CPU 스케줄링 종류 및 정의 참고 : "),e("a",{attrs:{href:"https://m.blog.naver.com/PostView.nhn?blogId=so_fragrant&logNo=80056608452&proxyReferer=https:%2F%2Fwww.google.com%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("다단계큐 참고 : "),e("a",{attrs:{href:"https://jhnyang.tistory.com/28",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("다단계 피드백 큐 참고 : "),e("a",{attrs:{href:"https://jhnyang.tistory.com/156",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);