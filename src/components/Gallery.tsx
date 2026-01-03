import { useState } from 'react';
import mobileHero from '../assets/mobile-image-hero-1.jpg';
import hero2 from '../assets/mobile-image-hero-2.jpg';
import hero3 from '../assets/mobile-image-hero-3.jpg';
import angleLeftIcon from '../assets/icon-angle-left.svg';
import angleRightIcon from '../assets/icon-angle-right.svg';
import arrowIcon from '../assets/icon-arrow.svg';

export const Gallery = () => {
    const images = [mobileHero, hero2, hero3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="gallery">
            <div className="gallery--displayed">
                <img src={images[currentIndex]} alt="Displayed artwork" />
                <div className="switchButton">
                    <div className="switchButton--left" onClick={handlePrevious} style={{ cursor: 'pointer' }}>
                        <img src={angleLeftIcon} alt="Left angle icon" />
                    </div>
                    <div className="switchButton--right" onClick={handleNext} style={{ cursor: 'pointer' }}>
                        <img src={angleRightIcon} alt="Right angle icon" />
                    </div>
                </div>
            </div>
            <div className="gallery--info">
                <h1>Discover innovative ways to decorate</h1>
                <p>
                    We provide unmatched quality, comfort, 
                    and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. 
                    Create a room in your own style with our collection and 
                    make your property a reflection of you and what you love.
                </p>
                <button className='shopNow'>
                        <p>SHOP NOW</p>
                        <img src={arrowIcon} alt="Arrow icon" />
                </button>
            </div>
        </div>
    );
}