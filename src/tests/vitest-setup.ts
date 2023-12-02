import { afterEach } from 'vitest';
// eslint-disable-next-line -- vitest need the clean up with react testing library when not using globals
import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/vitest";

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});