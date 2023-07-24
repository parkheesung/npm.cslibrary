# cslibrary

타입 스크립트를 사용할 때, C# 에서 사용하던 각종 클래스와 구조체들을 유사한 형태로 사용할 수 있게 해주는 라이브러리입니다.

---

## Release

```shell
npm install roslyn.cslibrary
```

> 버전은 1.0.0 이 정상동작하는 배포 버전입니다. 

---

## Example

예시는 다음과 같습니다.
```javascript
var list = new Dictionary();
list.Add({ value:"초등학교", key : "Elementary" });
list.Append("중학교", "Middle");
list.value.map((item) => {
  //item:KeyValuePair
  return item;
});
```

---

## dependencies

프로젝트는 다음에 의존성을 가집니다.
  - npm 
  - typescript
