import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter({ stateFilter, onChangeFilter }) {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        type='text'
        name='Find contact'
        onChange={(e) => onChangeFilter(e.target.value)}
        value={stateFilter}
        className={s.input}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
