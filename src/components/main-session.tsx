import { ChevronDown, ChevronUp } from "lucide-react"
import { ButtonRemoveWater } from "./button-remove-water"

export function MainSession() {
  return (
    <main className="flex items-center justify-center my-auto h-full w-full mx-auto">
      <div className="flex flex-col items-center gap-6 w-full max-w-xl">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <h1 className="font-semibold text-xl text-blue-500 p-4 w-full items-center justify-center flex">
            Começar a remover a água
          </h1>
          {/* <div className="flex items-center justify-center p-1 bg-blue-100 rounded-full">
            <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
          </div> */}
        </div>
        <ButtonRemoveWater />
        <div className="flex flex-col items-center justify-center w-full">
          <ChevronUp className="animate-bounce text-blue-700 w-full flex items-center justify-center" />
          <span className="font-medium text-blue-500 w-full flex items-center justify-center">
            Pressione acima
          </span>
        </div>
      </div>
    </main>
  )
}
