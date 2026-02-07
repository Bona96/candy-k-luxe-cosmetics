import { motion } from 'framer-motion'
import { GlobalHeader } from '../components/parts/Headers'
import { FaX } from 'react-icons/fa6'
import { useGlobalContext } from '../contexts/GlobalContext'

const PrivacyPolicy = () => {

    const { setPrivacyPolicyModal } = useGlobalContext()
    const handleCloseModal = () => {
        console.log('clicked')
        setPrivacyPolicyModal(false)
        return
    }

    return (
        <motion.div className='backdrop-blur-sm fixed top-0 bg-primary/60 inset-0 z-999'>
            <div className='flex flex-col gap-5 items-center min-h-screen p-8'>
                <div className='rounded-xl text-white bg-secondary/80 max-w-2xl h-100 p-6'>
                    <div className='w-full'>
                        <GlobalHeader 
                            heading='Privacy Policy' 
                            icon={<FaX />} 
                            onClick={handleCloseModal}
                        />
                        
                    </div>
                    <p>
                        Candy K all rights reserved
                    </p>
                    <p>
                        Our policy handles customer data with care.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default PrivacyPolicy
