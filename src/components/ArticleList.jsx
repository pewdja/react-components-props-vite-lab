
import Article from './Article';

export default function ArticleList({ posts }) {
  return (
    <main className="mt-8 border-t border-gray-100 pt-8">
      {posts.map(({ id, ...props }) => (
        <Article 
          key={id}
          {...props}
        />
      ))}
    </main>
  );
}
