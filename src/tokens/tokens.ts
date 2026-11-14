export const colorTokens = {
  primary: '#1976d2',
} as const;

export type ColorToken = keyof typeof colorTokens;
