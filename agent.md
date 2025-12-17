# Role
당신은 'Automotive FinTech Developer'이자 'Data Visualization Expert'입니다.
복잡한 자동차 금융 계산(할부+유지비)을 정확하게 수행하고, 이를 직관적인 대시보드 UI(Mobile First)로 시각화하여 사용자의 합리적인 소비를 돕습니다.

# Project Name & Concept
프로젝트명: **"카푸어 방지턱 (Car Poor Guard)"**
컨셉: "이 차 사면 숨만 쉬어도 월 OO만 원 나갑니다."
목표: 차량 가격과 할부 조건뿐만 아니라, 보험료, 세금, 유류비까지 합산한 **'월 유지비 총액'**을 계산해 줍니다. 특히 **'월 소득 대비 차량 지출 비율'**을 분석하여 "경고/적정/여유" 단계를 알려주는 '카푸어 진단' 기능을 제공합니다.

# Tech Stack
- Framework: React (Vite)
- Language: TypeScript
- Styling: Tailwind CSS (자동차 대시보드 느낌 - Dark Mode, Neon Accents)
- Chart: Recharts (도넛 차트로 비용 비중 시각화)
- Animation: Framer Motion (숫자 카운트, 게이지 차트 움직임)
- Icons: Lucide-react (Car, Fuel, Siren, Wallet)
- Hosting: Firebase Hosting

# Critical Requirements (Must Implement)
수익화와 사용자 경험을 위해 다음 3가지는 필수입니다.

1.  **Smart Monetization (High-Value CPA):**
    * 결과 화면 하단에 **맞춤형 CPA 버튼**을 배치하세요.
        * **"내 정확한 보험료 확인하기"** -> 다이렉트 자동차 보험 비교견적 링크 (단가 최상).
        * **"최저금리 할부 조회하기"** -> 금융사 오토론 링크.
    * `constants/links.ts`에서 링크를 통합 관리하세요.

2.  **Total Cost Logic (The "Reality Check"):**
    * 단순 할부금이 아니라, `(월 할부금 + 월 유류비 + 월 자동차세 + 월 보험료)`를 합산한 **'진짜 월 납입금'**을 메인으로 보여주세요.

3.  **Car Poor Diagnosis UI:**
    * 입력받은 '월 소득' 대비 '차량 유지비' 비율을 계산하여 신호등 형태로 보여주세요.
        * 10% 미만: 🟢 여유 (Great)
        * 10~20%: 🟡 적정 (Good)
        * 20% 이상: 🔴 위험 (Warning - "카푸어 경보!")

# Core Logic

## 1. Input Fields
* **차량 정보:** 신차/중고차 선택, 배기량(cc - 자동차세용), 예상 연비(km/l), 연료 종류(휘발유/경유/전기).
* **금융 조건:** 차량 가격, 선수금, 할부 금리, 할부 기간(개월).
* **운행/개인:** 일 평균 주행거리(km), 나이(만 나이 - 보험료 추정용), 월 소득(선택).

## 2. Calculation Formulas (`carLogic.ts`)
* **할부금:** 원리금 균등 상환 공식 적용.
* **자동차세:**
    * cc당 세액: 1,600cc 이하(140원), 1,600cc 초과(200원) * 1.3(교육세 포함).
    * 중고차(연식): 3년 차부터 매년 5%씩 경감 (최대 50%까지).
* **유류비:** `(월 주행거리 / 연비) * 리터당 가격`.
* **보험료:** 나이대별 평균 추정치 데이터셋 사용 (예: 20대 150만 원, 30대 80만 원 등 - 상수 처리).

# UI/UX Design Concept
* **Theme:** `bg-slate-900` (다크 모드). 텍스트는 `text-slate-100`.
* **Accent Color:**
    * 안전: `text-emerald-400`
    * 위험: `text-rose-500`
    * 브랜드: `text-indigo-400`
* **Result Card:** 자동차 계기판(Speedometer) 스타일의 게이지 차트로 "월 지출액" 표시.

# Task Steps
1.  프로젝트 세팅 및 `recharts`, `framer-motion` 설치.
2.  `utils/carLogic.ts`: 할부, 세금, 유류비 계산 함수 구현 (2025년 기준 세율 적용).
3.  `constants/links.ts`: 보험/금융 CPA 링크 관리.
4.  `components/CarInput.tsx`: 단계별(Step-by-step) 입력 폼.
5.  `components/Dashboard.tsx`: 계산 결과 대시보드 (차트 포함).
6.  `components/Diagnosis.tsx`: 카푸어 진단 및 조언 컴포넌트.
7.  `App.tsx`: 전체 레이아웃.

위 내용을 바탕으로 **지금 바로 배포 가능한 수준의 완성된 코드**를 작성해줘.
특히 **'카푸어 진단(소득 대비 지출)'** 부분이 시각적으로 잘 드러나도록 차트와 색상을 신경 써줘.