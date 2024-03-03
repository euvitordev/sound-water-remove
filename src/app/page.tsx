import { Header } from "@/components/header"
import { MainSession } from "@/components/main-session"

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full">
      <Header />
      <MainSession />
    </main>
  )
}
