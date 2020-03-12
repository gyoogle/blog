(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{240:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"삽입-정렬-insertion-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#삽입-정렬-insertion-sort"}},[t._v("#")]),t._v(" 삽입 정렬(Insertion Sort)")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"goal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("Insertion Sort에 대해 설명할 수 있다.")]),t._v(" "),a("li",[t._v("Insertion Sort 과정에 대해 설명할 수 있다.")]),t._v(" "),a("li",[t._v("Insertion Sort을 구현할 수 있다.")]),t._v(" "),a("li",[t._v("Insertion Sort의 시간복잡도와 공간복잡도를 계산할 수 있다.")]),t._v(" "),a("li",[t._v("Insertion Sort와 Selection Sort 차이에 대해 설명할 수 있다.")])]),t._v(" "),a("h3",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("손 안의 카드를 정렬하는 방법과 유사하다.")]),t._v(" "),a("p",[t._v("Insertion Sort는 Selection Sort와 유사하지만, 좀 더 효율적인 정렬 알고리즘이다.")]),t._v(" "),a("p",[t._v("Insertion Sort는 "),a("strong",[t._v("2번째 원소부터 시작하여 그 앞(왼쪽)의 원소들과 비교하여 삽입할 위치를 지정한 후, 원소를 뒤로 옮기고 지정된 자리에 자료를 삽입")]),t._v(" 하여 정렬하는 알고리즘이다.")]),t._v(" "),a("p",[t._v("최선의 경우 O(N)이라는 엄청나게 빠른 효율성을 가지고 있어, 다른 정렬 알고리즘의 일부로 사용될 만큼 좋은 정렬 알고리즘이다.")]),t._v(" "),a("h3",{attrs:{id:"process-ascending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-ascending"}},[t._v("#")]),t._v(" Process (Ascending)")]),t._v(" "),a("hr"),t._v(" "),a("ol",[a("li",[t._v("정렬은 2번째 위치(index)의 값을 temp에 저장한다.")]),t._v(" "),a("li",[t._v("temp와 이전에 있는 원소들과 비교하며 삽입해나간다.")]),t._v(" "),a("li",[t._v("'1'번으로 돌아가 다음 위치(index)의 값을 temp에 저장하고, 반복한다.")])]),t._v(" "),a("h3",{attrs:{id:"java-code-ascending"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-code-ascending"}},[t._v("#")]),t._v(" Java Code (Ascending)")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertionSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.")]),t._v("\n         arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         prev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("첫 번째 원소 앞(왼쪽)에는 어떤 원소도 갖고 있지 않기 때문에, 두 번째 위치(index)부터 탐색을 시작한다. temp에 임시로 해당 위치(index) 값을 저장하고, prev에는 해당 위치(index)의 이전 위치(index)를 저장한다.")])]),t._v(" "),a("li",[a("p",[t._v("이전 위치(index)를 가리키는 prev가 음수가 되지 않고, 이전 위치(index)의 값이 '1'번에서 선택한 값보다 크다면, 서로 값을 교환해주고 prev를 더 이전 위치(index)를 가리키도록 한다.")])]),t._v(" "),a("li",[a("p",[t._v("'2'번에서 반복문이 끝나고 난 뒤, prev에는 현재 "),a("strong",[t._v("temp 값보다 작은 값들 중 제일 큰 값의 위치(index)")]),t._v(" 를 가리키게 된다. 따라서, (prev+1)에 temp 값을 삽입해준다.")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"gif로-이해하는-insertion-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gif로-이해하는-insertion-sort"}},[t._v("#")]),t._v(" GIF로 이해하는 Insertion Sort")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/resources/insertion-sort-001.gif",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/insertion-sort-001.gif",alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"시간복잡도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시간복잡도"}},[t._v("#")]),t._v(" 시간복잡도")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("최악의 경우(역으로 정렬되어 있을 경우) Selection Sort와 마찬가지로, "),a("code",[t._v("(n-1) + (n-2) + .... + 2 + 1 => n(n-1)/2")]),t._v(" 즉, "),a("strong",[t._v("O(n^2)")]),t._v(" 이다.")]),t._v(" "),a("p",[t._v("하지만, 모두 정렬이 되어있는 경우(Optimal)한 경우, 한번씩 밖에 비교를 안하므로 "),a("strong",[t._v("O(n)")]),t._v(" 의 시간복잡도를 가지게 된다. 또한, 이미 정렬되어 있는 배열에 자료를 하나씩 삽입/제거하는 경우에는, 현실적으로 최고의 정렬 알고리즘이 되는데, 탐색을 제외한 오버헤드가 매우 적기 때문이다.")]),t._v(" "),a("p",[t._v("최선의 경우는 "),a("strong",[t._v("O(n)")]),t._v(" 의 시간복잡도를 갖고, 평균과 최악의 경우 "),a("strong",[t._v("O(n^2)")]),t._v(" 의 시간복잡도를 갖게 된다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"공간복잡도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공간복잡도"}},[t._v("#")]),t._v(" 공간복잡도")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("주어진 배열 안에서 교환(swap)을 통해, 정렬이 수행되므로 "),a("strong",[t._v("O(n)")]),t._v(" 이다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[t._v("알고리즘이 단순하다.")])]),t._v(" "),a("li",[a("p",[t._v("대부분의 원소가 이미 정렬되어 있는 경우, 매우 효율적일 수 있다.")])]),t._v(" "),a("li",[a("p",[t._v("정렬하고자 하는 배열 안에서 교환하는 방식이므로, 다른 메모리 공간을 필요로 하지 않는다. => 제자리 정렬(in-place sorting)")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("안정 정렬(Stable Sort)")]),t._v(" 이다.")])]),t._v(" "),a("li",[a("p",[t._v("Selection Sort나 Bubble Sort과 같은 O(n^2) 알고리즘에 비교하여 상대적으로 빠르다.")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[t._v("평균과 최악의 시간복잡도가 O(n^2)으로 비효율적이다.")])]),t._v(" "),a("li",[a("p",[t._v("Bubble Sort와 Selection Sort와 마찬가지로, 배열의 길이가 길어질수록 비효율적이다.")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Selection Sort와 Insertion Sort는 k번째 반복 이후, 첫번째 k 요소가 정렬된 순서로 온다는 점에서 유사하다. 하지만, Selection Sort는 k+1번째 요소를 찾기 위해 나머지 모든 요소들을 탐색하지만 Insertion Sort는 k+1번째 요소를 배치하는 데 필요한 만큼의 요소만 탐색하기 때문에 훨씬 효율적으로 실행된다는 차이가 있다.")]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고-자료"}},[t._v("#")]),t._v(" [참고 자료]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);