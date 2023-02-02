import Link from 'next/link';
import {
  HomeIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from '@heroicons/react/24/solid';

export default function Header() {
  const headerItems: [string, typeof HomeIcon][] = [
    ['Home', HomeIcon],
    ['Features', Cog6ToothIcon],
    ['Pricing', CreditCardIcon],
  ];

  return (
    <></>
    // <header className="bg-black backdrop-blur border-b border-neutral-700">
    //   <nav className="flex justify-center mx-auto py-3">
    //     {headerItems.map(([name, Icon]) => (
    //       <div key={name} className="flex items-center mx-4">
    //         <Link href="#" className="text-gray-300 text-lg px-3">
    //           <Icon className="w-6 h-6 fill-gray-300 text-gray-300" />
    //           {name}
    //         </Link>
    //       </div>
    //     ))}
    //   </nav>
    //   <p> merhaba</p>
    // </header>
  );
}
