(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{251:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-cli-spring-boot-연동하여-환경-구축"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-spring-boot-연동하여-환경-구축"}},[t._v("#")]),t._v(" Vue CLI + Spring Boot 연동하여 환경 구축")]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb2Pobh%2Fbtqwtl6pmaF%2F0fITFNedrPMn9uaEj8RrJK%2Fimg.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("프론트엔드는 Vue.js로, 백엔드는 Spring Boot를 이용해서 프로젝트를 진행하려고 한다.")]),t._v(" "),s("p",[t._v("스프링에서 Jsp를 통해 view를 구축해봤지만, 이번엔 Vue.js를 활용해서 View를 모두 넘겨주려고 한다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("스프링에서 컨트롤러를 통해 DB 관리나 데이터에 관한 비즈니스 로직을 잘 처리하고, 이에 대한 값을 활용해 Vue에서 화면으로 뿌려줄 탬플릿을 만들어나가는 진행 방식이 되지 않을까 생각된다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("개발 툴은 VS Code로 진행한다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code 다운로드"),s("OutboundLink")],1)]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Java와 Node.js도 기본적으로 깔린 상태여야 한다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://nodejs.org/ko/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 다운로드"),s("OutboundLink")],1)]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",[t._v("VS Code를 열고, 자신이 프로젝트를 생성할 폴더로 들어가자 (File → Open Folder)")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("시작하기에 앞서, VS Code에서 필요한 플러그인을 설치한다.")]),t._v(" "),s("p",[t._v("왼쪽 메뉴탭에서 Extensions(단축키 : Ctrl + Shift + X)를 누르고, 검색창에서 아래 3가지를 입력 후 install 한다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. Vetur\n2. Java IDE Pack\n3. Lombok\n")])])]),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"vs-code-한글-인코딩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-한글-인코딩"}},[t._v("#")]),t._v(" VS Code 한글 인코딩")]),t._v(" "),s("p",[t._v("현재 상태로는 VS Code에서 한글을 인식해주지 않는다. 인코딩을 따로 해줘야한다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("File → Preferences → Settings로 들어간다.")]),t._v(" "),s("p",[t._v("위의 검색창에 'settings.json'을 검색하면 아래와 같이 Edit할 수 있는 링크가 뜬다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FWSVv1%2Fbtqwr5pWRwm%2Fyx95AKviDEKtXNruHkwowK%2Fimg.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("json 파일이 나오게 되는데, 이곳에서 'java.jdt.ls.vmargs'를 찾는다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이곳에 value 값으로 '-Dfile.encoding=utf-8'를 추가해줘야한다.")]),t._v(" "),s("p",[t._v("추가 후에 java.jdt.ls.vmargs는 아래와 같이 될 것이다.")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"java.jdt.ls.vmargs": "-Dfile.encoding=utf-8 -noverify -Xmx1G -XX:+UseG1GC -XX:+UseStringDeduplication -javaagent:\\"lombok 경로~~"\n')])])]),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"프로젝트-구성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-구성하기"}},[t._v("#")]),t._v(" 프로젝트 구성하기")]),t._v(" "),s("p",[t._v("이제 프로젝트를 구성해보자!")]),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"_1-spring-boot-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-boot-project"}},[t._v("#")]),t._v(" 1.Spring Boot Project")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("먼저, 스프링 부트 프로젝트를 만든다. (우리는 스프링 부트 프로젝트 안에 Vue 프로젝트를 넣을 것이다)")]),t._v(" "),s("p",[t._v("프로젝트는 "),s("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Initializr"),s("OutboundLink")],1),t._v("을 이용할 것이다. 스프링 부트 프로젝트를 매우 쉽고 간편하게 만들어주는 곳이다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FTLnMo%2FbtqwrAw7TqQ%2FjBy8g9AOdUTh7cEVOhK4W0%2Fimg.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("자신이 만들 프로젝트 목적에 맞게 설정해주면 된다.")]),t._v(" "),s("p",[t._v("Dependencies도 미리 추가해놓을 수 있다. (Web, JDBC, Lombok, MySQL 등)")]),t._v(" "),s("p",[t._v("나중에 따로 추가할 수 있으니 기억나는 것들만 지정해도 무방하다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("프로젝트 Metadata 부분은 생성할 프로젝트 패키지나 이름 등 옵션을 지정해줄 수 있다. 처음에는 demo로 되어있는데 자신이 만들고 싶은대로 수정할 수 있다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("마지막으로 'Generate the project' 버튼을 클릭하면, zip 파일로 프로젝트가 다운로드 된다. 해당 파일을 압축 해제하고 현재 VS Code에서 접속 중인 폴더에 복사하면 된다.")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"_2-vue-js-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-js-project"}},[t._v("#")]),t._v(" 2.Vue.js Project")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이제 스프링 부트에서 Vue.js 프로젝트를 만들어보자. 프로젝트 생성은 Vue CLI를 이용할 것이다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Vue CLI는 Vue.js 개발을 위한 시스템으로, Vue.js Core에서 공식적으로 제공하는 CLI다. 개발에 집중할 수 있도록 프로젝트 구성을 빠르고 쉽게 도와주는 역할을 하고 있다.")]),t._v(" "),s("p",[t._v("(따라서 반드시 이용해야 한다는 건 아니다. 다만 쉽게 구축할 수 있도록 만들어준거니 이용하면 편하다)")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("현재는 Vue CLI 버전 3가 나온 상태다. 2보다 더욱 편하고 많은 기능들을 제공한다고 하지만, 많은 정보가 없어서 일단 2로 진행하고자 한다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Node.js를 설치한 상태기 때문에, npm을 통해 터미널에서 Vue CLI 설치가 가능하다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("VS Code에서 터미널을 열고, 아래와 같이 설치를 진행하자")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ npm i -g @vue/cli\n$ npm i -g @vue/cli-init\n")])])]),s("br"),t._v(" "),s("p",[t._v("@vue/cli-init은 2버전 템플릿을 가져오기 위한 vue init을 제공해준다.")]),t._v(" "),s("p",[t._v("이제 필요한 설치는 끝났다! Vue 프로젝트를 만들어보자. 이름은 그냥 frontend로 생성했다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("(현재 프로젝트 생성은, 스프링 부트 루트 폴더 위치에서 진행하는 것이다.)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ vue init webpack frontend\n")])])]),s("br"),t._v(" "),s("p",[t._v("몇가지 설정하는 부분이 나온다.")]),t._v(" "),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("Project name")]),t._v(" "),s("p",[t._v("Project description")]),t._v(" "),s("p",[t._v("Author")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이 3가지는 자신의 프로젝트에 맞게 작성해주면 된다.")]),t._v(" "),s("blockquote",[s("p",[t._v("Vue build는 standalone")]),t._v(" "),s("p",[t._v("vue-router는 설치(Yes)")]),t._v(" "),s("p",[t._v("Use ESLint to lint your code도 Yes")]),t._v(" "),s("p",[t._v("ESLint preset은 Standard")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("그 이후 test부분은 진행할 사람들은 Yes, 안할사람은 No로 넘어가면 된다.")]),t._v(" "),s("p",[t._v("터미널 창에서 열심히 파일들이 다운로드되는 모습을 볼 수 있다. (시간 조금 걸림)")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("끝나면 스프링부트 루트 폴더에 'frontend'라는 Vue 프로젝트 폴더가 생성된 모습을 확인할 수 있다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F0543k%2Fbtqwq5xDdXA%2F9jkKem7iR2QXlo9C3SYbk0%2Fimg.png"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"webpack-번들링-output-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-번들링-output-설정"}},[t._v("#")]),t._v(" Webpack 번들링 output 설정")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Vue에서 작성한 코드들을 번들링하고, 이 결과를 어느 위치에서 뽑아낼 지 정해야 한다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Spring Boot에서는 자동설정으로 src/main/resources에 번들링한 결과들을 저장하도록 되어있다.")]),t._v(" "),s("p",[t._v("(이곳에 index.html과 정적 파일(css, img, javascript)들이 인식됨)")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이 구역에 잘 번들링 될 수 있도록, Vue 프로젝트에서 경로 지정을 해주자.")]),t._v(" "),s("p",[t._v("config/index.js을 열어 build 부분에 정의한 곳을 수정해야 한다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FypIZ4%2FbtqwrRyGxV2%2F6kBWA8wH0C3CKECs9ITy40%2Fimg.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("해당 위치에 절대 경로로 위와 같이 수정해준다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이제 터미널에서 'npm run build' 커맨드를 입력하여 빌드를 실행한다.")]),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbdPbwS%2FbtqwrBbLXZE%2FSK29p5xKxGDkZ3cNZ5al6K%2Fimg.png"}}),t._v(" "),s("p",[t._v("이제 Spring Boot의 src/main/resources/static 경로에 들어가보면, 번들링 된 정적 파일들이 생성된 모습을 확인할 수 있다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이제 스프링 부트 애플리케이션을 실행해보자")]),t._v(" "),s("p",[t._v(".vscode 폴더의 launch.json에 들어가서 F5키를 누르면 스프링 부트 서버가 실행된다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("???")]),t._v(" "),s("p",[t._v("에러가 뜰 것이다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n***************************\nAPPLICATION FAILED TO START\n*************************** \nDescription: \nFailed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured. \n\nReason: Failed to determine a suitable driver class\n\n")])])]),s("p",[t._v("datasource 내용이 없어서 뜬 에러다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("스프링부트에서 프로젝트를 생성할 때, application.properties 파일이 자동생성되나 확인해보면 빈 파일일 것이다.")]),t._v(" "),s("p",[t._v("사용자가 원하는 데이터베이스를 선택하고, 그에 맞는 드라이버 라이브러리 설치와 jdbc 설정을 직접 해야한다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이 공간이 비어있기 때문에 서버가 실행을 하고 있지 못하는 것이다. 현재는 어떤 데이터베이스를 지정할 지 결정이 되있는 상태가 아니기 때문에 스프링 부트의 메인 클래스에서 어노테이션을 추가해주자")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nimport org.springframework.boot.autoconfigure.EnableAutoConfiguration;\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;\n\n@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})\n\n")])])]),s("p",[t._v("이를 추가한 메인 클래스는 아래와 같이 된다.")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mvc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jdbc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exclude"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MvcApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MvcApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("이제 다시 스프링 부트 메인 애플리케이션을 실행하면, 디버깅 창에서 에러가 없어진 걸 확인할 수 있다.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("이제 localhost:8080/으로 접속하면, Vue에서 만든 화면이 잘 나오는 것을 확인할 수 있다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FHGlD8%2Fbtqwr6biQpm%2FXeCKMJsUr0HbcXiWa3S98K%2Fimg.png"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Vue.js에서 View에 필요한 템플릿을 구성하고, 스프링 부트에 번들링하는 과정을 통해 연동하는 과정을 완료했다!")]),t._v(" "),s("br"),t._v(" "),s("br")])}),[],!1,null,null,null);a.default=e.exports}}]);