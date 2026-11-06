export function parseTokenList(header: string): string[] {
  if (typeof header !== 'string') throw new TypeError('Expected header text');
  if (header.length > 8192) throw new RangeError('Header too long');
  if (!header.trim()) return [];
  return header
    .split(',')
    .map((value) => value.trim())
    .map((value) => {
      if (!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(value)) throw new RangeError('Invalid HTTP token');
      return value;
    });
}
export function formatTokenList(tokens: readonly string[]): string {
  if (
    !Array.isArray(tokens) ||
    tokens.some(
      (token) => typeof token !== 'string' || !/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(token),
    )
  )
    throw new RangeError('Invalid token list');
  return tokens.join(', ');
}
