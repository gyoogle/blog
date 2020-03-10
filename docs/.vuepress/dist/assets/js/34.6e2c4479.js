(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{275:function(r,a,t){"use strict";t.r(a);var e=t(19),o=Object(e.a)({},(function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"garbage-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collection"}},[r._v("#")]),r._v(" Garbage Collection")]),r._v(" "),t("hr"),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"goal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[r._v("#")]),r._v(" Goal")]),r._v(" "),t("hr"),r._v(" "),t("ul",[t("li",[r._v("Garbage Collection의 역할에 대해 설명할 수 있다.")]),r._v(" "),t("li",[r._v("Garbage Collection의 메모리 해제 과정을 3단계로 설명할 수 있다.")]),r._v(" "),t("li",[r._v("Generational Gabage Collection에 대해 설명할 수 있다.")]),r._v(" "),t("li",[r._v("Generational Garbage Collection 과정에 대해 설명할 수 있다.")]),r._v(" "),t("li",[r._v("Minor GC와 Major GC의 차이점에 대해 설명할 수 있다.")])]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[r._v("#")]),r._v(" Abstract")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("C/C++ 프로그래밍을 할 때 메모리 누수(Memory Leak)를 막기 위해 객체를 생성한 후 사용자하지 않는 객체의 메모리를 프로그래머가 직접 해제 해주어야 했습니다. 하지만, JAVA에서는 JVM(Java Virtual Machine)이 구성된 JRE(Java Runtime Environment)가 제공되며, 그 구성 요소 중 하나인 Garbage Collection(이하 GC)이 자동으로 사용하지 않는 객체를 파괴합니다.")]),r._v(" "),t("p",[r._v("GC에 대해서 알아보기 전에 'stop-the-world'라는 용어를 알아야합니다. 'stop-the-world'란, GC를 실행하기 위해 JVM이 애플리케이션 실행을 멈추는 것입니다. 어떤 GC 알고리즘을 사용하더라도 'stop-the-world'는 발생하게 되는데, 대개의 경우 GC 튜닝은 이 'stop-the-world' 시간을 줄이는 것이라고 합니다.")]),r._v(" "),t("p",[r._v("GC를 해도 더이상 사용 가능한 메모리 영역이 없는데 계속 메모리를 할당하려고 하면, OutOfMemoryError가 발생하여 WAS가 다운될 수도 있습니다. 행(Hang) 즉, 서버가 요청을 처리 못하고 있는 상태가 됩니다.")]),r._v(" "),t("p",[r._v("따라서 규모 있는 JAVA 애플리케이션을 효율적으로 개발하기 위해서는 GC에 대해 잘 알아야한다고 합니다. 이번에는 GC에 대해 간단하게 알아보겠습니다.")]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"garbage-collection-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collection-2"}},[r._v("#")]),r._v(" Garbage Collection")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("C/C++ 언어와 달리 자바는 개발자가 명시적으로 객체를 해제할 필요가 없습니다. 자바 언어의 큰 장점이기도 합니다. 사용하지 않는 객체는 메모리에서 삭제하는 작업을 GC라고 부르며 JVM에서 GC를 수행합니다.")]),r._v(" "),t("p",[r._v("기본적으로 JVM의 메모리는 총 5가지 영역(class, stack, heap, native method, PC)으로 나뉘는데, GC는 힙 메모리만 다룹니다.")]),r._v(" "),t("p",[r._v("일반적으로 다음과 같은 경우에 GC의 대상이 됩니다.")]),r._v(" "),t("ol",[t("li",[r._v("객체가 NULL인 경우 (ex. String str = null)")]),r._v(" "),t("li",[r._v("블럭 실행 종료 후, 블럭 안에서 생성된 객체")]),r._v(" "),t("li",[r._v("부모 객체가 NULL인 경우, 포함하는 자식 객체")])]),r._v(" "),t("p",[r._v("GC는 "),t("code",[r._v("Weak Generational Hypothesis")]),r._v(" 에 기반합니다. 우선 GC의 메모리 해제 과정에 대해 살펴보겠습니다.")]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"gc의-메모리-해제-과정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc의-메모리-해제-과정"}},[r._v("#")]),r._v(" GC의 메모리 해제 과정")]),r._v(" "),t("hr"),r._v(" "),t("ol",[t("li",[t("h4",{attrs:{id:"marking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#marking"}},[r._v("#")]),r._v(" Marking")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-001.png"}}),r._v(" "),t("br"),r._v(" "),t("ul",[t("li",[r._v("프로세스는 마킹을 호출합니다. 이것은 GC가 메모리가 사용되는지 아닌지를 찾아냅니다. 참조되는 객체는 파란색으로, 참조되지 않는 객체는 주황색으로 보여집니다. 모든 오브젝트는 마킹 단계에서 결정을 위해 스캔되어집니다. 모든 오브젝트를 스캔하기 때문에 매우 많은 시간을 소모하게 됩니다.")])])])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("h4",{attrs:{id:"normal-deletion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#normal-deletion"}},[r._v("#")]),r._v(" Normal Deletion")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-002.png"}}),r._v(" "),t("br"),r._v(" "),t("ul",[t("li",[r._v("참조되지 않는 객체를 제거하고, 메모리를 반환합니다. 메모리 Allocator는 반환되어 비어진 블럭의 참조 위치를 저장해 두었다고 새로운 오브젝트가 선언되면 할당되도록 합니다.")])])])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("h4",{attrs:{id:"compacting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compacting"}},[r._v("#")]),r._v(" Compacting")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-003.png"}}),r._v(" "),t("br"),r._v(" "),t("ul",[t("li",[r._v("퍼포먼스를 향상시키기 위해, 참조되지 않는 객체를 제거하고 또한 남은 참조되어지는 객체들을 묶습니다. 이들을 묶음으로서 공간이 생기므로 새로운 메모리 할당 시에 더 쉽고 빠르게 진행 할 수 있습니다.")])])])]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"generational-garbage-collection-배경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generational-garbage-collection-배경"}},[r._v("#")]),r._v(" Generational Garbage Collection 배경")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("위와 같이 모든 객체를 "),t("code",[r._v("Mark & Compact")]),r._v(" 하는 JVM은 비효율적입니다. 다음과 같은 그래프를 보시겠습니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-004.png"}}),r._v(" "),t("br"),r._v(" "),t("p",[r._v("Y축은 할당된 바이트의 수이고 X축은 바이트가 할당될 때의 시간입니다. 보시다시피 시간이 갈수록 적은 객체만이 남습니다. 위와 같은 그래프에 기반한 것이 Weak Generational Hypothesis 입니다.")]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"weak-generational-hypothesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weak-generational-hypothesis"}},[r._v("#")]),r._v(" Weak Generational Hypothesis")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("신규로 생성한 객체의 대부분은 금방 사용하지 않는 상태가 되고, 오래된 객체에서 신규 객체로의 참조는 매우 적게 존재한다는 가설입니다.")]),r._v(" "),t("p",[r._v("이 가설에 기반하여 자바는 Young 영역과 Old 영역으로 메모리를 분할하고, 신규로 생성되는 객체는 Young 영역에 보관하고, 오랫동안 살아남은 객체는 Old 영역에 보관합니다.")]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"generational-gabage-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generational-gabage-collection"}},[r._v("#")]),r._v(" Generational Gabage Collection")]),r._v(" "),t("hr"),r._v(" "),t("br"),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-006.png"}}),r._v(" "),t("br"),r._v(" "),t("ol",[t("li",[t("h4",{attrs:{id:"young-영역-yong-generation-영역"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#young-영역-yong-generation-영역"}},[r._v("#")]),r._v(" Young 영역(Yong Generation 영역)")]),r._v(" "),t("p",[r._v("새롭게 생성한 객체의 대부분이 여기에 위치합니다. 대부분의 객체가 금방 접근 불가능 상태가 되기 때문에 매우 많은 객체가 Young 영역에 생성되었다가 사라집니다. 이 영역에서 객체가 사라질때 "),t("strong",[r._v("Minor GC")]),r._v(" 가 발생한다고 말합니다.")])])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("h4",{attrs:{id:"old-영역-old-generation-영역"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#old-영역-old-generation-영역"}},[r._v("#")]),r._v(" Old 영역(Old Generation 영역)")]),r._v(" "),t("p",[r._v("접근 불가능 상태로 되지 않아 Young 영역에서 살아남은 객체가 여기로 복사됩니다. 대부분 Young 영역보다 크게 할당하며, 크기가 큰 만큼 Young 영역보다 GC는 적게 발생합니다. 이 영역에서 객체가 사라질 때 "),t("strong",[r._v("Major GC(혹은 Full GC)")]),r._v(" 가 발생한다고 말합니다.")])])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("h4",{attrs:{id:"permanet-영역"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permanet-영역"}},[r._v("#")]),r._v(" Permanet 영역")]),r._v(" "),t("p",[r._v("Method Area라고도 합니다. JVM이 클래스들과 메소드들을 설명하기 위해 필요한 메타데이터들을 포함하고 있습니다. JDK8부터는 PermGen은 Metaspace로 교체됩니다.")])])]),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"generational-garbage-collection-과정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generational-garbage-collection-과정"}},[r._v("#")]),r._v(" Generational Garbage Collection 과정")]),r._v(" "),t("hr"),r._v(" "),t("ol",[t("li",[t("h4",{attrs:{id:"어떠한-새로운-객체가-들어오면-eden-space에-할당합니다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#어떠한-새로운-객체가-들어오면-eden-space에-할당합니다"}},[r._v("#")]),r._v(" 어떠한 새로운 객체가 들어오면 Eden Space에 할당합니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-007.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("h4",{attrs:{id:"eden-space가-가득차게-되면-minor-garbage-collection이-시작됩니다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eden-space가-가득차게-되면-minor-garbage-collection이-시작됩니다"}},[r._v("#")]),r._v(" Eden space가 가득차게 되면, minor garbage collection이 시작됩니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-008.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("h4",{attrs:{id:"참조되는-객체들은-첫-번째-survivor-s0-로-이동되어지고-비-참조-객체는-eden-space가-clear-될-때-반환됩니다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참조되는-객체들은-첫-번째-survivor-s0-로-이동되어지고-비-참조-객체는-eden-space가-clear-될-때-반환됩니다"}},[r._v("#")]),r._v(" 참조되는 객체들은 첫 번째 survivor(S0)로 이동되어지고, 비 참조 객체는 Eden space가 clear 될 때 반환됩니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-009.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[r._v("다음 minor GC 때, Eden space에서는 같은 일이 일어납니다. 비 참조 객체는 삭제되고 참조 객체는 survivor space로 이동하는 것 입니다. 그러나 이 케이스에서 참조 객체는 두 번째 survivor space로 이동하게 됩니다. 게다가 최근 minor GC에서 첫 번째 survivor space로 이동된 객체들도 age가 증가하고 S1 공간으로 이동하게 됩니다. 한번 모든 surviving 객체들이 S1으로 이동하게 되면 S0와 Eden 공간은 Clear 됩니다. 주의해야할 점은 이제 우리는 다른 aged 객체들을 서바이버 공간에 가지게 되었다는 것입니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-010.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[r._v("다음 minor GC 때, 같은 과정이 반복 됩니다. 그러나 이 번엔 survivor space들은 switch 됩니다. 참조되는 객체들은 S0로 이동합니다. 살아남은 객체들은 aged되죠. 그리고 Eden과 S1 공간은 Clear 됩니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-011.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[r._v("아래 그램은 promotion을 보여줍니다. minor GC 후 aged 오브젝트들이 일정한 age threshold(문지방)을 넘게 되면 그들은 young generation에서 old로 promotion 되어집니다. 여기서는 8을 예로 들었습니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-012.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("p",[r._v("minor GC가 계속되고 계속해서 객체들이 Old Generation으로 이동됩니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-013.png"}})])]),r._v(" "),t("br"),r._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[t("p",[r._v("아래 그림은 전 과정을 보여주고 있습니다. 결국 major GC가 old Generation에 시행되고, old Generation은 Clear 되고, 공간이 Compact 되어집니다.")]),r._v(" "),t("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Language/JAVA/resources/java-gc-014.png"}})])]),r._v(" "),t("br"),r._v(" "),t("br"),r._v(" "),t("h3",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[r._v("#")]),r._v(" Conclusion")]),r._v(" "),t("hr"),r._v(" "),t("p",[r._v("이외에도 정말 많은 내용이 있지만, 간단하게나마 GC의 개념과 작동원리에 대해 알아보았습니다. 개발자 기술 면접에서도 종종 나오니 이번에 확실하게 학습해두면 도움이 많이 될 것 같습니다.")]),r._v(" "),t("br"),r._v(" "),t("br"),r._v(" "),t("h4",{attrs:{id:"참고-자료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[r._v("#")]),r._v(" [참고 자료]")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://d2.naver.com/helloworld/1329",target:"_blank",rel:"noopener noreferrer"}},[r._v("링크"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://118k.tistory.com/817",target:"_blank",rel:"noopener noreferrer"}},[r._v("링크"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://advenoh.tistory.com/14",target:"_blank",rel:"noopener noreferrer"}},[r._v("링크"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://itmining.tistory.com/24#recentComments",target:"_blank",rel:"noopener noreferrer"}},[r._v("링크"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=o.exports}}]);