/* eslint-disable react/prop-types */
const Input = ({handleChange,value, hint}) => {
  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
