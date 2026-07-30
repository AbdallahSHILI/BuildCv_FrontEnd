import { getFieldByKey } from "../data";
import ExtraField from "./ExtraField";

export default function ExtraFieldsList({
  activeExtras,
  extraValues,
  onChangeExtra,
}) {
  return (
    <>
      {activeExtras.map((key) => {
        const field = getFieldByKey(key);
        if (!field) return null;
        return (
          <ExtraField
            key={key}
            field={field}
            value={extraValues[key]}
            onChange={(value) => onChangeExtra(key, value)}
          />
        );
      })}
    </>
  );
}
