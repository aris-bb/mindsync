import {
  HomeIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from '@heroicons/react/24/solid';
import HeaderItem from './HeaderItem';

export default function Header() {
  return (
    <header className="backdrop-blur border-b border-neutral-700">
      <nav className="flex justify-center mx-auto py-3">
        <HeaderItem name="Home" Icon={HomeIcon} />
        <HeaderItem name="Features" Icon={Cog6ToothIcon} />
        <HeaderItem name="Pricing" Icon={CreditCardIcon} />
      </nav>
    </header>
  );
}
