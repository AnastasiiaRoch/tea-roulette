import Link from 'next/link';

import Container from '@/lib/atoms/Container';

const Header = () => (
  <header className="py-4 text-slate-50 [grid-area:header]">
    <Container>
      <div className="flex justify-between">
        <Link href="/">Logo</Link>
        <nav>Menu</nav>
      </div>
    </Container>
  </header>
);

export default Header;
