'use client';

import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error at GlobalErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
                    <h1 style={{ color: '#d32f2f' }}>A apărut o eroare neașteptată.</h1>
                    <p style={{ color: '#555' }}>Vă rugăm să reîncărcați pagina sau să contactați suportul.</p>
                    <button 
                        onClick={() => window.location.reload()}
                        style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer', background: '#213170', color: 'white', border: 'none', borderRadius: '4px' }}
                    >
                        Reîncarcă Pagina
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
