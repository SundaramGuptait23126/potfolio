import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const starContainerRef = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Parallax effect: inner layers move slower
            if (layer1Ref.current) {
                layer1Ref.current.style.transform = `translateY(-${scrollY * 0.1}px)`;
            }
            if (layer2Ref.current) {
                layer2Ref.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
            }
            if (layer3Ref.current) {
                layer3Ref.current.style.transform = `translateY(-${scrollY * 0.6}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to generate random stars
    const generateStars = (count, sizeClass) => {
        return Array.from({ length: count }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 200}%`, // Extend beyond 100vh so they scroll up
                animationDelay: `${Math.random() * 3}s`
            };
            return <div key={i} className={`star ${sizeClass}`} style={style} />;
        });
    };

    return (
        <div className="star-background" ref={starContainerRef}>
            <div className="star-layer layer-1" ref={layer1Ref}>
                {generateStars(150, 'star-small')}
            </div>
            <div className="star-layer layer-2" ref={layer2Ref}>
                {generateStars(75, 'star-medium')}
            </div>
            <div className="star-layer layer-3" ref={layer3Ref}>
                {generateStars(25, 'star-large')}
            </div>
        </div>
    );
};

export default StarBackground;
