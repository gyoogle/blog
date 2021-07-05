(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{460:function(t,r,e){"use strict";e.r(r);var v=e(29),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http-https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-https"}},[t._v("#")]),t._v(" HTTP & HTTPS")]),t._v(" "),e("hr"),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"http-hypertext-transfer-protocol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-hypertext-transfer-protocol"}},[t._v("#")]),t._v(" HTTP(HyperText Transfer Protocol)")]),t._v(" "),e("p",[t._v("인터넷 상에서 클라이언트와 서버가 자원을 주고 받을 때 쓰는 통신 규약")])])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("HTTP는 텍스트 교환이므로, 누군가 네트워크에서 신호를 가로채면 내용이 노출되는 보안 이슈가 존재한다.")]),t._v(" "),e("p",[t._v("이런 보안 문제를 해결해주는 프로토콜이 "),e("strong",[t._v("'HTTPS'")])]),t._v(" "),e("br"),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"https-hypertext-transfer-protocol-secure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-hypertext-transfer-protocol-secure"}},[t._v("#")]),t._v(" HTTPS(HyperText Transfer Protocol Secure)")]),t._v(" "),e("p",[t._v("인터넷 상에서 정보를 암호화하는 SSL 프로토콜을 사용해 클라이언트와 서버가 자원을 주고 받을 때 쓰는 통신 규약")])])]),t._v(" "),e("p",[t._v("HTTPS는 텍스트를 암호화한다. (공개키 암호화 방식으로)")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/kim6394/tech-interview-for-developer/blob/master/Computer%20Science/Network/%EB%8C%80%EC%B9%AD%ED%82%A4%20%26%20%EA%B3%B5%EA%B0%9C%ED%82%A4.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("공개키 설명"),e("OutboundLink")],1)])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"https-통신-흐름"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-통신-흐름"}},[t._v("#")]),t._v(" HTTPS 통신 흐름")]),t._v(" "),e("hr"),t._v(" "),e("ol",[e("li",[e("p",[t._v("애플리케이션 서버(A)를 만드는 기업은 HTTPS를 적용하기 위해 공개키와 개인키를 만든다.")])]),t._v(" "),e("li",[e("p",[t._v("신뢰할 수 있는 CA 기업을 선택하고, 그 기업에게 내 공개키 관리를 부탁하며 계약을 한다.")])])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("CA란?")])]),t._v(" : Certificate Authority로, 공개키를 저장해주는 신뢰성이 검증된 민간기업")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[t._v("계약 완료된 CA 기업은 해당 기업의 이름, A서버 공개키, 공개키 암호화 방법을 담은 인증서를 만들고, 해당 인증서를 CA 기업의 개인키로 암호화해서 A서버에게 제공한다.")])]),t._v(" "),e("li",[e("p",[t._v("A서버는 암호화된 인증서를 갖게 되었다. 이제 A서버는 A서버의 공개키로 암호화된 HTTPS 요청이 아닌 요청이 오면, 이 암호화된 인증서를 클라이언트에게 건내준다.")])]),t._v(" "),e("li",[e("p",[t._v("클라이언트는 "),e("code",[t._v("main.html")]),t._v(" 파일을 달라고 A서버에 요청했다고 가정하자. HTTPS 요청이 아니기 때문에 CA기업이 A서버의 정보를 CA 기업의 개인키로 암호화한 인증서를 받게 된다.")])])]),t._v(" "),e("blockquote",[e("p",[t._v("CA 기업의 공개키는 브라우저가 이미 알고있다. (세계적으로 신뢰할 수 있는 기업으로 등록되어 있기 때문에, 브라우저가 인증서를 탐색하여 해독이 가능한 것)")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("브라우저는 해독한 뒤 A서버의 공개키를 얻게 되었다. 이제 A서버와 통신할 대는 얻은 A서버의 공개키로 암호화해서 요청을 날리게 된다.")])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("HTTPS도 무조건 안전한 것은 아니다. (신뢰받는 CA 기업이 아닌 자체 인증서 발급한 경우 등)")]),t._v(" "),e("p",[t._v("이때는 HTTPS지만 브라우저에서 "),e("code",[t._v("주의 요함")]),t._v(", "),e("code",[t._v("안전하지 않은 사이트")]),t._v("와 같은 알림으로 주의 받게 된다.")]),t._v(" "),e("br"),t._v(" "),e("h4",{attrs:{id:"참고사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#참고사항"}},[t._v("#")]),t._v(" [참고사항]")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://jeong-pro.tistory.com/89",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=_.exports}}]);