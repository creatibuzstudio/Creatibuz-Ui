'use client';

import Image from "next/image";
import Link from "next/link";

interface DynamicWhatsAppProps {
  phoneNumber?: string;
  customMessage?: string;
}

export default function DynamicWhatsApp({
  phoneNumber = '8801968657353',
  customMessage = 'Hello, I am interested to your services. Are you available to chat with me now?',
}: DynamicWhatsAppProps) {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/whatsapp-icon.png"
        width={60}
        height={50}
        alt="WhatsApp icon"
        className="w-8.5 h-8.5 md:ml-2 md:w-11 md:h-11"
      />
    </Link>
  );
}
