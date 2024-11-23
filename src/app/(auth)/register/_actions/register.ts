'use server'

// Usando função no lado server para cadastrar os novos usuários, está sendo disparado atraves das actions

import db from "@/lib/db"
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function register (formData : FormData){
  
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  if (!name || !email || !password) {
    throw new Error("Preencha todos os campos");
  }

  const userIsUnique = await db.user.findUnique({
    where: { email },
  });
  
  if (userIsUnique) {
    throw new Error("Usuário já cadastrado");
  }
  
  await db.user.create({
    data: {
      email,
      name,
      password: hashSync(password, 10),
    }
  })

  redirect('/')
}