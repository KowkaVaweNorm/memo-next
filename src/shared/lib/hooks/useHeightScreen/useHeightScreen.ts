"use client"
import {
  useState,
  useCallback,
  useMemo,
  useEffect
} from 'react';
import { debounce } from '@/shared/lib/utils/debounce';

export const useHeightScreen = (delayDebounce = 300): number => {
  const [heightScreen, setHeightScreen] = useState(0);
useEffect(()=>{
  setHeightScreen(window.innerHeight)
},[])
  const handleResize = useCallback(() => {
    setHeightScreen(Math.min(document.documentElement.clientHeight, window.innerHeight ?? 0));
  }, []);
  const debouncedResize = useMemo(
    () => debounce(handleResize, delayDebounce), [delayDebounce, handleResize]
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [debouncedResize]);
  return heightScreen;
};
