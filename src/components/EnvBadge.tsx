import { env } from "@/lib/env";

function EnvBadge() {
  if (!env.showEnvBadge) return null;

  return (
    <div className="bg-amber-400 py-1 text-center font-mono text-xs font-semibold text-slate-900 dark:bg-amber-300">
      {env.envLabel} · {env.mode}
    </div>
  );
}

export default EnvBadge;
