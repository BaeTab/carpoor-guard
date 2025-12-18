import { motion } from 'framer-motion';
import type { BlogPost } from '../data/blogPosts';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import KakaoAdFit from './KakaoAdFit';

interface BlogPostDetailProps {
    post: BlogPost;
    onBack: () => void;
}

export default function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            alert('주소가 복사되었습니다.');
            // Implementation for clipboard copy logic if needed
        }
    };

    return (
        <article className="max-w-3xl mx-auto py-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-6 font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    목록으로 돌아가기
                </button>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center justify-between text-slate-500 text-sm border-b border-slate-800/50 pb-6 mb-8">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                    <button onClick={handleShare} className="flex items-center gap-2 hover:text-indigo-400">
                        <Share2 className="w-4 h-4" />
                        <span className="hidden md:inline">공유하기</span>
                    </button>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    {post.content.map((paragraph, index) => (
                        <p key={index} className="text-slate-300 leading-8 mb-6 whitespace-pre-line">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* 하단 광고 영역 */}
                <div className="mt-12 pt-8 border-t border-slate-800/50">
                    <KakaoAdFit />
                </div>
            </motion.div>
        </article>
    );
}
