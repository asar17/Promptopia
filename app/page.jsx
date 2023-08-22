import Feed from '@components/Feed'
const Home = () =>{
    return(
        <section className="w-full flex-col flex-center">
            <h1 className="head_text text-center"> Discover & Share 
                <br className="bg-yellow-200"/>
                <span className="orange_gradient text-center"> AI-Powerd Prompts </span>
            </h1>

            <p className="desc text-center">
                promptopia is an open-source AI prompting tool for modern word to discover, create and share creative prompts
            </p>

            <Feed/>
            

        </section>
    )
}
export default Home