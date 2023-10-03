import { css, cx } from "../styled-system/css";
import Stack from "./layouts/Stack";

const itemStyle = css({
  padding: 2,
  backgroundColor: "gray.200",
  flexShrink: 0,
});

function App() {
  return (
    <>
      <Stack gap="lg" className={css({ width: "full", alignItems: "center" })}>
        <header className={cx(itemStyle, css({ height: 12, width: "full" }))}>
          Header
        </header>
        <Stack
          horizontal
          gap="lg"
          className={css({ width: "full", maxWidth: "4xl" })}
        >
          <nav>
            <Stack as="ul" className={css({ width: 48, flexShrink: 0 })}>
              <li className={itemStyle}>Menu 1</li>
              <li className={itemStyle}>Menu 2</li>
              <li className={itemStyle}>Menu 3</li>
            </Stack>
          </nav>
          <main className={cx(itemStyle, css({ height: "xl", flexGrow: 1 }))}>
            Main content
          </main>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
