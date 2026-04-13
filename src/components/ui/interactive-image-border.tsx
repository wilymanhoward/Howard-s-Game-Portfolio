import React, { useRef, useState } from 'react';

interface InteractiveImageBorderProps {
    children: React.ReactNode;
    className?: string;
    borderWidth?: number;
}

export const InteractiveImageBorder = ({
    children,
    className = "",
    borderWidth = 2
}: InteractiveImageBorderProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative group rounded-2xl ${className}`}
            style={{ padding: `${borderWidth}px` }} // Reserve space for the border
        >
            {/* 1. Moving Spotlight Gradient (masked to border area) */}
            <div
                className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
                style={{
                    opacity,
                    transition: 'opacity 0.3s ease',
                    background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(13, 89, 242, 1), transparent 80%)`,

                    // Mask logic: Show background ONLY in the border area
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',

                    // Webkit prefix for compatibility
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',

                    padding: `${borderWidth}px`
                }}
            />

            {/* 2. Static Border (dim) */}
            {/* 2. Static Border (Elegant Layering) */}
            <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl border border-white/5 shadow-inner" />
            <div className="pointer-events-none absolute -inset-[1px] z-0 rounded-2xl border border-white/10 opacity-50" />

            {/* Elegant Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl pointer-events-none z-30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl pointer-events-none z-30"></div>

            {/* 3. Content */}
            <div className="relative z-20 w-full h-full rounded-xl overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default InteractiveImageBorder;
