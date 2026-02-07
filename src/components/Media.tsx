import CircularGallery from '../assets/3d/CircularGallery'
import { CandyKPriceList, PesronWearingLipGloss, threeDGalleryItems } from '../assets/constants'
import { GlobalImage } from './parts/Images'

const Media = () => {
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
                    textColor="#ffffff" 
                    borderRadius={0.05}
                    bend={3}
                    scrollSpeed={1.9}
                    scrollEase={0.05}
                />
            </div>
        </section>
        
    )
}

export default Media
