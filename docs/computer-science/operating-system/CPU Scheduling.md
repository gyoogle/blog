# CPU Scheduling

<br>

### 1. �����ٸ�

> CPU �� �� ����ϱ� ���� ���μ����� �� �����ϱ�

- ���� : ������� �� / ���� �� / ��� ���� ��
- ��ǥ
    1. `Batch System`: �����ϸ� ���� ���� ����. �ð�(time) ���� ó����(throughout)�� �߿�
    2. `Interactive System`: ���� ���� �ð�. ���� ��� �ð�.
    3. `Real-time System`: ����(deadline) ���߱�.

### 2. ���� / ���� �����ٸ�

- ���� (preemptive) : OS�� CPU�� ������ ������ �� �ִ� ���, ���� ȸ���ϴ� ���
- ���� (nonpreemptive) : ���μ��� ���� or I/O ���� �̺�Ʈ�� ���� ������ ���� ���� (ó���ð� ���� �����)

### 3. ���μ��� ����

![download (5)](https://user-images.githubusercontent.com/13609011/91695344-f2dfae80-eba8-11ea-9a9b-702192316170.jpeg)
- ���� �����ٸ� : `Interrupt`, `Scheduler Dispatch`
- ���� �����ٸ� : `I/O or Event Wait`

---

**���μ����� ���� ����**

??**���� (Admitted)**?: ���μ��� ������ �����Ͽ� ���ε�.

??**�����ٷ� ����ġ (Scheduler Dispatch)**?: �غ�?���¿� �ִ� ���μ��� �� �ϳ��� �����Ͽ� �����Ű�� ��.

??**���ͷ�Ʈ (Interrupt)**?:?����,?�����, �̺�Ʈ ���� �߻��Ͽ� ���� ����?���� ���μ����� �غ� ���·� �ٲٰ�, �ش� �۾��� ���� ó���ϴ� ��.

??**����� �Ǵ� �̺�Ʈ ��� (I/O or Event wait)**?: ���� ����?���μ����� ������̳� �̺�Ʈ�� ó���ؾ� �ϴ� ���, �����/�̺�Ʈ�� ��� ���� ������ ��� ���·� ����� ��.

??**����� �Ǵ� �̺�Ʈ �Ϸ� (I/O or Event Completion)**?: �����/�̺�Ʈ�� ���� ���μ����� �غ� ���·� ��ȯ�Ͽ� �����ٷ��� ���� ���õ� �� �ֵ��� ����� ��.

### 4. CPU �����ٸ��� ����

- ���� �����ٸ�
    1. FCFS (First Come First Served)
        - ť�� ������ ������� CPU �Ҵ�
        - ���� �ð��� ª�� �� �ڷ� ���� ��� ��� �ð��� �����
    2. SJF (Shortest Job First)
        - ����ð��� ���� ª�ٰ� �ǴܵǴ� �۾��� ���� ����
        - FCFS ���� ��� ��� �ð� ����, ª�� �۾��� ����

- ���� �����ٸ�
    1. Priority Scheduling
        - ����/�������� �켱������ �ο��Ͽ� �켱������ ���� ������� ó��
        - �켱 ������ ���� ���μ����� ������ ��ٸ��� Starvation �� ���� �� ����
        - Aging ������� Starvation ���� �ذ� ����
    2. Round Robin
        - FCFS�� ���� ���μ������� �������� �� ���μ����� ������ �ð��� `Time Quantum` ��ŭ CPU�� �Ҵ� ����
            - `Time Quantum` or `Time Slice` : ������ �ּ� ���� �ð�
        - �Ҵ� �ð�(`Time Quantum`)�� ũ�� FCFS�� ���� �ǰ�, ������ ���� ��ȯ (Context Switching) ������� ������� ����
    3. Multilevel-Queue (�ٴܰ� ť)
    
        ![Untitled1](https://user-images.githubusercontent.com/13609011/91695428-16a2f480-eba9-11ea-8d91-17d22bab01e5.png)
        - �۾����� ���� ������ �׷����� ������ ���� ���� ť�� �̿��ϴ� ���
        ![Untitled](https://user-images.githubusercontent.com/13609011/91695480-2a4e5b00-eba9-11ea-8dbf-390bf0a73c10.png)

        - �켱������ ���� ť���� ���� ���ϴ� �� �����ϰ��� �� ť���� �ٸ� `Time Quantum`�� ���� ���ִ� ��� ���
        - �켱������ ���� ť�� ���� `Time Quantum` �Ҵ�. �켱������ ���� ť�� ū `Time Quantum` �Ҵ�.
    4. Multilevel-Feedback-Queue (�ٴܰ� �ǵ�� ť)

        ![Untitled2](https://user-images.githubusercontent.com/13609011/91695489-2cb0b500-eba9-11ea-8578-6602fee742ed.png)

        - �ٴܰ� ť���� �ڽ��� `Time Quantum`�� �� ä�� ���μ����� ������ �������� �ڽ��� `Time Quantum`�� �� ä���� ���� ���μ����� ���� ť �״��
            - Time Quantum�� �� ä�� ���μ����� CPU burst ���μ����� �Ǵ��ϱ� ����
        - ª�� �۾��� ����, ����� ����(Interrupt�� ����) �۾��� �켱���� ��
        - ó�� �ð��� ª�� ���μ����� ���� ó���ϱ� ������ Turnaround ��� �ð��� �ٞ���

### 5. CPU �����ٸ� ô��

1. Response Time
    - �۾��� ó�� ����Ǳ���� �ɸ� �ð�
2. Turnaround Time
    - ���� �ð��� ��� �ð��� ��� ���� �ð����� �۾��� �Ϸ�� �� ���� �ɸ� �ð�

---

### ��ó

- �����ٸ� ��ǥ : [https://jhnyang.tistory.com/29?category=815411](https://jhnyang.tistory.com/29?category=815411)
- ���μ��� ���̵� �׸� ��ó : [https://rebas.kr/852](https://rebas.kr/852)
- CPU �����ٸ� ���� �� ���� ���� : [https://m.blog.naver.com/PostView.nhn?blogId=so_fragrant&logNo=80056608452&proxyReferer=https:%2F%2Fwww.google.com%2F](https://m.blog.naver.com/PostView.nhn?blogId=so_fragrant&logNo=80056608452&proxyReferer=https:%2F%2Fwww.google.com%2F)
- �ٴܰ�ť ���� : [https://jhnyang.tistory.com/28](https://jhnyang.tistory.com/28)
- �ٴܰ� �ǵ�� ť ���� : [https://jhnyang.tistory.com/156](https://jhnyang.tistory.com/156)



### ���� �ڷ� (�̹��� ����)
[https://github.com/kim6394/tech-interview-for-developer/blob/master/resources/CPU%20%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81.PNG?raw=true](https://github.com/kim6394/tech-interview-for-developer/blob/master/resources/CPU%20%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81.PNG?raw=true)
