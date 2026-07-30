import fieldStyles from "./shared/fields.module.css";

export default function ExtraField({ field, value, onChange }) {
  return (
    <div className={fieldStyles.fieldGroup}>
      <label>{field.label}</label>
      <input
        type="text"
        placeholder={field.placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
