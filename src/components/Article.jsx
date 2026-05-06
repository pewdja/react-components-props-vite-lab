/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Article({ 
  title, 
  date = "January 1, 1970", 
  preview, 
  minutes 
}) {
  
  const getReadingIndicator = (min) => {
    if (min < 30) {
      const cups = Math.ceil(min / 5);
      return "☕️".repeat(cups) + ` ${min} min read`;
    } else {
      const boxes = Math.ceil(min / 10);
      return "🍱".repeat(boxes) + ` ${min} min read`;
    }
  };

  return (
    <article className="mb-10 group">
      <h3 className="text-2xl font-bold text-pink-600 mb-2 cursor-pointer group-hover:underline">
        {title}
      </h3>
      <div className="flex items-center gap-2 mb-3">
        <small className="text-gray-500 font-medium italic">
          {date}
        </small>
        <span className="text-gray-300">•</span>
        <small className="text-gray-600 font-mono text-xs">
          {getReadingIndicator(minutes)}
        </small>
      </div>
      <p className="text-gray-700 leading-relaxed">
        {preview}
      </p>
    </article>
  );
}
