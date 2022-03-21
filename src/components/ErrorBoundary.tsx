import { Component } from "react";

export interface ErrorBoundaryProps {
  fallback: React.FC<FallbackProps>;
  children?: React.ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
  onResetError?: () => void;
}

export interface FallbackProps {
  error: Error;
  onResetError?: () => void;
}

export interface ErrorBoundaryState {
  error: Error | null;
}

const initialState: ErrorBoundaryState = {
  error: null,
};

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
  }

  onResetError = () => {
    this.setState(initialState, () => {
      this.props.onResetError?.();
    });
  };

  render() {
    const { error } = this.state;
    const { fallback: Fallback } = this.props;

    if (error) {
      return <Fallback error={error} onResetError={this.onResetError} />;
    }
    return this.props.children;
  }
}
