import { FC } from "react";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/image-blur";
import { Safari } from "@/components/blogs/device-mockups/safari";
import { Android } from "@/components/blogs/device-mockups/android";

interface HeroMediaSectionProps {
  image?: string | null;
  video?: string | null;
  title: string;
  description?: string;
  captionsUrl?: string;
  projectType?: 'web' | 'native' | 'package';
  projectUrl?: string | null;
}

const HeroMediaSection: FC<HeroMediaSectionProps> = ({
  image,
  video,
  title,
  description,
  captionsUrl,
  projectType,
  projectUrl
}) => {
  if (!image && !video) {
    return null;
  }

  // Device mockup selection with static imports, all wrapped in the same div
  return (
    <div className="flex mb-6 md:mb-12">
      {projectType === 'web' ? (
        <Safari imageSrc={image ?? undefined} videoSrc={video ?? undefined} url={projectUrl ?? undefined} mode="default" />
      ) : projectType === 'native' && video ? (
        <Android videoSrc={video ?? undefined} />
      ) : video ? (
        <video
          className="w-full h-full object-contain bg-muted rounded-xl border border-border/50 shadow-lg"
          controls
          autoPlay
          muted
          playsInline
          preload="none"
          title={`${title} video preview`}
        >
          <source src={video} type="video/mp4" />
          {captionsUrl && (
            <track src={captionsUrl} kind="subtitles" srcLang="en" label="English" />
          )}
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className="w-full h-full object-contain bg-muted rounded-xl border border-border/50 shadow-lg image-fade-in"
          src={image!}
          alt={`${title} preview`}
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={getBlurDataURL(1920, 1080)}
          priority
        />
      )}
    </div>
  );
};

export default HeroMediaSection;
