import type { ProjectData } from '../components/ProjectCard';
import seaVagabondCover from '../assets/sea-vagabond-cover.jpg';
// import video0119 from '../assets/0119.mp4';

// Extended interface to include ID and specific assets
export interface Project extends ProjectData {
    id: string;
    gameplayVideo?: string;
}

export const projects: Project[] = [
    {
        id: "sea-vagabond",
        title: "SeaVagabond",
        role: "Lead Gameplay Programmer for Level 1",
        description: "An open-world pirate adventure game built with Unity, featuring dynamic weather systems and naval combat.",
        image: seaVagabondCover,
        headline: "Sea Vagabond: An Unfinished Legacy",
        team: [
            "Cao Ziyu",
            "Ellen Louise",
            "Gunawan Nelsen Keane",
            "Aidyn Sartayeva",
            "Tando Jocelyne Audrey",
            "Wilyman Howard"
        ],
        modalDescription: "Born into a long lineage of pirates, the journey begins with an inherited mystery. Sea Vagabond follows a protagonist who carries his father’s blood and an unfinished legacy—a mysterious stone and a map leading to a legendary treasure. Players must navigate treacherous waters to uncover two remaining stones and claim their place in pirate history.",
        fullDescription: "As the Lead Gameplay Programmer for Level 1, my focus was on creating a seamless and immersive introduction to the world through interactive storytelling and robust combat mechanics.",
        contentSections: [
            {
                title: "Interactive Systems & Storytelling",
                items: [
                    { title: "Cinematic Cutscenes", description: "Designed and implemented the cutscene sequences that establish the game's narrative tone and \"Unfinished Legacy\" theme." },
                    { title: "Interactive Narrative", description: "Focused on interactive storytelling techniques to ensure players feel emotionally connected to the protagonist's journey from the opening moments." },
                    { title: "Loading Mechanism", description: "Developed a custom loading screen system to maintain immersion and ensure smooth transitions between the menu and the gameplay environment." }
                ]
            },
            {
                title: "Combat & Gameplay Mechanics",
                items: [
                    { title: "Level 1 Mechanics", description: "Architected the foundational gameplay systems for the opening level, ensuring a balanced introduction to the game's world." },
                    { title: "Pirate Combat System", description: "Engineered the core combat mechanics for engagements with pirate enemies, focusing on responsive controls and tactical depth." },
                    { title: "Enemy AI", description: "Utilized advanced AI behavior trees to create challenging combat encounters that require players to master the level's mechanics." }
                ]
            },
            {
                title: "Key Project Features",
                items: [
                    { title: "Theme", description: "An open-world pirate adventure featuring a high-contrast, cinematic atmosphere." },
                    { title: "Goal", description: "Navigate treacherous waters to recover mysterious stones and fulfill a father's unfinished legacy." },
                    { title: "Technical Excellence", description: "Pushing the boundaries of real-time rendering through custom Unity shaders and interactive systems." }
                ]
            }
        ],
        // Replace this with your Google Drive "preview" link (e.g. https://drive.google.com/file/d/YOUR_ID/preview)
        gameplayVideo: "https://drive.google.com/file/d/1GBiW63VIe4hHN-aY2zrJs3In8eo6ByBW/view?usp=sharing",
        tags: [
            { icon: "deployed_code", label: "Unity" },
            { icon: "sailing", label: "Adventure" },
            { icon: "water_drop", label: "Water VFX" }
        ]
    },
    {
        id: "neon-odyssey",
        title: "Neon Odyssey",
        role: "Lead Gameplay Programmer",
        description: "Designed the core locomotion system and AI navigation mesh for a sprawling open-world environment.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqh9_n_m6llRbwFgehJSD7ehEwTRPN73UxOl9Ezlf_NDvMnoKbefkNe1MCgQpLJ2cwieHfd6kreF-Pf0Okj4zWMOMqWclwg7FiauHxhj2kXopQWE3rTvuB9e5yoLZESmFeTCffLHVzC8SA800xrIuic0eJAI8MlQ2bi5XDrk3za0VrUOSabKuDfgi-n9YYNazD9Y5O2ahMG9wPjNeFYNU0khbI_BDQUG1UjwYhAdiuLaecsW0O9SGm2JyS84Ov_qL-rSRWiTYtsLw",
        tags: [
            { icon: "videogame_asset", label: "Unreal Engine 5" },
            { icon: "code", label: "C++" },
            { icon: "hub", label: "Multiplayer" }
        ]
    },
    {
        id: "void-walker",
        title: "Void Walker",
        role: "Senior AI Engineer",
        description: "Implemented behavior trees for enemy combatants and stealth mechanics.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkuV5ilBbi72hghLIVElmQ0fzo5teU7FG0FpxxMrA72IHYqjqV70NLWDCZV-Ii9yYKIsO2F6rBpDvBDSrT_TJbjj0o5rXHR15N4bx-1YG16pJ03PAFck0X8nuVlaRY6mCOUEswtvBxHdq6jystHwnuuW-aeF02yWLd8iDnFmgj0iCAhou3HcUaZhep_xqxJhy_0QugVkWZNty3aNxSsqMq9dqxKr74_ABFWs7j1o85baKUG4m_MOlll_gSTu5CcxjjXAofIhyu5D4",
        tags: [
            { icon: "deployed_code", label: "Unity" },
            { icon: "terminal", label: "C#" }
        ]
    },
    {
        id: "aethelgard",
        title: "Aethelgard",
        role: "Technical Artist",
        description: "Created custom shaders for magic effects and optimized rendering pipeline for console.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3ZwZdoETPkoqB_HoEe-6f3XoMEkCKmnt6Yrz8EL2lz_Mtpm1mxdY7eSwJ0-J6PTanSHYa7Vnu8F-xkMxpY314b60dKUshEN_MBBpwAGa75ZpyKk3SZNwiiinu6gRWEoFpKeVE2E14kKBeolu_hiIBgV8V1K53yAAQ0D5obaZPIj-HPbEdEsUF63XCrSQgIaDWTifnMXNH6vk9wx99TRCmdFNdlOD1ecNxht7IMQ-vqPqU6lSbz1aaoN-iRlri5E9NePyg2YJvskg",
        tags: [
            { icon: "videogame_asset", label: "Unreal Engine" },
            { icon: "brush", label: "HLSL" },
            { icon: "stadia_controller", label: "Console" }
        ]
    },
    {
        id: "hypergrid-vr",
        title: "HyperGrid VR",
        role: "Solo Developer",
        description: "An experimental VR puzzle game focused on non-euclidean geometry.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIE-kQx4YrzGgc6RnMbhb9x-cy9dhy3EDyaF804IkXfubV7oTDGrStKZz8RERSpGDbC9tBsvMgyp9fs6w4wGjXDmx737ZMvRL23QRWlOBKnfht5_oTbyQ-8QeWrkOfLccpd4KJzTtIaUmOSEaALgYb3-StkPkmnhSAuEThJGcO58_BBvx-zOGWXe8poW7ukKp_XTOl3bYRcGrHFFDVdRhxpedGL9VCc-FxHiAa5I5xCyFneZ5RGPRugPw6lPNRibsetoxE9Ii9rTM",
        tags: [
            { icon: "deployed_code", label: "Unity" },
            { icon: "view_in_ar", label: "VR" }
        ]
    },
    {
        id: "pixel-souls",
        title: "Pixel Souls",
        role: "Gameplay Programmer",
        description: "Developed the combat state machine and inventory system for this 2D action RPG.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1cVD1A2QkaWVFVwf7zgyYaDkbhNbjk1U5602pCaA9-XpQ0CBMX58QpHxLa3u1lITwUpJkLOJDb0ZjuxSRDu23eKv42pviVX-sdfDXe6vLNXxfFdkInNn5Q6dXb_rPeIKhUKSgVdoMUftgXaQP56IikhMtc4zhnAtqy8__C-dY_M_bIjnWI2sxA376bud0Hu4rsDkXMt9q3iND0k18bGIIMTXf3X0ctjlldWQBtJxXg9t5U6tjgNiCooPJUkKQMMEfNhX-wj1oGg",
        tags: [
            { icon: "smart_toy", label: "Godot" },
            { icon: "smartphone", label: "Mobile" }
        ]
    },
    {
        id: "command-core",
        title: "Command Core",
        role: "Network Engineer",
        description: "Built the deterministic lockstep networking model for real-time multiplayer battles.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzpPW4v988KG-sbxr8ulxXKFEmF3QPF_h7NRAe8Wmnn2vL8ixrYgfoCkYqof7gRuFuzKu5_MEh-DyBtSv2qXXjeKDITfM13GY8I1tofkF7IvFXHNK4wSbGsMtta4ghukmWS8Zr2JxlhrQ77ZknJNT6_oZT-9IUHEIux6WH1FVVynlJH4w8SrK1JA5P6S5DNwepZZHzIrHdzt2UYcs5gRfaYYJhVeRBMiDfcvNrvOQeTzSPlL3gWYnpANDOD0RIv-rRM9XLvkkQCpI",
        tags: [
            { icon: "construction", label: "Custom Engine" },
            { icon: "code", label: "C++" },
            { icon: "desktop_windows", label: "PC" }
        ]
    }
];
