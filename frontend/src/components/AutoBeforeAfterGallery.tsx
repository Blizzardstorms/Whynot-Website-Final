/*
 * SitePilot Construction Management System
 * © 2025 Stafford Kleinschmidt. All rights reserved.
 *
 * File: AutoBeforeAfterGallery.tsx
 * Description: Dynamically loads and matches before/after image pairs from public folder
 * Last Edited: 2025-08-02
 *
 * License: Proprietary – Do not distribute without permission.
 */

import React, { useEffect, useState } from 'react';

interface ImagePair {
  baseName: string;
  before: string;
  after: string;
}

const AutoBeforeAfterGallery: React.FC = () => {
  const [imagePairs, setImagePairs] = useState<ImagePair[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/images/before-after/index.json');
        const files: string[] = await res.json();

        const pairs: Record<string, Partial<ImagePair>> = {};

        files.forEach((filename) => {
          const match = filename.match(/(.+)-(before|after)\.(jpg|jpeg|png|webp)$/i);
          if (!match) return;

          const [, baseName, type] = match;
          if (!pairs[baseName]) pairs[baseName] = { baseName };
          pairs[baseName][type as 'before' | 'after'] = `/images/before-after/${filename}`;
        });

        setImagePairs(Object.values(pairs).filter(p => p.before && p.after) as ImagePair[]);
      } catch (err) {
        console.error('Failed to load image index:', err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {imagePairs.map((pair, idx) => (
        <div key={idx} className="bg-white shadow rounded overflow-hidden">
          <div className="p-4 font-semibold text-center">{pair.baseName.replace(/[-_]/g, ' ')}</div>
          <div className="grid grid-cols-2">
            <div>
              <img src={pair.before} alt={`${pair.baseName} before`} className="w-full h-auto" />
              <div className="text-center py-2 text-sm text-gray-600">Before</div>
            </div>
            <div>
              <img src={pair.after} alt={`${pair.baseName} after`} className="w-full h-auto" />
              <div className="text-center py-2 text-sm text-gray-600">After</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoBeforeAfterGallery;
