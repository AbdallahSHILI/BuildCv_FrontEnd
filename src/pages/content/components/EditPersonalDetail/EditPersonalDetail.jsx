import { useState } from "react";
import { Check } from "../Icons";
import styles from "./EditPersonalDetail.module.css";
import EditHeader from "./components/EditHeader";
import ProfileSection from "./components/ProfileSection";
import CoreFieldsList from "./components/CoreFieldsList";
import ExtraFieldsList from "./components/ExtraFieldsList";
import AddDetailsSection from "./components/AddDetailsSection";

export default function EditPersonalDetail({
  details,
  onChange,
  onPhotoChange,
  onDone,
  fieldOrder,
  draggingKey,
  dragOffsetY,
  setItemRef,
  onDragPointerDown,
  onDragPointerMove,
  onDragPointerUp,
}) {
  const [activeExtras, setActiveExtras] = useState([]);
  const [extraValues, setExtraValues] = useState({});

  const addExtra = (key) => {
    if (!activeExtras.includes(key)) setActiveExtras((prev) => [...prev, key]);
  };

  const changeExtra = (key, value) =>
    setExtraValues((prev) => ({ ...prev, [key]: value }));

  return (
    <div className={styles.editCard}>
      <div className={styles.editScroll}>
        <EditHeader />

        <ProfileSection
          details={details}
          onChange={onChange}
          onPhotoChange={onPhotoChange}
        />

        <CoreFieldsList
          fieldOrder={fieldOrder}
          details={details}
          onChange={onChange}
          draggingKey={draggingKey}
          dragOffsetY={dragOffsetY}
          setItemRef={setItemRef}
          onDragPointerDown={onDragPointerDown}
          onDragPointerMove={onDragPointerMove}
          onDragPointerUp={onDragPointerUp}
        />

        <ExtraFieldsList
          activeExtras={activeExtras}
          extraValues={extraValues}
          onChangeExtra={changeExtra}
        />

        <AddDetailsSection activeExtras={activeExtras} onAddExtra={addExtra} />
      </div>

      <div className={styles.editFooter}>
        <button className={styles.doneBtn} onClick={onDone}>
          <Check />
          Done
        </button>
      </div>
    </div>
  );
}
