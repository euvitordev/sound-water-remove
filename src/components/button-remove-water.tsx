"use client"
import { DrawerExemplo } from "./drawer-exemplo"
import { Button } from "./ui/button"

export function ButtonRemoveWater() {
  return (
    <>
      <div className="bg-blue-100/50 p-2 rounded-full">
        <div className="bg-blue-100 p-2 rounded-full">
          <DrawerExemplo>
            <Button className="rounded-full w-52 h-52 font-bold text-5xl gap-2 items-center flex bg-blue-500/80 shadow-2xl shadow-blue-500/25 backdrop-blur-3xl hover:bg-blue-500 animate-pulse">
              💦
            </Button>
          </DrawerExemplo>
        </div>
      </div>
    </>
  )
}
