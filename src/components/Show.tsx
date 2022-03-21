export interface ShowProps<T = unknown> {
  when: T | undefined | null | boolean;
  fallback?: React.ReactNode;
  element?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Show({ when, fallback, element, children }: ShowProps) {
  return <>{when ? element ?? children : fallback}</>;
}
