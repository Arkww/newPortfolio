import React, { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type ProjectImagesProps = {
  selectedProject: {
    photoProjet: { src: string; desc: string }[];
  };
};

const ProjectImages: React.FC<ProjectImagesProps> = ({ selectedProject }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; desc: string } | null>(null);

  return (
    <div className="mt-3">
      {selectedProject.photoProjet.length > 0 && (
        <>
          <h3 className="font-bold text-base sm:text-lg mb-3">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {selectedProject.photoProjet.map((photo, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={photo.src}
                  alt={photo.desc}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-2 cursor-zoom-in hover:opacity-90 transition-opacity"
                  style={{ border: "1px solid var(--text-sub)" }}
                  onClick={(e) => { e.stopPropagation(); setSelectedPhoto(photo); }}
                />
                <p className="text-xs sm:text-sm text-center" style={{ color: "var(--text-sub)" }}>
                  {photo.desc}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Lightbox */}
      {selectedPhoto && (
        <ImageLightbox
          src={selectedPhoto.src}
          description={selectedPhoto.desc}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};

export default ProjectImages;