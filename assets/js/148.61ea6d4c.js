(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{430:function(v,_,e){"use strict";e.r(_);var o=e(12),d=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"리눅스-기본-명령어"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#리눅스-기본-명령어"}},[v._v("#")]),v._v(" 리눅스 기본 명령어")]),v._v(" "),_("blockquote",[_("p",[v._v("실무에서 자주 사용하는 명령어들")])]),v._v(" "),_("br"),v._v(" "),_("p",[_("code",[v._v("shutdown")]),v._v(", "),_("code",[v._v("halt")]),v._v(", "),_("code",[v._v("init 0")]),v._v(", "),_("code",[v._v("poweroff")]),v._v(" : 시스템 종료")]),v._v(" "),_("p",[_("code",[v._v("reboot")]),v._v(", "),_("code",[v._v("init 6")]),v._v(", "),_("code",[v._v("shutdown -r now")]),v._v(" : 시스템 재부팅")]),v._v(" "),_("br"),v._v(" "),_("p",[_("code",[v._v("sudo")]),v._v(" : 다른 사용자가 super user권한으로 실행")]),v._v(" "),_("p",[_("code",[v._v("su")]),v._v(" : 사용자의 권한을 root로 변경")]),v._v(" "),_("p",[_("code",[v._v("pwd")]),v._v(" : 현재 자신이 위치한 디렉토리")]),v._v(" "),_("p",[_("code",[v._v("cd")]),v._v(" : 디렉토리 이동")]),v._v(" "),_("p",[_("code",[v._v("ls")]),v._v(" : 현재 자신이 속해있는 폴더 내의 파일, 폴더 표시")]),v._v(" "),_("p",[_("code",[v._v("mkdir")]),v._v(" : 디렉토리 생성")]),v._v(" "),_("p",[_("code",[v._v("rmdir")]),v._v(" : 디렉토리 삭제")]),v._v(" "),_("p",[_("code",[v._v("touch")]),v._v(" : 파일 생성 (크기 0)")]),v._v(" "),_("p",[_("code",[v._v("cp")]),v._v(" : 파일 복사 (디렉토리 내부까지 복사 시, "),_("code",[v._v("cp - R")]),v._v(")")]),v._v(" "),_("p",[_("code",[v._v("mv")]),v._v(" : 파일 이동")]),v._v(" "),_("p",[_("code",[v._v("rm")]),v._v(" : 파일 삭제 (디렉토리 삭제 시에는 보통 "),_("code",[v._v("rm -R")]),v._v("을 많이 사용)")]),v._v(" "),_("p",[_("code",[v._v("cat")]),v._v(" : 파일의 내용을 화면에 출력")]),v._v(" "),_("p",[_("code",[v._v("more")]),v._v(" : 화면 단위로 보기 쉽게 내용 출력")]),v._v(" "),_("p",[_("code",[v._v("less")]),v._v(" : more보다 조금 더 보기 편함")]),v._v(" "),_("p",[_("code",[v._v("find")]),v._v(" : 특정한 파일을 찾는 명령어")]),v._v(" "),_("p",[_("code",[v._v("grep")]),v._v(" : 특정 패턴으로 파일을 찾는 명령어")]),v._v(" "),_("p",[_("code",[v._v(">>")]),v._v(" : 리다이렉션 (파일 끼워넣기 등)")]),v._v(" "),_("p",[_("code",[v._v("file")]),v._v(" : 파일 종류 확인")]),v._v(" "),_("p",[_("code",[v._v("which")]),v._v(" : 특정 명령어의 위치 찾음")]),v._v(" "),_("br"),v._v(" "),_("p",[_("code",[v._v("ping")]),v._v(" : 네트워크 상태 점검 및 도메인 IP 확인")]),v._v(" "),_("p",[_("code",[v._v("ifconfig")]),v._v(" : 리눅스 IP 확인 및 설정")]),v._v(" "),_("p",[_("code",[v._v("netstat")]),v._v(" : 네트워크의 상태")]),v._v(" "),_("p",[_("code",[v._v("nbstat")]),v._v(" : IP 충돌 시, 충돌된 컴퓨터를 찾기 위함")]),v._v(" "),_("p",[_("code",[v._v("traceroute")]),v._v(" : 알고 싶은 목적지까지 경로를 찾아줌")]),v._v(" "),_("p",[_("code",[v._v("route")]),v._v(" : 라우팅 테이블 구성 상태")]),v._v(" "),_("p",[_("code",[v._v("clock")]),v._v(" : 시간 조절 명령어")]),v._v(" "),_("p",[_("code",[v._v("date")]),v._v(" : 시간, 날짜 출력 및 시간과 날짜 변경")]),v._v(" "),_("br"),v._v(" "),_("p",[_("code",[v._v("rpm")]),v._v(" : rpm 패키지 설치, 삭제 및 관리")]),v._v(" "),_("p",[_("code",[v._v("yum")]),v._v(" : rpm보다 더 유용함 (다른 필요한 rpm 패키기지까지 알아서 다운로드)")]),v._v(" "),_("p",[_("code",[v._v("free")]),v._v(" : 시스템 메모리의 정보 출력")]),v._v(" "),_("p",[_("code",[v._v("ps")]),v._v(" : 현재 실행되고 있는 프로세스 목록 출력")]),v._v(" "),_("p",[_("code",[v._v("pstree")]),v._v(" : 트리 형식으로 출력")]),v._v(" "),_("p",[_("code",[v._v("top")]),v._v(" : 리눅스 시스템의 운용 상황을 실시간으로 모니터링 가능")]),v._v(" "),_("p",[_("code",[v._v("kill")]),v._v(" : 특정 프로세스에 특정 signal을 보냄")]),v._v(" "),_("p",[_("code",[v._v("killall")]),v._v(" : 특정 프로세스 모두 종료")]),v._v(" "),_("p",[_("code",[v._v("killall5")]),v._v(" : 모든 프로세스 종료 (사용X)")]),v._v(" "),_("br"),v._v(" "),_("p",[_("code",[v._v("tar")]),v._v(", "),_("code",[v._v("gzip")]),v._v(" 등 : 압축 파일 묶거나 품")]),v._v(" "),_("p",[_("code",[v._v("chmod")]),v._v(" : 파일 or 디렉토리 권한 수정")]),v._v(" "),_("p",[_("code",[v._v("chown")]),v._v(" : 파일 or 디렉토리 소유자, 소유 그룹 수정")]),v._v(" "),_("p",[_("code",[v._v("chgrp")]),v._v(" : 파일 or 디렉토리 소유 그룹 수정")]),v._v(" "),_("p",[_("code",[v._v("umask")]),v._v(" : 파일 생성시의 권한 값을 변경")]),v._v(" "),_("p",[_("code",[v._v("at")]),v._v(" : 정해진 시간에 하나의 작업만 수행")]),v._v(" "),_("p",[_("code",[v._v("crontab")]),v._v(" : 반복적인 작업을 수행 (디스크 최적화를 위한 반복적 로그 파일 삭제 등에 활용)")]),v._v(" "),_("br"),v._v(" "),_("p",[_("code",[v._v("useradd")]),v._v(" : 새로운 사용자 계정 생성")]),v._v(" "),_("p",[_("code",[v._v("password")]),v._v(" : 사용자 계정의 비밀번호 설정")]),v._v(" "),_("p",[_("code",[v._v("userdel")]),v._v(" : 사용자 계정 삭제")]),v._v(" "),_("p",[_("code",[v._v("usermod")]),v._v(" : 사용자 계정 수정")]),v._v(" "),_("p",[_("code",[v._v("groupadd")]),v._v(" : 그룹 생성")]),v._v(" "),_("p",[_("code",[v._v("groupdel")]),v._v(" : 그룹 삭제")]),v._v(" "),_("p",[_("code",[v._v("groups")]),v._v(" : 그룹 확인")]),v._v(" "),_("p",[_("code",[v._v("newgrp")]),v._v(" : 자신이 속한 그룹 변경")]),v._v(" "),_("p",[_("code",[v._v("mesg")]),v._v(" : 메시지 응답 가능 및 불가 설정")]),v._v(" "),_("p",[_("code",[v._v("talk")]),v._v(" : 로그인한 사용자끼리 대화")]),v._v(" "),_("p",[_("code",[v._v("wall")]),v._v(" : 시스템 로그인한 모든 사용자에게 메시지 전송")]),v._v(" "),_("p",[_("code",[v._v("write")]),v._v(" : 로그인한 사용자에게 메시지 전달")]),v._v(" "),_("p",[_("code",[v._v("dd")]),v._v(" : 블럭 단위로 파일을 복사하거나 변환")]),v._v(" "),_("br"),v._v(" "),_("br"),v._v(" "),_("br"),v._v(" "),_("h5",{attrs:{id:"참고-자료"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[v._v("#")]),v._v(" [참고 자료]")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://vaert.tistory.com/103",target:"_blank",rel:"noopener noreferrer"}},[v._v("링크"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=d.exports}}]);