const test = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  await new Promise(resolve => setTimeout(resolve, 2000));
  return res.json();
};

const Hello = async () => {
  const posts = await test();

  return (
    <div>
      id: {posts.id} --- title: {posts.title}
    </div>
  );
};

export default Hello;
