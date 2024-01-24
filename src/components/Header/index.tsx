import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        alt="Exoticca Logo"
        width={275}
        height={48}
        priority
        src="/exotica-logo.webp"
      />
    </header>
  );
};

export default Header;
