export interface FloatingIconConfig {
  name: string;
  src: string;
  xOffset: number; // Offset coordinates relative to center (0,0) in px
  yOffset: number;
  size?: number; // size in px
  jellyFactor: number; // sensitivity multiplier for spring motion
}

// 8 icons distributed across 3 orbits:
// 1st Orbit (Inner, r=350px): 1 Left, 1 Right
// 2nd Orbit (Middle, r=450px): 2 Left (top & bottom), 2 Right (top & bottom)
// 3rd Orbit (Outer, r=550px): 1 Left, 1 Right
export const JELLY_ICONS: FloatingIconConfig[] = [
  // 1st Orbit (Inner Ring, diameter 700px, radius 350px)
  {
    name: "Miro",
    src: "/animatedSection/6a58a6a2cb044ee3817c8f32_Frame 2147238892 1.png",
    xOffset: -350,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.2,
  },
  {
    name: "Sketch",
    src: "/animatedSection/Group 1707480799.png",
    xOffset: 350,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.2,
  },

  // 2nd Orbit (Middle Ring, diameter 900px, radius 450px)
  {
    name: "Framer",
    src: "/animatedSection/Group 1707480794.png",
    xOffset: -390,
    yOffset: -225,
    size: 50,
    jellyFactor: 1.05,
  },
  {
    name: "Anthropic",
    src: "/animatedSection/Group 1707480800.png",
    xOffset: -390,
    yOffset: 225,
    size: 50,
    jellyFactor: 1.15,
  },
  {
    name: "Webflow",
    src: "/animatedSection/Group 1707480801.png",
    xOffset: 390,
    yOffset: -225,
    size: 50,
    jellyFactor: 1.1,
  },
  {
    name: "Figma",
    src: "/animatedSection/6a58a73bd7b7e03d4a590269_Frame 2147238891 1.png",
    xOffset: 390,
    yOffset: 225,
    size: 50,
    jellyFactor: 1.05,
  },

  // 3rd Orbit (Outer Ring, diameter 1100px, radius 550px)
  {
    name: "Fi",
    src: "/animatedSection/6a58a76f75452fd285b8ab73_Frame 2147238888 (1) 1.png",
    xOffset: -550,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.25,
  },
  {
    name: "Supabase",
    src: "/animatedSection/6a58a80e4ee26d41bf4dd8a6_Frame 2147238892 (2) 1.png",
    xOffset: 550,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.1,
  },
];
