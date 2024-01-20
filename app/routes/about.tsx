import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About Open Java 2024" },
    { name: "Fundamentals of Java Programming", content: "Welcome to Open Java!" },
  ];
};

export function About() {
    return (
        <section>
            <h2>About Open Java</h2>
        </section>
    )
}