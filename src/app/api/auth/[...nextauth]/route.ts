import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const options: NextAuthOptions ={
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    
    callbacks: {
        async jwt({ token, account }) {
          if (account) {
            token.accessToken = account.access_token;
          }
          return token;
        },
      },

    secret: 'IamVeryHandsome'
    // pages: {
    //   signIn: '/auth/signin',
    //   error: '/auth/error'
    // },
    // debug: true,

}


const handler = NextAuth(options)

export {handler as GET, handler as POST}