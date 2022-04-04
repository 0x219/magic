export interface ForProps<T, U extends JSX.Element> {
  each: T[];
  fallback?: JSX.Element;
  children?: (item: T, index: number) => U;
}

export default function For<T, U extends JSX.Element>({
  each,
  fallback,
  children,
}: ForProps<T, U>) {
  if (each.length === 0) {
    return fallback;
  }

  return each.map((item, index) => children?.(item, index));
}
