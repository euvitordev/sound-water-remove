"use client"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useRef, useState } from "react"
import Image from "next/image"
import Phone from "../assets/phone.png"
// @ts-ignore
import removeWaterSound from "../assets/remove-water-from-speaker-sound.mp3"
import { CheckCircle } from "lucide-react"
import { Button } from "./ui/button"

export function DrawerExemplo({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [progress, setProgress] = useState<number>(0)
  const [completed, setCompleted] = useState<boolean>(false) // Definindo a variável completed
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleClick = () => {
    const duration = 120000
    const intervalTime = 50
    const steps = duration / intervalTime

    let currentStep = 0

    const audio = new Audio(removeWaterSound)
    audioRef.current = audio
    audio.play()

    const id = window.setInterval(() => {
      if (currentStep < steps) {
        currentStep++
        const newProgress = (currentStep / steps) * 100
        setProgress(newProgress)
      } else {
        clearInterval(id)
        setCompleted(true) // Atualizando o estado completed para true
        if (audioRef.current) {
          audioRef.current.pause()
        }
      }
    }, intervalTime)
    setIntervalId(id)
  }

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setProgress(0)
      setCompleted(false) // Atualizando o estado completed para false
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent className="h-[99vh] w-full max-h-[1280px]">
          <div className="h-full w-full flex flex-col max-w-2xl mx-auto">
            <DrawerHeader className="flex flex-col items-center">
              {completed ? (
                <>
                  <DrawerTitle className="text-green-500 text-3xl">
                    Remoção de água finalizada
                  </DrawerTitle>
                </>
              ) : (
                <>
                  <DrawerTitle className="text-blue-500 text-xl">
                    Vamos começar a remover a água
                  </DrawerTitle>
                </>
              )}
              {/* <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription> */}
            </DrawerHeader>
            <div className="flex items-center w-full h-full">
              {completed ? (
                <>
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <CheckCircle className="text-green-500 animate-bounce" />
                    <div className="flex flex-col items-center p-12">
                      <strong className="text-5xl text-green-500 text-center font-bold underline underline-offset-2">
                        100%
                      </strong>
                      <span className="text-2xl text-green-500">Completo</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center mt-8 h-full justify-between">
                  <div className="flex flex-col w-full items-center justify-center h-full gap-8 p-2">
                    <h2 className="text-2xl text-blue-500 text-center">
                      Para um melhor resultado, coloque seu telefone em uma{" "}
                      <strong>superfície plana</strong>
                    </h2>
                    <Image src={Phone} alt="" width={200} className="" />
                  </div>
                  {/*  */}
                  <div className="flex items-end justify-between w-full p-4">
                    {progress ? (
                      <>
                        <span className="font-medium text-3xl text-blue-400">
                          Removendo água...
                        </span>
                        <span className="font-bold text-5xl text-blue-500">
                          {Math.round(progress)}%
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-medium text-3xl text-blue-400">
                          Vamos começar?
                        </span>
                        <span className="font-bold text-5xl text-blue-500">
                          💦
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <DrawerFooter>
              {completed ? (
                <>
                  <div className="flex items-center gap-2">
                    <DrawerClose>
                      <Button
                        className="w-24 rounded-xl"
                        variant={"secondary"}
                        onClick={handleStop}
                      >
                        Fechar
                      </Button>
                    </DrawerClose>

                    <DrawerClose className="flex-1 w-full">
                      <Button
                        className="flex-1 w-full rounded-xl bg-green-500 hover:bg-green-700 gap-4 items-center"
                        onClick={handleStop}
                      >
                        Finalizado
                        <CheckCircle className="" size={18} />
                      </Button>
                    </DrawerClose>
                    {/* <Button className="flex-1 rounded-xl bg-blue-500 hover:bg-blue-700">
                      Deseja testar o som?
                    </Button> */}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <DrawerClose>
                      <Button
                        className="w-24 rounded-xl"
                        variant={"secondary"}
                        onClick={handleStop}
                      >
                        Fechar
                      </Button>
                    </DrawerClose>
                    {progress ? (
                      <Button
                        className="flex-1 rounded-xl bg-red-500 hover:bg-red-700"
                        onClick={handleStop}
                      >
                        Parar
                      </Button>
                    ) : (
                      <Button
                        className="flex-1 bg-blue-500 hover:bg-blue-700 rounded-xl"
                        onClick={handleClick}
                      >
                        Iniciar
                      </Button>
                    )}
                  </div>
                </>
              )}
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
