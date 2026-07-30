import { ReactComponent as Reorder } from "../../../../../assets/Arrows_TopDown.svg";
import fieldStyles from "./shared/fields.module.css";
import styles from "./ReorderableField.module.css";

export default function ReorderableField({
  fieldKey,
  field,
  value,
  onChange,
  isDragging,
  dragOffsetY,
  itemRef,
  onDragPointerDown,
  onDragPointerMove,
  onDragPointerUp,
}) {
  return (
    <div
      className={`${fieldStyles.fieldGroup} ${isDragging ? styles.fieldGroupDragging : ""}`}
      ref={itemRef}
      style={
        isDragging ? { transform: `translateY(${dragOffsetY}px)` } : undefined
      }
    >
      <label>{field.label}</label>
      <div className={styles.inputWithHandle}>
        <input
          type={field.type}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(fieldKey, e.target.value)}
        />
        <button
          type="button"
          className={styles.reorderBtn}
          aria-label={`Drag to reorder ${field.label}`}
          onPointerDown={(e) => onDragPointerDown(e, fieldKey)}
          onPointerMove={onDragPointerMove}
          onPointerUp={onDragPointerUp}
          onPointerCancel={onDragPointerUp}
        >
          <Reorder />
        </button>
      </div>
    </div>
  );
}
