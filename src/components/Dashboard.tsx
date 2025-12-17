import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DollarSign, Activity, Zap, FileText, Shield } from 'lucide-react';
import type { CalculationResult } from '../utils/carLogic';

interface DashboardProps {
    result: CalculationResult;
}

export default function Dashboard({ result }: DashboardProps) {
    const costData = [
        { name: '할부금', value: result.monthlyPayment, color: '#6366f1' }, // Indigo 500
        { name: '보험료', value: result.monthlyInsurance, color: '#10b981' }, // Emerald 500
        { name: '유류비', value: result.monthlyFuel, color: '#f59e0b' }, // Amber 500
        { name: '자동차세', value: result.monthlyTax, color: '#ef4444' }, // Red 500
    ];

    const formatCurrency = (value: number) => {
        return `${(value / 10000).toFixed(1)}만원`;
    };

    return (
        <div className="space-y-6">
            {/* Total Monthly Cost - Hero Section */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="glass-card p-10 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 mb-6 backdrop-blur-md">
                    <Activity className="w-4 h-4 text-primary-glow animate-pulse" />
                    <span className="text-sm font-medium text-slate-300">월 예상 총 지출</span>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative inline-block"
                >
                    <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
                        {result.totalMonthly.toLocaleString()}
                        <span className="text-3xl md:text-4xl text-slate-400 ml-2 font-normal">원</span>
                    </h2>
                </motion.div>

                <p className="text-slate-400 text-lg">
                    숨만 쉬어도 매달 나가는 <span className="text-rose-400 font-semibold">고정 비용</span>입니다 💸
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cost Breakdown Chart */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card p-6 lg:col-span-1 flex flex-col items-center justify-center relative min-h-[300px]"
                >
                    <h3 className="absolute top-6 left-6 text-lg font-bold flex items-center gap-2">
                        <Activity className="w-5 h-5 text-indigo-400" />
                        비용 구성
                    </h3>

                    <div className="w-full h-[220px] mt-8">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={costData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {costData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => formatCurrency(value as number)}
                                    contentStyle={{
                                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full px-4 mt-2">
                        {costData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-slate-400">{item.name}</span>
                                </div>
                                <span className="font-medium text-slate-200">
                                    {((item.value / result.totalMonthly) * 100).toFixed(0)}%
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Detailed Breakdown Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CostCard
                        icon={<FileText className="w-5 h-5" />}
                        title="월 할부금"
                        amount={result.monthlyPayment}
                        color="indigo"
                        delay={0.4}
                    />
                    <CostCard
                        icon={<Shield className="w-5 h-5" />}
                        title="월 보험료"
                        amount={result.monthlyInsurance}
                        color="emerald"
                        delay={0.5}
                    />
                    <CostCard
                        icon={<Zap className="w-5 h-5" />}
                        title="월 유류비"
                        amount={result.monthlyFuel}
                        color="amber"
                        delay={0.6}
                    />
                    <CostCard
                        icon={<DollarSign className="w-5 h-5" />}
                        title="월 자동차세"
                        amount={result.monthlyTax}
                        color="rose"
                        delay={0.7}
                    />
                </div>
            </div>
        </div>
    );
}

interface CostCardProps {
    icon: React.ReactNode;
    title: string;
    amount: number;
    color: 'indigo' | 'emerald' | 'amber' | 'rose';
    delay: number;
}

function CostCard({ icon, title, amount, color, delay }: CostCardProps) {
    const colorClasses = {
        indigo: 'text-indigo-400 from-indigo-500/20 to-indigo-500/5 border-indigo-500/20',
        emerald: 'text-emerald-400 from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
        amber: 'text-amber-400 from-amber-500/20 to-amber-500/5 border-amber-500/20',
        rose: 'text-rose-400 from-rose-500/20 to-rose-500/5 border-rose-500/20',
    };

    const iconBgClasses = {
        indigo: 'bg-indigo-500/20',
        emerald: 'bg-emerald-500/20',
        amber: 'bg-amber-500/20',
        rose: 'bg-rose-500/20',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-xl border rounded-2xl p-6 relative overflow-hidden group`}
        >
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${iconBgClasses[color]} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />

            <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl ${iconBgClasses[color]} ${colorClasses[color].split(' ')[0]} mb-4`}>
                    {icon}
                </div>
                <div className="text-sm font-medium text-slate-400 mb-1">{title}</div>
                <div className="text-2xl font-bold text-white tracking-tight">
                    {amount.toLocaleString()}원
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">
                    월 지출의 {((amount / (amount * 10)) * 100).toFixed(0)}% 차지 (예시)
                </div>
            </div>
        </motion.div>
    );
}
