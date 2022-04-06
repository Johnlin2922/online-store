import "./FormInput.styles.scss";

const FormInput = ({ label, ...additionalProps }) => {
    return (
        <div className="group">
            <input {...additionalProps} className="form-input" />
            <label
                className={`${
                    additionalProps.value.length ? "shrink" : ""
                } form-input-label`}
            >
                {label}
            </label>
        </div>
    );
};
export default FormInput;
