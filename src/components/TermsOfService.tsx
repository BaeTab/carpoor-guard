export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto glass-card p-8">
            <h1 className="text-3xl font-bold mb-6">이용약관</h1>

            <div className="space-y-6 text-slate-300 leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제1조 (목적)</h2>
                    <p>
                        본 약관은 카푸어 방지턱(이하 "본 서비스")이 제공하는 자동차 유지비 계산 서비스의
                        이용과 관련하여 서비스 제공자와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제2조 (정의)</h2>
                    <ul className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            <strong>"서비스"</strong>란 이용자가 차량 정보와 금융 조건을 입력하여
                            월 유지비를 계산하고 카푸어 진단을 받을 수 있는 웹 기반 계산기를 의미합니다.
                        </li>
                        <li>
                            <strong>"이용자"</strong>란 본 서비스에 접속하여 본 약관에 따라
                            서비스를 이용하는 모든 사람을 의미합니다.
                        </li>
                        <li>
                            <strong>"계산 결과"</strong>란 이용자가 입력한 정보를 바탕으로
                            본 서비스가 제공하는 월 유지비 및 카푸어 진단 정보를 의미합니다.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제3조 (약관의 효력 및 변경)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.</li>
                        <li>
                            본 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며,
                            변경된 약관은 제1항과 같은 방법으로 공지함으로써 효력이 발생합니다.
                        </li>
                        <li>
                            이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있으며,
                            변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우 약관의 변경사항에 동의한 것으로 간주됩니다.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제4조 (서비스의 제공)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            본 서비스는 다음과 같은 기능을 제공합니다:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>차량 할부금 계산</li>
                                <li>자동차세 계산</li>
                                <li>유류비 추정</li>
                                <li>보험료 추정</li>
                                <li>월 총 유지비 계산</li>
                                <li>소득 대비 카푸어 진단</li>
                            </ul>
                        </li>
                        <li>
                            본 서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다.
                            다만, 시스템 점검, 서버 장애 등 불가피한 사유가 있는 경우 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제5조 (서비스의 제한)</h2>
                    <p className="mb-2">본 서비스는 다음 각 호의 경우 서비스 제공을 제한할 수 있습니다:</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>서비스용 설비의 보수, 점검, 교체 또는 고장, 통신의 두절 등의 사유가 발생한 경우</li>
                        <li>정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</li>
                        <li>서비스 제공업자와의 계약 종료 등과 같은 본 서비스의 제반 사정으로 서비스를 유지할 수 없는 경우</li>
                        <li>기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제6조 (이용자의 의무)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>이용자는 본 약관 및 관계 법령을 준수하여야 합니다.</li>
                        <li>
                            이용자는 다음 각 호의 행위를 하여서는 안 됩니다:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>서비스 이용 신청 또는 변경 시 허위 내용의 등록</li>
                                <li>타인의 정보 도용</li>
                                <li>본 서비스의 정보를 무단으로 변경</li>
                                <li>본 서비스가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                                <li>본 서비스 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                                <li>본 서비스의 운영을 방해하는 행위</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제7조 (계산 결과의 정확성)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            본 서비스가 제공하는 계산 결과는 2025년 기준 대한민국의 세법, 평균 보험료, 유류비 등을
                            반영하여 산출된 <strong className="text-amber-400">참고용 정보</strong>입니다.
                        </li>
                        <li>
                            실제 비용은 개인의 신용등급, 운전 경력, 사고 이력, 보험 가입 조건,
                            주행 패턴 등에 따라 달라질 수 있습니다.
                        </li>
                        <li>
                            본 서비스는 계산 결과의 정확성을 보장하지 않으며,
                            이용자는 계산 결과를 참고용으로만 사용하고 실제 차량 구매 결정 시에는
                            전문가의 상담을 받으시기 바랍니다.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제8조 (면책조항)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            본 서비스는 천재지변, 전쟁, 기간통신사업자의 서비스 중지,
                            해킹 등 불가항력으로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.
                        </li>
                        <li>
                            본 서비스는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
                        </li>
                        <li>
                            본 서비스는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나
                            상실한 것에 대하여 책임을 지지 않습니다.
                        </li>
                        <li>
                            본 서비스는 이용자가 계산 결과를 바탕으로 한 차량 구매 결정에 대하여
                            어떠한 책임도 지지 않습니다.
                        </li>
                        <li>
                            본 서비스 내 제3자 링크(보험 비교견적, 금융상품 등)를 통해 이동한 외부 사이트에서
                            발생하는 문제에 대해서는 해당 사이트의 약관이 적용되며, 본 서비스는 책임을 지지 않습니다.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제9조 (저작권)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            본 서비스가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 본 서비스에 귀속됩니다.
                        </li>
                        <li>
                            이용자는 본 서비스를 이용함으로써 얻은 정보를 본 서비스의 사전 승낙 없이
                            복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나
                            제3자에게 이용하게 하여서는 안 됩니다.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">제10조 (분쟁 해결)</h2>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            본 서비스와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.
                        </li>
                        <li>
                            본 서비스와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제소합니다.
                        </li>
                    </ol>
                </section>

                <section className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm">
                        <strong>부칙</strong><br />
                        본 약관은 2025년 12월 17일부터 시행됩니다.
                    </p>
                </section>

                <section className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-rose-400 mb-3">⚠️ 중요 안내</h2>
                    <p>
                        본 서비스의 계산 결과는 <strong>참고용</strong>이며,
                        실제 차량 구매 결정 시에는 반드시 금융기관, 보험사, 세무 전문가 등의 상담을 받으시기 바랍니다.
                        본 서비스는 계산 결과로 인한 어떠한 손해에 대해서도 책임을 지지 않습니다.
                    </p>
                </section>
            </div>
        </div>
    );
}
