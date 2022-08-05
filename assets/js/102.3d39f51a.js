(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{386:function(v,_,t){"use strict";t.r(_);var a=t(12),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"페이징과-세그먼테이션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#페이징과-세그먼테이션"}},[v._v("#")]),v._v(" 페이징과 세그먼테이션")]),v._v(" "),_("hr"),v._v(" "),_("br"),v._v(" "),_("h4",{attrs:{id:"기법을-쓰는-이유"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기법을-쓰는-이유"}},[v._v("#")]),v._v(" 기법을 쓰는 이유")]),v._v(" "),_("p",[v._v("다중 프로그래밍 시스템에 여러 프로세스를 수용하기 위해 주기억장치를 동적 분할하는 메모리 관리 작업이 필요하기 때문")]),v._v(" "),_("br"),v._v(" "),_("h3",{attrs:{id:"메모리-관리-기법"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#메모리-관리-기법"}},[v._v("#")]),v._v(" 메모리 관리 기법")]),v._v(" "),_("ol",[_("li",[_("h4",{attrs:{id:"연속-메모리-관리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#연속-메모리-관리"}},[v._v("#")]),v._v(" 연속 메모리 관리")]),v._v(" "),_("blockquote",[_("p",[v._v("프로그램 전체가 하나의 커다란 공간에 연속적으로 할당되어야 함")])]),v._v(" "),_("ul",[_("li",[v._v("고정 분할 기법 : 주기억장치가 고정된 파티션으로 분할 ("),_("strong",[v._v("내부 단편화 발생")]),v._v(")")]),v._v(" "),_("li",[v._v("동적 분할 기법 : 파티션들이 동적 생성되며 자신의 크기와 같은 파티션에 적재 ("),_("strong",[v._v("외부 단편화 발생")]),v._v(")")])]),v._v(" "),_("br")])]),v._v(" "),_("br"),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("h4",{attrs:{id:"불연속-메모리-관리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#불연속-메모리-관리"}},[v._v("#")]),v._v(" 불연속 메모리 관리")]),v._v(" "),_("blockquote",[_("p",[v._v("프로그램의 일부가 서로 다른 주소 공간에 할당될 수 있는 기법")])]),v._v(" "),_("p",[v._v("페이지 : 고정 사이즈의 작은 프로세스 조각")]),v._v(" "),_("p",[v._v("프레임 : 페이지 크기와 같은 주기억장치 메모리 조각")]),v._v(" "),_("p",[v._v("단편화 : 기억 장치의 빈 공간 or 자료가 여러 조각으로 나뉘는 현상")]),v._v(" "),_("p",[v._v("세그먼트 : 서로 다른 크기를 가진 논리적 블록이 연속적 공간에 배치되는 것")]),v._v(" "),_("br"),v._v(" "),_("p",[_("strong",[v._v("고정 크기")]),v._v(" : 페이징(Paging)")]),v._v(" "),_("p",[_("strong",[v._v("가변 크기")]),v._v(" : 세그먼테이션(Segmentation)")]),v._v(" "),_("br"),v._v(" "),_("ul",[_("li",[_("h4",{attrs:{id:"단순-페이징"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#단순-페이징"}},[v._v("#")]),v._v(" 단순 페이징")]),v._v(" "),_("p",[v._v("각 프로세스는 프레임들과 같은 길이를 가진 균등 페이지로 나뉨")]),v._v(" "),_("p",[v._v("외부 단편화 X")]),v._v(" "),_("p",[v._v("소량의 내부 단편화 존재")])])])])]),v._v(" "),_("br"),v._v(" "),_("ul",[_("li",[_("h4",{attrs:{id:"단순-세그먼테이션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#단순-세그먼테이션"}},[v._v("#")]),v._v(" 단순 세그먼테이션")]),v._v(" "),_("p",[v._v("각 프로세스는 여러 세그먼트들로 나뉨")]),v._v(" "),_("p",[v._v("내부 단편화 X, 메모리 사용 효율 개선, 동적 분할을 통한 오버헤드 감소")]),v._v(" "),_("p",[v._v("외부 단편화 존재")])])]),v._v(" "),_("br"),v._v(" "),_("ul",[_("li",[_("h4",{attrs:{id:"가상-메모리-페이징"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#가상-메모리-페이징"}},[v._v("#")]),v._v(" 가상 메모리 페이징")]),v._v(" "),_("p",[v._v("단순 페이징과 비교해 프로세스 페이지 전부를 로드시킬 필요X")]),v._v(" "),_("p",[v._v("필요한 페이지가 있으면 나중에 자동으로 불러들어짐")]),v._v(" "),_("p",[v._v("외부 단편화 X")]),v._v(" "),_("p",[v._v("복잡한 메모리 관리로 오버헤드 발생")])])]),v._v(" "),_("br"),v._v(" "),_("ul",[_("li",[_("h4",{attrs:{id:"가상-메모리-세그먼테이션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#가상-메모리-세그먼테이션"}},[v._v("#")]),v._v(" 가상 메모리 세그먼테이션")]),v._v(" "),_("p",[v._v("필요하지 않은 세그먼트들은 로드되지 않음")]),v._v(" "),_("p",[v._v("필요한 세그먼트 있을때 나중에 자동으로 불러들어짐")]),v._v(" "),_("p",[v._v("내부 단편화X")]),v._v(" "),_("p",[v._v("복잡한 메모리 관리로 오버헤드 발생")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);