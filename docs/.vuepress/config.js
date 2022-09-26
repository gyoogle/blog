module.exports = {
    title: '👨🏻‍💻 Tech Interview',
    description: 'Ready for Tech-Interview',
    email: 'gyuseok6394@gmail.com',
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: `/images/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: [
        '@vuepress/back-to-top',
        ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
        }],
        [
            '@vuepress/google-analytics',
            {
              'ga': 'UA-143055167-2'
            }
          ]
    ],
    themeConfig: {
        sidebar: [
            {
                title: '📋 Guide',
                collapsable: false,
                children: [ 
                    ['/guide/면접 준비','- 면접 준비']
                ]
            },
            {
                title: '📌 Algorithm',
                collapsable: true,
                children: [ 
                    ['/algorithm/Bubble Sort','- 거품 정렬(Bubble Sort)'],
                    ['/algorithm/Selection Sort','- 선택 정렬(Selection Sort)'],
                    ['/algorithm/Insertion Sort','- 삽입 정렬(Insertion Sort)'],
                    ['/algorithm/Quick Sort','- 퀵 정렬(Quick Sort)'],
                    ['/algorithm/Merge Sort','- 병합 정렬(Merge Sort)'],
                    ['/algorithm/Heap Sort','- 힙 정렬(Heap Sort)'],
                    ['/algorithm/Radix Sort','- 기수 정렬(Radix Sort)'],
                    ['/algorithm/Counting Sort','- 계수 정렬(Counting Sort)'],
                    ['/algorithm/Binary Search','- 이분 탐색(Binary Search)'],
                    ['/algorithm/Hash Table','- 해시 테이블(Hash Table)'],
                    ['/algorithm/DFS & BFS','- DFS & BFS'],
                    ['/algorithm/LIS','- 최장 증가 수열(LIS)'],
                    ['/algorithm/LCA','- 최소 공통 조상(LCA)'],
                    ['/algorithm/Dynamic Programming','- 동적 계획법(DP)'],
                    ['/algorithm/Dijkstra','- 다익스트라(Dijkstra) 알고리즘'],
                    ['/algorithm/BitMask','- 비트마스크(BitMask)']
                ]
            },
            {
                type : 'group',
                title: '📌 Computer Science',
                collapsable: true,
                children: [
                    {
                        type: 'group',
                        title: '● Computer Architecture',
                        collapsable: true,
                        children: [
                            ['/computer-science/computer-architecture/컴퓨터의 구성', '- 컴퓨터의 구성'],
                            ['/computer-science/computer-architecture/중앙처리장치 작동 원리', '- 중앙처리장치(CPU) 작동 원리'],
                            ['/computer-science/computer-architecture/캐시 메모리', '- 캐시 메모리(Cache Memory)'],
                            ['/computer-science/computer-architecture/고정 소수점 & 부동 소수점', '- 고정 소수점 & 부동 소수점'],
                            ['/computer-science/computer-architecture/패리티 비트 & 해밍 코드', '- 패리티 비트 & 해밍 코드'],
                            ['/computer-science/computer-architecture/ARM 프로세서', '- ARM 프로세서']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Data Structure',
                        collapsable: true,
                        children: [
                                ['/computer-science/data-structure/Array', '- 배열(Array)'],
                                ['/computer-science/data-structure/Linked List', '- 연결 리스트(Linked List)'],
                                ['/computer-science/data-structure/Array vs ArrayList vs LinkedList', '- Array & ArrayList & LinkedList'],
                                ['/computer-science/data-structure/Stack & Queue', '- 스택 & 큐'],
                                ['/computer-science/data-structure/Heap', '- 힙(Heap)'],
                                ['/computer-science/data-structure/Tree', '- 트리(Tree)'],
                                ['/computer-science/data-structure/Binary Search Tree', '- 이진 탐색 트리'],
                                ['/computer-science/data-structure/Hash', '- 해시(Hash)'],
                                ['/computer-science/data-structure/Trie', '- 트라이(Trie)'],
                                ['/computer-science/data-structure/B Tree & B+ Tree', '- B Tree & B+ Tree']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Operating System',
                        collapsable: true,
                        children: [
                                ['/computer-science/operating-system/Operation System', '- 운영체제란?'],
                                ['/computer-science/operating-system/Process vs Thread', '- 프로세스와 스레드'],
                                ['/computer-science/operating-system/Process Address Space', '- 프로세스 주소 공간'],
                                ['/computer-science/operating-system/Interrupt', '- 인터럽트(Interrupt)'],
                                ['/computer-science/operating-system/System Call', '- 시스템 콜(System Call)'],
                                ['/computer-science/operating-system/PCB & Context Switching', '- PCB와 Context Switching'],
                                ['/computer-science/operating-system/IPC', '- IPC(Inter Process Communication)'],
                                ['/computer-science/operating-system/CPU Scheduling', '- CPU 스케줄링'],
                                ['/computer-science/operating-system/DeadLock', '- 데드락(DeadLock)'],
                                ['/computer-science/operating-system/Race Condition', '- 경쟁 상태(Race Condition)'],
                                ['/computer-science/operating-system/Semaphore & Mutex', '- 세마포어와 뮤텍스'],
                                ['/computer-science/operating-system/Paging and Segmentation', '- 페이징과 세그먼테이션'],
                                ['/computer-science/operating-system/Page Replacement Algorithm', '- 페이지 교체 알고리즘'],
                                ['/computer-science/operating-system/Memory', '- 메모리(Memory)'],
                                ['/computer-science/operating-system/File System', '- 파일 시스템(File System)']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Database',
                        collapsable: true,
                        children: [
                                ['/computer-science/data-base/Key', '- 키(Key)'],
                                ['/computer-science/data-base/Join', '- 조인(Join)'],
                                ['/computer-science/data-base/SQL Injection', '- SQL Injection'],
                                ['/computer-science/data-base/SQL & NOSQL', '- SQL vs NOSQL'],
                                ['/computer-science/data-base/Anomaly', '- 이상(Anomaly)'],
                                ['/computer-science/data-base/Index-', '- 인덱스(Index)'],
                                ['/computer-science/data-base/Normalization', '- 정규화(Normalization)'],
                                ['/computer-science/data-base/Transaction', '- 트랜잭션(Transaction)'],
                                ['/computer-science/data-base/Transaction Isolation Level', '- 트랜잭션 격리 수준'],
                                ['/computer-science/data-base/Redis', '- 레디스(Redis)'],
								['/computer-science/data-base/Stored PROCEDURE', '- 저장 프로시저(Stored PROCEDURE)']

                        ]
                    },
                    {
                        type: 'group',
                        title: '● Network',
                        collapsable: true,
                        children: [
                                ['/computer-science/network/OSI 7계층', '- OSI 7계층'],
                                ['/computer-science/network/TCP 3 way handshake & 4 way handshake', '- TCP 3 & 4 way handshake'],
                                ['/computer-science/network/흐름제어 & 혼잡제어', '- TCP/IP 흐름제어 & 혼잡제어'],
                                ['/computer-science/network/UDP', '- UDP'],
                                ['/computer-science/network/대칭키 & 공개키', '- 대칭키 & 공개키'],
                                ['/computer-science/network/HTTP & HTTPS', '- HTTP & HTTPS'],
                                ['/computer-science/network/TLS HandShake', '- TLS/SSL HandShake'],
                                ['/computer-science/network/Load Balancing', '- 로드밸런싱(Load Balancing)'],
								['/computer-science/network/Blocking,Non-blocking & Synchronous,Asynchronous', '- Blocking/Non-blocking & Synchronous/Asynchronous'],
                                ['/computer-science/network/Blocking & Non-Blocking', '- Blocking & Non-Blocking I/O']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Software Engineering',
                        collapsable: true,
                        children: [
                                ['/computer-science/software-engineering/Clean Code & Refactoring', '- 클린코드 & 리팩토링'],
                                ['/computer-science/software-engineering/Clean Code & Secure Coding', '- 클린코드 & 시큐어 코딩'],
                                ['/computer-science/software-engineering/TDD', '- 테스트 주도 개발(TDD)'],
                                ['/computer-science/software-engineering/Agile', '- 애자일(Agile)'],
                                ['/computer-science/software-engineering/Object-Oriented Programming', '- 객체 지향 프로그래밍'],
                                ['/computer-science/software-engineering/Fuctional Programming', '- 함수형 프로그래밍'],
                                ['/computer-science/software-engineering/DevOps', '- 데브옵스(DevOps)'],
                                ['/computer-science/software-engineering/3rd party', '- 서드파티(3rd party)'],
                                ['/computer-science/software-engineering/MSA', '- 마이크로서비스 아키텍처(MSA)']
                        ]
                    }
                ]
            },
            {
                title: '📌 Design Pattern',
                collapsable: true,
                children: [ 
                    ['/design-pattern/Overview','- 디자인패턴 개요'],
                    ['/design-pattern/Adapter Pattern','- 어댑터 패턴'],
                    ['/design-pattern/Singleton Pattern','- 싱글톤 패턴'],
                    ['/design-pattern/Template Method Pattern','- 템플릿 메소드 패턴'],
                    ['/design-pattern/Factory Method Pattern','- 팩토리 메소드 패턴'],
                    ['/design-pattern/Observer Pattern','- 옵저버 패턴'],
                    ['/design-pattern/Strategy Pattern','- 스트레티지 패턴'],
                    ['/design-pattern/Composite Pattern','- 컴포지트 패턴'],
                    ['/design-pattern/SOLID','- SOLID']
                ]
            },
            {
                type : 'group',
                title: '📌 Language',
                collapsable: true,
                children: [
                    {
                        type: 'group',
                        title: '● C',
                        collapsable: true,
                        children: [
                            ['/computer-language/C/컴파일 과정', '- 컴파일 과정'],
                            ['/computer-language/C/구조체 메모리 크기 계산', '- 구조체 메모리 크기 계산'],
                            ['/computer-language/C/포인터', '- 포인터'],
                            ['/computer-language/C/동적할당', '- 동적할당']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Cpp',
                        collapsable: true,
                        children: [
                                ['/computer-language/Cpp/shallow copy vs deep copy', '- 얕은 복사 vs 깊은 복사'],
                                ['/computer-language/Cpp/가상 함수', '- 가상 함수(Virtual function)'],
                                ['/computer-language/Cpp/입출력 실행속도 줄이는 법', '- 입출력 실행속도 줄이는 법'],
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Java',
                        collapsable: true,
                        children: [
                            ['/computer-language/Java/컴파일 과정', '- 컴파일 과정'],
                            ['/computer-language/Java/Call by value & Call by reference', '- Call by value & Call by reference'],
                            ['/computer-language/Java/Primitive type & Reference type', '- Primitive type & Reference type'],
                            ['/computer-language/Java/Auto Boxing & Unboxing', '- 오토 박싱 & 언박싱'],
                            ['/computer-language/Java/Serialization', '- 직렬화(Serialization)'],
                            ['/computer-language/Java/String & StringBuilder & StringBuffer', '- 문자열 클래스'],
                            ['/computer-language/Java/Wait & notify & notifyAll', '- 오브젝트 클래스'],
                            ['/computer-language/Java/Casting', '- 캐스팅(Casting)'],
                            ['/computer-language/Java/Thread', '- 스레드(Thread)'],
                            ['/computer-language/Java/Intrinsic Lock', '- 고유 락(Intrinsic Lock)'],
                            ['/computer-language/Java/Java Virtual Machine', '- 자바 가상 머신(Java Virtual Machine)'],
                            ['/computer-language/Java/Garbage Collection', '- 가비지 컬렉션(Garbage Collection)'],
                            ['/computer-language/Java/Error & Exception', '- Error & Exception'],
                            ['/computer-language/Java/Stream', '- Stream API'],
							['/computer-language/Java/Record', '- Record']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Javascript',
                        collapsable: true,
                        children: [
                                ['/computer-language/Javascript/es2015', '- ES2015+ 요약'],
                                ['/computer-language/Javascript/Data Type', '- 데이터 타입'],
                                ['/computer-language/Javascript/Object Prototype', '- Object Prototype'],
                                ['/computer-language/Javascript/Closure', '- Closure']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Python',
                        collapsable: true,
                        children: [
                                ['/computer-language/Python/[Python] 매크로 라이브러리', '- 매크로 사용법']
                        ]
                    },
                ]
            },
            {
                type : 'group',
                title: '📌 Web',
                collapsable: true,
                children: [ 
                    ['/web-knowledge/브라우저 동작 방법','- 브라우저 동작 방법'],
                    ['/web-knowledge/Cookie & Session','- 쿠키 & 세션'],
                    ['/web-knowledge/HTTP status code','- HTTP status code'],
                    ['/web-knowledge/REST API','- REST API'],
                    ['/web-knowledge/Web Server와 WAS의 차이','- Web Server와 WAS'],
                    ['/web-knowledge/OAuth','- OAuth'],
                    ['/web-knowledge/JWT','- JWT(JSON Web Token)'],
                    ['/web-knowledge/인증방식','- 인증 방식'],
                    ['/web-knowledge/Logging Level','- 로깅 레벨(Logging Level)'],
                    ['/web-knowledge/UI와 UX','- UI와 UX'],
                    ['/web-knowledge/CSR & SSR','- CSR & SSR'],
                    ['/web-knowledge/네이티브 앱 & 웹 앱 & 하이브리드 앱','- 네이티브 앱 & 웹 앱 & 하이브리드 앱'],
                    ['/web-knowledge/Vue.js와 React의 차이','- Vue.js와 React'],
                    ['/web-knowledge/PWA','- PWA(Progressive Web App)'],
                    ['/web-knowledge/CSRF & XSS','- CSRF & XSS'],
                    {
                        type: 'group',
                        title: '● Spring',
                        collapsable: true,
                        children: [
                            ['/web-knowledge/spring-knowledge/[Spring] Bean Scope','- [Spring] Bean Scope'],
                            ['/web-knowledge/spring-knowledge/Spring MVC','- [Spring] MVC Framework'],
                            ['/web-knowledge/spring-knowledge/[Spring Boot] SpringApplication','- [Spring Boot] SpringApplication'],
                            ['/web-knowledge/spring-knowledge/[Spring Boot] Test Code','- [Spring Boot] Test Code'],
                            ['/web-knowledge/spring-knowledge/JPA','- JPA'],
                            ['/web-knowledge/spring-knowledge/[Spring Data JPA] Dirty Checking','- [Spring Data JPA] 더티 체킹 (Dirty Checking)'],
                            ['/web-knowledge/spring-knowledge/Spring Security - Authentication and Authorization','- Spring Security - 인증 및 권한 부여'],
                        ]
                    },
                    {
                        type: 'group',
                        title: '● Vue.js',
                        collapsable: true,
                        children: [
                            ['/web-knowledge/vue-knowledge/Vue.js 라이프사이클','- Vue.js 라이프사이클'],
                            ['/web-knowledge/vue-knowledge/Vue CLI + Spring Boot 연동하여 환경 구축하기','- Vue CLI + Spring Boot 연동하여 환경 구축'],
                            ['/web-knowledge/vue-knowledge/Vue.js + Firebase로 이메일 회원가입, 로그인 구현','- Vue.js + Firebase로 이메일 회원가입, 로그인 구현'],
                            ['/web-knowledge/vue-knowledge/Vue.js + Firebase로 페이스북 로그인 연동하기','- Vue.js + Firebase로 페이스북 로그인 연동'],
                            ['/web-knowledge/vue-knowledge/Nuxt.js','- Nuxt.js'],
                        ]
                    },
                    {
                        type: 'group',
                        title: '● React',
                        collapsable: true,
                        children: [
                            ['/web-knowledge/react-knowledge/React Fragment','- React Fragment'],
                            ['/web-knowledge/react-knowledge/React Hook','- React Hook'],
                            ['/web-knowledge/react-knowledge/React & Spring Boot 연동하여 환경 구축하기','- React & Spring Boot 연동하여 환경 구축'],
                        ]
                    },
                    {
                        type: 'group',
                        title: '● DevOps',
                        collapsable: true,
                        children: [
                            ['/web-knowledge/devops-knowledge/[AWS] 스프링 부트 배포 스크립트 생성','- [AWS] 스프링 부트 배포 스크립트 생성'],
                            ['/web-knowledge/devops-knowledge/[Travis CI] 프로젝트 연동하기','- [Travis CI] 프로젝트 연동하기'],
                            ['/web-knowledge/devops-knowledge/시스템 규모 확장','- 시스템 규모 확장'],
                        ]
                    }
                ]
            },
            {
                title: '📌 Interview',
                collapsable: true,
                children: [ 
                    ['/interview/언어','- 언어'],
                    ['/interview/운영체제','- 운영체제'],
                    ['/interview/데이터베이스','- 데이터베이스'],
                    ['/interview/네트워크','- 네트워크'],
                    ['/interview/웹','- 웹'],
                ]
            },
            {
                title: '📌 Linux',
                collapsable: true,
                children: [ 
                    ['/linux/Linux Basic Command','- 기본 명령어'],
                    ['/linux/Permission','- Permission 활용'],
                    ['/linux/Von Neumann Architecture','- 폰 노이만 구조']
                ]
            },{
                title: '📌 GitHub',
                collapsable: true,
                children: [ 
                    ['/github/GitHub Fork로 협업하기','- GitHub Fork로 협업하기'],
                    ['/github/GitHub repository 미러링','- GitHub Repository 미러링하기'],
                    ['/github/Git vs GitHub vs GitLab Flow','- Git & GitHub & GitLab Flow'],
                    ['/github/Collaborate with Git on Javascript and Node.js','- Javascript와 Node.js로 Git을 통해 협업하기']
                ]
            },
            {
                type : 'group',
                title: '📌 ETC',
                collapsable: true,
                children: [
                    {
                        type: 'group',
                        title: '● 토익스피킹',
                        collapsable: true,
                        children: [
                            ['/etc/toeic-speaking/part-1','- 파트1. 지문 읽기'],
                            ['/etc/toeic-speaking/part-2','- 파트2. 사진 묘사'],
                            ['/etc/toeic-speaking/part-3','- 파트3. 질문 답변'],
                            ['/etc/toeic-speaking/part-4','- 파트4. 표 이해하기'],
                            ['/etc/toeic-speaking/part-5','- 파트5. 해결책 제안'],
                            ['/etc/toeic-speaking/part-6','- 파트6. 의견 제시']
                        ]
                    },
                    {
                        type: 'group',
                        title: '● 반도체',
                        collapsable: true,
                        children: [
                            ['/etc/semiconductor/1. 반도체란','- 1. 반도체란'],
                            ['/etc/semiconductor/2. 반도체의 원리','- 2. 반도체의 원리'],
                            ['/etc/semiconductor/3. 반도체의 진화','- 3. 반도체의 진화'],
                            ['/etc/semiconductor/4. 반도체의 단위','- 4. 반도체의 단위'],
                            ['/etc/semiconductor/5. 반도체의 산업 형태','- 5. 반도체의 산업 형태'],
                        ]
                    },
                ]
            },
        ],
        sidebarDepth: 0,
        nav: [
            { text: 'Home', link: 'https://gyoogle.dev/',  target:'_self'},
            { text: 'Github', link: 'https://github.com/gyoogle/tech-interview-for-developer' },
        ],
        smoothScroll: true,
        lastUpdated: '최종 수정 '
    }
}
