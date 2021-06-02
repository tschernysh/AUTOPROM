import s from './ModalHook.module.css'

export const useModalHook = (Component) => {
    return(
        <div className={s.modal__wrapper}>
            {Component}
        </div>
    )
}
