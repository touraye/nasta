import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { NewLesson } from "~/components/NewLesson";

export const meta: MetaFunction = () => {
  return [
    { title: "Open Java 2024" },
    { name: "Fundamentals of Java Programming", content: "Welcome to Open Java!" },
  ];
};

export default function Index() {
  return (      
      <>
        <h1>Open Java Open</h1>
        <p>This course will introduce you to basic of Java Programming</p>
      <Link to="">Learn More</Link>
      <NewLesson />
      </>
  );
}
