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
      <Link href="/question4">
        <a>سوال چهارم</a>
      </Link>
      <Link href="/question5">
        <a>سوال پنجم</a>
      </Link>
      <Link href="/question6">
        <a>سوال ششم</a>
      </Link>
      <Link href="/question7">
        <a>سوال هفتم</a>
      </Link>
      <Link href="/question8">
        <a>سوال هشتم</a>
      </Link>
    </div>
  );
};

export default QuestionsNav;
