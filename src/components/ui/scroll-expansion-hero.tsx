import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

interface ScrollExpandMediaProps {
    mediaSrc: string;
    bgImageSrc: string;
    title?: string;
    date?: string;
    scrollToExpand?: string;
    textBlend?: boolean;
    children?: ReactNode;
    mediaType?: 'video' | 'image';
}

const ScrollExpandMedia = ({
    mediaSrc,
    bgImageSrc,
    title,
    date,
    scrollToExpand,
    textBlend,
    children,
    mediaType = 'image', // Default to image
}: ScrollExpandMediaProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Create a scroll track that is 3x the viewport height for plenty of scroll room
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (videoRef.current) {
            if (latest > 0.6) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    });

    // Animations based on scroll
    // 0 to 0.6: Expansion phase
    // 0.6 to 1.0: Content reveal phase

    // Media Size Expansion
    // Starts small (300px width) and grows to nearly full screen
    const widthStart = 300;
    // Dynamic calculation would be better, but fixed large value works for coverage
    const widthEnd = 2000;

    const heightStart = 400;
    const heightEnd = 1200;

    const width = useTransform(smoothProgress, [0, 0.6], [widthStart, widthEnd]);
    const height = useTransform(smoothProgress, [0, 0.6], [heightStart, heightEnd]);

    // Media Opacity/Overlay
    const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [0.7, 0]);

    // Background Opacity (fades out the initial BG as media expands)
    const bgOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    // Text Transforms
    const textTranslateX = useTransform(smoothProgress, [0, 0.4], [0, 200]);
    const textTranslateXNeg = useTransform(smoothProgress, [0, 0.4], [0, -200]);
    const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

    // Content Reveal (happens at the end)
    const contentOpacity = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.7, 0.9], [50, 0]);

    // Ensure content layer pointer events only active when visible
    const contentPointerEvents = useTransform(smoothProgress, (v) => v > 0.7 ? "auto" : "none");

    const firstWord = title ? title.split(' ')[0] : '';
    const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

    return (
        <div ref={sectionRef} className="relative h-[250vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Background Image (Initially visible, fades out) */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ opacity: bgOpacity }}
                >
                    <img
                        src={bgImageSrc}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                {/* Expanding Media Container */}
                <motion.div
                    className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        width,
                        height,
                        maxWidth: '95vw',
                        maxHeight: '90vh',
                    }}
                >
                    <div className="relative w-full h-full">
                        {mediaType === 'video' ? (
                            <video
                                ref={videoRef}
                                src={mediaSrc}
                                className="w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <img
                                src={mediaSrc}
                                alt={title || 'Media content'}
                                className="w-full h-full object-cover"
                            />
                        )}

                        {/* Dark Overlay that fades out */}
                        <motion.div
                            className="absolute inset-0 bg-black/50"
                            style={{ opacity: overlayOpacity }}
                        />

                        {/* Text inside the box (dates etc) */}
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-none"
                            style={{ opacity: textOpacity }}
                        >
                            <div className="mt-8"> {/* Push text down slightly */}
                                {date && (
                                    <motion.p
                                        className="text-2xl text-blue-200"
                                        style={{ x: textTranslateXNeg }}
                                    >
                                        {date}
                                    </motion.p>
                                )}
                                {scrollToExpand && (
                                    <motion.p
                                        className="text-blue-200 font-medium text-center mt-2"
                                        style={{ x: textTranslateX }}
                                    >
                                        {scrollToExpand}
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Large Title Text Overlay (Splits apart) */}
                <div className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'}`}>
                    <div className="flex flex-col items-center gap-2">
                        <motion.h2
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter"
                            style={{ x: textTranslateXNeg, opacity: textOpacity }}
                        >
                            {firstWord}
                        </motion.h2>
                        <motion.h2
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter"
                            style={{ x: textTranslateX, opacity: textOpacity }}
                        >
                            {restOfTitle}
                        </motion.h2>
                    </div>
                </div>

                {/* Revealed Content Section */}
                <motion.div
                    className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center justify-end pb-20 px-6 pointer-events-none"
                    style={{ opacity: contentOpacity, y: contentY, pointerEvents: contentPointerEvents as any }}
                >
                    <div className="max-w-4xl w-full bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 pointer-events-auto">
                        {children}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ScrollExpandMedia;
