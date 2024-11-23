import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// export const {handlers, signIn, signOut, auth} = NextAuth({
//   providers: [Credentials]
// })

export const {
  handlers: {GET, POST},
  auth,
} = NextAuth({
  providers: [Credentials({
    credentials: {
      username: {},
      password: {}
    },
    authorize(credentials){
      if(credentials.username === 'admin' && credentials.password === 'admin'){
        return {name: credentials.username, email: credentials.password}
      }else {
        return null
      }
    }
  })],
});