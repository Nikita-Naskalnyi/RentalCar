import { useState } from "react";
import sprite from "../../icons/sprite.svg";
import clsx from "clsx";
import s from "./CustomSelect.module.css";

const CustomSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.selectGroup}>
      <label className={s.label}>{label}</label>
      <div className={s.wrapper}>
        <select
          className={clsx(s.select, value && s.selected)}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <svg className={clsx(s.arrow, isOpen && s.open)}>
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;
