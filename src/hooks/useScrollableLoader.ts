import { useEffect } from "react";

const useScrollableLoader = (
  term: string,
  isLoading: boolean,
  callback: () => Promise<void>
): void => {
  useEffect(() => {
    const handleScroll = async () => {
      const diff =
        document.documentElement.scrollHeight -
        (document.documentElement.scrollTop +
          document.documentElement.offsetHeight);

      if (diff < 200 && !isLoading && term.trim().length > 0) {
        await callback();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [term, isLoading, callback]);
};

export default useScrollableLoader;
