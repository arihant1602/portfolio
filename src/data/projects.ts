export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  color: string;
  threat_level: number;
};

export const projects: Project[] = [
  { id: '1', title: 'BreachWatch', description: 'Dark web exposure monitor', tags: ['Python', 'AI', 'React'], githubUrl: '#', liveUrl: '#', color: '#00ff9d', threat_level: 8 },
  { id: '2', title: 'BindTox', description: 'Toxicity prediction model', tags: ['ML', 'Cheminformatics'], githubUrl: '#', liveUrl: '#', color: '#ff2d55', threat_level: 9 },
  { id: '3', title: 'NetScanner', description: 'Network vulnerability scanner', tags: ['Rust', 'Networking'], githubUrl: '#', liveUrl: '#', color: '#00d4ff', threat_level: 7 },
  { id: '4', title: 'Phantom', description: 'Stealth malware analysis sandbox', tags: ['C++', 'Virtualization'], githubUrl: '#', liveUrl: '#', color: '#1a1a2e', threat_level: 10 }
];
