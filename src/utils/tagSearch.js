import { TAGS } from "../data/repos";

// Lowercase and drop punctuation except + and # so "C++", "Node.js" and
// "full-stack" normalize to "c++", "nodejs" and "fullstack".
export const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9+#]/g, "");

const aliasIndex = new Map();
for (const [id, tag] of Object.entries(TAGS)) {
  for (const alias of [id, tag.label, ...tag.aliases]) {
    const key = normalize(alias);
    if (key) aliasIndex.set(key, id);
  }
}

const MAX_PHRASE = 3;

// Splits a query into tags. Every word is a tag; consecutive words are joined
// when together they spell a known tag, so "machine learning" and "api gateway"
// each read as one tag. Words that match no tag are returned in `unknown`.
export function parseQuery(query) {
  const words = query.split(/[\s,]+/).filter((w) => normalize(w));
  const tags = [];
  const unknown = [];
  for (let i = 0; i < words.length; ) {
    let matched = false;
    for (let len = Math.min(MAX_PHRASE, words.length - i); len >= 1; len--) {
      const id = aliasIndex.get(normalize(words.slice(i, i + len).join("")));
      if (id) {
        if (!tags.includes(id)) tags.push(id);
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      unknown.push(words[i]);
      i += 1;
    }
  }
  return { tags, unknown, words };
}

// mode "all": a repo must carry every tag (and an unknown word matches nothing).
// mode "any": a repo needs at least one tag. Results are sorted by how many of
// the searched tags they carry.
export function searchRepos(repos, { tags, unknown }, mode = "all") {
  if (tags.length === 0 && unknown.length === 0) return repos;
  if (mode === "all" && unknown.length > 0) return [];
  return repos
    .map((repo) => ({ repo, hits: tags.filter((t) => repo.tags.includes(t)).length }))
    .filter(({ hits }) => (mode === "all" ? hits === tags.length : hits > 0))
    .sort((a, b) => b.hits - a.hits)
    .map(({ repo }) => repo);
}

// Tags whose label, id or alias starts with the partial word being typed.
export function suggestTags(partial, exclude = [], limit = 6) {
  const p = normalize(partial);
  if (!p) return [];
  const out = [];
  for (const [alias, id] of aliasIndex) {
    if (alias.startsWith(p) && !exclude.includes(id) && !out.includes(id)) out.push(id);
    if (out.length >= limit) break;
  }
  return out;
}

export function tagCounts(repos) {
  const counts = {};
  for (const r of repos) for (const t of r.tags) counts[t] = (counts[t] || 0) + 1;
  return counts;
}
