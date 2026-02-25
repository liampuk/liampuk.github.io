import { useRef } from 'react';

function extractDefaults(
  schema: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(schema)) {
    if (entry !== null && typeof entry === 'object' && 'value' in entry) {
      result[key] = (entry as { value: unknown }).value;
    } else {
      result[key] = entry;
    }
  }
  return result;
}

export function useControls(schema: Record<string, unknown>) {
  const ref = useRef<Record<string, unknown> | null>(null);
  if (ref.current === null) {
    ref.current = extractDefaults(schema);
  }
  return ref.current;
}

export function Leva() {
  return null;
}
