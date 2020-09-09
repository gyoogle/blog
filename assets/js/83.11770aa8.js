(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{451:function(_,v,a){"use strict";a.r(v);var t=a(27),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"운영체제란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#운영체제란"}},[_._v("#")]),_._v(" 운영체제란?")]),_._v(" "),a("hr"),_._v(" "),a("br"),_._v(" "),a("p",[_._v("일반적으로 "),a("code",[_._v("하드웨어를 관리하고, 응용 프로그램과 하드웨어 사이에서 인터페이스 역할을 하며 시스템의 동작을 제어하는 시스템 소프트웨어")]),_._v("로 정의한다.")]),_._v(" "),a("br"),_._v(" "),a("p",[_._v("운영체제는 "),a("strong",[_._v("시스템의 자원과 동작을 관리하는 소프트웨어")]),_._v("다.")]),_._v(" "),a("p",[_._v("(시스템의 역할 구분에 따라 운영체제의 역할은 모두 다를 수 있다.)")]),_._v(" "),a("br"),_._v(" "),a("p",[_._v("운영체제를 큰 틀로 나눠보면 아래와 같다.")]),_._v(" "),a("h3",{attrs:{id:"_1-프로세스-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-프로세스-관리"}},[_._v("#")]),_._v(" 1. 프로세스 관리")]),_._v(" "),a("ul",[a("li",[_._v("프로세스, 스레드")]),_._v(" "),a("li",[_._v("스케줄링")]),_._v(" "),a("li",[_._v("동기화")]),_._v(" "),a("li",[_._v("IPC 통신")])]),_._v(" "),a("h3",{attrs:{id:"_2-저장장치-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-저장장치-관리"}},[_._v("#")]),_._v(" 2. 저장장치 관리")]),_._v(" "),a("ul",[a("li",[_._v("메모리 관리")]),_._v(" "),a("li",[_._v("가상 메모리")]),_._v(" "),a("li",[_._v("파일 시스템")])]),_._v(" "),a("h3",{attrs:{id:"_3-네트워킹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-네트워킹"}},[_._v("#")]),_._v(" 3. 네트워킹")]),_._v(" "),a("ul",[a("li",[_._v("TCP/IP")]),_._v(" "),a("li",[_._v("기타 프로토콜")])]),_._v(" "),a("h3",{attrs:{id:"_4-사용자-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-사용자-관리"}},[_._v("#")]),_._v(" 4. 사용자 관리")]),_._v(" "),a("ul",[a("li",[_._v("계정 관리")]),_._v(" "),a("li",[_._v("접근권한 관리")])]),_._v(" "),a("h3",{attrs:{id:"_5-디바이스-드라이버"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-디바이스-드라이버"}},[_._v("#")]),_._v(" 5. 디바이스 드라이버")]),_._v(" "),a("ul",[a("li",[_._v("순차접근 장치")]),_._v(" "),a("li",[_._v("임의접근 장치")]),_._v(" "),a("li",[_._v("네트워크 장치")])]),_._v(" "),a("br"),_._v(" "),a("p",[_._v("항목별로 하나씩 좀 더 자세히 살펴보자")]),_._v(" "),a("br"),_._v(" "),a("h3",{attrs:{id:"프로세스-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-관리"}},[_._v("#")]),_._v(" 프로세스 관리")]),_._v(" "),a("p",[_._v("운영체제에서 작동하는 응용 프로그램을 관리하는 기능이다.")]),_._v(" "),a("p",[_._v("어떤 의미에서는 프로세서(CPU) 관리하는 것이라고 볼 수도 있다. 현재 CPU를 점유해야 할 프로세스를 결정하고, 실제로 CPU를 프로세스에 할당하며, 이 프로세스 간 공유 자원 접근과 통신 등을 관리하게 된다.")]),_._v(" "),a("br"),_._v(" "),a("h3",{attrs:{id:"저장장치-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#저장장치-관리"}},[_._v("#")]),_._v(" 저장장치 관리")]),_._v(" "),a("p",[_._v("1차 저장장치에 해당하는 메인 메모리와 2차 저장장치에 해당하는 하드디스크, NAND 등을 관리하는 기능이다.")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("1차 저장장치(Main Memory)")]),_._v(" "),a("ul",[a("li",[_._v("프로세스에 할당하는 메모리 영역의 할당과 해제")]),_._v(" "),a("li",[_._v("각 메모리 영역 간의 침범 방지")]),_._v(" "),a("li",[_._v("메인 메모리의 효율적 활용을 위한 가상 메모리 기능\n"),a("br")])])]),_._v(" "),a("li",[a("p",[_._v("2차 저장장치(HDD, NAND Flash Memory 등)")]),_._v(" "),a("ul",[a("li",[_._v("파일 형식의 데이터 저장")]),_._v(" "),a("li",[_._v("이런 파일 데이터 관리를 위한 파일 시스템을 OS에서 관리")]),_._v(" "),a("li",[a("code",[_._v("FAT, NTFS, EXT2, JFS, XFS")]),_._v(" 등 많은 파일 시스템들이 개발되어 사용 중")])])])]),_._v(" "),a("br"),_._v(" "),a("h3",{attrs:{id:"네트워킹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#네트워킹"}},[_._v("#")]),_._v(" 네트워킹")]),_._v(" "),a("p",[_._v("네트워킹은 컴퓨터 활용의 핵심과도 같아졌다.")]),_._v(" "),a("p",[_._v("TCP/IP 기반의 인터넷에 연결하거나, 응용 프로그램이 네트워크를 사용하려면 "),a("strong",[_._v("운영체제에서 네트워크 프로토콜을 지원")]),_._v("해야 한다. 현재 상용 OS들은 다양하고 많은 네트워크 프로토콜을 지원한다.")]),_._v(" "),a("p",[_._v("이처럼 운영체제는 사용자와 컴퓨터 하드웨어 사이에 위치해서, 하드웨어를 운영 및 관리하고 명령어를 제어하여 응용 프로그램 및 하드웨어를 소프트웨어적으로 제어 및 관리를 해야한다.")]),_._v(" "),a("br"),_._v(" "),a("h3",{attrs:{id:"사용자-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용자-관리"}},[_._v("#")]),_._v(" 사용자 관리")]),_._v(" "),a("p",[_._v("우리가 사용하는 PC는 오직 한 사람만의 것일까? 아니다.")]),_._v(" "),a("p",[_._v("하나의 PC로도 여러 사람이 사용하는 경우가 많다. 그래서 운영체제는 한 컴퓨터를 여러 사람이 사용하는 환경도 지원해야 한다. 가족들이 각자의 계정을 만들어 PC를 사용한다면, 이는 하나의 컴퓨터를 여러 명이 사용한다고 말할 수 있다.")]),_._v(" "),a("p",[_._v("따라서, 운영체제는 각 계정을 관리할 수 있는 기능이 필요하다. 사용자 별로 프라이버시와 보안을 위해 개인 파일에 대해선 다른 사용자가 접근할 수 없도록 해야 한다. 이 밖에도 파일이나 시스템 자원에 접근 권한을 지정할 수 있도록 지원하는 것이 사용자 관리 기능이다.")]),_._v(" "),a("br"),_._v(" "),a("h3",{attrs:{id:"디바이스-드라이버"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디바이스-드라이버"}},[_._v("#")]),_._v(" 디바이스 드라이버")]),_._v(" "),a("p",[_._v("운영체제는 시스템의 자원, 하드웨어를 관리한다. 시스템에는 여러 하드웨어가 붙어있는데, 이들을 운영체제에서 인식하고 관리하게 만들어 응용 프로그램이 하드웨어를 사용할 수 있게 만들어야 한다.")]),_._v(" "),a("p",[_._v("따라서, 운영체제 안에 하드웨어를 추상화 해주는 계층이 필요하다. 이 계층이 바로 디바이스 드라이버라고 불린다. 하드웨어의 종류가 많은 만큼, 운영체제 내부의 디바이스 드라이버도 많이 존재한다.")]),_._v(" "),a("p",[_._v("이러한 수많은 디바이스 드라이버들을 관리하는 기능 또한 운영체제가 맡고 있다.")]),_._v(" "),a("br"),_._v(" "),a("br"),_._v(" "),a("br"),_._v(" "),a("h4",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[_._v("#")]),_._v(" [참고 자료]")]),_._v(" "),a("ul",[a("li",[_._v("'도전 임베디드 OS 만들기' - 저자 이만우")])])])}),[],!1,null,null,null);v.default=r.exports}}]);