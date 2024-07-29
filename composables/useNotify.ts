import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const _options = {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
    transition: toast.TRANSITIONS.SLIDE,
    theme: 'colored',
    hideProgressBar: true
};

// Show Custom Success Notification
export const notifyInfo = (Msg: string, options: object = _options) => {
    toast.info(Msg, options);
};

// Show Custom Success Notification
export const notifySuccess = (Msg: string, options: object = _options) => {
    toast.success(Msg, options);
};

// Show Custom Success Notification
export const notifyWarning = (Msg: string, options: object = _options) => {
    toast.warning(Msg, options);
};

// Show Custom Success Notification
export const notifyError = (Msg: string, options: object = _options) => {
    toast.error(Msg, options);
};
