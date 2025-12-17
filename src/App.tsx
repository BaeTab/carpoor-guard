import { useState, useEffect } from 'react';
import { Car, RotateCcw } from 'lucide-react';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import CarInput from './components/CarInput';
import Dashboard from './components/Dashboard';
import Diagnosis from './components/Diagnosis';
import LandingSection from './components/LandingSection';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AdModal from './components/AdModal';
import KakaoAdFit from './components/KakaoAdFit';
import { calculateCarCosts, type CarInputData, type CalculationResult } from './utils/carLogic';

function App() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [pendingResult, setPendingResult] = useState<CalculationResult | null>(null);
  const [showAdModal, setShowAdModal] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  // Track page view
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: '카푸어 방지턱',
        page_location: window.location.href,
      });
    }
  }, []);

  const handleCalculate = (data: CarInputData) => {
    const calculationResult = calculateCarCosts(data);

    // Store result temporarily and show ad modal
    setPendingResult(calculationResult);
    setShowAdModal(true);

    // Track calculation attempt
    if (analytics) {
      logEvent(analytics, 'calculate_attempt', {
        car_type: data.carType,
        car_price: data.carPrice,
      });
    }
  };

  const handleAdComplete = () => {
    // Show result after ad is viewed
    if (pendingResult) {
      setResult(pendingResult);
      setPendingResult(null);

      // Track successful calculation
      if (analytics) {
        logEvent(analytics, 'calculate_car_cost', {
          car_type: 'completed',
          total_monthly_cost: pendingResult.totalMonthly,
          diagnosis: pendingResult.diagnosis,
          income_ratio: pendingResult.incomeRatio || 0,
        });
      }

      // Scroll to results
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleReset = () => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showPage = (page: 'home' | 'privacy' | 'terms') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Car className="w-12 h-12 text-indigo-400" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              카푸어 방지턱
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            이 차 사면 숨만 쉬어도 월 <span className="text-rose-400 font-semibold">OO만 원</span> 나갑니다
          </p>
          <p className="text-slate-500 text-sm mt-2">
            할부금 + 보험료 + 세금 + 유류비 = 진짜 월 유지비 계산기
          </p>
        </header>

        {/* Page Content */}
        {currentPage === 'privacy' ? (
          <div>
            <button
              onClick={() => showPage('home')}
              className="mb-6 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              ← 홈으로 돌아가기
            </button>
            <PrivacyPolicy />
          </div>
        ) : currentPage === 'terms' ? (
          <div>
            <button
              onClick={() => showPage('home')}
              className="mb-6 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              ← 홈으로 돌아가기
            </button>
            <TermsOfService />
          </div>
        ) : (
          <>
            {/* Landing Section */}
            <LandingSection />

            {/* Input Form */}
            <div className="mb-12">
              <CarInput onCalculate={handleCalculate} />
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-8">
                {/* Dashboard */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    📊 월 유지비 분석
                  </h2>
                  <Dashboard result={result} />
                </section>

                {/* Diagnosis */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    🚨 카푸어 진단
                  </h2>
                  <Diagnosis result={result} />
                </section>



                {/* Reset Button */}
                <div className="text-center pt-8">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                    다시 계산하기
                  </button>
                </div>
              </div>
            )}

            {/* FAQ Section */}
            <FAQ />

            {/* AdFit Banner (Bottom) */}
            <div className="max-w-4xl mx-auto px-4 mt-8">
              <KakaoAdFit />
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="mt-12 py-8 text-center text-sm text-slate-500 border-t border-slate-800/50">
          <p className="mb-2">
            ⚠️ 본 계산기는 참고용이며, 실제 비용은 개인 상황에 따라 다를 수 있습니다.
          </p>
          <div className="flex items-center justify-center gap-4 mb-3">
            <button
              onClick={() => showPage('privacy')}
              className="hover:text-indigo-400 transition-colors"
            >
              개인정보처리방침
            </button>
            <span>|</span>
            <button
              onClick={() => showPage('terms')}
              className="hover:text-indigo-400 transition-colors"
            >
              이용약관
            </button>
          </div>
          <p className="mb-2">
            광고/제휴 문의: <a href="mailto:b_h_woo@naver.com" className="text-indigo-400 hover:underline">b_h_woo@naver.com</a>
          </p>
          <p>
            © 2025 카푸어 방지턱 | 합리적인 자동차 소비를 위한 계산기
          </p>
        </footer>
      </div>

      {/* Ad Modal */}
      <AdModal
        isOpen={showAdModal}
        onClose={() => setShowAdModal(false)}
        onAdClick={handleAdComplete}
      />
    </div>
  );
}

export default App;
