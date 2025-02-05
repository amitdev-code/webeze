import { useId } from "react";

type IdGetter<T> = () => T | T;

export function useWebezeId(idOrGetter: IdGetter<string | undefined>) {
  const uniqueId = useId();

  const resolvedId =
    typeof idOrGetter === "function" ? idOrGetter() : idOrGetter;

  return resolvedId ?? `webeze-input-${uniqueId}`;
}
