import { Mail, Phone, Pin } from "../Icons/Icons";
import { EXTRA_ICONS, DefaultExtraIcon } from "../Icons/ExtraIcons";
import styles from "./ResumePreview.module.css";

const CORE_ICONS = { email: Mail, phone: Phone, location: Pin };
const defaultOrder = ["email", "phone", "location"];

export default function ResumePreview({
  details,
  summary,
  fieldOrder = defaultOrder,
  activeExtras = [],
  extraValues = {},
}) {
  const coreItems = fieldOrder
    .map((key) => ({ key, value: details[key], Icon: CORE_ICONS[key] }))
    .filter((item) => item.value);

  const extraItems = activeExtras
    .map((key) => ({
      key,
      value: extraValues[key],
      Icon: EXTRA_ICONS[key] || DefaultExtraIcon,
    }))
    .filter((item) => item.value);

  const contactItems = [...coreItems, ...extraItems];
  const hasAnyInfo = contactItems.length > 0;
  const isEmpty = !details.fullName && !hasAnyInfo && !details.photo;

  return (
    <div className={styles.previewSheet}>
      {isEmpty ? (
        <div className={styles.previewEmpty}>
          Your resume preview will appear here
        </div>
      ) : (
        <div className={styles.previewHeader}>
          {details.photo && (
            <img
              src={details.photo}
              alt="Profile"
              className={styles.previewAvatar}
            />
          )}
          <div>
            {details.fullName && (
              <h1 className={styles.previewName}>{details.fullName}</h1>
            )}
            {details.title && (
              <p className={styles.previewTitle}>{details.title}</p>
            )}
            {hasAnyInfo && (
              <div className={styles.previewContactRow}>
                {contactItems.map(({ key, value, Icon }) => (
                  <span key={key}>
                    <Icon /> {value}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {summary && (
        <div
          className={styles.previewSummary}
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}
    </div>
  );
}
