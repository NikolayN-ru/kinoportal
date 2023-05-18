import { useState } from "react";

export type UseCheckboxChangingResult = [
  selectedOptions: string[],
  onCheckboxChange: (optionName: string, isChecked: boolean) => void
];

export const useCheckboxChanging = (
  optionsDefault: string[]
): UseCheckboxChangingResult => {
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(optionsDefault);

  const onCheckboxChange = (optionName: string, isChecked: boolean) => {
    if (isChecked) {
      const updatedOptions = selectedOptions.filter(
        (option) => option !== optionName
      );
      setSelectedOptions(updatedOptions);
      return;
    }

    setSelectedOptions([...selectedOptions, optionName]);
  };

  return [selectedOptions, onCheckboxChange];
};
