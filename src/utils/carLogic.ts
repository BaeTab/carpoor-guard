// 자동차 금융 계산 로직 (2025년 기준)

export interface CarInputData {
    // 차량 정보
    carType: 'new' | 'used';
    displacement: number; // 배기량 (cc)
    carAge?: number; // 중고차 연식
    fuelType: 'gasoline' | 'diesel' | 'electric';
    fuelEfficiency: number; // 연비 (km/l or km/kWh)

    // 금융 조건
    carPrice: number; // 차량 가격
    downPayment: number; // 선수금
    interestRate: number; // 연 이자율 (%)
    loanPeriod: number; // 할부 기간 (개월)

    // 운행/개인 정보
    dailyDriving: number; // 일 평균 주행거리 (km)
    age: number; // 만 나이
    monthlyIncome?: number; // 월 소득 (선택)
}

export interface CalculationResult {
    monthlyPayment: number; // 월 할부금
    monthlyTax: number; // 월 자동차세
    monthlyFuel: number; // 월 유류비
    monthlyInsurance: number; // 월 보험료
    totalMonthly: number; // 월 총 유지비
    incomeRatio?: number; // 소득 대비 비율
    diagnosis: 'safe' | 'warning' | 'danger'; // 진단 결과
}

// 1. 할부금 계산 (원리금 균등 상환)
export function calculateMonthlyPayment(
    principal: number,
    annualRate: number,
    months: number
): number {
    if (annualRate === 0) return principal / months;

    const monthlyRate = annualRate / 100 / 12;
    const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return Math.round(payment);
}

// 2. 자동차세 계산
export function calculateAnnualTax(displacement: number, carAge: number = 0): number {
    // cc당 세액
    const taxPerCC = displacement <= 1600 ? 140 : 200;
    let baseTax = displacement * taxPerCC;

    // 교육세 30% 추가
    baseTax *= 1.3;

    // 중고차 경감 (3년 차부터 매년 5%씩, 최대 50%)
    if (carAge >= 3) {
        const reduction = Math.min((carAge - 2) * 5, 50);
        baseTax *= (100 - reduction) / 100;
    }

    return Math.round(baseTax);
}

// 3. 유류비 계산
export function calculateMonthlyFuel(
    dailyDriving: number,
    fuelEfficiency: number,
    fuelType: 'gasoline' | 'diesel' | 'electric'
): number {
    const monthlyDistance = dailyDriving * 30;

    // 2025년 평균 유류 가격 (원/L or 원/kWh)
    const fuelPrices = {
        gasoline: 1650,
        diesel: 1450,
        electric: 300, // kWh당 가격
    };

    const pricePerUnit = fuelPrices[fuelType];
    const fuelCost = (monthlyDistance / fuelEfficiency) * pricePerUnit;

    return Math.round(fuelCost);
}

// 4. 보험료 추정 (나이대별 평균)
export function estimateMonthlyInsurance(age: number, displacement: number): number {
    let annualInsurance: number;

    // 나이대별 기본 보험료
    if (age < 26) {
        annualInsurance = 1800000;
    } else if (age < 30) {
        annualInsurance = 1200000;
    } else if (age < 40) {
        annualInsurance = 900000;
    } else if (age < 50) {
        annualInsurance = 800000;
    } else {
        annualInsurance = 700000;
    }

    // 배기량에 따른 가산 (2000cc 초과 시 20% 추가)
    if (displacement > 2000) {
        annualInsurance *= 1.2;
    }

    return Math.round(annualInsurance / 12);
}

// 5. 종합 계산
export function calculateCarCosts(input: CarInputData): CalculationResult {
    const loanAmount = input.carPrice - input.downPayment;

    const monthlyPayment = calculateMonthlyPayment(
        loanAmount,
        input.interestRate,
        input.loanPeriod
    );

    const annualTax = calculateAnnualTax(
        input.displacement,
        input.carAge || 0
    );
    const monthlyTax = Math.round(annualTax / 12);

    const monthlyFuel = calculateMonthlyFuel(
        input.dailyDriving,
        input.fuelEfficiency,
        input.fuelType
    );

    const monthlyInsurance = estimateMonthlyInsurance(
        input.age,
        input.displacement
    );

    const totalMonthly = monthlyPayment + monthlyTax + monthlyFuel + monthlyInsurance;

    let diagnosis: 'safe' | 'warning' | 'danger' = 'safe';
    let incomeRatio: number | undefined;

    if (input.monthlyIncome) {
        incomeRatio = (totalMonthly / input.monthlyIncome) * 100;

        if (incomeRatio >= 20) {
            diagnosis = 'danger';
        } else if (incomeRatio >= 10) {
            diagnosis = 'warning';
        } else {
            diagnosis = 'safe';
        }
    }

    return {
        monthlyPayment,
        monthlyTax,
        monthlyFuel,
        monthlyInsurance,
        totalMonthly,
        incomeRatio,
        diagnosis,
    };
}
