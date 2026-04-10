export type PerformanceTier = 'high' | 'medium' | 'low';

export function getPerformanceTier(): PerformanceTier {
  if (typeof window === 'undefined') return 'medium';
  
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  
  if (hardwareConcurrency >= 8) {
    return 'high';
  } else if (hardwareConcurrency >= 4) {
    return 'medium';
  }
  return 'low';
}
