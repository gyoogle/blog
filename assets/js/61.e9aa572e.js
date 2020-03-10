(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{284:function(t,r,v){"use strict";v.r(r);var _=v(19),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"이진탐색트리-binary-search-tree"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#이진탐색트리-binary-search-tree"}},[t._v("#")]),t._v(" 이진탐색트리 (Binary Search Tree)")]),t._v(" "),v("hr"),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"이진탐색트리의-목적은"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#이진탐색트리의-목적은"}},[t._v("#")]),t._v(" 이진탐색트리의 목적은?")]),t._v(" "),v("blockquote",[v("p",[t._v("이진탐색 + 연결리스트")])]),t._v(" "),v("p",[t._v("이진탐색 : "),v("strong",[t._v("탐색에 소요되는 시간복잡도는 O(logN)")]),t._v(", but 삽입,삭제가 불가능")]),t._v(" "),v("p",[t._v("연결리스트 : "),v("strong",[t._v("삽입, 삭제의 시간복잡도는 O(1)")]),t._v(", but 탐색하는 시간복잡도가 O(N)")]),t._v(" "),v("p",[t._v("이 두가지를 합하여 장점을 모두 얻는 것이 "),v("strong",[t._v("'이진탐색트리'")])]),t._v(" "),v("p",[t._v("즉, 효율적인 탐색 능력을 가지고, 자료의 삽입 삭제도 가능하게 만들자")]),t._v(" "),v("br"),t._v(" "),v("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fk074C%2FbtqwZZvI1D3%2FeVUanrpKdIRKnZpkKiQMe0%2Fimg.png"}}),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"특징"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),v("ul",[v("li",[t._v("각 노드의 자식이 2개 이하")]),t._v(" "),v("li",[t._v("각 노드의 왼쪽 자식은 부모보다 작고, 오른쪽 자식은 부모보다 큼")]),t._v(" "),v("li",[t._v("중복된 노드가 없어야 함")])]),t._v(" "),v("p",[v("em",[v("strong",[t._v("중복이 없어야 하는 이유는?")])])]),t._v(" "),v("p",[t._v("검색 목적 자료구조인데, 굳이 중복이 많은 경우에 트리를 사용하여 검색 속도를 느리게 할 필요가 없음. (트리에 삽입하는 것보다, 노드에 count 값을 가지게 하여 처리하는 것이 훨씬 효율적)")]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("이진탐색트리의 순회는 "),v("strong",[t._v("'중위순회(inorder)' 방식 (왼쪽 - 루트 - 오른쪽)")])]),t._v(" "),v("p",[t._v("중위 순회로 "),v("strong",[t._v("정렬된 순서")]),t._v("를 읽을 수 있음")]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"bst-핵심연산"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bst-핵심연산"}},[t._v("#")]),t._v(" BST 핵심연산")]),t._v(" "),v("ul",[v("li",[t._v("검색")]),t._v(" "),v("li",[t._v("삽입")]),t._v(" "),v("li",[t._v("삭제")]),t._v(" "),v("li",[t._v("트리 생성")]),t._v(" "),v("li",[t._v("트리 삭제")])]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"시간-복잡도"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#시간-복잡도"}},[t._v("#")]),t._v(" 시간 복잡도")]),t._v(" "),v("ul",[v("li",[t._v("균등 트리 : 노드 개수가 N개일 때 O(logN)")]),t._v(" "),v("li",[t._v("편향 트리 : 노드 개수가 N개일 때 O(N)")])]),t._v(" "),v("blockquote",[v("p",[t._v("삽입, 검색, 삭제 시간복잡도는 "),v("strong",[t._v("트리의 Depth")]),t._v("에 비례")])]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"삭제의-3가지-case"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#삭제의-3가지-case"}},[t._v("#")]),t._v(" 삭제의 3가지 Case")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("자식이 없는 leaf 노드일 때 → 그냥 삭제")])]),t._v(" "),v("li",[v("p",[t._v("자식이 1개인 노드일 때 → 지워진 노드에 자식을 올리기")])]),t._v(" "),v("li",[v("p",[t._v("자식이 2개인 노드일 때 → 오른쪽 자식 노드에서 가장 작은 값 or 왼쪽 자식 노드에서 가장 큰 값 올리기")])])]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("편향된 트리(정렬된 상태 값을 트리로 만들면 한쪽으로만 뻗음)는 시간복잡도가 O(N)이므로 트리를 사용할 이유가 사라짐 → 이를 바로 잡도록 도와주는 개선된 트리가 AVL Tree, RedBlack Tree")]),t._v(" "),v("br"),t._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/kim6394/tech-interview-for-developer/blob/master/Computer%20Science/Data%20Structure/code/binarySearchTree.java",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("소스 코드(java)")]),v("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=e.exports}}]);