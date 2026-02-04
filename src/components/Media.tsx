import CircularGallery from '../assets/3d/CircularGallery'
import { threeDGalleryItems } from '../assets/constants'

const Media = () => {
    return (
        <div id="gallery" style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
                items={threeDGalleryItems}
                textColor="#ffffff" 
                borderRadius={0.05}
                bend={1}
                scrollSpeed={2}
                scrollEase={0.05}
            />
        </div>
    )
}

export default Media
