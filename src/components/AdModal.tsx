import { useState } from 'react';
import { X, ExternalLink, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdClick: () => void;
}

export default function AdModal({ isOpen, onClose, onAdClick }: AdModalProps) {
    const [countdown, setCountdown] = useState(5);
    const [adClicked, setAdClicked] = useState(false);

    const handleAdClick = () => {
        // Open ad link in new tab
        window.open('https://deg.kr/799c1ba', '_blank');
        setAdClicked(true);

        // Start countdown
        let count = 5;
        const timer = setInterval(() => {
            count--;
            setCountdown(count);
            if (count <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    };

    const handleViewResult = () => {
        if (adClicked && countdown <= 0) {
            onAdClick();
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative glass-card p-8 max-w-md w-full"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                <Gift className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-center mb-3">
                            계산 결과 확인하기
                        </h2>

                        {/* Description */}
                        <p className="text-slate-300 text-center mb-6 leading-relaxed">
                            무료 서비스 운영을 위해 광고 후원이 필요합니다.
                            <br />
                            아래 버튼을 클릭하고 잠시만 기다려주세요!
                        </p>

                        {/* Ad Button */}
                        {!adClicked ? (
                            <button
                                onClick={handleAdClick}
                                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 mb-4"
                            >
                                <ExternalLink className="w-5 h-5" />
                                광고 보고 결과 확인하기
                            </button>
                        ) : countdown > 0 ? (
                            <div className="text-center mb-4">
                                <div className="w-20 h-20 mx-auto mb-4 relative">
                                    <svg className="w-20 h-20 transform -rotate-90">
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="36"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            fill="none"
                                            className="text-slate-700"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="36"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 36}`}
                                            strokeDashoffset={`${2 * Math.PI * 36 * (countdown / 5)}`}
                                            className="text-indigo-400 transition-all duration-1000"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-indigo-400">{countdown}</span>
                                    </div>
                                </div>
                                <p className="text-slate-400">
                                    광고 감사합니다! 잠시만 기다려주세요...
                                </p>
                            </div>
                        ) : (
                            <button
                                onClick={handleViewResult}
                                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-lg font-semibold text-lg transition-all mb-4"
                            >
                                ✓ 결과 확인하기
                            </button>
                        )}

                        {/* Info */}
                        <p className="text-xs text-slate-500 text-center">
                            광고 클릭은 서비스 운영에 큰 도움이 됩니다 🙏
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
