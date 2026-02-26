import React, { useState, useRef, useEffect } from "react";

interface ImageLightboxProps {
    src: string;
    description?: string;
    onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, description, onClose }) => {
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef<{ mouseX: number; mouseY: number; panX: number; panY: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Non-passive wheel listener so we can preventDefault and zoom
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            setZoom(prev => Math.min(Math.max(prev - e.deltaY * 0.002, 0.5), 5));
        };
        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    // Reset pan when zoom goes back to 1
    useEffect(() => {
        if (zoom <= 1) {
            setZoom(1);
            setPan({ x: 0, y: 0 });
        }
    }, [zoom]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom <= 1) return;
        e.preventDefault();
        setIsDragging(true);
        dragStartRef.current = { mouseX: e.clientX, mouseY: e.clientY, panX: pan.x, panY: pan.y };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !dragStartRef.current) return;
        setPan({
            x: dragStartRef.current.panX + (e.clientX - dragStartRef.current.mouseX) / zoom,
            y: dragStartRef.current.panY + (e.clientY - dragStartRef.current.mouseY) / zoom,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        dragStartRef.current = null;
    };

    const resetZoom = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    };

    const controlBtn = "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-opacity hover:opacity-80 select-none";
    const controlBg = { backgroundColor: "rgba(0,0,0,0.65)" };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-[60] bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Zoom controls */}
                <div className="absolute top-2 left-2 z-10 flex gap-1.5 items-center">
                    <button
                        className={controlBtn + " text-xl leading-none"}
                        style={controlBg}
                        title="Zoom in"
                        onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.5, 5)); }}
                    >+</button>
                    <button
                        className={controlBtn + " text-xl leading-none"}
                        style={controlBg}
                        title="Zoom out"
                        onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(z - 0.5, 0.5)); }}
                    >−</button>
                    {zoom !== 1 && (
                        <button
                            className="h-8 px-2 rounded-full flex items-center justify-center text-white text-xs shadow-lg transition-opacity hover:opacity-80 select-none"
                            style={controlBg}
                            title="Reset zoom"
                            onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                        >Reset</button>
                    )}
                    <span className="text-white text-xs opacity-60 ml-1 select-none">
                        {Math.round(zoom * 100)}%
                    </span>
                </div>

                {/* Image container */}
                <div
                    ref={containerRef}
                    className="overflow-hidden rounded-lg shadow-2xl"
                    style={{
                        maxWidth: "88vw",
                        maxHeight: "78vh",
                        cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <img
                        src={src}
                        alt={description}
                        draggable={false}
                        style={{
                            maxWidth: "88vw",
                            maxHeight: "78vh",
                            objectFit: "contain",
                            display: "block",
                            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                            transformOrigin: "center center",
                            transition: isDragging ? "none" : "transform 0.15s ease",
                            userSelect: "none",
                        }}
                    />
                </div>

                {description && (
                    <p className="mt-3 text-sm sm:text-base text-center" style={{ maxWidth: "88vw", color: "white" }}>
                        {description}
                    </p>
                )}

                {/* Scroll hint */}
                <p className="mt-1 text-white/40 text-xs select-none">Scroll or use +/− to zoom · Drag to pan</p>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-colors"
                    style={{ backgroundColor: "#ef4444" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#dc2626"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#ef4444"; }}
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default ImageLightbox;
