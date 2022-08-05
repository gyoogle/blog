(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{362:function(t,a,s){"use strict";s.r(a);var n=s(12),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"힙-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#힙-heap"}},[t._v("#")]),t._v(" 힙(Heap)")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"알아야할-것"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#알아야할-것"}},[t._v("#")]),t._v(" 알아야할 것")]),t._v(" "),a("blockquote",[a("p",[t._v("1.힙의 개념")]),t._v(" "),a("p",[t._v("2.힙의 삽입 및 삭제")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("힙은, 우선순위 큐를 위해 만들어진 자료구조다.")]),t._v(" "),a("p",[t._v("먼저 "),a("strong",[t._v("우선순위 큐")]),t._v("에 대해서 간략히 알아보자")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("우선순위 큐")]),t._v(" : 우선순위의 개념을 큐에 도입한 자료구조")]),t._v(" "),a("blockquote",[a("p",[t._v("데이터들이 우선순위를 가지고 있음. 우선순위가 높은 데이터가 먼저 나감")])]),t._v(" "),a("p",[t._v("스택은 LIFO, 큐는 FIFO")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"언제-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#언제-사용"}},[t._v("#")]),t._v(" 언제 사용?")]),t._v(" "),a("blockquote",[a("p",[t._v("시뮬레이션 시스템, 작업 스케줄링, 수치해석 계산")])]),t._v(" "),a("p",[t._v("우선순위 큐는 배열, 연결리스트, 힙으로 구현 (힙으로 구현이 가장 효율적!)")]),t._v(" "),a("p",[t._v("힙 → 삽입 : O(logn) , 삭제 : O(logn)")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"힙-heap-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#힙-heap-2"}},[t._v("#")]),t._v(" 힙(Heap)")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("완전 이진 트리의 일종")]),t._v(" "),a("blockquote",[a("p",[t._v("여러 값 중, 최대값과 최소값을 빠르게 찾아내도록 만들어진 자료구조")])]),t._v(" "),a("p",[t._v("반정렬 상태")]),t._v(" "),a("p",[t._v("힙 트리는 중복된 값 허용 (이진 탐색 트리는 중복값 허용X)")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"힙-종류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#힙-종류"}},[t._v("#")]),t._v(" 힙 종류")]),t._v(" "),a("h5",{attrs:{id:"최대-힙-max-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최대-힙-max-heap"}},[t._v("#")]),t._v(" 최대 힙(max heap)")]),t._v(" "),a("p",[t._v("부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리")]),t._v(" "),a("h5",{attrs:{id:"최소-힙-min-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최소-힙-min-heap"}},[t._v("#")]),t._v(" 최소 힙(min heap)")]),t._v(" "),a("p",[t._v("부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리")]),t._v(" "),a("img",{attrs:{src:"https://t1.daumcdn.net/cfile/tistory/17084F504DA9895214"}}),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("힙을 저장하는 표준적인 자료구조는 "),a("code",[t._v("배열")])]),t._v(" "),a("p",[t._v("구현을 쉽게 하기 위해 배열의 첫번째 인덱스인 0은 사용되지 않음")]),t._v(" "),a("p",[t._v("특정 위치의 노드 번호는 새로운 노드가 추가되어도 변하지 않음")]),t._v(" "),a("p",[t._v("(ex. 루트 노드(1)의 오른쪽 노드 번호는 항상 3)")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"부모-노드와-자식-노드-관계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#부모-노드와-자식-노드-관계"}},[t._v("#")]),t._v(" 부모 노드와 자식 노드 관계")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("왼쪽 자식 index = (부모 index) * 2\n\n오른쪽 자식 index = (부모 index) * 2 + 1\n\n부모 index = (자식 index) / 2\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"힙의-삽입"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#힙의-삽입"}},[t._v("#")]),t._v(" 힙의 삽입")]),t._v(" "),a("p",[t._v("1.힙에 새로운 요소가 들어오면, 일단 새로운 노드를 힙의 마지막 노드에 삽입")]),t._v(" "),a("p",[t._v("2.새로운 노드를 부모 노드들과 교환")]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"최대-힙-삽입-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최대-힙-삽입-구현"}},[t._v("#")]),t._v(" 최대 힙 삽입 구현")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert_max_heap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("heapSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 힙 크기를 하나 증가하고, 마지막 노드에 x를 넣음")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" heapSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 마지막 노드가 자신의 부모 노드보다 크면 swap")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("부모 노드는 자신의 인덱스의 /2 이므로, 비교하고 자신이 더 크면 swap하는 방식")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"힙의-삭제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#힙의-삭제"}},[t._v("#")]),t._v(" 힙의 삭제")]),t._v(" "),a("p",[t._v("1.최대 힙에서 최대값은 루트 노드이므로 루트 노드가 삭제됨\n(최대 힙에서 삭제 연산은 최대값 요소를 삭제하는 것)")]),t._v(" "),a("p",[t._v("2.삭제된 루트 노드에는 힙의 마지막 노드를 가져옴")]),t._v(" "),a("p",[t._v("3.힙을 재구성")]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"최대-힙-삭제-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최대-힙-삭제-구현"}},[t._v("#")]),t._v(" 최대 힙 삭제 구현")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete_max_heap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heapSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 배열이 비어있으면 리턴")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 루트 노드의 값을 저장")]),t._v("\n    maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("heapSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 마지막 노드 값을 루트로 이동")]),t._v("\n    maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("heapSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 힙 크기를 하나 줄이고 마지막 노드 0 초기화")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" heapSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 마지막 노드가 왼쪽 노드와 오른쪽 노드보다 크면 끝")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 왼쪽 노드가 더 큰 경우, swap")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxHeap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 오른쪽 노드가 더 큰 경우")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);