export default function CoupangBanner() {
    return (
        <div className="w-[140px] h-[640px] rounded-xl overflow-hidden shadow-lg border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
            <iframe
                src="/coupang_ad.html"
                width="140"
                height="640"
                scrolling="no"
                frameBorder="0"
                title="Coupang Banner"
                style={{ border: 'none', overflow: 'hidden' }}
            />
        </div>
    );
}
