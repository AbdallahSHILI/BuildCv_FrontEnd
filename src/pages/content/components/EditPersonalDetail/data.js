// Shown in the initial flat "Add details" grid, before the user has
// expanded into categories. Mixed personal + links, most common first.
export const QUICK_FIELDS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    placeholder: "linkedin.com/in/yourname",
  },
  { key: "website", label: "Website", placeholder: "yourwebsite.com" },
  {
    key: "nationality",
    label: "Nationality",
    placeholder: "Enter nationality",
  },
  { key: "dob", label: "Date of Birth", placeholder: "DD/MM/YYYY" },
  { key: "visa", label: "Visa", placeholder: "Visa status" },
  { key: "passport", label: "Passport or Id", placeholder: "Enter ID number" },
  { key: "availability", label: "Availability", placeholder: "e.g. Immediate" },
];

// "Personal details" category. The first PERSONAL_DETAILS_COLLAPSED_COUNT
// entries are what's shown before that category's own "Show More" is
// clicked; the rest appear once it's expanded.
export const PERSONAL_DETAILS_COLLAPSED_COUNT = 7;

export const PERSONAL_DETAILS_FIELDS = [
  { key: "passport", label: "Passport or Id", placeholder: "Enter ID number" },
  {
    key: "nationality",
    label: "Nationality",
    placeholder: "Enter nationality",
  },
  { key: "dob", label: "Date of Birth", placeholder: "DD/MM/YYYY" },
  { key: "visa", label: "Visa", placeholder: "Visa status" },
  { key: "availability", label: "Availability", placeholder: "e.g. Immediate" },
  {
    key: "genderPronoun",
    label: "Gender/Pronoun",
    placeholder: "Enter gender/pronoun",
  },
  {
    key: "disability",
    label: "Disability",
    placeholder: "Enter disability status",
  },
  {
    key: "workMode",
    label: "Work mode",
    placeholder: "e.g. Remote, Hybrid, Onsite",
  },
  {
    key: "relocation",
    label: "Relocation",
    placeholder: "Willing to relocate?",
  },
  {
    key: "expectedSalary",
    label: "Expected salary",
    placeholder: "Enter expected salary",
  },
  {
    key: "secondPhone",
    label: "Second phone",
    placeholder: "Enter second phone",
  },
  {
    key: "drivingLicense",
    label: "Driving License",
    placeholder: "Enter license type",
  },
  {
    key: "securityClearance",
    label: "Security clearance",
    placeholder: "Enter clearance level",
  },
  {
    key: "maritalStatus",
    label: "Marital status",
    placeholder: "Enter marital status",
  },
  {
    key: "militaryService",
    label: "Military Service",
    placeholder: "Enter military service status",
  },
  { key: "smoking", label: "Smoking", placeholder: "Smoker status" },
  { key: "height", label: "Height", placeholder: "Enter height" },
  { key: "weight", label: "Weight", placeholder: "Enter weight" },
];

// "Links / social profiles" category, same collapsed/expanded pattern.
export const LINKS_COLLAPSED_COUNT = 9;

export const LINKS_FIELDS = [
  { key: "website", label: "Website", placeholder: "yourwebsite.com" },
  { key: "portfolio", label: "Portfolio", placeholder: "yourportfolio.com" },
  {
    key: "linkedin",
    label: "LinkedIn",
    placeholder: "linkedin.com/in/yourname",
  },
  { key: "github", label: "GitHub", placeholder: "github.com/yourname" },
  { key: "gitbook", label: "GitBook", placeholder: "gitbook.com/yourname" },
  { key: "medium", label: "Medium", placeholder: "medium.com/@yourname" },
  { key: "orcid", label: "ORCID", placeholder: "orcid.org/your-id" },
  { key: "skype", label: "Skype", placeholder: "Enter Skype handle" },
  { key: "bluesky", label: "Bluesky", placeholder: "yourname.bsky.social" },
  { key: "threads", label: "Threads", placeholder: "threads.net/@yourname" },
  { key: "x", label: "X", placeholder: "x.com/yourname" },
  { key: "discord", label: "Discord", placeholder: "Enter Discord handle" },
  { key: "dribbble", label: "Dribbble", placeholder: "dribbble.com/yourname" },
  { key: "behance", label: "Behance", placeholder: "behance.net/yourname" },
  {
    key: "stackoverflow",
    label: "Stack Overflow",
    placeholder: "stackoverflow.com/users/you",
  },
  { key: "gitlab", label: "GitLab", placeholder: "gitlab.com/yourname" },
  { key: "quora", label: "Quora", placeholder: "quora.com/profile/yourname" },
  {
    key: "facebook",
    label: "Facebook",
    placeholder: "facebook.com/yourname",
  },
  {
    key: "instagram",
    label: "Instagram",
    placeholder: "instagram.com/yourname",
  },
  { key: "wechat", label: "WeChat", placeholder: "Enter WeChat ID" },
  {
    key: "huggingface",
    label: "Hugging Face",
    placeholder: "huggingface.co/yourname",
  },
  { key: "kaggle", label: "Kaggle", placeholder: "kaggle.com/yourname" },
  { key: "youtube", label: "YouTube", placeholder: "youtube.com/@yourname" },
  { key: "tiktok", label: "TikTok", placeholder: "tiktok.com/@yourname" },
  { key: "signal", label: "Signal", placeholder: "Enter Signal contact" },
  { key: "telegram", label: "Telegram", placeholder: "t.me/yourname" },
];

// Union of every field across the three lists, deduped by key, for
// looking up a field's label/placeholder once it's been added as an
// active extra (regardless of which grid it was picked from).
const ALL_FIELDS_LIST = [
  ...QUICK_FIELDS,
  ...PERSONAL_DETAILS_FIELDS,
  ...LINKS_FIELDS,
];

const FIELDS_BY_KEY = ALL_FIELDS_LIST.reduce((map, field) => {
  if (!map[field.key]) map[field.key] = field;
  return map;
}, {});

export function getFieldByKey(key) {
  return FIELDS_BY_KEY[key];
}
