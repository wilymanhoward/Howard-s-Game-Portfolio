import { useState, useEffect } from 'react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import unityEditorBg from '../assets/unity-editor.png';
import seaVagabondImg from '../assets/sea-vagabond.jpg';
import video0119 from '../assets/0119.mp4';

interface MediaAbout {
    overview: string;
    conclusion: string;
}

interface MediaContent {
    src: string;
    poster?: string;
    background: string;
    title: string;
    date: string;
    scrollToExpand: string;
    about: MediaAbout;
}

interface MediaContentCollection {
    [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
    video: {
        src: video0119,
        poster: seaVagabondImg,
        background: unityEditorBg,
        title: 'From logic to Life',
        date: '',
        scrollToExpand: '',
        about: {
            overview:
                "I specialize in transforming complex C# architectures into immersive, high-fidelity environments. Using Unity 3D and custom shader development, I bridge the gap between backend engineering and front-end artistic vision to create gameplay that resonates.",
            conclusion:
                "",
        },
    },
    image: {
        src: seaVagabondImg,
        background: unityEditorBg,
        title: 'From logic to Life',
        date: '',
        scrollToExpand: '',
        about: {
            overview:
                "I specialize in transforming complex C# architectures into immersive, high-fidelity environments. Using Unity 3D and custom shader development, I bridge the gap between backend engineering and front-end artistic vision to create gameplay that resonates.",
            conclusion:
                "",
        },
    },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
    const currentMedia = sampleMediaContent[mediaType];

    return (
        <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-6 text-white'>
                From Logic to Life
            </h2>
            <p className='text-lg mb-8 text-slate-200'>
                {currentMedia.about.overview}
            </p>

            <p className='text-lg mb-8 text-slate-200'>
                {currentMedia.about.conclusion}
            </p>
        </div>
    );
};

const Demo = () => {
    // Fixed to video mode as requested
    const mediaType = 'video';
    const currentMedia = sampleMediaContent[mediaType];

    return (
        <div className='relative bg-black'>
            <ScrollExpandMedia
                mediaSrc={currentMedia.src}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
                mediaType={mediaType}
            >
                <MediaContent mediaType={mediaType} />
            </ScrollExpandMedia>
        </div>
    );
};

export default Demo;
