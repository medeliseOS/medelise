/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — Cariera (Jobs) Service Adapter
 * ═══════════════════════════════════════════════════════════════
 *
 * Adapter Pattern: currently returns static data from
 * features/cariera/data/jobData.ts.
 */

import { JOBS, JOB_SLUGS } from '@features/cariera/data/jobData';
import type { JobDetail } from '@features/cariera/types';
// import { apiClient } from './api/client';
// import { ENDPOINTS } from './api/endpoints';

/**
 * Fetch all available jobs.
 * Phase 2: `return apiClient.get<Record<string, JobDetail>>(ENDPOINTS.CARIERA.JOBS);`
 */
export async function getJobs(): Promise<Record<string, JobDetail>> {
    return JOBS;
}

/**
 * Fetch a single job by slug.
 * Phase 2: `return apiClient.get<JobDetail>(ENDPOINTS.CARIERA.JOB_BY_SLUG(slug));`
 */
export async function getJobBySlug(slug: string): Promise<JobDetail | undefined> {
    return JOBS[slug];
}

/**
 * Get all available job slugs (for generateStaticParams).
 */
export async function getJobSlugs(): Promise<string[]> {
    return JOB_SLUGS;
}

/**
 * Submit a job application.
 * Phase 1: simulates network delay.
 * Phase 2: `return apiClient.post(ENDPOINTS.CARIERA.APPLY, formData);`
 */
export async function submitApplication(formData: FormData): Promise<{ success: boolean }> {
    // TODO: Replace with actual API call
    // return apiClient.post(ENDPOINTS.CARIERA.APPLY, formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true };
}
