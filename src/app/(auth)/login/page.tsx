import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoginAction from "./_actions/login"

export default function Login() {
  return (
    <div className="bg-zinc-950 h-screen flex items-center justify-center ">
      <Card className="mx-250 max-w-sm w-96 dark bg-card border shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-zinc-100">Login</CardTitle>
          <CardDescription>
            Olá! Faça seu login para acessar o sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={LoginAction}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label className="text-zinc-100" htmlFor="email">Email</Label>
                <Input
                  className="text-zinc-300"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className="text-zinc-100" htmlFor="password">Password</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Esqueceu sua senha?
                  </Link>
                </div>
                <Input 
                  className="text-zinc-300" 
                  id="password" 
                  name="password"
                  type="password" 
                  required 
                />
              </div>
              <Button variant="secondary" type="submit" className="w-full">
                Login
              </Button>
              <Button className="w-full">
                Login com Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Não possue uma conta?{" "}
            <Link href={"/register"} className="underline">
              Cadastrar-se
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
