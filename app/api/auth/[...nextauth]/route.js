import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

console.log({
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET
})
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session ({session}){

    },
    async signIn ({profile}){

    },
})

export {handler as GER, handler as POST }

