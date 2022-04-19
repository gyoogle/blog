# 이분 탐색(Binary Search)

---

<br>

> 탐색 범위를 두 부분으로 분할하면서 찾는 방식

처음부터 끝까지 돌면서 탐색하는 것보다 훨씬 빠른 장점을 지님

```
* 시간복잡도
전체 탐색 : O(N)
이분 탐색 : O(logN)
```

<br>

### 진행 순서

- 우선 정렬을 해야 함
- left와 right로 mid 값 설정
- mid와 내가 구하고자 하는 값과 비교
- 구할 값이 mid보다 높으면 : left = mid+1
  구할 값이 mid보다 낮으면 : right = mid - 1
- left > right가 될 때까지 계속 반복하기

<br>

#### 소스 코드

```java
public static int solution(int[] arr, int M) { // arr 배열에서 M을 찾자
	
    Arrays.sort(arr); // 정렬
	
    int start = 0;
    int end = arr.length - 1;
    int mid = 0;

    while (start <= end) {
        mid = (start + end) / 2;
        if (M == arr[mid]) {
            return mid;
        }else if (arr[mid] < M) {
            start = mid + 1;
        }else if (M < arr[mid]) {
            end = mid - 1;
        }
    }
    throw new NoSuchElementException("타겟 존재하지 않음");
}
```

<br/><br/><br/>
