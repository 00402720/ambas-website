export default function SponsorContainer({src, alt}: {src: string, alt: string}) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-48 h-48 flex items-center justify-center">
            <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
    );
}