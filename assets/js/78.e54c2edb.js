(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{473:function(t,s,a){"use strict";a.r(s);var e=a(31),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree"}},[t._v("#")]),t._v(" Tree")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Node와 Edge로 이루어진 자료구조\nTree의 특성을 이해하자\n")])])]),a("br"),t._v(" "),a("img",{attrs:{src:"https://www.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png"}}),t._v(" "),a("br"),t._v(" "),a("p",[t._v("트리는 값을 가진 "),a("code",[t._v("노드(Node)")]),t._v("와 이 노드들을 연결해주는 "),a("code",[t._v("간선(Edge)")]),t._v("으로 이루어져있다.")]),t._v(" "),a("p",[t._v("그림 상 데이터 1을 가진 노드가 "),a("code",[t._v("루트(Root) 노드")]),t._v("다.")]),t._v(" "),a("p",[t._v("모든 노드들은 0개 이상의 자식(Child) 노드를 갖고 있으며 보통 부모-자식 관계로 부른다.")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("아래처럼 가족 관계도를 그릴 때 트리 형식으로 나타내는 경우도 많이 봤을 것이다. 자료구조의 트리도 이 방식을 그대로 구현한 것이다.")]),t._v(" "),a("img",{attrs:{src:"https://post-phinf.pstatic.net/MjAxOTA4MjZfMTg1/MDAxNTY2Nzc0Mzk2OTMw.k2EDmhB2y4O1MVrL-XqOXibXkSOBtGX8r86emCgUk9Eg.8C_5nfeIvIDSiLO8FL-i4e28h-8DmbQRS4r2CqSJ6TUg.JPEG/2216_nephew.jpg?type=w1200",width:"500"}}),t._v(" "),a("br"),t._v(" "),a("p",[t._v("트리는 몇 가지 특징이 있다.")]),t._v(" "),a("ul",[a("li",[t._v("트리에는 사이클이 존재할 수 없다. (만약 사이클이 만들어진다면, 그것은 트리가 아니고 그래프다)")]),t._v(" "),a("li",[t._v("모든 노드는 자료형으로 표현이 가능하다.")]),t._v(" "),a("li",[t._v("루트에서 한 노드로 가는 경로는 유일한 경로 뿐이다.")]),t._v(" "),a("li",[t._v("노드의 개수가 N개면, 간선은 N-1개를 가진다.")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("가장 중요한 것은, "),a("code",[t._v("그래프")]),t._v("와 "),a("code",[t._v("트리")]),t._v("의 차이가 무엇인가인데, 이는 사이클의 유무로 설명할 수 있다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"트리-순회-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#트리-순회-방식"}},[t._v("#")]),t._v(" 트리 순회 방식")]),t._v(" "),a("p",[t._v("트리를 순회하는 방식은 총 4가지가 있다. 위의 그림을 예시로 진행해보자")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:"https://www.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png"}}),t._v(" "),a("br"),t._v(" "),a("ol",[a("li",[a("h4",{attrs:{id:"전위-순회-pre-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전위-순회-pre-order"}},[t._v("#")]),t._v(" 전위 순회(pre-order)")]),t._v(" "),a("p",[t._v("각 루트(Root)를 순차적으로 먼저 방문하는 방식이다.")]),t._v(" "),a("p",[t._v("(Root → 왼쪽 자식 → 오른쪽 자식)")]),t._v(" "),a("blockquote",[a("p",[t._v("1 → 2 → 4 → 8 → 9 → 5 → 10 → 11 → 3 → 6 → 13 → 7 → 14")])]),t._v(" "),a("br")]),t._v(" "),a("li",[a("h4",{attrs:{id:"중위-순회-in-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#중위-순회-in-order"}},[t._v("#")]),t._v(" 중위 순회(in-order)")]),t._v(" "),a("p",[t._v("왼쪽 하위 트리를 방문 후 루트(Root)를 방문하는 방식이다.")]),t._v(" "),a("p",[t._v("(왼쪽 자식 → Root → 오른쪽 자식)")]),t._v(" "),a("blockquote",[a("p",[t._v("8 → 4 → 9 → 2 → 10 → 5 → 11 → 1 → 13 → 6 → 3 →14 → 7")])]),t._v(" "),a("br")]),t._v(" "),a("li",[a("h4",{attrs:{id:"후위-순회-post-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#후위-순회-post-order"}},[t._v("#")]),t._v(" 후위 순회(post-order)")]),t._v(" "),a("p",[t._v("왼쪽 하위 트리부터 하위를 모두 방문 후 루트(Root)를 방문하는 방식이다.")]),t._v(" "),a("p",[t._v("(왼쪽 자식 → 오른쪽 자식 → Root)")]),t._v(" "),a("blockquote",[a("p",[t._v("8 → 9 → 4 → 10 → 11 → 5 → 2 → 13 → 6 → 14 → 7 → 3 → 1")])]),t._v(" "),a("br")]),t._v(" "),a("li",[a("h4",{attrs:{id:"레벨-순회-level-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#레벨-순회-level-order"}},[t._v("#")]),t._v(" 레벨 순회(level-order)")]),t._v(" "),a("p",[t._v("루트(Root)부터 계층 별로 방문하는 방식이다.")]),t._v(" "),a("blockquote",[a("p",[t._v("1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 13 → 14")])])])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tree")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" rootData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.geeksforgeeks.org/binary-tree-data-structure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);