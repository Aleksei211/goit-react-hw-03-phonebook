import propTypes from "prop-types";
const Filter = ({ value, onFilterChange }) => (
	<div>
		<h2 >Find contacts by name</h2>
		<input
			c
			type="text"
			value={value}
			onChange={onFilterChange}
		/>
	</div>
);

export default Filter;

Filter.propTypes = {
    value: propTypes.string,
    onFilterChange: propTypes.func
};