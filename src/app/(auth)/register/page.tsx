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

import register from "../register/_actions/register"

import { Toaster } from "@/components/ui/toaster"

export default function Register() {
  return (
    <div className="bg-zinc-950 h-screen flex items-center justify-center ">
      <Card className="mx-250 max-w-sm w-96 dark bg-card border shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-zinc-100">Cadastrar-se</CardTitle>
          <CardDescription>
            Olá! Bem vindo, faça seu cadastro para acessar o sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          
          <form action={register}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label className="text-zinc-100" htmlFor="email">Name</Label>
                <Input
                  className="text-zinc-300"
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Insira seu nome"
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-zinc-100" htmlFor="email">Email</Label>
                <Input
                  className="text-zinc-300"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className="text-zinc-100" htmlFor="password">Password</Label>
                </div>
                <Input
                  className="text-zinc-300"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <Button variant="secondary" type="submit" className="w-full">
                Cadastrar
              </Button>
              <Button className="w-full">
                Cadastrar-se com Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Eu já possuo uma conta?{" "}
            <Link href={"/login"} className="underline">
              Fazer login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
