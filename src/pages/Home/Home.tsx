import Cryptonews from '@components/Cryptonews/Cryptonews'
import Googlenews from '@components/Google/Googlenews'
import Recentnews from '@components/Recentnews/Recentnews'
import Herosection from '@components/hero/Herosection'


const Home = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto p-3 '>
                <Herosection />
                <Recentnews />
                <Cryptonews />
                <Googlenews />
            </div>
        </>
    )
}

export default Home