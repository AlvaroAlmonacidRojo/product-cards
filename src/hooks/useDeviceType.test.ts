import { renderHook } from '@testing-library/react';
import useDeviceType from './useDeviceType';

describe('useDeviceType', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return "desktop" when window width is greater than or equal to 1024', () => {
    global.innerWidth = 1024;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));
    const { result } = renderHook(() => useDeviceType())

    expect(result.current).toBe('desktop');
  });

  it('should return "tablet" when window width is between 768 and 1023', () => {
    global.innerWidth = 900;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));
    const { result } = renderHook(() => useDeviceType())

    expect(result.current).toBe('tablet');
  });

  it('should return "mobile" when window width is less than 768', () => {
    global.innerWidth = 400;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));
    const { result } = renderHook(() => useDeviceType())

    expect(result.current).toBe('mobile');
  });
});
