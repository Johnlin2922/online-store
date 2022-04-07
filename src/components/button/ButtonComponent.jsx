import "./Button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

const Button = (props) => {
    const { buttonType, children, ...additionalProps } = props;

    return (
        <button
            className={`button-container ${
                BUTTON_TYPE_CLASSES[props.buttonType]
            }`}
            {...additionalProps}
        >
            {props.children}
        </button>
    );
};

export default Button;
