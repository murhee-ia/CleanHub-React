import modalStyles from "./HomeComponents.module.css";

const Modal = ({children}) => {
    return (
        <div className={modalStyles["backdrop"]}>
            <div className={modalStyles["modal-content"]}>
                {children}
            </div>
        </div>
    )
}

export default Modal