import ReorderableField from "./ReorderableField";

// Config for the three core fields whose order the user can rearrange
// (email / phone / location). Add an entry here if another field should
// become reorderable the same way.
const CORE_FIELDS = {
  email: {
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  phone: {
    label: "Phone",
    type: "tel",
    placeholder: "Enter Phone",
  },
  location: {
    label: "Location",
    type: "text",
    placeholder: "City, Country",
  },
};

export default function CoreFieldsList({
  fieldOrder,
  details,
  onChange,
  draggingKey,
  dragOffsetY,
  setItemRef,
  onDragPointerDown,
  onDragPointerMove,
  onDragPointerUp,
}) {
  return (
    <>
      {fieldOrder.map((key) => (
        <ReorderableField
          key={key}
          fieldKey={key}
          field={CORE_FIELDS[key]}
          value={details[key]}
          onChange={onChange}
          isDragging={draggingKey === key}
          dragOffsetY={dragOffsetY}
          itemRef={setItemRef(key)}
          onDragPointerDown={onDragPointerDown}
          onDragPointerMove={onDragPointerMove}
          onDragPointerUp={onDragPointerUp}
        />
      ))}
    </>
  );
}
