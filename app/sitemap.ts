import { objectKeys } from "@/lib/utils";
import { subjectTypeEnum } from "@/lib/enum/subjectTypeEnum";
import { dayEnum } from "@/lib/enum/dayEnum";

export default function sitemap() {
  const hot = objectKeys(subjectTypeEnum).map((type) => ({
    url: `https://www.bangumi.app/hot/${type}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const top = objectKeys(subjectTypeEnum).map((type) => ({
    url: `https://www.bangumi.app/top/${type}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const calendar = objectKeys(dayEnum).map((type) => ({
    url: `https://www.bangumi.app/calendar/${type}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...hot, ...top, ...calendar];
}
