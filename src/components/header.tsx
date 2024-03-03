import Image from "next/image"
import IconWater from "../../public/sem-agua.png"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-4">
      <Button
        variant={"secondary"}
        className="rounded-2xl hover:bg-primary hover:text-primary-foreground px-6"
      >
        Sobre
      </Button>
      <div className="flex items-center gap-4 w-full justify-center">
        {/* <Image src={IconWater} width={30} alt="" /> */}
        <h2 className="font-semibold text-2xl">
          Remover{" "}
          <span className="font-bold text-2xl text-blue-500 underline underline-offset-4">
            água
          </span>
        </h2>
      </div>
      <Button
        variant={"secondary"}
        className="rounded-2xl hover:bg-primary hover:text-primary-foreground px-6"
      >
        Contribuir
      </Button>
    </header>
  )
}
