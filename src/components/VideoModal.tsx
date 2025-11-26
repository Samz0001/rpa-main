import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
        >
          <X size={24} className="text-slate-900" />
        </button>

        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay"
            allowFullScreen
          />
        </div>

       
        
      </div>
    </div>
  );
}
