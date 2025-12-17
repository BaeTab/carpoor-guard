import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: '카푸어 방지턱은 무엇인가요?',
            answer: '카푸어 방지턱은 자동차 구매 전 실제 월 유지비를 계산하고, 소득 대비 차량 지출 비율을 분석하여 과도한 차량 구매로 인한 재무 위험을 방지하는 무료 계산기입니다. 할부금뿐만 아니라 보험료, 자동차세, 유류비까지 모두 합산하여 진짜 월 유지비를 보여드립니다.',
        },
        {
            question: '계산 결과는 얼마나 정확한가요?',
            answer: '본 계산기는 2025년 기준 대한민국의 자동차세율, 평균 보험료, 유류비를 반영하여 계산합니다. 할부금은 원리금 균등 상환 방식을 사용하며, 자동차세는 배기량과 차량 연식에 따라 정확히 계산됩니다. 다만 보험료는 나이대별 평균값을 사용하므로, 실제 보험료는 개인의 운전 경력, 사고 이력 등에 따라 달라질 수 있습니다.',
        },
        {
            question: '입력한 정보는 어디에 저장되나요?',
            answer: '카푸어 방지턱은 사용자의 개인정보를 일체 수집하거나 저장하지 않습니다. 모든 계산은 사용자의 브라우저(클라이언트 사이드)에서 처리되며, 서버로 전송되지 않습니다. 페이지를 새로고침하면 입력한 정보는 모두 사라집니다. 안심하고 사용하실 수 있습니다.',
        },
        {
            question: '카푸어 진단 기준은 무엇인가요?',
            answer: '카푸어 진단은 월 소득 대비 차량 유지비 비율을 기준으로 합니다. 10% 미만은 "여유"(안전), 10~20%는 "적정"(관리 필요), 20% 이상은 "위험"(카푸어 경보)으로 분류됩니다. 일반적으로 재무 전문가들은 차량 관련 지출이 소득의 15~20%를 넘지 않도록 권장합니다.',
        },
        {
            question: '할부 이자율은 어떻게 확인하나요?',
            answer: '할부 이자율은 금융사, 신용등급, 차량 종류에 따라 다릅니다. 일반적으로 신차는 연 3~7%, 중고차는 연 5~12% 정도입니다. 정확한 금리는 은행이나 캐피탈사에 문의하시거나, 본 사이트의 "최저금리 할부 조회하기" 링크를 통해 비교견적을 받아보실 수 있습니다.',
        },
        {
            question: '보험료는 왜 나이에 따라 다른가요?',
            answer: '자동차 보험료는 운전자의 나이, 운전 경력, 사고 이력, 차량 종류 등 여러 요인에 따라 결정됩니다. 통계적으로 20대는 사고율이 높아 보험료가 비싸고, 30대 이상은 상대적으로 저렴합니다. 본 계산기는 나이대별 평균 보험료를 사용하며, 정확한 보험료는 "내 정확한 보험료 확인하기" 링크를 통해 비교견적을 받아보실 수 있습니다.',
        },
        {
            question: '자동차세는 어떻게 계산되나요?',
            answer: '자동차세는 배기량(cc)을 기준으로 계산됩니다. 1,600cc 이하는 cc당 140원, 1,600cc 초과는 cc당 200원이며, 여기에 교육세 30%가 추가됩니다. 중고차의 경우 3년 차부터 매년 5%씩 경감되어 최대 50%까지 감면됩니다. 예를 들어 2,000cc 신차는 연간 약 52만원의 자동차세가 부과됩니다.',
        },
        {
            question: '유류비는 어떻게 계산하나요?',
            answer: '유류비는 일 평균 주행거리, 차량 연비, 연료 종류를 기준으로 계산됩니다. 2025년 기준 휘발유는 리터당 1,650원, 경유는 1,450원, 전기는 kWh당 300원으로 계산합니다. 예를 들어 연비 12km/L인 차량으로 하루 50km를 주행하면 월 유류비는 약 20만원입니다.',
        },
        {
            question: '중고차도 계산할 수 있나요?',
            answer: '네, 가능합니다. 차량 정보 입력 시 "중고차"를 선택하고 차량 연식을 입력하시면 됩니다. 중고차는 자동차세 경감 혜택이 적용되어 신차보다 세금이 저렴합니다. 다만 중고차는 수리비나 유지보수 비용이 추가로 발생할 수 있으니 이 점도 고려하시기 바랍니다.',
        },
        {
            question: '전기차도 계산할 수 있나요?',
            answer: '네, 전기차도 계산 가능합니다. 연료 종류에서 "전기"를 선택하고 kWh당 주행거리(연비)를 입력하시면 됩니다. 전기차는 유류비 대신 전기료가 계산되며, 일반적으로 휘발유차보다 연료비가 저렴합니다. 다만 전기차는 배터리 교체 비용 등 장기적인 유지비용도 고려해야 합니다.',
        },
        {
            question: '계산 결과를 저장하거나 공유할 수 있나요?',
            answer: '현재는 계산 결과를 저장하거나 공유하는 기능이 제공되지 않습니다. 필요하신 경우 스크린샷을 찍어 보관하시거나, 결과 화면을 인쇄하실 수 있습니다. 향후 업데이트를 통해 결과 저장 및 공유 기능을 추가할 예정입니다.',
        },
        {
            question: '모바일에서도 사용할 수 있나요?',
            answer: '네, 카푸어 방지턱은 모바일 우선(Mobile First) 디자인으로 제작되어 스마트폰, 태블릿, PC 등 모든 기기에서 최적화된 화면으로 사용하실 수 있습니다. 언제 어디서나 편리하게 차량 유지비를 계산해보세요.',
        },
    ];

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
                자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
                카푸어 방지턱 사용에 대해 궁금하신 점을 확인해보세요
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="glass-card overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                        >
                            <span className="font-semibold text-lg pr-4">{faq.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-5 pt-0 text-slate-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
