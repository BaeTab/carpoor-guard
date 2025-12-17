import { useState } from 'react';
import { Car, DollarSign, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CarInputData } from '../utils/carLogic';

interface CarInputProps {
    onCalculate: (data: CarInputData) => void;
}

export default function CarInput({ onCalculate }: CarInputProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<CarInputData>>({
        carType: 'new',
        fuelType: 'gasoline',
        displacement: 2000,
        fuelEfficiency: 12,
        carPrice: 30000000,
        downPayment: 5000000,
        interestRate: 4.5,
        loanPeriod: 60,
        dailyDriving: 50,
        age: 30,
    });

    const updateField = (field: keyof CarInputData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            onCalculate(formData as CarInputData);
        }
    };

    const isFormValid = () => {
        return formData.carPrice && formData.displacement && formData.age;
    };

    const steps = [
        { id: 1, title: '차량 정보', icon: <Car className="w-5 h-5" /> },
        { id: 2, title: '금융 조건', icon: <DollarSign className="w-5 h-5" /> },
        { id: 3, title: '개인 정보', icon: <User className="w-5 h-5" /> },
    ];

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">차량 종류</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {(['new', 'used'] as const).map(type => (
                                        <button
                                            key={type}
                                            onClick={() => updateField('carType', type)}
                                            className={`p-4 rounded-xl border transition-all duration-200 flex items-center justify-center gap-2 ${formData.carType === type
                                                ? 'border-primary bg-primary/10 text-primary-glow shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                                                : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-800'
                                                }`}
                                        >
                                            {type === 'new' ? '✨ 신차' : '🚗 중고차'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {formData.carType === 'used' && (
                                <div>
                                    <label className="input-label mb-2 block text-sm font-medium text-slate-400">차량 연식 (년)</label>
                                    <input
                                        type="number"
                                        value={formData.carAge || 0}
                                        onChange={e => updateField('carAge', Number(e.target.value))}
                                        className="input-field"
                                        placeholder="예: 5"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">배기량 (cc)</label>
                                <input
                                    type="number"
                                    value={formData.displacement}
                                    onChange={e => updateField('displacement', Number(e.target.value))}
                                    className="input-field"
                                    placeholder="예: 2000"
                                />
                            </div>

                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">
                                    연비 ({formData.fuelType === 'electric' ? 'km/kWh' : 'km/L'})
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={formData.fuelEfficiency}
                                    onChange={e => updateField('fuelEfficiency', Number(e.target.value))}
                                    className="input-field"
                                    placeholder="예: 12.5"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">연료 종류</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {(['gasoline', 'diesel', 'electric'] as const).map(fuel => (
                                        <button
                                            key={fuel}
                                            onClick={() => updateField('fuelType', fuel)}
                                            className={`p-3 rounded-xl border transition-all duration-200 text-sm font-medium ${formData.fuelType === fuel
                                                ? 'border-primary bg-primary/10 text-primary-glow shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                                                : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-800'
                                                }`}
                                        >
                                            {fuel === 'gasoline' ? '⛽ 휘발유' : fuel === 'diesel' ? '🚛 경유' : '⚡ 전기'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div>
                            <label className="input-label mb-2 block text-sm font-medium text-slate-400">차량 가격</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₩</span>
                                <input
                                    type="number"
                                    value={formData.carPrice}
                                    onChange={e => updateField('carPrice', Number(e.target.value))}
                                    className="input-field pl-10"
                                    placeholder="예: 30000000"
                                />
                            </div>
                            <p className="text-right text-xs text-slate-400 mt-1.5 font-mono">
                                {formData.carPrice?.toLocaleString()}원
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">선수금</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₩</span>
                                    <input
                                        type="number"
                                        value={formData.downPayment}
                                        onChange={e => updateField('downPayment', Number(e.target.value))}
                                        className="input-field pl-10"
                                        placeholder="예: 5000000"
                                    />
                                </div>
                                <p className="text-right text-xs text-slate-400 mt-1.5 font-mono">
                                    {formData.downPayment?.toLocaleString()}원
                                </p>
                            </div>

                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">연 이자율 (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={formData.interestRate}
                                    onChange={e => updateField('interestRate', Number(e.target.value))}
                                    className="input-field"
                                    placeholder="예: 4.5"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="input-label mb-2 block text-sm font-medium text-slate-400">할부 기간</label>
                            <div className="grid grid-cols-4 gap-3 mb-3">
                                {[36, 48, 60, 72].map(period => (
                                    <button
                                        key={period}
                                        onClick={() => updateField('loanPeriod', period)}
                                        className={`p-2.5 rounded-xl border transition-all text-sm font-medium ${formData.loanPeriod === period
                                            ? 'border-primary bg-primary/10 text-primary-glow'
                                            : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-800'
                                            }`}
                                    >
                                        {period}개월
                                    </button>
                                ))}
                            </div>
                            <input
                                type="number"
                                value={formData.loanPeriod}
                                onChange={e => updateField('loanPeriod', Number(e.target.value))}
                                className="input-field"
                                placeholder="직접 입력 (개월)"
                            />
                        </div>
                    </motion.div>
                );

            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">만 나이</label>
                                <input
                                    type="number"
                                    value={formData.age}
                                    onChange={e => updateField('age', Number(e.target.value))}
                                    className="input-field"
                                    placeholder="예: 30"
                                />
                                <p className="text-xs text-slate-500 mt-1.5">보험료 추정에 사용됩니다</p>
                            </div>

                            <div>
                                <label className="input-label mb-2 block text-sm font-medium text-slate-400">일 평균 주행거리 (km)</label>
                                <input
                                    type="number"
                                    value={formData.dailyDriving}
                                    onChange={e => updateField('dailyDriving', Number(e.target.value))}
                                    className="input-field"
                                    placeholder="예: 50"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="input-label mb-2 block text-sm font-medium text-slate-400">
                                월 소득 (옵션)
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₩</span>
                                <input
                                    type="number"
                                    value={formData.monthlyIncome || ''}
                                    onChange={e => updateField('monthlyIncome', Number(e.target.value) || undefined)}
                                    className="input-field pl-10"
                                    placeholder="예: 4000000"
                                />
                            </div>
                            <p className="text-xs text-indigo-400 mt-1.5 flex items-center gap-1">
                                ✨ 입력 시 '카푸어 진단'을 받을 수 있습니다
                            </p>
                        </div>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="glass-card p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />

            {/* Step Progress */}
            <div className="mb-10">
                <div className="flex justify-between items-center relative">
                    {/* Progress Bar Background */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10" />

                    {/* Active Progress Line */}
                    <motion.div
                        className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 -z-10"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((step - 1) / 2) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />

                    {steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center gap-2 bg-background/50 backdrop-blur-sm p-1 rounded-xl">
                            <motion.div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${s.id === step
                                        ? 'border-primary bg-surface text-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                        : s.id < step
                                            ? 'border-emerald-500 bg-emerald-500 text-white'
                                            : 'border-slate-800 bg-surface text-slate-600'
                                    }`}
                                animate={{ scale: s.id === step ? 1.1 : 1 }}
                            >
                                {s.id < step ? '✓' : s.icon}
                            </motion.div>
                            <span className={`text-xs font-medium transition-colors duration-300 ${s.id === step ? 'text-white' : s.id < step ? 'text-emerald-400' : 'text-slate-600'
                                }`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {renderStep()}
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-800/50">
                {step > 1 && (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="btn-secondary flex items-center gap-2 pr-6"
                    >
                        <ChevronLeft className="w-4 h-4" /> 이전
                    </button>
                )}
                <div className="flex-1" />
                {step < 3 ? (
                    <button
                        onClick={() => setStep(step + 1)}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                        다음 <ChevronRight className="w-4 h-4" />
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={!isFormValid()}
                        className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        계산하기
                    </button>
                )}
            </div>
        </div>
    );
}
