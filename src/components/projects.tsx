import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, type Project } from "@/config/profile";
import { cn } from "@/lib/utils";

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <Badge key={t} variant="secondary" className="font-normal">
          {t}
        </Badge>
      ))}
    </div>
  );
}

function MicrosoftStoreBadge({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Get it from Microsoft"
      className="inline-flex shrink-0 items-center"
    >
      {/* Always the black/dark badge variant, in both site themes, so it
          stays visually consistent with the Google Play badge (which only
          has one official color). */}
      <img
        src="https://get.microsoft.com/images/en-us%20dark.svg"
        alt="Get it from Microsoft"
        className="h-6 w-auto"
      />
    </a>
  );
}

function GooglePlayBadge({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Get it on Google Play"
      className="inline-flex shrink-0 items-center"
    >
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
        className="h-8 w-auto"
      />
    </a>
  );
}

function ProjectTitle({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex items-center gap-1.5 font-semibold tracking-tight hover:text-primary hover:underline",
        large ? "text-lg" : "text-base",
      )}
    >
      {project.name}
      <ExternalLink className="size-3.5 text-primary" aria-hidden />
    </a>
  );
}

function FlagshipCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h3>
          <ProjectTitle project={project} large />
        </h3>
        <Badge className="font-mono text-[10px] uppercase tracking-wider">Flagship</Badge>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
      {project.pricing && (
        <p className="mt-1 text-xs text-muted-foreground">{project.pricing}</p>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
      >
        {open ? "Hide details" : "Show details"}
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <dl className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
              <div>
                <dt className="font-medium">Problem it solves</dt>
                <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
              </div>
              <div>
                <dt className="font-medium">What she built</dt>
                <dd className="mt-1 text-muted-foreground">{project.built}</dd>
              </div>
              <div>
                <dt className="font-medium">Tech stack</dt>
                <dd className="mt-2">
                  <TechTags tech={project.tech} />
                </dd>
              </div>
              {project.access && (
                <div>
                  <dt className="font-medium">Payment / access</dt>
                  <dd className="mt-1 text-muted-foreground">{project.access}</dd>
                </div>
              )}
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function SimpleCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <h3>
          <ProjectTitle project={project} />
        </h3>
        {project.status && (
          <Badge
            variant="outline"
            className="border-primary font-mono text-[10px] uppercase tracking-wider text-primary"
          >
            {project.status}
          </Badge>
        )}
        {project.microsoftStoreUrl && (
          <MicrosoftStoreBadge url={project.microsoftStoreUrl} />
        )}
        {project.googlePlayUrl && (
          <GooglePlayBadge url={project.googlePlayUrl} />
        )}
      </div>
      <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{project.description}</p>
      {project.access && (
        <p className="mt-1.5 text-xs text-muted-foreground">{project.access}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags?.map((t) => (
          <Badge key={t} variant="secondary" className="font-normal">
            {t}
          </Badge>
        ))}
        <TechTags tech={project.tech} />
      </div>
      {project.cta && (
        <div className="no-print mt-4">
          <Button asChild variant="outline" size="sm">
            <a
              href={project.cta.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.cta.label}
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </Button>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const list = profile.projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  const flagships = list.filter((p) => p.flagship);
  const others = list.filter((p) => !p.flagship);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Project categories"
        className="no-print mb-8 flex flex-wrap gap-2"
      >
        {profile.projectCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            type="button"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {flagships.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {flagships.map((p) => (
            <FlagshipCard key={p.name} project={p} />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <SimpleCard key={p.name} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}