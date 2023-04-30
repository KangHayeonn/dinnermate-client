# Dinnermate

## 서비스 설명
- 회식 장소 추천 서비스

<br>

## 공통 컨벤션 (Convention)

### 🌴 Branch 전략
- Git Flow

|  **항목**  |                                  **설명**                                   |
| ---------- | --------------------------------------------------------------------------- |
| main       | 기준이 되는 브랜치로 제품을 배포하는 브랜치                                  |
| develop    | 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 Merge      |
| feature    | 단위 기능을 개발하는 브랜치로 기능 개발이 완료되면 develop 브랜치에 Merge     |
| release    | 배포를 위해 main 브랜치로 보내기 전에 먼저 QA(품질검사)를 하기위한 브랜치     |
| hotfix     | master 브랜치로 배포를 했는데 버그가 생겼을 떄 긴급 수정하는 브랜치           |

- Git Flow 과정
  - master 브랜치에서 develop 브랜치를 분기함
  - 개발자들은 develop 브랜치에 자유롭게 커밋을 함
  - 기능 구현이 있는 경우 develop 브랜치에서 feature/* 브랜치를 분기합니다.
  - 배포를 준비하기 위해 develop 브랜치에서 release/* 브랜치를 분기합니다.
  - 테스트를 진행하면서 발생하는 버그 수정은 release/* 브랜치에 직접 반영합니다.
  - 테스트가 완료되면 release 브랜치를 master와 develop에 merge함

- 보통 `main <- release <- develop(default) <- feature`
  - 모든 기능 구현은 `feature`을 이용해 브랜치를 분기해 개발 후 `devleop`으로 pull-request 하기!
  - 직접 `develop`으로 push ❌❌
- 예시 : `feature/frontend-build` 

### 🍕 Commit 전략 

|  **항목**  |             **설명**               |
| ---------- | ---------------------------------- |
| ADD        | (새로운) 기능 추가                 |
| REFACTOR   | 코드 리팩토링                      |
| UPDATE     | 기능 변경 및 수정                  |
| BUGFIX     | 버그 or 이슈 수정                  |
| TEST       | 테스트 코드 추가/수정              |
| DOCS       | 문서 수정                          |
| UPDATE     | 빌드 업무 수정, 패키지 매니저 수정  |

- 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 함
- 태그 : 제목의 형태이며, :뒤에만 space가 있음에 유의함
- 예시 : `git commit -m "[ADD] : header feature implement"`
  - 추가 본문 메시지를 쓸 경우에도 메인 제목은 위와 같이 동일하게 작성

### 🍭 PR 전략
- PR Template에 따름

<br>

## Frontend

### ✨ 기술 설명
Vue, JavaScript, Vuex 를 이용해 Front-end 개발

### 🔥 기술 스택
> 사용 SPA 라이브러리 : Vue

|  **항목**  |  **기술 스택**  |
| ---------- | ---------------- |
| 환경세팅   | Vue CLI          |
| 사용언어   | JavaScript       |
| 스타일링   | CSS, SCSS        |
| 상태관리   | EventBus, Vuex   |
| 코드통합   | Prettier         |
| 에러검출   | Eslint           |
| API 통신   | Axios            |

### 🔅 코드 컨벤션
|  **항목**  |    **규칙**      |
| ---------- | ---------------- |
| Directory  | camelCase        |
| File       | PascalCase       |
| Constant   | UPPER_SNAKE_CASE |
| Variable   | camelCase        |
| Function   | camelCase        |


### ✔ 추가 라이브러리 & 버전 정보

|  **항목**  |  **버전 정보**  |
| ---------- | ---------------- |
| Node       | v18.14.2         |
| Vue        | v2.6.14          |
| Vuex       | v3.6.2           |
| Axios      | v1.3.4           |
| Sass       | v1.60.0          |
