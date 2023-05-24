import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";

type useSelectTogglingResult = [
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  onSelectClick: MouseEventHandler<HTMLDivElement>
];

export const useSelectToggling = (selectName: string): useSelectTogglingResult => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDocumentClick = (e: MouseEvent) => {
    if (
      !(e.target instanceof Element)
      || (e.target.closest('[data-name="' + selectName + '"]'))
    ) return;
    
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  const onSelectClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, setIsOpen, onSelectClick];
};
