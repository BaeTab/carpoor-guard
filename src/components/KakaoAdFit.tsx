import { useEffect, useRef } from 'react';

export default function KakaoAdFit() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 스크립트가 이미 존재하는지 확인 (중복 로드 방지)
        const scriptId = 'kakao_adfit_script';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'text/javascript';
            script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
            script.async = true;
            document.head.appendChild(script);
        }

        // 광고 리로드 (SPA 페이지 전환 대응)
        // window.adfit이 존재하면 re-render 시도 (타입 에러 방지를 위해 any 사용)
        return () => {
            // Cleanup 로직이 필요하다면 여기에 추가
        };
    }, []);

    return (
        <div ref={containerRef} className="flex justify-center items-center my-8 min-h-[250px] w-full bg-slate-900/30 rounded-lg overflow-hidden">
            <ins
                className="kakao_ad_area"
                style={{ display: 'none' }}
                data-ad-unit="DAN-m2hczGK74g0keQJq"
                data-ad-width="300"
                data-ad-height="250"
            />
        </div>
    );
}
