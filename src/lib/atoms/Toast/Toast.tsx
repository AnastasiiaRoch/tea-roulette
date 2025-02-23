import { ToastOptions, toast } from 'react-toastify';

// import {
//   IconAlertCircleFilled,
//   IconCircleCheckFilled,
//   IconInfoCircleFilled,
//   IconInfoTriangleFilled,
// } from '@tabler/icons-react';
// import { iconsStroke } from '@/lib/constants';

const ToastBase = {
  success(message: React.ReactNode, options: ToastOptions = {}) {
    return toast.success(message, {
      ...options,
      autoClose: 5000,
      //   icon: (
      //     <IconCircleCheckFilled
      //       className="toast-icon toast-icon_success"
      //       size={30}
      //       stroke={iconsStroke.base}
      //     />
      //   ),
    });
  },
  error(message: React.ReactNode, options: ToastOptions = {}) {
    return toast.error(message, {
      ...options,
      autoClose: 10000,
      //   icon: (
      //     <IconAlertCircleFilled
      //       className="toast-icon toast-icon_error"
      //       size={30}
      //       stroke={iconsStroke.base}
      //     />
      //   ),
    });
  },
  info(message: React.ReactNode, options: ToastOptions = {}) {
    return toast.info(message, {
      ...options,
      autoClose: 5000,
      //   icon: (
      //     <IconInfoCircleFilled
      //       className="toast-icon toast-icon_info"
      //       size={30}
      //       stroke={iconsStroke.base}
      //     />
      //   ),
    });
  },
  warning(message: React.ReactNode, options: ToastOptions = {}) {
    return toast.info(message, {
      ...options,
      autoClose: 5000,
      //   icon: (
      //     <IconInfoTriangleFilled
      //       className="toast-icon toast-icon_warning"
      //       size={30}
      //       stroke={iconsStroke.base}
      //     />
      //   ),
    });
  },
};

export default ToastBase;
