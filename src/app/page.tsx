import { BackgroundLines } from '@/components/ui/background-lines'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-zinc-950 -z-50 dark">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-50 dark:from-neutral-300 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Using nextAuth, <br /> Providers for authentication.
        </h2>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <Button className="z-10 font-bold">
            <Link href={'/api/auth/signin'}>Login Simples</Link>
          </Button>
          <Button className="z-10 font-bold">
            Login - Server Components
          </Button>
          <Button className="z-10 font-bold">
            Login - Client Components
          </Button>
          <Button className="z-10 font-bold">
            Login com Github
          </Button>
          <Button className="z-10 font-bold">
            Login com email
          </Button>
        </div>
      </BackgroundLines>
    </>
  )
}
