/**
 * Configuration loader and validator
 * Ensures data integrity throughout the application
 */

import { portfolioConfig } from '../../config/portfolio.config';
import { PortfolioConfig } from '../types/portfolio.types';

/**
 * Get portfolio configuration
 * Single source of truth for all data
 */
export const getPortfolioConfig = (): PortfolioConfig => {
  return portfolioConfig;
};

/**
 * Validate configuration structure
 * Throws error if required fields are missing
 */
export const validateConfig = (config: PortfolioConfig): boolean => {
  if (!config.personal.name) throw new Error('Name is required');
  if (!config.professionalSummary) throw new Error('Professional summary is required');
  if (!config.experience || config.experience.length === 0) {
    throw new Error('At least one experience entry is required');
  }
  return true;
};
