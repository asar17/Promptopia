import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title : 'Promtopia',
    description : 'Discover & Share Ai'
}

export default function RootLayout ({children}){
    return(
        <html lang="en">
            <body>
                <Provider>
                    <div class="main">
                        <div className="gradient"/>
                    </div>
                    <main className="app">
                        <Nav/>
                        {children}
                    </main>
                </Provider>
            </body>

        </html>
    )

}