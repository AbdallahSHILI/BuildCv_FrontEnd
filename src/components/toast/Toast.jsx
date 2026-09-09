import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Toast.module.css";

// Simple top-right notification, portaled to <body> so it isn't clipped
// by any ancestor's overflow rules and always sits above page content.
// Auto-dismisses after `duration` ms (default 5s) or on manual close.
export default function Toast({ title, message, duration = 5000, onClose }) {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        className={styles.toast}
        role="status"
        initial={{ opacity: 0, y: -12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, x: 24 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <span className={styles.icon}>🎉</span>
        <div className={styles.textWrap}>
          {title && <p className={styles.title}>{title}</p>}
          {message && <p className={styles.message}>{message}</p>}
        </div>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
