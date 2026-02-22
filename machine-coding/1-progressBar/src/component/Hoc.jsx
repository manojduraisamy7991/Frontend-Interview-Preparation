// HOC component
function withBorder(Compoent) {
  return function EnchanceComponent(props) {
    const { title } = props;
    console.log("Render succuess fully", title);
    return (
      <div style={{ border: "10px solid green" }}>
        <Compoent {...props} />
      </div>
    );
  };
}
// Header
function Header(props) {
  const { title } = props;
  console.log("logger:", title);
  return <div>{title}</div>;
}
// Foolter
function Footer(props) {
  const { title } = props;
  console.log("console", title);
  return <div>{title}</div>;
}

export default function HOC() {
  const HocHeader = withBorder(Header);
  const HocFooter = withBorder(Footer);

  return (
    <div className="HOC">
      <h1>Hoc Component</h1>
      <div style={{ padding: "4px" }}>
        <HocHeader title="header" />
        <HocFooter title="Footer" />
      </div>
    </div>
  );
}
