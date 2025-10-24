# React + TypeScript + Vite Boilerplate

React 19, TypeScript, Vite, React Router, Tailwind CSS가 설정된 보일러플레이트입니다.

## 🚀 시작하기

### 1. 프로젝트 클론 및 Git 초기화

```bash
# 레포지토리 클론
git clone [repository-url]
cd testPP

# 기존 Git 연결 해제
rm -rf .git  # Mac/Linux
# 또는
rmdir /s .git  # Windows

# 새로운 Git 저장소로 초기화 (선택사항)
git init
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

기본 포트: **9797** (http://localhost:9797)

## 📝 프로젝트 설정

### 1. 프로젝트 제목 변경
`index.html` 파일에서 title 수정:
```html
<title>원하는 프로젝트 이름</title>
```

### 2. 메인 페이지 수정
- `src/components/pages/Home.tsx`가 메인(루트) 페이지입니다
- 여기서부터 개발을 시작하세요!

### 3. 라우팅 설정
`src/router/AppRouter.tsx`에서 라우트 추가/수정:
```tsx
<Routes>
    <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        {/* 새로운 라우트 추가 */}
        <Route path="/about" element={<About/>} />
    </Route>
</Routes>
```

### 4. Tailwind 커스텀 설정

#### 색상 커스터마이징
`tailwind.config.js`의 `colors`에서 커스텀 색상 정의:
```js
colors: {
    'primary': '#3B82F6',
    'secondary': '#10B981',
}
```
사용 예시: `bg-primary`, `border-secondary`

#### 텍스트 색상 커스터마이징
`tailwind.config.js`의 `textColor`에서 커스텀 텍스트 색상 정의:
```js
textColor: {
    'main': '#1F2937',
    'sub': '#6B7280',
}
```
사용 예시: `text-main`, `text-sub`

### 5. 개발 서버 포트 변경
`vite.config.ts`에서 포트 번호 수정:
```ts
server: {
    port: 3000, // 원하는 포트 번호
}
```

## 📦 포함된 기능

### 🎨 Tailwind CSS 커스텀 유틸리티
이미 설정된 유틸리티 클래스들:

- `.flex-center` - flex + 수평/수직 중앙 정렬
- `.scrollbar-hidden` - 스크롤바 숨기기
- `.font-title` - 제목용 폰트 스타일
- `.text-xxs` ~ `.text-xxxl` - 추가 폰트 사이즈

### 📚 설치된 라이브러리

**핵심 라이브러리:**
- React 19.1.1
- TypeScript
- Vite 7.1.7
- React Router DOM 7.9.4
- Tailwind CSS 3.4.1

**추가 라이브러리:**
- react-modal - 모달 컴포넌트
- @tailwindcss/typography - 타이포그래피 플러그인

## 📁 프로젝트 구조

```
testPP/
├── src/
│   ├── components/
│   │   └── pages/
│   │       └── Home.tsx          # 메인 페이지
│   ├── router/
│   │   └── AppRouter.tsx         # 라우팅 설정
│   ├── App.tsx                   # 루트 컴포넌트
│   ├── Layout.tsx                # 레이아웃 컴포넌트
│   ├── main.tsx                  # 앱 진입점
│   └── index.css                 # 글로벌 스타일
├── public/                       # 정적 파일
├── index.html                    # HTML 템플릿
├── tailwind.config.js            # Tailwind 설정
├── vite.config.ts                # Vite 설정
└── tsconfig.json                 # TypeScript 설정
```

## 🛠️ 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 실행
```

## 💡 개발 팁

1. **새 페이지 추가 시:**
   - `src/components/pages/`에 컴포넌트 생성
   - `AppRouter.tsx`에 라우트 추가

2. **레이아웃 수정:**
   - `Layout.tsx`에서 헤더, 푸터 등 공통 레이아웃 추가
   - `Outlet` 컴포넌트가 페이지 내용이 렌더링되는 위치

3. **다크모드 사용:**
   - Tailwind 다크모드가 클래스 방식으로 설정됨
   - `<html class="dark">`로 다크모드 활성화

## 📝 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.

자유롭게 사용, 수정, 배포할 수 있습니다.

## 👨‍💻 개발자

**ddj82** - 초급 웹 개발자

---

Happy Coding! 🎉
