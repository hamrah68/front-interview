import Link from "next/link";
const QuestionsNav = () => {
  return (
    <div
      className="cs-column"
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <Link href="/question1">
        <a>سوال اول</a>
      </Link>
      <Link href="/question2">
        <a>سوال دوم</a>
      </Link>
      <Link href="/question3">
        <a>سوال سوم</a>
      </Link>
    </div>
  );
};

export default QuestionsNav;
