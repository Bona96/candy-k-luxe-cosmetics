//Component inspired by Kevin Levron:
//https://x.com/soju22/status/1858925191671271801
  
import Ballpit from '../assets/3d/Ballpit.tsx'

const Hero = () => {
    return (
        <div
            className='min-h-screen w-full overflow-hidden'
        >
            <Ballpit
                count={100}
                gravity={0.01}
                friction={0.9975}
                wallBounce={0.95}
                followCursor={false}
            />
        </div>
    )
}

export default Hero
