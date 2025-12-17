# 🚗 카푸어 방지턱 (Car Poor Guard)

[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)](https://carpoor-guard.web.app)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)

> **"이 차 사면 숨만 쉬어도 월 OO만 원 나갑니다"**

자동차 구매 전 **진짜 월 유지비**를 계산하고, 소득 대비 **카푸어 위험도**를 진단하는 웹 애플리케이션입니다.

## 🌟 주요 특징

### 💰 정확한 월 유지비 계산
단순 할부금이 아닌, 실제로 매달 나가는 **모든 비용**을 합산합니다:
- **월 할부금** - 원리금 균등 상환 방식
- **월 보험료** - 나이대별 평균 추정
- **월 유류비** - 주행거리 기반 계산
- **월 자동차세** - 배기량 & 연식 반영

### 🚨 카푸어 진단 시스템
월 소득 대비 차량 지출 비율을 분석하여 3단계로 진단:
- 🟢 **여유 (10% 미만)** - 안전한 수준
- 🟡 **적정 (10~20%)** - 관리 필요
- 🔴 **위험 (20% 이상)** - 카푸어 경보!

### 📊 시각화 대시보드
- 파이 차트로 비용 구성 비중 표시
- 게이지 차트로 소득 대비 지출 비율 시각화
- 맞춤형 재무 조언 제공

### 🎯 AdSense 최적화
- 풍부한 랜딩 페이지 콘텐츠
- 12개의 상세한 FAQ
- 개인정보처리방침 & 이용약관
- 광고 모달을 통한 수익화

## 🛠️ 기술 스택

| 카테고리 | 기술 |
|---------|------|
| **Frontend** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 3 |
| **Charts** | Recharts |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Hosting** | Firebase Hosting |
| **Analytics** | Firebase Analytics (GA4) |

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/baetab/poor-guard.git
cd poor-guard
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env.example`을 복사하여 `.env` 파일을 생성하고 Firebase 설정을 입력하세요:
```bash
cp .env.example .env
```

`.env` 파일 내용:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 접속

### 5. 프로덕션 빌드
```bash
npm run build
```

### 6. Firebase 배포
```bash
npm run deploy
```

## 📐 계산 로직

### 할부금 계산
원리금 균등 상환 방식 사용:
```typescript
월 할부금 = (대출원금 × 월 이자율 × (1 + 월 이자율)^개월수) / ((1 + 월 이자율)^개월수 - 1)
```

### 자동차세 계산 (2025년 기준)
- **1,600cc 이하**: 140원/cc
- **1,600cc 초과**: 200원/cc
- **교육세**: 30% 추가
- **중고차 경감**: 3년 차부터 매년 5%씩 (최대 50%)

### 유류비 계산
```typescript
월 유류비 = (일 평균 주행거리 × 30일 / 연비) × 리터당 가격
```

**2025년 기준 유류 가격:**
- 휘발유: 1,650원/L
- 경유: 1,450원/L
- 전기: 300원/kWh

### 보험료 추정
나이대별 평균 보험료 (연간):
- 20대: 180만원
- 30대: 90만원
- 40대: 80만원
- 50대+: 70만원
- 2,000cc 초과 시 20% 가산

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--bg-primary: #0f172a (Slate 900)
--text-primary: #f1f5f9 (Slate 100)
--accent-brand: #818cf8 (Indigo 400)
--accent-safe: #34d399 (Emerald 400)
--accent-warning: #fbbf24 (Amber 400)
--accent-danger: #f43f5e (Rose 500)
```

### 타이포그래피
- **폰트**: Inter (Google Fonts)
- **제목**: 2xl~5xl, Bold (700~800)
- **본문**: Base~lg, Regular (400~500)

## 💰 수익화 전략

### 광고 모달 시스템
- 계산 결과 확인 전 광고 링크 클릭 필수
- 5초 카운트다운 후 결과 표시
- 사용자 경험을 해치지 않는 자연스러운 흐름

### CPA 제휴 링크
- 자동차 보험 비교견적
- 오토론 금융 상품
- 중고차 시세 조회

## 📱 반응형 디자인

Mobile First 접근 방식:
- 📱 모바일: 320px~
- 💻 태블릿: 768px~
- 🖥️ 데스크톱: 1024px~

## 🔒 개인정보 보호

- ✅ 모든 계산은 **클라이언트 사이드**에서 처리
- ✅ 서버로 개인정보 전송 없음
- ✅ Firebase Analytics는 익명화된 사용 패턴만 수집
- ✅ GDPR & 개인정보보호법 준수

## 📈 SEO 최적화

- ✅ 한국어 메타 태그 (Title, Description, Keywords)
- ✅ Open Graph 태그 (소셜 미디어 공유)
- ✅ robots.txt & sitemap.xml
- ✅ 시맨틱 HTML5 마크업
- ✅ 빠른 로딩 속도 (Vite 최적화)
- ✅ Google Analytics 통합

## 📊 프로젝트 구조

```
poor-guard/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── AdModal.tsx          # 광고 모달
│   │   ├── CarInput.tsx          # 입력 폼
│   │   ├── Dashboard.tsx         # 결과 대시보드
│   │   ├── Diagnosis.tsx         # 카푸어 진단
│   │   ├── FAQ.tsx               # 자주 묻는 질문
│   │   ├── LandingSection.tsx    # 랜딩 섹션
│   │   ├── PrivacyPolicy.tsx     # 개인정보처리방침
│   │   └── TermsOfService.tsx    # 이용약관
│   ├── constants/
│   │   └── links.ts              # CPA 링크 관리
│   ├── utils/
│   │   └── carLogic.ts           # 계산 로직
│   ├── App.tsx                   # 메인 앱
│   ├── firebase.ts               # Firebase 설정
│   └── index.css                 # 글로벌 스타일
├── .env                          # 환경 변수
├── firebase.json                 # Firebase 설정
├── tailwind.config.js            # Tailwind 설정
└── package.json
```

## 🚀 배포

### Firebase Hosting
```bash
# Firebase 로그인
firebase login

# 프로젝트 초기화 (최초 1회)
firebase init hosting

# 배포
npm run deploy
```

### 배포 URL
- **Production**: https://carpoor-guard.web.app
- **Preview**: https://carpoor-guard.firebaseapp.com

## 📝 라이선스

이 프로젝트의 소스 코드는 **비영리 목적(Non-Commercial)**으로만 사용할 수 있습니다.
개인적인 학습 및 연구 목적으로는 자유롭게 수정 및 배포가 가능하나, **상업적 이용은 엄격히 금지**됩니다.

Copyright (c) 2025 Car Poor Guard. All rights reserved.

## 🤝 기여

이슈와 PR은 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트 관련 문의: [이메일 주소]

---

<div align="center">

**⚠️ 면책 조항**

본 계산기는 참고용이며, 실제 비용은 개인 상황에 따라 다를 수 있습니다.  
차량 구매 결정 시에는 반드시 전문가의 상담을 받으시기 바랍니다.

**© 2025 카푸어 방지턱 | 합리적인 자동차 소비를 위한 계산기**

Made with ❤️ for smart car buyers

</div>
