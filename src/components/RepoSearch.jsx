import { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from "react-icons/fa";
import { repos, TAGS } from "../data/repos";
import { parseQuery, searchRepos, suggestTags, tagCounts } from "../utils/tagSearch";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const GROUPS = ["language", "framework", "data", "architecture", "devops", "domain"];
const EXAMPLES = ["java", "api", "microservices", "machine learning", "docker"];
const counts = tagCounts(repos);

export default function RepoSearch({ query, setQuery }) {
  const { t } = useLanguage();
  const s = t.search;
  const [mode, setMode] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const parsed = useMemo(() => parseQuery(query), [query]);
  const results = useMemo(() => searchRepos(repos, parsed, mode), [parsed, mode]);
  const lastWord = /\s$/.test(query) ? "" : parsed.words[parsed.words.length - 1] || "";
  const suggestions = parsed.unknown.includes(lastWord) ? suggestTags(lastWord, parsed.tags) : [];

  const rebuild = (tagIds, unknown) =>
    [...tagIds.map((id) => TAGS[id].label), ...unknown].join(" ") + (tagIds.length || unknown.length ? " " : "");

  const addTag = (id) => {
    if (parsed.tags.includes(id)) return;
    setQuery(rebuild([...parsed.tags, id], parsed.unknown));
  };
  const removeTag = (id) => setQuery(rebuild(parsed.tags.filter((x) => x !== id), parsed.unknown));
  const removeWord = (w) => setQuery(rebuild(parsed.tags, parsed.unknown.filter((x) => x !== w)));
  const acceptSuggestion = (id) =>
    setQuery(rebuild([...parsed.tags, id], parsed.unknown.filter((x) => x !== lastWord)));

  return (
    <section id="search" className="w-full flex flex-col items-center px-4 py-20 max-w-6xl mx-auto">
      <Reveal as="h2" variant="grow" className="text-3xl md:text-4xl font-extrabold mb-4 text-purple-400 p-3 border-b-4 border-purple-500">
        {s.heading}
      </Reveal>
      <p className="text-white/60 text-sm md:text-base text-center mb-8 max-w-2xl">{s.subheading}</p>

      <div className="w-full max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <label className="flex-1 flex items-center gap-3 bg-gray-900 border border-white/10 focus-within:border-purple-500 rounded-xl px-4 py-3 transition">
            <FaSearch className="text-purple-300 shrink-0" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if ((e.key === "Tab" || e.key === "Enter") && suggestions.length) {
                  e.preventDefault();
                  acceptSuggestion(suggestions[0]);
                }
              }}
              placeholder={s.placeholder}
              aria-label={s.placeholder}
              className="w-full bg-transparent outline-none text-white placeholder:text-white/30"
              autoComplete="off"
              spellCheck="false"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label={s.clear} className="text-white/40 hover:text-white">
                <FaTimes />
              </button>
            )}
          </label>
          <div role="group" aria-label={s.matchLabel} className="flex bg-gray-900 border border-white/10 rounded-xl p-1 text-sm self-start sm:self-stretch">
            {["all", "any"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`px-3 rounded-lg transition ${mode === m ? "bg-purple-600 text-white" : "text-white/60 hover:text-white"}`}
              >
                {m === "all" ? s.matchAll : s.matchAny}
              </button>
            ))}
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/40">{s.suggestions}</span>
            {suggestions.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => acceptSuggestion(id)}
                className="px-3 py-1 rounded-lg border border-purple-500/40 text-purple-200 hover:bg-purple-600/30"
              >
                {TAGS[id].label}
              </button>
            ))}
          </div>
        )}

        {(parsed.tags.length > 0 || parsed.unknown.length > 0) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {parsed.tags.map((id) => (
              <span key={id} className="flex items-center gap-2 text-sm bg-purple-600/40 text-white pl-3 pr-2 py-1 rounded-lg">
                {TAGS[id].label}
                <button type="button" onClick={() => removeTag(id)} aria-label={`${s.remove} ${TAGS[id].label}`} className="text-white/60 hover:text-white">
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            ))}
            {parsed.unknown.map((w) => (
              <span key={w} title={s.unknownTag} className="flex items-center gap-2 text-sm bg-red-500/15 text-red-200 border border-red-500/30 pl-3 pr-2 py-1 rounded-lg line-through decoration-red-300/50">
                {w}
                <button type="button" onClick={() => removeWord(w)} aria-label={`${s.remove} ${w}`} className="text-red-200/60 hover:text-white">
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {!query && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/40">{s.tryLabel}</span>
            {EXAMPLES.map((ex) => (
              <button key={ex} type="button" onClick={() => setQuery(ex + " ")} className="px-3 py-1 rounded-lg bg-gray-800 text-purple-200 hover:bg-purple-600/30">
                {ex}
              </button>
            ))}
          </div>
        )}

        <div className="mt-4">
          <button type="button" onClick={() => setShowAll((v) => !v)} className="text-sm text-purple-300 hover:text-white underline-offset-4 hover:underline" aria-expanded={showAll}>
            {showAll ? s.hideTags : s.browseTags} ({Object.keys(TAGS).length})
          </button>
          {showAll && (
            <div className="mt-3 flex flex-col gap-3 bg-gray-900/40 border border-white/5 rounded-xl p-4">
              {GROUPS.map((g) => (
                <div key={g}>
                  <h3 className="text-xs uppercase tracking-wider text-white/40 mb-2">{s.groups[g]}</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(TAGS)
                      .filter(([, tag]) => tag.group === g)
                      .sort((a, b) => (counts[b[0]] || 0) - (counts[a[0]] || 0))
                      .map(([id, tag]) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => (parsed.tags.includes(id) ? removeTag(id) : addTag(id))}
                          aria-pressed={parsed.tags.includes(id)}
                          className={`text-xs px-2.5 py-1 rounded-md transition ${
                            parsed.tags.includes(id) ? "bg-purple-600 text-white" : "bg-gray-800 text-white/70 hover:bg-purple-600/30"
                          }`}
                        >
                          {tag.label} <span className="text-white/40">{counts[id] || 0}</span>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="w-full max-w-6xl mt-8 mb-4 text-sm text-white/50" aria-live="polite">
        {s.results.replace("{count}", results.length).replace("{total}", repos.length)}
      </p>

      {results.length === 0 ? (
        <p className="w-full text-center text-white/50 py-10">{s.noResults}</p>
      ) : (
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((repo) => (
            <li key={repo.name} className="flex flex-col bg-gray-900/40 border border-white/5 hover:border-purple-500/40 rounded-xl p-5 transition">
              <div className="flex items-start justify-between gap-3">
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-300 hover:text-white hover:underline break-all">
                  {repo.name}
                </a>
                <div className="flex items-center gap-3 shrink-0 text-purple-300">
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" aria-label={`${repo.name} ${t.projects.live}`} className="hover:text-white">
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`${repo.name} ${t.projects.code}`} className="hover:text-white">
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-white/40 mt-1">{repo.language}</p>
              <p className="text-sm text-white/70 mt-3 leading-relaxed flex-1">{repo.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {repo.tags.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => addTag(id)}
                    className={`text-xs px-2 py-0.5 rounded-md transition ${
                      parsed.tags.includes(id) ? "bg-purple-600 text-white" : "bg-purple-600/15 text-white/70 hover:bg-purple-600/40"
                    }`}
                  >
                    {TAGS[id].label}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
