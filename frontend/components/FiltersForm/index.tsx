import { FC } from "react";

import { filtersComponents } from "./filters";

import s from "./FiltersForm.module.scss";

const FiltersForm: FC = () => {
  return (
    <form>
      <div className={s.filtersContainer}>
        {filtersComponents.map(({ title, component }, index) => {
          const FilterComponent = component;
          return (
            !!FilterComponent && <FilterComponent key={index} title={title} />
          );
        })}
      </div>
    </form>
  );
};

export default FiltersForm;
