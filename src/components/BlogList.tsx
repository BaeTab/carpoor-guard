import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/blogPosts';
import { Calendar, ChevronRight } from 'lucide-react';

interface BlogListProps {
    onPostClick: (id: string) => void;
}

export default function BlogList({ onPostClick }: BlogListProps) {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold gradient-text mb-4">자동차 금융 꿀팁</h2>
                <p className="text-slate-400">
                    현명한 오너가 되기 위한 알짜배기 정보들을 모았습니다.
                </p>
            </motion.div>

            <div className="grid gap-6">
                {BLOG_POSTS.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onPostClick(post.id)}
                        className="glass-card p-6 md:p-8 cursor-pointer group hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-sm text-indigo-400 mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="flex-shrink-0 self-end md:self-center">
                                <span className="inline-flex items-center gap-1 text-slate-500 group-hover:text-indigo-400 transition-colors text-sm font-medium">
                                    더 보기 <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
