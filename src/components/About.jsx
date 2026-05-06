/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function About({ 
  image = "https://via.placeholder.com/215", 
  about 
}) {
  return (
    <aside className="mb-12">
      <img 
        src={image} 
        alt="blog logo" 
        className="w-52 h-52 rounded-full object-cover mb-4 shadow-sm border border-gray-100"
      />
      <p className="text-gray-600 max-w-sm leading-relaxed">
        {about}
      </p>
    </aside>
  );
}
