import { execFileSync } from "node:child_process";
import { join } from "node:path";

// Claude Code envía por la entrada estándar un JSON con los datos de la edición.
let entrada = "";
for await (const trozo of process.stdin) entrada += trozo;

// La ruta del archivo editado viene en tool_input.file_path.
const ruta = JSON.parse(entrada).tool_input?.file_path;
if (!ruta) process.exit(0);

// Se ejecuta Prettier desde la raíz del proyecto, para que lea .prettierrc y .prettierignore.
const raiz = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const prettier = join(raiz, "node_modules", "prettier", "bin", "prettier.cjs");

execFileSync(
  process.execPath,
  [prettier, "--write", "--ignore-unknown", ruta],
  { cwd: raiz, stdio: "ignore" },
);