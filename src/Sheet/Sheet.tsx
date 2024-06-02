import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  foo: {
    color: "red",
  },
  bar: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});

export function Sheet() {
  return (
    <div {...stylex.props(styles.foo, styles.bar)}>
      <div>asdf qwers</div>
    </div>
  );
}
