import { db } from "~/utils/db.server";

export async function getUserByEmail(email: string) {
  const user = db.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

export async function createUser(
  name: string,
  username: string,
  email: string,
  password: string
) {
  const user = db.user.create({
    data: {
      username,
      password,
      email,
      name,
    },
  });

  return user;
}

export async function getArticles() {
  const articles = db.article.findMany({
    include: {
      author: true,
    }
  });

  return articles;
}

export async function getArticleById(id: number) {
  const article = db.article.findFirst({
    where: {
      id,
    },
  });

  return article;
}

export async function getLatestArticles() {
  const articles = db.article.findMany({
    include: {
      author: true,
    }
  });

  return articles;
}
