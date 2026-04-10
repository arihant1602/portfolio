export type SkillNode = {
  id: string;
  label: string;
  category: 'offensive' | 'defensive' | 'AI' | 'cloud';
  proficiency: number;
  connected_to: string[];
};

export const skills: SkillNode[] = [
  { id: 'n1', label: 'Penetration Testing', category: 'offensive', proficiency: 90, connected_to: ['n2', 'n4'] },
  { id: 'n2', label: 'Vulnerability Analysis', category: 'defensive', proficiency: 85, connected_to: ['n1', 'n3'] },
  { id: 'n3', label: 'Machine Learning', category: 'AI', proficiency: 80, connected_to: ['n2', 'n5'] },
  { id: 'n4', label: 'Cloud Security', category: 'cloud', proficiency: 75, connected_to: ['n1', 'n5'] },
  { id: 'n5', label: 'Incident Response', category: 'defensive', proficiency: 88, connected_to: ['n3', 'n4'] }
];
