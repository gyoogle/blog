(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{344:function(t,r,e){"use strict";e.r(r);var a=e(19),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"java-문자열-클래스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-문자열-클래스"}},[t._v("#")]),t._v(" [Java] 문자열 클래스")]),t._v(" "),e("hr"),t._v(" "),e("br"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("분류")]),t._v(" "),e("th",[t._v("String")]),t._v(" "),e("th",[t._v("StringBuffer")]),t._v(" "),e("th",[t._v("StringBuilder")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("변경")]),t._v(" "),e("td",[t._v("Immutable")]),t._v(" "),e("td",[t._v("Mutable")]),t._v(" "),e("td",[t._v("Mutable")])]),t._v(" "),e("tr",[e("td",[t._v("동기화")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Synchronized 가능 (Thread-safe)")]),t._v(" "),e("td",[t._v("Synchronized 불가능.")])])])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"_1-string-특징"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-string-특징"}},[t._v("#")]),t._v(" 1. String 특징")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("new 연산을 통해 생성된 인스턴스의 메모리 공간은 변하지 않음 (Immutable)")])]),t._v(" "),e("li",[e("p",[t._v("Garbage Collector로 제거되어야 함.")])]),t._v(" "),e("li",[e("p",[t._v("문자열 연산시 새로 객체를 만드는 Overhead 발생")])]),t._v(" "),e("li",[e("p",[t._v("객체가 불변하므로, Multithread에서 동기화를 신경 쓸 필요가 없음. (조회 연산에 매우 큰 장점)")])])]),t._v(" "),e("p",[e("em",[t._v("String 클래스 : 문자열 연산이 적고, 조회가 많은 멀티쓰레드 환경에서 좋음")])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"_2-stringbuffer-stringbuilder-특징"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-stringbuffer-stringbuilder-특징"}},[t._v("#")]),t._v(" 2. StringBuffer, StringBuilder 특징")]),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"공통점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#공통점"}},[t._v("#")]),t._v(" 공통점")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("new 연산으로 클래스를 한 번만 만듬 (Mutable)")])]),t._v(" "),e("li",[e("p",[t._v("문자열 연산시 새로 객체를 만들지 않고, 크기를 변경시킴")])]),t._v(" "),e("li",[e("p",[t._v("StringBuffer와  StringBuilder 클래스의 메서드가 동일함.")])])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"차이점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#차이점"}},[t._v("#")]),t._v(" 차이점")]),t._v(" "),e("ul",[e("li",[t._v("StringBuffer는 Thread-Safe함 / StringBuilder는 Thread-safe하지 않음 (불가능)")])])])]),t._v(" "),e("br"),t._v(" "),e("p",[e("em",[t._v("StringBuffer 클래스 : 문자열 연산이 많은 Multi-Thread 환경")])]),t._v(" "),e("p",[e("em",[t._v("StringBuilder 클래스 : 문자열 연산이 많은 Single-Thread 또는 Thread 신경 안쓰는 환경")])])])}),[],!1,null,null,null);r.default=v.exports}}]);