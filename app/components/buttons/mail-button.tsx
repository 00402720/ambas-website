"use client";

export default function MailButton({text}: {text?: string}) {
    return (
        <button
            className="ml-4 mt-2 bg-white text-[#00B9B1] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={() => window.location.href = 'mailto:ambassv356@gmail.com'}
        >
            {text || 'Contactar'}
        </button>
    );
}