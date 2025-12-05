'use client';
import { useState } from 'react';

export default function ImageGallery({ images, alt }) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={images[selectedImage]}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${index === selectedImage ? 'border-blue-600' : 'border-transparent hover:border-gray-300'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`${alt} ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
