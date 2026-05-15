import { toolBySlug, type Tool } from '../data/tools';

interface RecentTool {
  slug: string;
  title: string;
  icon: string;
  color: string;
}

export function trackRecentTool(slug: string): void {
  if (!slug || slug === '') return;
  try {
    const recent: RecentTool[] = JSON.parse(localStorage.getItem('recentTools') || '[]');
    const filtered = recent.filter((t) => t.slug !== slug);
    const tool = toolBySlug[slug];
    if (tool) {
      filtered.unshift({ slug, title: tool.title, icon: tool.icon, color: tool.color });
      localStorage.setItem('recentTools', JSON.stringify(filtered.slice(0, 6)));
    }
  } catch {
    // localStorage not available
  }
}

export function getRecentTools(): RecentTool[] {
  try {
    const raw: RecentTool[] = JSON.parse(localStorage.getItem('recentTools') || '[]');
    // Filter out any tools whose slug no longer exists in the site
    const valid = raw.filter((t) => t.slug && toolBySlug[t.slug]);
    // If stale data was cleaned up, persist the cleaned list
    if (valid.length < raw.length) {
      localStorage.setItem('recentTools', JSON.stringify(valid));
    }
    return valid;
  } catch {
    return [];
  }
}

export function renderRecentTools(containerId: string, max = 3): void {
  const container = document.getElementById(containerId);
  if (!container) return;
  const tools = getRecentTools().slice(0, max);
  if (tools.length === 0) return;

  const parent = container.closest('.recently-used');
  if (parent) (parent as HTMLElement).style.display = 'block';

  container.innerHTML = tools
    .map(
      (t) =>
        `<a href="/${t.slug}/" class="recent-tool-item">
          <i class="fa-solid ${t.icon}" style="color:${t.color};"></i> ${t.title}
        </a>`
    )
    .join('');
}
