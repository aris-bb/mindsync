import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';

export default function HeaderItem({
  name,
  Icon,
}: {
  name: string;
  Icon: typeof HomeIcon;
}) {
  return (
    <div className="flex items-center mx-4">
      <Icon className="w-6 h-6 fill-gray-300" />
      <Link href="#" className="text-gray-300 text-lg px-3">
        {name}
      </Link>
    </div>
  );
}
