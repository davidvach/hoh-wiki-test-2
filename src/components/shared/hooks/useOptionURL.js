import { useState, useEffect } from "react";

const useOptionURL = (options, path) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedOptionParam = urlParams.get(path);
    if (selectedOptionParam) {
      const foundOption = options.find(
        (option) => option.value === selectedOptionParam
      );
      if (foundOption) {
        setSelectedOption(foundOption);
      }
    }
  }, []);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    const newUrl = `${window.location.hash}?${path}=${selectedOption.value}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return { selectedOption, handleOptionChange };
};

export default useOptionURL;
