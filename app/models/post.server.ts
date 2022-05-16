import { prisma } from "~/db.server";

type Post = {
  slug: string;
  title: string;
};

export const getPosts = async (): Promise<Post[]> => prisma.post.findMany();
