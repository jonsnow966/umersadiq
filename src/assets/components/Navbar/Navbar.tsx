type NavbarProps = {
    scrollToSection: (sectionId: string) => void;
}

function Navbar({ scrollToSection }: NavbarProps) {
  return (
    <button onClick={() => scrollToSection}>

    </button>
  )
}

export default Navbar
