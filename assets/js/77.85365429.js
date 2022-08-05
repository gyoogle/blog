(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{361:function(t,r,s){"use strict";s.r(r);var a=s(12),v=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"해시-hash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#해시-hash"}},[t._v("#")]),t._v(" 해시(Hash)")]),t._v(" "),r("hr"),t._v(" "),r("br"),t._v(" "),r("p",[t._v("데이터를 효율적으로 관리하기 위해, 임의의 길이 데이터를 고정된 길이의 데이터로 매핑하는 것")]),t._v(" "),r("p",[t._v("해시 함수를 구현하여 데이터 값을 해시 값으로 매핑한다.")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Lee → 해싱함수 → 5\nKim → 해싱함수 → 3\nPark → 해싱함수 → 2\n...\nChun → 해싱함수 → 5 // Lee와 해싱값 충돌\n")])])]),r("p",[t._v("결국 데이터가 많아지면, 다른 데이터가 같은 해시 값으로 충돌나는 현상이 발생함 "),r("strong",[t._v("'collision' 현상")])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("그래도 해시 테이블을 쓰는 이유는?")])])]),t._v(" "),r("blockquote",[r("p",[t._v("적은 자원으로 많은 데이터를 효율적으로 관리하기 위해")]),t._v(" "),r("p",[t._v("하드디스크나, 클라우드에 존재하는 무한한 데이터들을 유한한 개수의 해시값으로 매핑하면 작은 메모리로도 프로세스 관리가 가능해짐!")])]),t._v(" "),r("ul",[r("li",[t._v("언제나 동일한 해시값 리턴, index를 알면 빠른 데이터 검색이 가능해짐")]),t._v(" "),r("li",[t._v("해시테이블의 시간복잡도 O(1) - (이진탐색트리는 O(logN))")])]),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"충돌-문제-해결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#충돌-문제-해결"}},[t._v("#")]),t._v(" 충돌 문제 해결")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("체이닝")]),t._v(" : 연결리스트로 노드를 계속 추가해나가는 방식\n(제한 없이 계속 연결 가능, but 메모리 문제)")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Open Addressing")]),t._v(" : 해시 함수로 얻은 주소가 아닌 다른 주소에 데이터를 저장할 수 있도록 허용 (해당 키 값에 저장되어있으면 다음 주소에 저장)")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("선형 탐사")]),t._v(" : 정해진 고정 폭으로 옮겨 해시값의 중복을 피함")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("제곱 탐사")]),t._v(" : 정해진 고정 폭을 제곱수로 옮겨 해시값의 중복을 피함")])])]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",{attrs:{id:"참고자료"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고자료"}},[t._v("#")]),t._v(" [참고자료]")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://ratsgo.github.io/data%20structure&algorithm/2017/10/25/hash/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=v.exports}}]);