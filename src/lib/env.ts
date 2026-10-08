const DEFAULT_ENV_LABEL = "local";

export const env = {
  mode: import.meta.env.MODE,
  envLabel: import.meta.env.VITE_ENV_LABEL?.trim() || DEFAULT_ENV_LABEL,
  showEnvBadge: import.meta.env.MODE !== "production",
};
