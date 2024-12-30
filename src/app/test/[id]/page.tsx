type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  ).then(res => res.json());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  return <div>{resolvedParams.id}포스트2</div>;
}
