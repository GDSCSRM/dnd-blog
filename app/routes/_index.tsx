import Navbar from "~/components/navbar";
import Section from "~/components/section";
import PopularCard from "~/components/popular-card";
import ArticleCard from "~/components/article-card";
import NewsletterCard from "~/components/newsletter-card";
import Button from "~/components/button";
import Footer from "~/components/footer";
import { getArticles, getLatestArticles } from "~/utils/api.server";
import { Link, json, useLoaderData } from "@remix-run/react";
import type { Article, User } from "@prisma/client";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Blog App built with Remix" },
];

type ArticleWithAuthor = Article & { author: User };

type LoaderData = {
  articles: ArticleWithAuthor[];
  latestArticles: ArticleWithAuthor[];
};

export const loader: LoaderFunction = async () => {
  const articles = await getArticles();
  const latestArticles = await getLatestArticles();

  return json({ articles, latestArticles });
}

const categories = ["Category", "Category", "Category", "Category", "Category"];

export default function Index() {
  const { articles, latestArticles } = useLoaderData<LoaderData>();

  return (
    <>
      <Navbar />
      <main className="flex flex-col my-10 gap-10">
        <Section title="Popular Topics">
          <div className="flex justify-between">
            <div className="flex flex-row gap-3">
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  className="px-3 py-0.5 border border-black rounded-md"
                >
                  {category}
                </div>
              ))}
            </div>
            <Link
              to="#"
              className="px-3 py-0.5 bg-gray-100 border border-black rounded-md"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-16">
            {articles.map((article, idx) => (
              <PopularCard key={idx} {...article} author={article.author.name} />
            ))}
          </div>
        </Section>
        <NewsletterCard />
        <Section title="Latest Articles">
          <div className="flex flex-col gap-10 mb-10">
            {latestArticles.map((article, idx) => (
              <ArticleCard key={idx} {...article} author={article.author.name} />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Button>View All</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
