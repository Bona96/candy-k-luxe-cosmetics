import CircularGallery from '../assets/3d/CircularGallery'
import { CandyKPriceList, PesronWearingLipGloss, threeDGalleryItems } from '../assets/constants'
import { useDarkMode } from '../contexts/DarkModeContext'
import { GlobalImage } from './parts/Images'

const Media = () => {
    const { theme } = useDarkMode()
    const bend = 1
    console.log(theme)
    const galleryTextColor = theme === 'light' ? 'text-primary' : '#ffff'
    return (
        <section className=''>
            <div className="flex flex-row flex-wrap gap-10 items-center justify-center mb-5">
                <div>
                    <GlobalImage
                        src={CandyKPriceList}
                        alt={'Candy'}
                        animate={{ x: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="mt-4 rounded-xl w-70 md:w-80 lg:w-70 shadow-xl shadow-secondary"
                        page='media'
                    />
                </div>
                <div>
                    <GlobalImage
                        src={PesronWearingLipGloss}
                        alt={'Candy'}
                        animate={{ y: [50, 20, 50] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="mt-4 rounded-xl w-80 md:w-80 lg:w-70 shadow-xl shadow-secondary"
                        page='media'
                    />
                </div>
            </div>
            <div id="gallery" className='h-150 relative'>
                <CircularGallery
                    items={threeDGalleryItems}
                    textColor={galleryTextColor}
                    borderRadius={0.05}
                    bend={bend}
                    scrollSpeed={1.9}
                    scrollEase={0.05}
                />
            </div>
        </section>
        
    )
}

export default Media
