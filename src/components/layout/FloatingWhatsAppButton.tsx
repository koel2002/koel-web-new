
'use client';

import Link from 'next/link';

export function FloatingWhatsAppButton() {
    const phoneNumber = '8801970493357';;
    const message = encodeURIComponent("Hello, I'm interested in Koel Group's services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 bg-secondary text-foreground p-3 rounded-xl shadow-lg hover:bg-muted transition-colors z-50 flex items-center justify-center gap-3 border"
            aria-label="Chat with Koel Group on WhatsApp"
        >
            <img 
                src="https://lh3.googleusercontent.com/d/1EPKpm9gEimHcoN-Pa51zI2OcYUn4Zgvw"
                alt="WhatsApp Icon"
                width={28}
                height={28}
                className="h-7 w-7"
            />
            <span className="font-semibold text-sm hidden sm:inline">Chat now</span>
        </Link>
    )
}
