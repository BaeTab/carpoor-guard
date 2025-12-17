import { Car, Calculator, TrendingDown, Shield, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingSection() {
    const features = [
        {
            icon: <Calculator className="w-6 h-6" />,
            title: '정밀한 비용 분석',
            description: '단순 할부금이 아닌, 자동차세/보험료/유류비까지 모두 포함된 "진짜" 월 유지비를 계산합니다.',
            color: 'indigo',
        },
        {
            icon: <TrendingDown className="w-6 h-6" />,
            title: '카푸어 리스크 진단',
            description: '금융 전문가들이 권장하는 소득 대비 지출 비율(DSR) 기반으로 당신의 재무 안전성을 진단합니다.',
            color: 'emerald',
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: '100% 프라이버시',
            description: '모든 계산 로직은 당신의 브라우저에서 실행됩니다. 금융 정보는 서버로 전송되지 않습니다.',
            color: 'amber',
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: '즉각적인 인사이트',
            description: '복잡한 엑셀 계산 없이, 3단계 입력만으로 직관적인 시각화 리포트를 제공받으세요.',
            color: 'rose',
        },
    ];

    return (
        <div className="space-y-24 mb-24">
            {/* Hero Section */}
            <section className="relative text-center py-20 px-4">
                {/* Background Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 backdrop-blur-md border border-indigo-500/30 rounded-full mb-8 shadow-lg shadow-indigo-500/10">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-indigo-300 tracking-wide">
                            지능형 자동차 금융 계산기 V1.0
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            이 차 살 수 있을까?
                        </span>
                        <br />
                        <span className="inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mt-2">
                            숫자로 확인하세요
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                        많은 분들이 <span className="text-white font-medium">할부금</span>만 보고 계약합니다.
                        하지만 진짜 부담은 <span className="text-rose-400 font-medium border-b border-rose-400/30">숨겨진 유지비</span>에서 시작됩니다.
                        소득 대비 적정 가격인지 지금 바로 진단받아보세요.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-slate-400">
                                    <UserIcon id={i} />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-slate-400">
                            <strong className="text-white">1,240명</strong>이 오늘 진단을 받았습니다
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 '카푸어 방지턱'인가요?</h2>
                    <p className="text-slate-400">단순 계산기를 넘어선, 당신의 금융 안전 가이드입니다</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </section>

            {/* How It Works Steps */}
            <section className="py-20 bg-slate-900/40 border-y border-white/5 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">30초면 충분합니다</h2>
                        <p className="text-slate-400">복잡한 금융 계산 프로세스를 3단계로 단순화했습니다</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 -z-10" />

                        {[
                            {
                                step: '01',
                                icon: <Car className="w-8 h-8" />,
                                title: '차량 스펙 입력',
                                description: '구매 희망 차량의 종류, 배기량, 연비 등 기본 정보를 입력합니다.',
                            },
                            {
                                step: '02',
                                icon: <Calculator className="w-8 h-8" />,
                                title: '금융 조건 설정',
                                description: '선수금, 할부 기간, 이자율 등 구매 조건을 상세하게 설정합니다.',
                            },
                            {
                                step: '03',
                                icon: <Zap className="w-8 h-8" />,
                                title: 'AI 진단 결과',
                                description: '월 납입금 분석과 소득 대비 적정성 진단 리포트를 받습니다.',
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center font-bold text-slate-500 group-hover:text-white group-hover:border-indigo-500 transition-colors z-10">
                                    {step.step}
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="inline-flex p-4 bg-slate-800/50 rounded-xl text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    const colorClasses: Record<string, string> = {
        indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/50',
        emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50',
        amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/50',
        rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/50',
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-2xl border bg-slate-900/40 backdrop-blur-sm transition-all duration-300 group ${colorClasses[feature.color]}`}
        >
            <div className="flex items-start gap-5">
                <div className={`p-3 rounded-xl ${colorClasses[feature.color].split(' ')[1]}`}>
                    {feature.icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                        {feature.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function UserIcon({ id }: { id: number }) {
    // Simple SVG placeholders for user avatars
    const colors = ["#6366f1", "#10b981", "#f59e0b", "#f43f5e"];
    return (
        <div className="w-full h-full rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: colors[id - 1] }}>
            {String.fromCharCode(65 + id)}
        </div>
    );
}
