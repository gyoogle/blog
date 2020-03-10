(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{311:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"tcp-3-way-handshake-4-way-handshake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-3-way-handshake-4-way-handshake"}},[a._v("#")]),a._v(" [TCP] 3 way handshake & 4 way handshake")]),a._v(" "),t("hr"),a._v(" "),t("br"),a._v(" "),t("blockquote",[t("p",[a._v("연결을 성립하고 해제하는 과정을 말한다")])]),a._v(" "),t("br"),a._v(" "),t("h2",{attrs:{id:"_3-way-handshake-연결-성립"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-way-handshake-연결-성립"}},[a._v("#")]),a._v(" 3 way handshake - 연결 성립")]),a._v(" "),t("p",[a._v("TCP는 정확한 전송을 보장해야 한다. 따라서 통신하기에 앞서, 논리적인 접속을 성립하기 위해 3 way handshake 과정을 진행한다.")]),a._v(" "),t("img",{attrs:{src:"https://media.geeksforgeeks.org/wp-content/uploads/TCP-connection-1.png"}}),a._v(" "),t("ol",[t("li",[t("p",[a._v("클라이언트가 서버에게 SYN 패킷을 보냄 (sequence : x)")])]),a._v(" "),t("li",[t("p",[a._v("서버가 SYN(x)을 받고, 클라이언트로 받았다는 신호인 ACK와 SYN 패킷을 보냄 (sequence : y, ACK : x + 1)")])]),a._v(" "),t("li",[t("p",[a._v("클라이언트는 서버의 응답은 ACK(x+1)와 SYN(y) 패킷을 받고, ACK(y+1)를 서버로 보냄")])])]),a._v(" "),t("br"),a._v(" "),t("p",[a._v("이렇게 3번의 통신이 완료되면 연결이 성립된다. (3번이라 3 way handshake인 것)")]),a._v(" "),t("br"),a._v(" "),t("br"),a._v(" "),t("h2",{attrs:{id:"_4-way-handshake-연결-해제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-way-handshake-연결-해제"}},[a._v("#")]),a._v(" 4 way handshake - 연결 해제")]),a._v(" "),t("p",[a._v("연결 성립 후, 모든 통신이 끝났다면 해제해야 한다.")]),a._v(" "),t("img",{attrs:{src:"https://media.geeksforgeeks.org/wp-content/uploads/CN.png"}}),a._v(" "),t("br"),a._v(" "),t("br"),a._v(" "),t("ol",[t("li",[t("p",[a._v("클라이언트는 서버에게 연결을 종료한다는 FIN 플래그를 보낸다.")])]),a._v(" "),t("li",[t("p",[a._v("서버는 FIN을 받고, 확인했다는 ACK를 클라이언트에게 보낸다. (이때 모든 데이터를 보내기 위해 TIME OUT 상태가 된다)")])]),a._v(" "),t("li",[t("p",[a._v("데이터를 모두 보냈다면, 연결이 종료되었다는 FIN 플래그를 클라이언트에게 보낸다.")])]),a._v(" "),t("li",[t("p",[a._v("클라이언트는 FIN을 받고, 확인했다는 ACK를 서버에게 보낸다. (아직 서버로부터 받지 못한 데이터가 있을 수 있으므로 TIME_WAIT을 통해 기다린다.)")])])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("서버는 ACK를 받은 이후 소켓을 닫는다 (Closed)")])]),a._v(" "),t("li",[t("p",[a._v("TIME_WAIT 시간이 끝나면 클라이언트도 닫는다 (Closed)")])])]),a._v(" "),t("br"),a._v(" "),t("p",[a._v("이렇게 4번의 통신이 완료되면 연결이 해제된다.")]),a._v(" "),t("br"),a._v(" "),t("br"),a._v(" "),t("h4",{attrs:{id:"참고-자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[a._v("#")]),a._v(" [참고 자료]")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.geeksforgeeks.org/tcp-connection-termination/",target:"_blank",rel:"noopener noreferrer"}},[a._v("링크"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);