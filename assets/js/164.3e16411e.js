(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{446:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"travis-ci-프로젝트-연동하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-프로젝트-연동하기"}},[t._v("#")]),t._v(" [Travis CI] 프로젝트 연동하기")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMIduW%2FbtrfWMtiPEC%2FENLpZFdHhIVcpV31IWNBcK%2Fimg.jpg"}}),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("자동으로 테스트 및 빌드가 될 수 있는 환경을 만들어 개발에만 집중할 수 있도록 하자\n")])])]),s("br"),t._v(" "),s("h4",{attrs:{id:"ci-continuous-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ci-continuous-integration"}},[t._v("#")]),t._v(" CI(Continuous Integration)")]),t._v(" "),s("p",[t._v("코드 버전 관리를 하는 Git과 같은 시스템에 PUSH가 되면 자동으로 빌드 및 테스트가 수행되어 안정적인 배포 파일을 만드는 과정을 말한다.")]),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"cd-continuous-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-continuous-deployment"}},[t._v("#")]),t._v(" CD(Continuous Deployment)")]),t._v(" "),s("p",[t._v("빌드한 결과를 자동으로 운영 서버에 무중단 배포하는 과정을 말한다.")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"travis-ci-웹-서비스-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-웹-서비스-설정하기"}},[t._v("#")]),t._v(" Travis CI 웹 서비스 설정하기")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis 사이트"),s("OutboundLink")],1),t._v("로 접속하여 깃허브 계정으로 로그인 후, "),s("code",[t._v("Settings")]),t._v("로 들어간다.")]),t._v(" "),s("p",[t._v("Repository 활성화를 통해 CI 연결을 할 프로젝트로 이동한다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcpCgp3%2Fbtrf1hF3DBd%2F6y2x40HdH0Ko8ZUB4kHV90%2Fimg.jpg"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"프로젝트-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-설정하기"}},[t._v("#")]),t._v(" 프로젝트 설정하기")]),t._v(" "),s("p",[t._v("세부설정을 하려면 "),s("code",[t._v("yml")]),t._v("파일로 진행해야 한다. 프로젝트에서 "),s("code",[t._v("build.gradle")]),t._v("이 위치한 경로에 "),s("code",[t._v(".travis.yml")]),t._v("을 새로 생성하자")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" java\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" openjdk11\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Travis CI 서버의 Home")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$HOME/.m2/repository'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$HOME/.gradle'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./gradlew clean build"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CI 실행 완료시 메일로 알람")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("notifications")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("recipients")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gyuseok6394@gmail.com\n")])])]),s("ul",[s("li",[s("code",[t._v("branches")]),t._v(" : 어떤 브랜치가 push할 때 수행할지 지정")]),t._v(" "),s("li",[s("code",[t._v("cache")]),t._v(" : 캐시를 통해 같은 의존성은 다음 배포하지 않도록 설정")]),t._v(" "),s("li",[s("code",[t._v("script")]),t._v(" : 설정한 브랜치에 push되었을 때 수행하는 명령어")]),t._v(" "),s("li",[s("code",[t._v("notifications")]),t._v(" : 실행 완료 시 자동 알람 전송 설정")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("생성 후, 해당 프로젝트에서 "),s("code",[t._v("Github")]),t._v("에 push를 진행하면 Travis CI 사이트의 해당 레포지토리 정보에서 빌드가 성공한 것을 확인할 수 있다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwMGb1%2FbtrfXzHcn2G%2FFjODgalLKrzYNvsx5COlxK%2Fimg.jpg"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"만약-travis-ci에서-push-후에도-아무런-반응이-없다면"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#만약-travis-ci에서-push-후에도-아무런-반응이-없다면"}},[t._v("#")]),t._v(" "),s("em",[t._v("만약 Travis CI에서 push 후에도 아무런 반응이 없다면?")])]),t._v(" "),s("p",[t._v("현재 진행 중인 프로젝트의 GitHub Repository가 바로 루트 경로에 있지 않은 확률이 높다.")]),t._v(" "),s("p",[t._v("즉, 해당 레포지토리에서 추가로 폴더를 생성하여 프로젝트가 생성된 경우를 말한다.")]),t._v(" "),s("p",[t._v("이럴 때는 "),s("code",[t._v(".travis.yml")]),t._v("을  "),s("code",[t._v("build.gradle")]),t._v("이 위치한 경로에 만드는 것이 아니라, 레포지토리 루트 경로에 생성해야 한다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzdMai%2Fbtrf1iEWSaG%2Fq2FZkc3HXXo0Nnes2MYegk%2Fimg.jpg"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("그 이후 다음과 같이 코드를 추가해주자 (현재 위치로 부터 프로젝트 빌드를 진행할 곳으로 이동이 필요하기 때문)")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" java\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" openjdk11\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ------------추가 부분----------------")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("프로젝트명"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/\n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ------------------------------------")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Travis CI 서버의 Home")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$HOME/.m2/repository'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$HOME/.gradle'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./gradlew clean build"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CI 실행 완료시 메일로 알람")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("notifications")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("recipients")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gyuseok6394@gmail.com\n")])])]),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"참고-자료"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/jojoldu/freelec-springboot2-webservice",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),s("OutboundLink")],1)])]),t._v(" "),s("br")])}),[],!1,null,null,null);s.default=e.exports}}]);