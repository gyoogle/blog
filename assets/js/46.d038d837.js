(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{414:function(t,e,l){"use strict";l.r(e);var v=l(27),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"명령어-cycle"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#명령어-cycle"}},[t._v("#")]),t._v(" 명령어 Cycle")]),t._v(" "),l("hr"),t._v(" "),l("br"),t._v(" "),l("ul",[l("li",[t._v("PC : 다음 실행할 명령어의 주소를 저장")]),t._v(" "),l("li",[t._v("MAR : 다음에 읽거나 쓸 기억장소의 주소를 지정")]),t._v(" "),l("li",[t._v("MBR : 기억장치에 저장될 데이터 혹은 기억장치로부터 읽은 데이터를 임시 저장")]),t._v(" "),l("li",[t._v("IR : 현재 수행 중인 명령어 저장")]),t._v(" "),l("li",[t._v("ALU : 산술연산과 논리연산 수행")])]),t._v(" "),l("br"),t._v(" "),l("h3",{attrs:{id:"fetch-cycle"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#fetch-cycle"}},[t._v("#")]),t._v(" Fetch Cycle")]),t._v(" "),l("hr"),t._v(" "),l("blockquote",[l("p",[t._v("명령어를 주기억장치에서 CPU 명령어 레지스터로 가져와 해독하는 단계")])]),t._v(" "),l("ol",[l("li",[l("p",[t._v("PC에 있는 명령어 주소를 MAR로 가져옴 (그 이후 PC는 +1)")])]),t._v(" "),l("li",[l("p",[t._v("MAR에 저장된 주소에 해당하는 값을 메모리에서 가져와서 MBR에 저장")])])]),t._v(" "),l("p",[t._v("(이때 가져온 값은 Data 또는 Opcode(명령어))")]),t._v(" "),l("ol",{attrs:{start:"3"}},[l("li",[l("p",[t._v("만약 Opcode를 가져왔다면, IR에서 Decode하는 단계 거침 (명령어를 해석하여 Data로 만들어야 함)")])]),t._v(" "),l("li",[l("p",[t._v("1~2과정에서 가져온 데이터를 ALU에서 수행 (Excute Cycle). 연산 결과는 MBR을 거쳐 메모리로 다시 저장")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);