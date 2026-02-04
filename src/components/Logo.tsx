import { useDarkMode } from '../contexts/DarkModeContext';
import { DarkModeLogo } from '../assets/constants';

const Logo = () => {
    const { theme } = useDarkMode();
  return (
        <div className="flex items-center gap-3">
            {/* Logo Image */}
            <a 
                className="h-20 p-1 w-auto overflow-hidden"
                href='#hero'
            >
                {theme === 'dark' ? (
                    <img src={DarkModeLogo} alt="Candy K Luxe" className="h-full bg-gray-200 p-1 rounded-full shadow-md shadow-pink-500 w-auto object-contain animate-in fade-in duration-500" />
                ) : (
                    <img src={DarkModeLogo} alt="Candy K Luxe" className="h-full w-auto object-cover animate-in fade-in duration-500" />
                )}
            </a>
        </div>
  )
}

export default Logo
