import  { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-10 right-10 z-10">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Scroll to top"
                >
                    <FaArrowCircleUp size={28} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;

