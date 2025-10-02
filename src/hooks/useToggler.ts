import { useState, useCallback } from "react";

export type ToggleOptions<A> = A | A;

export function useToggler<ToggleOptions>(
  initialOption: ToggleOptions,
  alternativeOption: ToggleOptions
) {
  const [state, setState] = useState<ToggleOptions>(initialOption);

  const toggle = useCallback(() => {
    setState((previousOption) =>
      previousOption === initialOption ? alternativeOption : initialOption
    );
  }, [initialOption, alternativeOption]);

  return [state, toggle] as const;
}
