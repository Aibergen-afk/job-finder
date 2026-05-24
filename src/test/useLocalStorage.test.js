import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../hooks/useLocalStorage';

beforeEach(() => {
  localStorage.clear();
});

describe('useLocalStorage', () => {
  it('returns the initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('persists value to localStorage on update', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    act(() => {
      result.current[1]('new-value');
    });
    expect(result.current[0]).toBe('new-value');
    expect(JSON.parse(localStorage.getItem('test-key'))).toBe('new-value');
  });

  it('reads existing value from localStorage on mount', () => {
    localStorage.setItem('test-key', JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('stored');
  });

  it('works with object values', () => {
    const { result } = renderHook(() => useLocalStorage('obj-key', {}));
    act(() => {
      result.current[1]({ name: 'Alice' });
    });
    expect(result.current[0]).toEqual({ name: 'Alice' });
  });
});
