/**
 *
 * @param func any function
 * @param delay time in milliseconds
 * @returns
 */
export const debounce = <F extends (...args: unknown[]) => void>(
  func: F,
  delay: number
): (() => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function debouncedFunction () {
    // @ts-expect-error будет текущий this
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // @ts-expect-error Тут передаются аргументы
      return func.apply(context, args);
    }, delay);
  };
};
