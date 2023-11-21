import { toast } from "react-toastify";

function toastSuccess(msg) {
  toast(msg, {
    position: "top-center",
    theme: "colored",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    closeOnClick: true,
    type: "info",
  });
}

function toastError(msg) {
  toast(msg, {
    position: "top-center",
    autoClose: 3000,
    pauseOnHover: true,
    theme: "light",
    type: "warning",
    draggable: true,
    closeOnClick: true,
  });
}

export { toastSuccess, toastError };
