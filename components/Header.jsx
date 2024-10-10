import ButtonSecondary from "./ButtonSecondary";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="h-[80px] bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6 xl:px-0 h-full">
            <Logo />
            <ButtonSecondary btnText={"Get Started"} />
        </div>
    </header>
  )
}
