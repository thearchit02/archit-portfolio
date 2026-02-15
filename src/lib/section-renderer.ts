/**
 * Conditional section rendering logic
 * Sections only render if data exists
 */

/**
 * Determines if a section should be rendered based on data presence
 */
export const shouldRenderSection = (data: any): boolean => {
  if (data === null || data === undefined) return false;
  if (typeof data === 'string' && data.trim() === '') return false;
  if (Array.isArray(data) && data.length === 0) return false;
  if (typeof data === 'object' && Object.keys(data).length === 0) return false;
  return true;
};

/**
 * Filter experience bullets based on resume rules
 */
export const filterExperienceBullets = (
  bullets: string[],
  maxBullets: number
): string[] => {
  if (maxBullets === -1) return bullets;
  return bullets.slice(0, maxBullets);
};

/**
 * Filter project details based on resume rules
 */
export const filterProjectDetails = (
  details: string[],
  maxDetails: number
): string[] => {
  if (maxDetails === -1) return details;
  return details.slice(0, maxDetails);
};
