import { useRef, useEffect, useState, type KeyboardEvent, type CSSProperties } from "react";

const COLS = 20;        // 列数
const INIT_ROWS = 20;   // 初期表示行

export default function VerticalEditor() {
  const ref = useRef<HTMLDivElement>(null);
  const [fontPx, setFontPx] = useState(20);
  const [charCount, setCharCount] = useState(0);

  /* ── 寸法計算 ───────────────────── */
  const cell = fontPx * 1.6;        // マス一辺
  const sheetW = COLS * cell;       // シート幅
  const gridOffsetX = (cell - fontPx) / 2; // 文字左右中央寄せ

  /* ── イベント ───────────────────── */
  useEffect(() => ref.current?.focus(), []);

  const handleInput = () => {
    const txt = ref.current?.innerText ?? "";
    setCharCount(txt.replace(/\s+/g, "").length);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "　　");
    }
  };

  /* ── 背景格子 ───────────────────── */
  const gridBG =
    `repeating-linear-gradient(to bottom, transparent 0 1px, #e5e7eb 1px ${cell}px),
     repeating-linear-gradient(to left  , transparent 0 1px, #e5e7eb 1px ${cell}px)`;

  /* ── エディタ style ───────────────── */
  const editorStyle: CSSProperties = {
    width: sheetW,
    minHeight: INIT_ROWS * cell,
    fontSize: `${fontPx}px`,
    lineHeight: `${cell}px`,
    backgroundImage: gridBG,
    backgroundSize: `${cell}px ${cell}px`,
    backgroundPosition: `${gridOffsetX}px 0px`,   // ← Y オフセット 0 に修正
    writingMode: "vertical-rl",
    textOrientation: "upright",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    boxShadow: "inset 0 0 0 2px #4b5563",
    textAlign: "left",
  };

  return (
    <div className="min-h-screen w-full flex justify-center py-10 bg-neutral-100">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-400 select-none">
        {/* タイトルバー */}
        <div className="flex justify-between items-center px-4 py-2 bg-neutral-200 rounded-t-xl">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500  rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="text-sm text-neutral-700">原稿用紙エディタ</span>
          <span className="w-6" />
        </div>

        {/* ─ ツールバー ─ */}
        <div className="flex justify-between items-center px-4 py-2 bg-neutral-50 border-b border-neutral-200 text-sm">
          <div className="flex items-center space-x-2">
            <label>文字サイズ:</label>
            <select
              value={fontPx}
              onChange={(e) => setFontPx(Number(e.target.value))}
              className="border rounded px-1 py-0.5 focus:outline-none"
            >
              {[16, 18, 20, 22, 24, 28, 32].map((sz) => (
                <option key={sz} value={sz}>{sz}px</option>
              ))}
            </select>
          </div>
          <div><span className="font-medium">文字数:</span> {charCount}</div>
        </div>

        {/* ─ シート本体 ─ */}
        <div className="relative p-6">
          {/* エディタ */}
          <div
            ref={ref}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            style={editorStyle}
            className="overflow-auto bg-whit"
          />
        </div>
      </div>
    </div>
  );
}
