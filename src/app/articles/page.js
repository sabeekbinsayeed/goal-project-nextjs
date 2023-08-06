import React from 'react';


const articles = [
    {
        title: 'Article 1',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80',
        link: 'https://example.com/article-1',
    },
    {
        title: 'Article 2',
        image: 'https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        link: 'https://example.com/article-2',
    },
    {
        title: 'Article 3',
        image: 'https://plus.unsplash.com/premium_photo-1682309772037-8da49abb2b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1212&q=80',
        link: 'https://example.com/article-3',
    },
    {
        title: 'Article 4',
        image: 'https://plus.unsplash.com/premium_photo-1683749810427-9f460939f702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80',
        link: 'https://example.com/article-4',
    },
    {
        title: 'Article 5',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
        link: 'https://example.com/article-5',
    },
    {
        title: 'Article 6',
        image: 'https://plus.unsplash.com/premium_photo-1682096382388-9df461ffdbb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        link: 'https://example.com/article-6',
    },
];
const MyArticles = () => {
    return (
        <div className="container mx-auto pt-14 pb-20">
            <h1 className="text-3xl font-bold mb-6 text-center">My Articles</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {articles.map((article, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-md">
                        <a href={article.link}>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-48 w-full object-cover mb-4 rounded-lg"
                            />
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                        </a>
                        <a
                            href={article.link}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg block text-center font-semibold hover:bg-blue-700"
                        >
                            See Article
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArticles;
