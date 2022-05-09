export interface ForProps<T> {
  each: T[];
  fallback?: JSX.Element;
  children?: (item: T, index: number) => JSX.Element;
}

export default function For<T>({ each, fallback, children }: ForProps<T>) {
  if (each.length === 0) {
    return fallback;
  }

  return <>{each.map((item, index) => children?.(item, index))}</>;
}
