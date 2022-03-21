import { useState, useRef } from "react";

export default function useError() {
  const [error, setError] = useState<Error | null>(null);
  const errorHandler =
    useRef<React.Dispatch<React.SetStateAction<Error | null>>>();

  if (!errorHandler.current) {
    errorHandler.current = setError;
  }

  if (error) {
    throw error;
  }

  return errorHandler.current;
}
