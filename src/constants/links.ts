// CPA 링크 관리 (수익화)

export const CPA_LINKS = {
    // 자동차 보험 비교견적
    insurance: {
        title: '내 정확한 보험료 확인하기',
        description: '광고주를 모집하고 있습니다',
        url: '#', // 광고주 모집 중
        icon: '🛡️',
    },

    // 자동차 할부 금융
    loan: {
        title: '최저금리 할부 조회하기',
        description: '광고주를 모집하고 있습니다',
        url: '#', // 광고주 모집 중
        icon: '💰',
    },

    // 중고차 시세 조회
    usedCar: {
        title: '중고차 시세 확인하기',
        description: '실시간 중고차 시세로 합리적인 가격 확인',
        url: 'https://www.encar.com/', // 예시 링크
        icon: '🚗',
    },
} as const;

export type CPALinkKey = keyof typeof CPA_LINKS;
