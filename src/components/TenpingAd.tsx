import { useEffect, useRef } from 'react';

export default function TenpingAd() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 이미 로드되었는지 확인 (중복 방지)
        if (container.querySelector('tenping')) return;

        // 1. tenping 태그 생성
        const tenpingEl = document.createElement('tenping');
        tenpingEl.className = 'adsbytenping';
        tenpingEl.style.width = '100%';
        tenpingEl.style.maxWidth = '768px';
        tenpingEl.style.margin = '0px auto';
        tenpingEl.style.display = 'block';
        tenpingEl.setAttribute('tenping-ad-display-type', '1LawCE8FqKOhetXZhMopsQ%3d%3d');
        tenpingEl.setAttribute('tenping-ad-client', 'gxusWG4zbipfMQgkcMlGnDKnH0Q%2fChjdkJMy20MLGYEodDHk5r3FZTbMjr%2flECwK');

        container.appendChild(tenpingEl);

        // 2. 스크립트 로드
        const script = document.createElement('script');
        script.src = '//ads.tenping.kr/scripts/adsbytenping.min.js';
        script.async = true;
        container.appendChild(script);

    }, []);

    return (
        <div ref={containerRef} className="w-full my-8 bg-slate-900/30 p-4 rounded-xl min-h-[200px] flex justify-center items-center">
            {/* 여기에 tenping 태그와 스크립트가 동적으로 추가됩니다 */}
        </div>
    );
}
