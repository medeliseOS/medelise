/**
 * ═══════════════════════════════════════════════════════════════
 * MEDELISE — useApplicationForm Hook
 * ═══════════════════════════════════════════════════════════════
 *
 * Extracted from ApplicationFormContent.tsx (1,079 lines).
 * Contains ALL business logic:
 *   • Form status management
 *   • CV file upload with drag-and-drop
 *   • File validation (type + size)
 *   • Form submission with honeypot anti-spam
 *   • Utility helpers (formatSize)
 *
 * The component becomes a thin JSX shell.
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { getJobBySlug } from '@services/cariera.service';
import { submitApplication } from '@services/cariera.service';
import { ACCEPTED_TYPES, MAX_FILE_SIZE, type FormStatus } from '../types';
import type { JobDetail } from '@features/cariera/types';

export function useApplicationForm(slug: string) {
    const [job, setJob] = useState<JobDetail | undefined>(undefined);
    const jobTitle = job?.title ?? slug
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    useEffect(() => {
        getJobBySlug(slug).then(setJob);
    }, [slug]);

    /* ── State ── */
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [cvError, setCvError] = useState('');
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    /* ── File validation ── */
    const validateFile = useCallback((file: File): boolean => {
        if (!(ACCEPTED_TYPES as readonly string[]).includes(file.type)) {
            setCvError('Format invalid. Acceptăm doar PDF, DOC sau DOCX.');
            return false;
        }
        if (file.size > MAX_FILE_SIZE) {
            setCvError('Fișierul depășește limita de 5 MB.');
            return false;
        }
        setCvError('');
        return true;
    }, []);

    /* ── File handlers ── */
    const handleFileChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file && validateFile(file)) {
                setCvFile(file);
            }
        },
        [validateFile]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file && validateFile(file)) {
                setCvFile(file);
            }
        },
        [validateFile]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragOver(false);
    }, []);

    const removeCv = useCallback(() => {
        setCvFile(null);
        setCvError('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    }, []);

    /* ── Submit ── */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot anti-spam
        if (formData.get('website')) return;

        // Validate CV is attached
        if (!cvFile) {
            setCvError('Te rugăm să atașezi CV-ul.');
            return;
        }

        setFormStatus('sending');

        try {
            // Append CV file
            formData.append('cv', cvFile);
            formData.append('pozitie', jobTitle);
            formData.append('slug', slug);

            await submitApplication(formData);

            setFormStatus('sent');
            form.reset();
            setCvFile(null);
        } catch {
            setFormStatus('error');
        }
    };

    /* ── Utility ── */
    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return {
        /* Data */
        job,
        jobTitle,
        formStatus,
        cvFile,
        cvError,
        isDragOver,
        fileInputRef,

        /* Handlers */
        handleFileChange,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        removeCv,
        handleSubmit,

        /* Utils */
        formatSize,
    };
}
