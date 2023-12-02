// import { PercentageProperty } from 'csstype';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button data-testid="button">
      {children}
    </button>
  );
}
