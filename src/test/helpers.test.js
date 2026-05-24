import { describe, it, expect } from 'vitest';
import { formatSalary, generateId } from '../utils/helpers';

describe('formatSalary', () => {
  it('formats a numeric string as USD', () => {
    expect(formatSalary('2000')).toBe('$2,000');
  });

  it('returns "Not specified" for empty string', () => {
    expect(formatSalary('')).toBe('Not specified');
  });

  it('returns original value when non-numeric text is given', () => {
    expect(formatSalary('negotiable')).toBe('negotiable');
  });

  it('formats large salary correctly', () => {
    expect(formatSalary('150000')).toBe('$150,000');
  });
});

describe('generateId', () => {
  it('returns a number', () => {
    expect(typeof generateId()).toBe('number');
  });

  it('generates unique ids on consecutive calls', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});
