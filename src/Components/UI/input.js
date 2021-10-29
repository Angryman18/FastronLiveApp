import { forwardRef } from "react";

const INPUT = forwardRef((config, ref) => {
  return (
        <input
          ref={ref}
          type={config.type}
          placeholder={config.placeholder}
          className={config.className}
          onBlur={config.onBlur}
          onChange={config.onChange}
          id={config.id}
          value={config.value}
          min={config.min}
          style={config.style}
          required={config.required}
          defaultValue={config.defaultValue}
        />)
});

INPUT.defaultProps = {
  type: "text",
  required: false
};

export default INPUT;
