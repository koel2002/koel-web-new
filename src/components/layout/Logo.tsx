import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image 
        src="https://lh3.googleusercontent.com/d/155-bxgKG1cfePWWNoJr6E0UB5QYlWtDJ" 
        alt="Koel Group Logo" 
        width={140} 
        height={40} 
        className="object-contain"
      />
    </Link>
  );
}
