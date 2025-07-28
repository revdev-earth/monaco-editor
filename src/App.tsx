"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  Copy,
  Download,
  Sparkles,
  Code2,
  Terminal,
  Palette,
  Moon,
  Sun,
  Zap,
} from "lucide-react";
import * as monacoEditor from "monaco-editor";

const themes = {
  cosmic: {
    name: "Cosmic",
    icon: Sparkles,
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    particles: [
      "absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse",
      "absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse",
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse",
    ],
    headerGradient: "bg-gradient-to-r from-white via-purple-200 to-pink-200",
    iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
    runButton:
      "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    panelBg: "bg-slate-800/50",
    panelBorder: "border-slate-700/50",
    panelHover: "hover:shadow-purple-500/10",
    outputHover: "hover:shadow-green-500/10",
  },
  terminal: {
    name: "Terminal",
    icon: Terminal,
    background: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
    particles: [
      "absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse",
      "absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse",
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse",
    ],
    headerGradient: "bg-gradient-to-r from-green-300 via-cyan-200 to-blue-300",
    iconBg: "bg-gradient-to-r from-green-600 to-cyan-600",
    runButton:
      "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
    panelBg: "bg-black/60",
    panelBorder: "border-green-500/30",
    panelHover: "hover:shadow-green-500/20",
    outputHover: "hover:shadow-cyan-500/20",
  },
  neon: {
    name: "Neon",
    icon: Zap,
    background: "bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900",
    particles: [
      "absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse",
      "absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse",
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse",
    ],
    headerGradient: "bg-gradient-to-r from-cyan-300 via-yellow-200 to-pink-300",
    iconBg: "bg-gradient-to-r from-cyan-500 to-yellow-500",
    runButton:
      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
    panelBg: "bg-gray-800/50",
    panelBorder: "border-cyan-500/30",
    panelHover: "hover:shadow-cyan-500/20",
    outputHover: "hover:shadow-yellow-500/20",
  },
  dark: {
    name: "Dark",
    icon: Moon,
    background: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    particles: [
      "absolute -top-40 -right-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse",
      "absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse",
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse",
    ],
    headerGradient: "bg-gradient-to-r from-white via-gray-200 to-gray-300",
    iconBg: "bg-gradient-to-r from-gray-600 to-gray-700",
    runButton:
      "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800",
    panelBg: "bg-gray-800/60",
    panelBorder: "border-gray-600/40",
    panelHover: "hover:shadow-gray-500/10",
    outputHover: "hover:shadow-gray-400/10",
  },
};

const editorThemes = {
  oneDarkCustom: { name: "Dark", icon: Moon },
  solarizedLight: { name: "Solar", icon: Sun },
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("terminal");
  const [editorTheme, setEditorTheme] = useState("oneDarkCustom");
  const [code, setCode] = useState(`// ✨ Bienvenido al Monaco Playground
// Escribe tu código JavaScript aquí

function saludo(nombre) {
  return \`¡Hola, \${nombre}! 👋 \\n \`;
}

console.log(saludo("Desarrollador"));

// Prueba algunas funciones modernas de JS
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(n => n * 2);
console.log("Números duplicados:", duplicados);

// Ejemplos de sintaxis moderna
const usuario = {
  nombre: "Juan",
  edad: 25,
  activo: true
};

// Destructuring
const { nombre, edad } = usuario;

// Arrow functions y template literals
const mensaje = (nombre) => \`Usuario: \${nombre}, Edad: \${edad}\`;
console.log(mensaje(nombre));

// Async/await ejemplo
async function fetchData() {
  try {
    const data = await fetch('https://api.ejemplo.com/datos');
    return data.json();
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// Arrays y métodos modernos
const datos = [1, 2, 3, 4, 5];
const resultado = datos
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log("✅ Resultado:", resultado);`);

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const theme = themes[currentTheme as keyof typeof themes];

  // Configurar temas personalizados de Monaco cuando se monte el editor
  const handleEditorDidMount = (
    _editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) => {
    // Tema Solarized Light personalizado
    monaco.editor.defineTheme("solarizedLight", {
      base: "vs",
      inherit: true,
      rules: [
        { token: "", foreground: "586e75" },

        // Comentarios
        { token: "comment", foreground: "93a1a1", fontStyle: "italic" },

        // Console y métodos
        { token: "console-obj", foreground: "268bd2" }, // azul
        { token: "log-method", foreground: "b58900" }, // amarillo solar
        { token: "error-method", foreground: "b58900" }, // rojo
        { token: "warn-method", foreground: "b58900" }, // naranja

        // Métodos de array
        { token: "array-method", foreground: "2aa198" }, // cian

        // Delimitadores
        { token: "paren-open", foreground: "657b83" },
        { token: "paren-close", foreground: "657b83" },
        { token: "brace-open", foreground: "657b83" },
        { token: "brace-close", foreground: "657b83" },
        { token: "bracket-open", foreground: "657b83" },
        { token: "bracket-close", foreground: "657b83" },

        // Clave dentro de objetos
        { token: "keyword", foreground: "859900", fontStyle: "bold" }, // verde oliva
        { token: "identifier", foreground: "268bd2" }, // azul claro

        // Template literal expression
        { token: "template.identifier", foreground: "6c71c4" }, // violeta solar

        // Tipos de datos
        { token: "number", foreground: "d33682" }, // magenta
        { token: "string", foreground: "2aa198" }, // cian
        { token: "operator", foreground: "586e75" },
        { token: "delimiter", foreground: "657b83" },
      ],
      colors: {
        "editor.background": "#fdf6e3",
        "editor.foreground": "#586e75",
        "editor.lineHighlightBackground": "#eee8d5",
        "editor.selectionBackground": "#93a1a180",
        "editor.inactiveSelectionBackground": "#93a1a140",
        "editorCursor.foreground": "#657b83",
        "editorLineNumber.foreground": "#93a1a1",
        "editorIndentGuide.background": "#eee8d5",
        "editorWhitespace.foreground": "#93a1a140",
        "editorBracketMatch.background": "#268bd21a",
        "editorBracketMatch.border": "#268bd2",
      },
    });

    monaco.languages.register({ id: "javascript-custom" });

    // Tokenizador
    monaco.languages.setMonarchTokensProvider("javascript-custom", {
      tokenizer: {
        root: [
          // Console específico
          [/console(?=\.)/, "console-obj"],
          [/\.log(?=\s*\()/, "log-method"],
          [/\.error(?=\s*\()/, "error-method"],
          [/\.warn(?=\s*\()/, "warn-method"],

          // Métodos de array
          [/\.filter(?=\s*\()/, "array-method"],
          [/\.map(?=\s*\()/, "array-method"],
          [/\.reduce(?=\s*\()/, "array-method"],
          [/\.forEach(?=\s*\()/, "array-method"],
          [/\.find(?=\s*\()/, "array-method"],
          [/\.some(?=\s*\()/, "array-method"],
          [/\.every(?=\s*\()/, "array-method"],

          // Delimitadores (paréntesis, llaves, corchetes)
          [/\(/, "paren-open"],
          [/\)/, "paren-close"],
          [/\{/, "brace-open"],
          [/\}/, "brace-close"],
          [/\[/, "bracket-open"],
          [/\]/, "bracket-close"],

          // Strings primero
          [/"/, "string", "@stringDouble"],
          [/'/, "string", "@stringSingle"],
          [/`/, "string", "@stringTemplate"],

          // Keywords
          [
            /\b(async|function|const|let|var|if|else|for|while|try|catch|return|class|export|import|default|await|new|this|true|false|null|undefined)\b/,
            "keyword",
          ],

          // Numbers
          [/\d*\.\d+([eE][-+]?\d+)?/, "number.float"],
          [/\d+/, "number"],

          // Comments
          [/\/\/.*$/, "comment"],
          [/\/\*/, "comment", "@comment"],

          // Operators y delimitadores
          [/[=+\-*/%<>!&|^~?:]/, "operator"],
          [/[;,.]/, "delimiter"],

          // Identifiers al final
          [/[a-zA-Z_$][\w$]*/, "identifier"],

          // Whitespace
          [/\s+/, ""],
        ],

        stringDouble: [
          [/[^\\"]+/, "string"],
          [/\\./, "string.escape"],
          [/"/, "string", "@pop"],
        ],

        stringSingle: [
          [/[^\\']+/, "string"],
          [/\\./, "string.escape"],
          [/'/, "string", "@pop"],
        ],

        stringTemplate: [
          [/[^\\`$]+/, "string"],
          [/\$\{/, "delimiter", "@templateExpression"],
          [/\\./, "string.escape"],
          [/`/, "string", "@pop"],
        ],

        templateExpression: [[/\}/, "delimiter", "@pop"], { include: "root" }],

        comment: [
          [/[^\\/*]+/, "comment"],
          [/\*\//, "comment", "@pop"],
          [/[\\/*]/, "comment"],
        ],
      },
    });

    // Tema
    monaco.editor.defineTheme("oneDarkCustom", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "d4d4d4" },

        // Console específico
        { token: "console-obj", foreground: "9cdcfe" }, // console
        { token: "log-method", foreground: "d3d38d" }, // .log
        { token: "error-method", foreground: "d3d38d" }, // .error
        { token: "warn-method", foreground: "d3d38d" }, // .warn

        // Métodos de array
        { token: "array-method", foreground: "dcdcaa" },

        // Delimitadores
        { token: "paren-open", foreground: "d3d38d" },
        { token: "paren-close", foreground: "d3d38d" },
        { token: "brace-open", foreground: "d3d38d" },
        { token: "brace-close", foreground: "d3d38d" },
        { token: "bracket-open", foreground: "d3d38d" },
        { token: "bracket-close", foreground: "d3d38d" },

        // Palabras clave (color más brillante)
        { token: "keyword", foreground: "569cd6", fontStyle: "bold" },

        // Otros tokens
        { token: "identifier", foreground: "9cdcfe" },
        { token: "number", foreground: "b5cea8" },
        { token: "string", foreground: "ce9178" },
        { token: "comment", foreground: "6a9955", fontStyle: "normal" },
        { token: "operator", foreground: "d4d4d4" },
        { token: "delimiter", foreground: "569cd6" },
      ],
      colors: {
        "editor.background": "#1e1e1e",
        "editor.foreground": "#d4d4d4",
        "editorCursor.foreground": "#c4d2d9",
        "editor.lineHighlightBackground": "#2d2d30",
        "editorLineNumber.foreground": "#858585",
        "editor.selectionBackground": "#3a3d41",
        "editor.inactiveSelectionBackground": "#3a3d4155",
        "editorIndentGuide.background": "#404040",
        "editorWhitespace.foreground": "#404040",
        "editorBracketMatch.background": "#0064001a",
        "editorBracketMatch.border": "#888888",
      },
    });

    monaco.editor.setTheme("oneDarkCustom");
  };

  // Ejecutar código
  const runCode = () => {
    setIsRunning(true);
    setOutput("");

    setTimeout(() => {
      try {
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(
            args
              .map((arg) =>
                typeof arg === "object"
                  ? JSON.stringify(arg, null, 2)
                  : String(arg)
              )
              .join(" ")
          );
        };

        eval(code);
        console.log = originalLog;

        setOutput(
          logs.join("\n") ||
            "✅ Código ejecutado exitosamente (sin salida en consola)"
        );
      } catch (error: unknown) {
        if (error instanceof Error) {
          setOutput(`❌ Error: ${error.message}`);
        } else {
          setOutput("❌ Error desconocido");
        }
      }
      setIsRunning(false);
    }, 500);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "playground-code.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`min-h-screen ${theme.background} p-4 sm:p-8 transition-all duration-500`}
    >
      {/* Efectos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {theme.particles.map((particleClass, index) => (
          <div key={index} className={particleClass}></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header con selector de temas */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className={`p-3 ${theme.iconBg} rounded-xl shadow-lg transition-all duration-300`}
            >
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h1
              className={`text-4xl sm:text-5xl font-bold ${theme.headerGradient} bg-clip-text text-transparent transition-all duration-300`}
            >
              Monaco Playground
            </h1>
            <theme.icon className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>

          {/* Selector de temas */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Palette className="w-5 h-5 text-slate-300" />
            <div className="flex gap-2 p-1 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50">
              {Object.entries(themes).map(([key, themeData]) => {
                const ThemeIcon = themeData.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setCurrentTheme(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      currentTheme === key
                        ? "bg-white/20 text-white shadow-lg scale-105"
                        : "text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <ThemeIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {themeData.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Un entorno de desarrollo moderno y elegante para experimentar con
            JavaScript
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Editor Panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white flex items-center gap-4">
                <Terminal className="w-15 h-15 text-purple-400" />
                Editor de Código
              </h2>
              <div className="flex items-center gap-4">
                {/* Selector de tema del editor */}
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-400" />
                  <div className="flex gap-1 p-1 bg-slate-700/80 rounded-lg border border-slate-600/50">
                    {Object.entries(editorThemes).map(([key, themeData]) => {
                      const ThemeIcon = themeData.icon;
                      return (
                        <button
                          key={key}
                          onClick={() => setEditorTheme(key)}
                          className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 ${
                            editorTheme === key
                              ? "bg-white/20 text-white shadow-sm"
                              : "text-slate-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <ThemeIcon className="w-3 h-3" />
                          <span className="text-xs font-medium">
                            {themeData.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={copyCode}
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-200 hover:scale-105 group"
                    title="Copiar código"
                  >
                    <Copy
                      className={`w-4 h-4 transition-colors ${
                        copied
                          ? "text-green-400"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    />
                  </button>
                  <button
                    onClick={downloadCode}
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-200 hover:scale-105 group"
                    title="Descargar código"
                  >
                    <Download className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className={`px-4 py-2 ${theme.runButton} disabled:from-gray-500 disabled:to-gray-600 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 font-medium shadow-lg disabled:cursor-not-allowed`}
                  >
                    <Play
                      className={`w-4 h-4 ${isRunning ? "animate-spin" : ""}`}
                    />
                    {isRunning ? "Ejecutando..." : "Ejecutar"}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`${theme.panelBg} backdrop-blur-sm rounded-2xl border ${theme.panelBorder} overflow-hidden shadow-2xl ${theme.panelHover} transition-all duration-300`}
            >
              <div
                className={`flex items-center gap-2 px-4 py-3 ${theme.panelBg} border-b ${theme.panelBorder}`}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-400 text-sm ml-4 font-mono">
                  playground.js
                </span>
              </div>

              <Editor
                height="400px"
                defaultLanguage="javascript-custom"
                value={code}
                onChange={(value) => setCode(value || "")}
                theme={editorTheme}
                onMount={handleEditorDidMount}
                options={{
                  // Básico
                  fontSize: 16,
                  fontFamily:
                    "JetBrains Mono, Fira Code, 'Cascadia Code', Consolas, monospace",
                  fontLigatures: true,

                  // Líneas
                  lineNumbers: "on",
                  renderLineHighlight: "gutter",
                  lineHeight: 22,

                  // Comportamiento
                  wordWrap: "on",
                  cursorBlinking: "smooth",
                  smoothScrolling: true,
                  // cursorSmoothCaretAnimation: "on",

                  // Autocompletado (habilitado para mejor experiencia)
                  quickSuggestions: false,
                  suggestOnTriggerCharacters: false,
                  parameterHints: { enabled: false },
                  hover: { enabled: false },

                  // Visual mejorado
                  minimap: { enabled: false },
                  scrollbar: {
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10,
                    useShadows: true,
                  },
                  matchBrackets: "never", // linea debajo de las palabras
                  occurrencesHighlight: "off", // resaltado de palabras repetidas
                  selectionHighlight: false, // resaltado de selección
                  bracketPairColorization: { enabled: false }, // seleccion de palabras repetidas
                  colorDecorators: true,
                  codeLens: false,
                  folding: true,
                  foldingHighlight: true,
                  showFoldingControls: "mouseover",

                  // Edición
                  autoIndent: "full",
                  formatOnType: true,
                  formatOnPaste: true,
                  trimAutoWhitespace: true,
                  tabSize: 2,
                  insertSpaces: true,

                  // Renderizado
                  renderWhitespace: "selection",
                  renderControlCharacters: false,

                  lineDecorationsWidth: 2,
                  lineNumbersMinChars: 3,
                }}
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-20">
              <Terminal className="w-5 h-5 text-green-400" />
              Consola de Salida
            </h2>

            <div
              className={`bg-slate-900/50 backdrop-blur-sm rounded-2xl border ${theme.panelBorder} overflow-hidden shadow-2xl min-h-[400px] ${theme.outputHover} transition-all duration-300`}
            >
              <div
                className={`flex items-center gap-2 px-4 py-3 ${theme.panelBg} border-b ${theme.panelBorder}`}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
                <span className="text-slate-400 text-sm ml-4 font-mono">
                  console
                </span>
                {isRunning && (
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">
                      ejecutando...
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                {output ? (
                  <pre className="text-slate-200 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                    {output}
                  </pre>
                ) : (
                  <div className="text-slate-500 text-center py-20">
                    <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Listo para ejecutar</p>
                    <p className="text-sm">
                      Haz clic en {`"Ejecutar"`} para ver la salida de tu código
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/30 backdrop-blur-sm rounded-full border border-slate-700/30">
            <theme.icon className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300 text-sm">
              Tema actual:{" "}
              <span className="font-semibold text-white">{theme.name}</span> |
              Hecho con ❤️ usando Monaco Editor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
