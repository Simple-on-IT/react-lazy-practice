import { ErrorContent } from '@/shared/ui/ErrorContent/ErrorContent';
import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage?: string;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { 
            hasError: false,
            errorMessage: undefined,
        };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        this.setState({ errorMessage: error.message });
    }

    onCopy = () => {
        if (this.state.errorMessage) {
            navigator.clipboard.writeText(this.state.errorMessage)
                .then(() => console.log('Error copied to clipboard'))
                .catch(() => console.error('Failed to copy error'));
        }
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <ErrorContent onCopy={this.onCopy} />
            );
        }

        return children;
    }
}

export default ErrorBoundary;