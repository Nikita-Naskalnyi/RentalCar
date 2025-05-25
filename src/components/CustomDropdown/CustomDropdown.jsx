import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import sprite from "../../icons/sprite.svg";
import s from "./CustomDropdown.module.css";

const CustomDropdown = ({ options, value, onChange, placeholder, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={s.selectGroup} ref={dropdownRef}>
      {label && <label className={s.label}>{label}</label>}

      <div className={s.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <span>{value || placeholder}</span>
        <svg
          className={`${s.arrow} ${isOpen ? s.open : ""}`}
          width="16"
          height="16"
        >
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </div>

      {isOpen && (
        <ul className={s.options}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={s.option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default CustomDropdown;
