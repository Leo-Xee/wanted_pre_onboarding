# 원티드 프리온보딩 프론트엔드 코스 선발 과제

## 실행 방법

```bash
$ npm install
$ npm run start
# or
$ yarn install
$ yarn start
```

## 기술 스택

- CRA
- React
- tailwindCSS

## 구현한 내용과 이유 및 트러블 슈팅

### Toggle

![Toggle](https://user-images.githubusercontent.com/21965795/156708314-0e3b43f0-9af7-41b0-8eaa-b9b055c21106.gif)

Toggle은 ON/OFF로 동작하기 때문에 `checkbox` 타입의 `input` 태그와 함께 이를 위한 상태 관리를 `useState`로 구현했습니다. tailwindCSS 특성상 className의 내부에서 관리된 상태에 따라 조건부 스타일을 적용해서 토글 UI/UX를 스타일링했습니다.

### Modal

![Modal](https://user-images.githubusercontent.com/21965795/156708337-ef2aed1c-3762-462f-9c7b-079fafac8cb9.gif)

Modal은 사용자 입장에서 화면 최상위에 보여지는 컴포넌트이기 때문에 `createPortal` 함수를 사용해서 `index.html`의 `<div id="modal"></div>`에 렌더링되도록 구현했습니다. 또한 컴포넌트를 사용하는 입장에서 고민해보고 모달의 내용만 `children`으로 넘겨서 사용할 수 있도록 하였습니다.

- 문제: `opacity`가 상속되어서 Modal의 내용에도 적용되는 에러 발생
  - 해결: `rgba()`를 사용해서 스타일을 적용해야하며 tailwindCSS는 이를 위해서 `bg-opacity`를 제공

### Tab

![Tab](https://user-images.githubusercontent.com/21965795/156708348-7d6cf751-f672-4410-8168-ac4b75d5d318.gif)

Tab은 탭의 개수가 가변적으로 사용될 것이라고 생각해서 배열에 `map` 함수와 `flex`를 사용해서 균일한 너비만큼 렌더링하는 식으로 구현했으며 탭의 경우에는 추가 삭제될 경우가 없다고 판단해서 `key`값으로 배열의 인덱스를 사용했습니다.

### Tag

![Tag](https://user-images.githubusercontent.com/21965795/156708369-2d0cdf51-34ae-4295-9a16-b62371107f6a.gif)

Tag는 사용자가 원하는 태그를 입력한 다음 엔터를 누를 경우에만 추가되기 때문에 `input`을 상태로 관리하는 것은 비효율적이라고 생각했습니다. 그래서 `input`에 한해서 `useRef`를 사용해 `keyPress` 이벤트로 엔터키가 입력되었을 때만 태그 키워드들을 담는 배열에 추가되도록 구현했습니다.

- 문제: Tag 이외의 부분 클릭 시에 focusOut 기능을 `document`에 이벤트를 추가할 경우에 로직이 복잡해지며 성능에도 좋지 않음
  - 해결: `input` 태그의 `onBlur` 이벤트를 활용

### AutoComplete

![AutoComplete](https://user-images.githubusercontent.com/21965795/156708386-5ec42deb-bc74-4ec1-9a18-3f305e0b990f.gif)

AutoComplete은 `match` 함수를 통해 반환된 배열을 `map` 함수를 사용해서 렌더링하는 방식으로 구현했습니다. `match` 함수는 `filter` 함수와 정규표현식을 사용해서 실시간으로 입력 받은 값이 포함된 검색어들로 이루어진 배열을 반환합니다. 이 배열은 항상 렌더링되면 안되기 때문에 입력이 없거나 `match` 함수로 반환된 배열이 길이가 0보다 클 경우에만 렌더링되도록 조건을 추가했습니다. 참고로 검색어를 입력하고 엔터키를 누르면 검색어 배열에 추가되며 기본적으로 `원티드`, `코드스테이츠`, `온보딩` 키워드를 포함합니다.

- 문제: 검색어를 입력하지 않은 경우에도 자동완성 목록의 스타일이 렌더링되는 에러
  - 해결: `searchInput && match(searchInput, searchList).length > 0` 조건에 적합할 경우에만 자동완성 목록을 렌더링하도록 수정

### ClickToEdit

![ClickToEdit](https://user-images.githubusercontent.com/21965795/156708446-9c1b90db-e0d6-4f79-876e-b626db8b8dac.gif)

ClickToEdit은 클릭 이벤트에 따라 `input`이나 `div`를 조건부로 렌더링하는 방식으로 구현했습니다. 이 경우에 각각의 `input`에 동일한 로직을 개별적으로 동작해야함으로 `Input`이라는 자식 컴포넌트를 따로 구현해서 로직을 분리하였습니다. 또한 `input`에 `Blur` 이벤트가 발생할 때 `input`을 관리하는 상태를 초기화해 반영되도록 했습니다.
러

- 문제: 하나의 `input`만 클릭해도 2개의 `input` 모두 반응하는 에러
  - 개별 `input`마다 관리되는 상태와 로직이 따로 동작해야함으로 자식 컴포넌트를 만든 다음 `props`를 내려서 사용하는 방식으로 변경
