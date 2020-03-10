(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{268:function(a,t,e){"use strict";e.r(t);var v=e(19),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"캐시-메모리-cache-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#캐시-메모리-cache-memory"}},[a._v("#")]),a._v(" 캐시 메모리(Cache Memory)")]),a._v(" "),e("hr"),a._v(" "),e("br"),a._v(" "),e("p",[a._v("속도가 빠른 장치와 느린 장치에서 속도 차이에 따른 병목 현상을 줄이기 위한 메모리를 말한다.")]),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ex1) CPU 코어와 메모리 사이의 병목 현상 완화\nex2) 웹 브라우저 캐시 파일은, 하드디스크와 웹페이지 사이의 병목 현상을 완화\n")])])]),e("br"),a._v(" "),e("p",[a._v("CPU가 주기억장치에서 저장된 데이터를 읽어올 때, 자주 사용하는 데이터를 캐시 메모리에 저장한 뒤, 다음에 이용할 때 주기억장치가 아닌 캐시 메모리에서 먼저 가져오면서 속도를 향상시킨다.")]),a._v(" "),e("p",[a._v("속도라는 장점을 얻지만, 용량이 적기도 하고 비용이 비싼 점이 있다.")]),a._v(" "),e("br"),a._v(" "),e("p",[a._v("CPU에는 이러한 캐시 메모리가 2~3개 정도 사용된다. (L1, L2, L3 캐시 메모리라고 부른다)")]),a._v(" "),e("p",[a._v("속도와 크기에 따라 분류한 것으로, 일반적으로 L1 캐시부터 먼저 사용된다. (CPU에서 가장 빠르게 접근하고, 여기서 데이터를 찾지 못하면 L2로 감)")]),a._v(" "),e("br"),a._v(" "),e("p",[e("em",[e("strong",[a._v("듀얼 코어 프로세서의 캐시 메모리")])]),a._v(" : 각 코어마다 독립된 L1 캐시 메모리를 가지고, 두 코어가 공유하는 L2 캐시 메모리가 내장됨")]),a._v(" "),e("p",[a._v("만약 L1 캐시가 128kb면, 64/64로 나누어 64kb에 명령어를 처리하기 직전의 명령어를 임시 저장하고, 나머지 64kb에는 실행 후 명령어를 임시저장한다. (명령어 세트로 구성, I-Cache - D-Cache)")]),a._v(" "),e("ul",[e("li",[a._v("L1 : CPU 내부에 존재")]),a._v(" "),e("li",[a._v("L2 : CPU와 RAM 사이에 존재")]),a._v(" "),e("li",[a._v("L3 : 보통 메인보드에 존재한다고 함")])]),a._v(" "),e("blockquote",[e("p",[a._v("캐시 메모리 크기가 작은 이유는, SRAM 가격이 매우 비쌈")])]),a._v(" "),e("br"),a._v(" "),e("p",[e("em",[e("strong",[a._v("디스크 캐시")])]),a._v(" : 주기억장치(RAM)와 보조기억장치(하드디스크) 사이에 존재하는 캐시")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"캐시-메모리-작동-원리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#캐시-메모리-작동-원리"}},[a._v("#")]),a._v(" 캐시 메모리 작동 원리")]),a._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"시간-지역성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시간-지역성"}},[a._v("#")]),a._v(" 시간 지역성")]),a._v(" "),e("p",[a._v("for나 while 같은 반복문에 사용하는 조건 변수처럼 한번 참조된 데이터는 잠시후 또 참조될 가능성이 높음")])]),a._v(" "),e("li",[e("h4",{attrs:{id:"공간-지역성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#공간-지역성"}},[a._v("#")]),a._v(" 공간 지역성")]),a._v(" "),e("p",[a._v("A[0], A[1]과 같은 연속 접근 시, 참조된 데이터 근처에 있는 데이터가 잠시후 또 사용될 가능성이 높음")])])]),a._v(" "),e("blockquote",[e("p",[a._v("이처럼 참조 지역성의 원리가 존재한다.")])]),a._v(" "),e("br"),a._v(" "),e("p",[a._v("캐시에 데이터를 저장할 때는, 이러한 참조 지역성(공간)을 최대한 활용하기 위해 해당 데이터뿐만 아니라, 옆 주소의 데이터도 같이 가져와 미래에 쓰일 것을 대비한다.")]),a._v(" "),e("p",[a._v("CPU가 요청한 데이터가 캐시에 있으면 'Cache Hit', 없어서 DRAM에서 가져오면 'Cache Miss'")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"캐시-미스-경우-3가지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#캐시-미스-경우-3가지"}},[a._v("#")]),a._v(" 캐시 미스 경우 3가지")]),a._v(" "),e("ol",[e("li",[e("h4",{attrs:{id:"cold-miss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cold-miss"}},[a._v("#")]),a._v(" Cold miss")]),a._v(" "),e("p",[a._v("해당 메모리 주소를 처음 불러서 나는 미스")])]),a._v(" "),e("li",[e("h4",{attrs:{id:"conflict-miss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conflict-miss"}},[a._v("#")]),a._v(" Conflict miss")]),a._v(" "),e("p",[a._v("캐시 메모리에 A와 B 데이터를 저장해야 하는데, A와 B가 같은 캐시 메모리 주소에 할당되어 있어서 나는 미스 (driect mapped cache에서 많이 발생)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("항상 핸드폰과 열쇠를 오른쪽 주머니에 넣고 다니는데, 잠깐 친구가 준 물건을 받느라 손에 들고 있던 핸드폰을 가방에 넣었음. 그 이후 핸드폰을 찾으려 오른쪽 주머니에서 찾는데 없는 상황\n")])])])]),a._v(" "),e("li",[e("h4",{attrs:{id:"capacity-miss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#capacity-miss"}},[a._v("#")]),a._v(" Capacity miss")]),a._v(" "),e("p",[a._v("캐시 메모리의 공간이 부족해서 나는 미스 (Conflict는 주소 할당 문제, Capacity는 공간 문제)")])])]),a._v(" "),e("br"),a._v(" "),e("p",[a._v("캐시 "),e("strong",[a._v("크기를 키워서 문제를 해결하려하면, 캐시 접근속도가 느려지고 파워를 많이 먹는 단점")]),a._v("이 생김")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"구조-및-작동-방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구조-및-작동-방식"}},[a._v("#")]),a._v(" 구조 및 작동 방식")]),a._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"direct-mapped-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#direct-mapped-cache"}},[a._v("#")]),a._v(" Direct Mapped Cache")]),a._v(" "),e("img",{attrs:{src:"https://file.namu.moe/file/8bc9e381797334eb33da66e3ba501be191171b1c5abb113ab52fed45a20084b1c8d2eb5a0ba399d67b38a9d5990b5d5a"}}),a._v(" "),e("p",[a._v("가장 기본적인 구조로, DRAM의 여러 주소가 캐시 메모리의 한 주소에 대응되는 다대일 방식")]),a._v(" "),e("p",[a._v("현재 그림에서는 메모리 공간이 32개(00000~11111)이고, 캐시 메모리 공간은 8개(000~111)인 상황")]),a._v(" "),e("p",[a._v("ex) 00000, 01000, 10000, 11000인 메모리 주소는 000 캐시 메모리 주소에 맵핑")]),a._v(" "),e("p",[a._v("이때 000이 '인덱스 필드', 인덱스 제외한 앞의 나머지(00, 01, 10, 11)를 '태그 필드'라고 한다.")]),a._v(" "),e("p",[a._v("이처럼 캐시메모리는 "),e("code",[a._v("인덱스 필드 + 태그 필드 + 데이터 필드")]),a._v("로 구성된다.")]),a._v(" "),e("p",[a._v("간단하고 빠른 장점이 있지만, "),e("strong",[a._v("Conflict Miss가 발생하는 것이 단점")]),a._v("이다. 위 사진처럼 같은 색깔의 데이터를 동시에 사용해야 할 때 발생한다.")]),a._v(" "),e("br")]),a._v(" "),e("li",[e("h4",{attrs:{id:"fully-associative-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fully-associative-cache"}},[a._v("#")]),a._v(" Fully Associative Cache")]),a._v(" "),e("p",[a._v("비어있는 캐시 메모리가 있으면, 마음대로 주소를 저장하는 방식")]),a._v(" "),e("p",[a._v("저장할 때는 매우 간단하지만, 찾을 때가 문제")]),a._v(" "),e("p",[a._v("조건이나 규칙이 없어서 특정 캐시 Set 안에 있는 모든 블럭을 한번에 찾아 원하는 데이터가 있는지 검색해야 한다. CAM이라는 특수한 메모리 구조를 사용해야하지만 가격이 매우 비싸다.")]),a._v(" "),e("br")]),a._v(" "),e("li",[e("h4",{attrs:{id:"set-associative-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-associative-cache"}},[a._v("#")]),a._v(" Set Associative Cache")]),a._v(" "),e("p",[a._v("Direct + Fully 방식이다. 특정 행을 지정하고, 그 행안의 어떤 열이든 비어있을 때 저장하는 방식이다. Direct에 비해 검색 속도는 느리지만, 저장이 빠르고 Fully에 비해 저장이 느린 대신 검색이 빠른 중간형이다.")]),a._v(" "),e("blockquote",[e("p",[a._v("실제로 위 두가지보다 나중에 나온 방식")])])])]),a._v(" "),e("br"),a._v(" "),e("br"),a._v(" "),e("h4",{attrs:{id:"참고-자료"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[a._v("#")]),a._v(" [참고 자료]")]),a._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://it.donga.com/215/",target:"_blank",rel:"noopener noreferrer"}},[a._v("링크"),e("OutboundLink")],1)])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://namu.moe/w/%EC%BA%90%EC%8B%9C%20%EB%A9%94%EB%AA%A8%EB%A6%AC",target:"_blank",rel:"noopener noreferrer"}},[a._v("링크"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);