import { defineMcp } from "@lovable.dev/mcp-js";
import listCourses from "./tools/list-courses";
import getStudioInfo from "./tools/get-studio-info";
import submitContactMessage from "./tools/submit-contact-message";

export default defineMcp({
  name: "yoga-mit-isabell-mcp",
  title: "Yoga mit Isabell",
  version: "0.1.0",
  instructions:
    "Öffentliche Tools rund um das Yogastudio Yoga mit Isabell in Stuttgart-Steinhaldenfeld. `list_courses` liefert alle Kurse & Angebote mit URLs, `get_studio_info` liefert Adresse und Kontakt, `submit_contact_message` sendet eine Nachricht an das Studio (gleicher Kanal wie das Website-Kontaktformular).",
  tools: [listCourses, getStudioInfo, submitContactMessage],
});
