
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import blogData from './data/blog';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-pink-100 selection:text-pink-900">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header name={blogData.name} />
          <About image={blogData.image} about={blogData.about} />
          <ArticleList posts={blogData.posts} />
          
          <footer className="mt-20 pt-8 border-t border-gray-100 pb-12">
            <p className="text-sm text-gray-400 font-sans tracking-wide">
              &copy; {new Date().getFullYear()} {blogData.name}. Built with React & Tailwind.
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
