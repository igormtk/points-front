import { ModeToggle } from "./ModeToggle";
import { Navigation } from "./Navigation";
import ImageComponent from "./Image";
import logo from "../../public/gaumes_logo.png";

export default function Header() {
  return (
    <main>
      <div className="flex justify-between items-center">
        <div>
        <ImageComponent src={logo} alt="logo" height={20} width={120} />
        </div>
        <div className="flex-grow flex justify-center"> {/* Adicione a classe justify-center */}
          <Navigation />
        </div>
        <div className="min-w-[120px]">
        <ModeToggle />
        </div>
      </div>
    </main>
  );
}
