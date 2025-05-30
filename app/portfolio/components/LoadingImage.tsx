import { Code2 } from "lucide-react";

export const LoadingImage = () => {
  return (
    <div
      className="w-full h-full aspect-video bg-gradient-to-br from-[#F7971E] to-[#FFD200] flex items-center justify-center">
      <Code2 className="w-12 h-12 text-white" />
    </div>
  );
}