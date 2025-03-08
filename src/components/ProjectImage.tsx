import React, { useState } from "react";

type ProjectImagesProps = {
  selectedProject: {
    photoProjet: { src: string; desc: string }[];
  };
};

const ProjectImages: React.FC<ProjectImagesProps> = ({ selectedProject }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="mt-3">
      {selectedProject.photoProjet.length > 0 && (
        <>
          <h3 className="font-bold text-lg">Images:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedProject.photoProjet.map((photo, index) => (
              <div key={index} className="mt-2">
                <img
                  src={photo.src}
                  alt={photo.desc}
                  className="w-full h-50 object-cover rounded cursor-pointer"
                  onClick={() => setZoomedImage(photo.src)}
                />
                <p className="text-sm text-gray-600">{photo.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-lg flex justify-center items-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default ProjectImages;