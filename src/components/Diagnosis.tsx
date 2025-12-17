import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import type { CalculationResult } from '../utils/carLogic';
import { CPA_LINKS } from '../constants/links';

interface DiagnosisProps {
    result: CalculationResult;
}

export default function Diagnosis({ result }: DiagnosisProps) {
    if (!result.incomeRatio) {
        return (
            <div className="glass-card p-10 text-center animate-pulse-glow">
                <p className="text-slate-400 text-lg">
                    월 소득을 입력하면 카푸어 진단을 받을 수 있습니다 ✨
                </p>
            </div>
        );
    }

    const getDiagnosisConfig = () => {
        switch (result.diagnosis) {
            case 'safe':
                return {
                    icon: <CheckCircle className="w-20 h-20" />,
                    color: 'emerald',
                    emoji: '🟢',
                    title: '여유 (Great)',
                    subtitle: '안전한 재정 상태입니다',
                    message: '차량 유지비가 소득의 적정 범위 내에 있습니다.',
                    advice: [
                        '차량 유지에 큰 부담이 없습니다 👍',
                        '여유 자금을 저축이나 투자에 활용하세요 💰',
                        '정기적인 차량 점검으로 비용을 더 절감하세요 🔧',
                    ],
                    bgGradient: 'from-emerald-500/10 to-emerald-900/10',
                    border: 'border-emerald-500/30',
                    textColor: 'text-emerald-400',
                    glowColor: 'shadow-emerald-500/20',
                };
            case 'warning':
                return {
                    icon: <AlertCircle className="w-20 h-20" />,
                    color: 'amber',
                    emoji: '🟡',
                    title: '적정 (Good)',
                    subtitle: '관리가 필요한 단계입니다',
                    message: '아직은 괜찮지만, 추가 지출에 주의하세요.',
                    advice: [
                        '불필요한 차량 지출을 줄여보세요 📉',
                        '보험료 비교견적으로 고정비를 아끼세요 🛡️',
                        '비상금을 충분히 확보해두세요 🏦',
                    ],
                    bgGradient: 'from-amber-500/10 to-amber-900/10',
                    border: 'border-amber-500/30',
                    textColor: 'text-amber-400',
                    glowColor: 'shadow-amber-500/20',
                };
            case 'danger':
                return {
                    icon: <AlertTriangle className="w-20 h-20" />,
                    color: 'rose',
                    emoji: '🔴',
                    title: '위험 (Warning)',
                    subtitle: '카푸어 경보 발령!',
                    message: '소득 대비 차량 지출이 위험 수준입니다.',
                    advice: [
                        '🚨 현재 차량은 큰 부담이 됩니다',
                        '할부 기간 연장이나 선수금 증액 고려 🔄',
                        '보험료 절감이 매우 시급합니다 ⚡',
                        '더 저렴한 차량을 찾아보시는 건 어떨까요? 🤔',
                    ],
                    bgGradient: 'from-rose-500/10 to-rose-900/10',
                    border: 'border-rose-500/30',
                    textColor: 'text-rose-400',
                    glowColor: 'shadow-rose-500/20',
                };
        }
    };

    const config = getDiagnosisConfig();

    return (
        <div className="space-y-6">
            {/* Diagnosis Card */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className={`glass-card p-1 fill-mode-forwards overflow-hidden relative group`}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient}`} />
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 bg-${config.color}-500`} />

                <div className={`relative p-8 rounded-xl border ${config.border} backdrop-blur-xl h-full flex flex-col md:flex-row gap-8 items-center md:items-start`}>

                    {/* Left: Icon & Title */}
                    <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: 'spring', damping: 12 }}
                            className={`${config.textColor} mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                        >
                            {config.icon}
                        </motion.div>

                        <div className="inline-block px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700/50 text-xs font-medium text-slate-400 mb-2">
                            {config.subtitle}
                        </div>

                        <h2 className="text-4xl font-bold mb-2 tracking-tight">
                            {config.title}
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-sm">
                            {config.message}
                        </p>
                    </div>

                    {/* Right: Gauge & Advice */}
                    <div className="flex-1 w-full space-y-8">
                        {/* Gauge */}
                        <div className="bg-slate-900/40 rounded-2xl p-6 border border-white/5">
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-sm font-medium text-slate-400">소득 대비 지출</span>
                                <div className="text-right">
                                    <span className={`text-4xl font-bold ${config.textColor}`}>
                                        {result.incomeRatio.toFixed(1)}
                                    </span>
                                    <span className="text-lg text-slate-500 ml-1">%</span>
                                </div>
                            </div>

                            <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(result.incomeRatio, 100)}%` }}
                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                    className={`h-full bg-gradient-to-r ${result.diagnosis === 'safe'
                                        ? 'from-emerald-500 via-emerald-400 to-green-500'
                                        : result.diagnosis === 'warning'
                                            ? 'from-amber-500 via-amber-400 to-yellow-500'
                                            : 'from-rose-500 via-rose-400 to-red-500'
                                        } shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
                                />
                            </div>

                            <div className="flex justify-between text-xs font-medium text-slate-500 mt-2 px-1">
                                <span>0%</span>
                                <span className={result.diagnosis === 'safe' ? 'text-white' : ''}>10%</span>
                                <span className={result.diagnosis === 'warning' ? 'text-white' : ''}>20%</span>
                                <span className={result.diagnosis === 'danger' ? 'text-white' : ''}>30%+</span>
                            </div>
                        </div>

                        {/* Advice */}
                        <div className="space-y-3">
                            {config.advice.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 + (0.1 * index) }}
                                    className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5"
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full ${config.textColor.replace('text-', 'bg-')}`} />
                                    <span className="text-sm text-slate-200 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CPA Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CPAButton
                    title={CPA_LINKS.insurance.title}
                    description={CPA_LINKS.insurance.description}
                    icon={CPA_LINKS.insurance.icon}
                    url={CPA_LINKS.insurance.url}
                    highlight={result.diagnosis === 'danger'}
                    delay={0.8}
                />
                <CPAButton
                    title={CPA_LINKS.loan.title}
                    description={CPA_LINKS.loan.description}
                    icon={CPA_LINKS.loan.icon}
                    url={CPA_LINKS.loan.url}
                    highlight={result.diagnosis === 'danger'}
                    delay={0.9}
                />
            </div>
        </div>
    );
}

interface CPAButtonProps {
    title: string;
    description: string;
    icon: string;
    url: string;
    highlight?: boolean;
    delay?: number;
}

function CPAButton({ title, description, icon, url, highlight, delay = 0 }: CPAButtonProps) {
    const isRecruiting = url === '#';

    const handleClick = (e: React.MouseEvent) => {
        if (isRecruiting) {
            e.preventDefault();
            alert('광고 문의는 b_h_woo@naver.com으로 연락주세요 감사합니다 :)');
        }
    };

    return (
        <motion.a
            href={url}
            target={isRecruiting ? undefined : "_blank"}
            rel={isRecruiting ? undefined : "noopener noreferrer"}
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            whileHover={{ scale: isRecruiting ? 1 : 1.02 }}
            whileTap={{ scale: isRecruiting ? 1 : 0.98 }}
            className={`glass-card p-6 block transition-all group relative overflow-hidden ${isRecruiting
                ? 'opacity-80 cursor-pointer'
                : highlight
                    ? 'ring-2 ring-rose-500/50 bg-rose-500/5'
                    : 'hover:border-primary/50'
                }`}
        >
            <div className="relative z-10 flex items-start gap-4">
                <div className="text-4xl p-2 bg-slate-800/50 rounded-2xl">{icon}</div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-lg text-slate-100 group-hover:text-primary transition-colors">
                            {title}
                        </h4>
                        {!isRecruiting && (
                            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        )}
                    </div>
                    <p className={`text-sm font-medium ${isRecruiting ? 'text-amber-400' : 'text-slate-400'}`}>
                        {description}
                    </p>
                    {highlight && !isRecruiting && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold animate-pulse">
                            <AlertTriangle className="w-3 h-3" />
                            지금 확인 권장
                        </div>
                    )}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </motion.a>
    );
}
