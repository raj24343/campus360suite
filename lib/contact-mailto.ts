/** Opens the visitor's mail client with a pre-filled message to you (no server required). */
export const CONTACT_EMAIL = "rajnaidu24343@gmail.com" as const;

export function openCampus360InquiryMail(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
  /** "Type of college" (modal) or "Interested course" (contact page) */
  topic?: string;
}) {
  const subject = `campus360 inquiry — ${payload.name.trim() || "Website visitor"}`;
  const lines: string[] = [
    `Name: ${payload.name.trim()}`,
    `Email: ${payload.email.trim()}`,
    `Phone: ${payload.phone.trim()}`,
  ];
  if (payload.topic?.trim()) {
    lines.push(`Course / College: ${payload.topic.trim()}`);
  }
  lines.push("", "Message:", payload.message.trim());
  const body = lines.join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
