export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto glass-card p-8">
            <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>

            <div className="space-y-6 text-slate-300 leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. 개인정보의 처리 목적</h2>
                    <p>
                        카푸어 방지턱(이하 "본 서비스")은 사용자의 개인정보를 수집하거나 저장하지 않습니다.
                        본 서비스는 순수하게 클라이언트 사이드(브라우저)에서 작동하는 계산기로,
                        사용자가 입력한 모든 정보는 사용자의 기기에서만 처리되며 서버로 전송되지 않습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. 처리하는 개인정보 항목</h2>
                    <p className="mb-2">본 서비스는 다음과 같은 정보를 처리합니다:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>차량 정보 (차종, 배기량, 연비 등)</li>
                        <li>금융 정보 (차량 가격, 할부 조건 등)</li>
                        <li>개인 정보 (나이, 주행거리, 월 소득 등)</li>
                    </ul>
                    <p className="mt-3">
                        <strong className="text-indigo-400">중요:</strong> 위 정보는 모두 사용자의 브라우저에서만 처리되며,
                        어떠한 서버나 데이터베이스에도 저장되지 않습니다. 페이지를 새로고침하면 모든 정보가 삭제됩니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. 개인정보의 보유 및 이용기간</h2>
                    <p>
                        본 서비스는 개인정보를 보유하지 않습니다. 사용자가 입력한 정보는 계산 결과를 표시하는 동안만
                        브라우저의 메모리에 임시 저장되며, 페이지를 닫거나 새로고침하면 즉시 삭제됩니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. 쿠키(Cookie) 사용</h2>
                    <p className="mb-2">본 서비스는 다음과 같은 목적으로 쿠키를 사용할 수 있습니다:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Google Analytics:</strong> 웹사이트 방문 통계 및 사용 패턴 분석</li>
                        <li><strong>Firebase Analytics:</strong> 서비스 개선을 위한 익명화된 사용자 행동 분석</li>
                    </ul>
                    <p className="mt-3">
                        이러한 쿠키는 개인을 식별할 수 없는 익명화된 정보만 수집하며,
                        브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다.
                        다만 쿠키 사용을 거부할 경우 일부 기능이 제한될 수 있습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">5. 개인정보의 제3자 제공</h2>
                    <p>
                        본 서비스는 사용자의 개인정보를 제3자에게 제공하지 않습니다.
                        다만, 사용자가 본 서비스 내의 외부 링크(보험 비교견적, 금융상품 등)를 클릭하여
                        외부 사이트로 이동할 경우, 해당 사이트의 개인정보처리방침이 적용됩니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">6. 개인정보의 파기</h2>
                    <p>
                        본 서비스는 개인정보를 수집하거나 저장하지 않으므로, 별도의 파기 절차가 필요하지 않습니다.
                        사용자가 브라우저를 닫거나 페이지를 새로고침하면 모든 입력 정보가 자동으로 삭제됩니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">7. 정보주체의 권리·의무 및 행사방법</h2>
                    <p>
                        본 서비스는 개인정보를 수집하지 않으므로, 개인정보 열람, 정정, 삭제, 처리정지 등의
                        권리 행사가 필요하지 않습니다. 다만 Google Analytics 또는 Firebase Analytics를 통해
                        수집되는 익명화된 정보에 대해서는 브라우저의 쿠키 설정을 통해 거부할 수 있습니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">8. 개인정보 보호책임자</h2>
                    <p className="mb-2">
                        본 서비스의 개인정보 보호와 관련하여 문의사항이 있으시면 아래로 연락주시기 바랍니다:
                    </p>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                        <p><strong>서비스명:</strong> 카푸어 방지턱</p>
                        <p><strong>이메일:</strong> privacy@carpoor-guard.com (예시)</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">9. 개인정보처리방침의 변경</h2>
                    <p>
                        본 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있으며,
                        변경 시에는 본 웹사이트의 공지사항을 통해 고지할 것입니다.
                    </p>
                    <p className="mt-2">
                        <strong>시행일자:</strong> 2025년 12월 17일
                    </p>
                </section>

                <section className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-indigo-400 mb-3">요약</h2>
                    <ul className="space-y-2">
                        <li>✅ 개인정보를 수집하거나 저장하지 않습니다</li>
                        <li>✅ 모든 계산은 브라우저에서만 처리됩니다</li>
                        <li>✅ 서버로 정보가 전송되지 않습니다</li>
                        <li>✅ Google Analytics는 익명화된 통계만 수집합니다</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
