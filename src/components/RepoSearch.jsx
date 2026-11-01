import { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from "react-icons/fa";
import { repos, TAGS } from "../data/repos";
import {
  parseQuery,
  searchRepos,
  suggestTags,
  tagCounts,
} from "../utils/tagSearch";
import { useLanguage } from "../context/LanguageContext";
import { repoDescription } from "../i18n/content";
import SectionHead from "./SectionHead";

const GROUPS = [
  "language",
  "framework",
  "data",
  "architecture",
  "devops",
  "domain",
];
const EXAMPLES = ["java", "api", "microservices", "machine learning", "docker"];
const counts = tagCounts(repos);

export default function RepoSearch({ query, setQuery }) {
  const { t, language } = useLanguage();
  const s = t.search;
  const [mode, setMode] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const parsed = useMemo(() => parseQuery(query), [query]);
  const results = useMemo(
    () => searchRepos(repos, parsed, mode),
    [parsed, mode],
  );
  const lastWord = /\s$/.test(query)
    ? ""
    : parsed.words[parsed.words.length - 1] || "";
  const suggestions = parsed.unknown.includes(lastWord)
    ? suggestTags(lastWord, parsed.tags)
    : [];

  const rebuild = (tagIds, unknown) =>
    [...tagIds.map((id) => TAGS[id].label), ...unknown].join(" ") +
    (tagIds.length || unknown.length ? " " : "");

  const addTag = (id) => {
    if (parsed.tags.includes(id)) return;
    setQuery(rebuild([...parsed.tags, id], parsed.unknown));
  };
  const removeTag = (id) =>
    setQuery(
      rebuild(
        parsed.tags.filter((x) => x !== id),
        parsed.unknown,
      ),
    );
  const removeWord = (w) =>
    setQuery(
      rebuild(
        parsed.tags,
        parsed.unknown.filter((x) => x !== w),
      ),
    );
  const acceptSuggestion = (id) =>
    setQuery(
      rebuild(
        [...parsed.tags, id],
        parsed.unknown.filter((x) => x !== lastWord),
      ),
    );

  return (
    <section id="search">
      <div className="wrap">
        <SectionHead eyebrow={t.nav.search} title={s.heading}>
          {s.subheading}
        </SectionHead>

        <div className="w-full card p-4 md:p-6 shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="flex-1 flex items-center gap-3 bg-paper border-2 border-ink rounded-chip px-4 py-3 focus-within:shadow-hard-sm transition">
              <FaSearch className="text-ink shrink-0" aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    (e.key === "Tab" || e.key === "Enter") &&
                    suggestions.length
                  ) {
                    e.preventDefault();
                    acceptSuggestion(suggestions[0]);
                  }
                }}
                placeholder={s.placeholder}
                aria-label={s.placeholder}
                className="w-full bg-transparent outline-none text-ink text-lg placeholder:text-faint"
                autoComplete="off"
                spellCheck="false"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={s.clear}
                  className="text-muted hover:text-ink"
                >
                  <FaTimes />
                </button>
              )}
            </label>
            <div
              role="group"
              aria-label={s.matchLabel}
              className="flex bg-paper border-2 border-ink rounded-chip p-1 text-sm font-semibold self-start sm:self-stretch"
            >
              {["all", "any"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  aria-pressed={mode === m}
                  className={`px-3 py-1.5 rounded-lg transition ${mode === m ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}
                >
                  {m === "all" ? s.matchAll : s.matchAny}
                </button>
              ))}
            </div>
          </div>

          {suggestions.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted">{s.suggestions}</span>
              {suggestions.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => acceptSuggestion(id)}
                  className="chip border-dashed hover:bg-accent-soft"
                >
                  {TAGS[id].label}
                </button>
              ))}
            </div>
          )}

          {(parsed.tags.length > 0 || parsed.unknown.length > 0) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {parsed.tags.map((id) => (
                <span key={id} className="chip chip-on !text-sm">
                  {TAGS[id].label}
                  <button
                    type="button"
                    onClick={() => removeTag(id)}
                    aria-label={`${s.remove} ${TAGS[id].label}`}
                    className="opacity-70 hover:opacity-100"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {parsed.unknown.map((w) => (
                <span
                  key={w}
                  title={s.unknownTag}
                  className="chip !text-sm !border-[#b42318]/50 !text-[#b42318] bg-[#fdecea] line-through"
                >
                  {w}
                  <button
                    type="button"
                    onClick={() => removeWord(w)}
                    aria-label={`${s.remove} ${w}`}
                    className="opacity-70 hover:opacity-100"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {!query && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted">{s.tryLabel}</span>
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setQuery(ex + " ")}
                  className="chip hover:bg-accent-soft"
                >
                  {ex}
                </button>
              ))}
            </div>
          )}

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="text-sm font-semibold underline decoration-2 underline-offset-4 decoration-accent"
              aria-expanded={showAll}
            >
              {showAll ? s.hideTags : s.browseTags} ({Object.keys(TAGS).length})
            </button>
            {showAll && (
              <div className="search__tags mt-4 flex flex-col gap-4 border-t-2 border-dashed border-ink/20 pt-4">
                {GROUPS.map((g) => (
                  <div key={g}>
                    <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-faint mb-2">
                      {s.groups[g]}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(TAGS)
                        .filter(([, tag]) => tag.group === g)
                        .sort(
                          (a, b) => (counts[b[0]] || 0) - (counts[a[0]] || 0),
                        )
                        .map(([id, tag]) => (
                          <button
                            key={id}
                            type="button"
                            onClick={() =>
                              parsed.tags.includes(id)
                                ? removeTag(id)
                                : addTag(id)
                            }
                            aria-pressed={parsed.tags.includes(id)}
                            className={`chip ${parsed.tags.includes(id) ? "chip-on" : "hover:bg-accent-soft"}`}
                          >
                            {tag.label}{" "}
                            <span className="opacity-50">
                              {counts[id] || 0}
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <p
          className="mt-6 mb-4 shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-faint"
          aria-live="polite"
        >
          {s.results
            .replace("{count}", results.length)
            .replace("{total}", repos.length)}
        </p>

        <div className="search__results">
          {results.length === 0 ? (
            <p className="card border-dashed !shadow-none text-center text-muted py-12 px-6">
              {s.noResults}
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((repo) => (
                <li
                  key={repo.name}
                  className="card card-hover flex flex-col p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg font-bold leading-tight hover:underline decoration-accent decoration-[3px] underline-offset-4 break-all"
                    >
                      {repo.name}
                    </a>
                    <div className="flex items-center gap-3 shrink-0 text-ink/60">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${repo.name} ${t.projects.live}`}
                          className="hover:text-ink"
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${repo.name} ${t.projects.code}`}
                        className="hover:text-ink"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint mt-1">
                    {repo.language}
                  </p>
                  <p className="text-sm text-ink/75 mt-3 leading-relaxed flex-1">
                    {repoDescription(language, repo)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {repo.tags.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => addTag(id)}
                        className={`chip !text-[11px] !px-2 !py-0.5 ${parsed.tags.includes(id) ? "chip-on" : "!border-ink/30 hover:bg-accent-soft"}`}
                      >
                        {TAGS[id].label}
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
