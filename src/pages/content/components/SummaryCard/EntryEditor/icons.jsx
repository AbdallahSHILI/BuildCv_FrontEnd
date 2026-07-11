// Small inline icon set used only within EntryEditor components.
// Kept local (rather than in the app-wide Icons.jsx) since these are
// specific to the edit-entry toolbar/header chrome.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const LightbulbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.472V15h8v-2.528A6 6 0 0 0 12 2z" />
  </svg>
);

export const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base}>
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
  </svg>
);

export const BoldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M6 4h8a4 4 0 0 1 0 8H6zM6 12h9a4 4 0 0 1 0 8H6z" />
  </svg>
);

export const ItalicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M19 4h-9M15 20H6M14.5 4 9.5 20" />
  </svg>
);

export const UnderlineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M6 3v7a6 6 0 0 0 12 0V3M4 21h16" />
  </svg>
);

export const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
  </svg>
);

export const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />
  </svg>
);

export const AlignLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M4 6h16M4 12h10M4 18h13" />
  </svg>
);

export const AlignCenterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M4 6h16M7 12h10M6 18h12" />
  </svg>
);

export const AlignRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M4 6h16M10 12h10M7 18h13" />
  </svg>
);

export const AlignJustifyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...base}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const RobotIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...base}>
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M12 8V4M9 4h6" />
    <circle cx="9" cy="14" r="1" />
    <circle cx="15" cy="14" r="1" />
  </svg>
);
