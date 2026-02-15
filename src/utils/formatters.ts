/**
 * Utility functions for data formatting
 */

/**
 * Format phone number for display
 */
export const formatPhone = (phone: string): string => {
  return phone;
};

/**
 * Format email for display
 */
export const formatEmail = (email: string): string => {
  return email;
};

/**
 * Extract domain from URL
 */
export const extractDomain = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
