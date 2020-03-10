# 어댑터 패턴(Adapter Pattern)

---

<br>

> 클래스를 바로 사용할 수 없는 경우가 있음 (다른 곳에서 개발했다거나, 수정할 수 없을 때)
>	
> 중간에서 변환 역할을 해주는 클래스가 필요 → 어댑터 패턴

<br>

- **사용 방법** : 상속

- 호환되지 않은 인터페이스를 사용하는 클라이언트 그대로 활용 가능

- 향후 인터페이스가 바뀌더라도, 변경 내역은 어댑터에 캡슐화 되므로 클라이언트 바뀔 필요X



<br>

### [클래스 다이어그램]

<br>

<img src="https://camo.githubusercontent.com/0cc8959b51259549fdd66930d36cb7861b11fe33/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393944324630343435433641313532323239">

<br>

```
아이폰의 이어폰을 생각해보자

가장 흔한 이어폰 잭을 아이폰에 사용하려면, 잭 자체가 맞지 않는다.

따라서 우리는 어댑터를 따로 구매해서 연결해야 이런 이어폰들을 사용할 수 있다
```

<br>


이처럼 **어댑터는 필요로 하는 인터페이스로 바꿔주는 역할**을 한다


<br>


<img src="https://camo.githubusercontent.com/cc904d55d16a286ffc820bba2937906dd4d99a9e/68747470733a2f2f74312e6461756d63646e2e6e65742f6366696c652f746973746f72792f393946333133344335433641313532443331">

<br>

##### 이처럼 업체에서 제공한 클래스가 기존 시스템에 맞지 않으면?

> 기존 시스템을 수정할 것이 아니라, 어댑터를 활용해 유연하게 해결하자

<br>

<br>

#### 코드로 어댑터 패턴 이해하기

<br>

```
오리와 칠면조 인터페이스 생성

만약 오리 객체가 부족해서 칠면조 객체를 대신 사용해야 한다면?

두 객체는 인터페이스가 다르므로, 바로 칠면조 객체를 사용하는 것은 불가능함

따라서 칠면조 어댑터를 생성해서 활용해야 한다
```

<br>

- #### Duck.java

```java
package AdapterPattern;

public interface Duck {
	public void quack();
	public void fly();
}
```

<br>

- #### Turkey.java

```java
package AdapterPattern;

public interface Turkey {
	public void gobble();
	public void fly();
}
```

<br>

- #### WildTurkey.java

```java
package AdapterPattern;

public class WildTurkey implements Turkey {

	@Override
	public void gobble() {
		System.out.println("Gobble gobble");
	}

	@Override
	public void fly() {
		System.out.println("I'm flying a short distance");
	}
}
```

<br>

- #### TurkeyAdapter.java

```java
package AdapterPattern;

public class TurkeyAdapter implements Duck {

	Turkey turkey;

	public TurkeyAdapter(Turkey turkey) {
		this.turkey = turkey;
	}

	@Override
	public void quack() {
		turkey.gobble();
	}

	@Override
	public void fly() {
		turkey.fly();
	}

}
```

<br>

- #### DuckTest.java

```java
package AdapterPattern;

public class DuckTest {

	public static void main(String[] args) {

		MallardDuck duck = new MallardDuck();
		WildTurkey turkey = new WildTurkey();
		Duck turkeyAdapter = new TurkeyAdapter(turkey);

		System.out.println("The turkey says...");
		turkey.gobble();
		turkey.fly();

		System.out.println("The Duck says...");
		testDuck(duck);

		System.out.println("The TurkeyAdapter says...");
		testDuck(turkeyAdapter);

	}

	public static void testDuck(Duck duck) {

		duck.quack();
		duck.fly();

	}
}
```

<br>

아까 확인한 클래스 다이어그램에서 Target은 오리에 해당하며, Adapter는 칠면조라고 생각하면 된다.