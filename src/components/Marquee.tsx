import React, { PropsWithChildren } from "react";
import { cld } from "../cloudinary";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const imageIds = [
  "379308983_699232112238311_6593868613536339885_n",
  "277567937_5124520917586436_749865808996775110_n",
  "308759235_5626405944064595_4280187281631351941_n",
  "307914948_5626411327397390_9061545839367157149_n",
  "308123513_5626414617397061_8721558825572103761_n",
  "311085290_5700927399945782_8404035943547899203_n",
  "73533029_2566861600019060_6667760358502957056_n",
  "71496451_2537542686284285_8724575674926366720_n",
  "380270954_705913101570212_7296121337325895432_n",
  "310510591_5648260515212471_8873098302929484764_n",
  "301612089_5545634048808452_610910868762487940_n",
  "362271252_673414291486760_3657211550306372738_n",
  "392773056_624771093186059_837371219729334812_n",
  "403716493_646135081049660_8206959095086502085_n",
  "403738844_737330878420425_419455848359247308_n",
  "382714953_703514568468723_3741342510071942574_n",
  "379044125_699232132238309_5847255879708829352_n",
  "408101702_743435554476624_3362218712223190038_n",
  "403898273_738397984980381_2922679499910348201_n",
  "405542241_648318527497982_5959675387640645963_n",
  "408109088_743437207809792_7234238279229121805_n",
  "408123409_743437341143112_5694356693641983891_n",
  "406608814_741355684684611_3857032896518395466_n",
  "408094226_743437657809747_7679562815047334500_n",
  "311594395_5700772696627919_310042677603182945_n",
];
const imagesUrls2 = imageIds.map((id) =>
  cld.image(id).resize(fit().width(400).height(200)),
);

export const Marquee = () => {
  return (
    <div className="py-10 lg:py-14 mx-auto">
      <div
        className={
          "[--space:2rem] grid content-center justify-center overflow-hidden gap-6 w-full"
        }
      >
        <style>{MarqueeCSS}</style>

        <MarqueeBlock>
          {/*<MarqueeImages*/}
          {/*  imagesUrls={imagesUrls.slice(0, imagesUrls.length / 2)}*/}
          {/*/>*/}
          <MarqueeImages
            images={imagesUrls2.slice(0, imagesUrls2.length / 2)}
          />
        </MarqueeBlock>
        <div
          className={
            "border border-y-2 border-gray-200 dark:border-gray-700 py-2"
          }
        >
          <MarqueeBlock>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                className={
                  "font-extrabold text-gray-200 dark:text-gray-700 text-4xl leading-none mb-1 align-middle uppercase"
                }
                key={i}
              >
                Creating memories since 2013
              </div>
            ))}
          </MarqueeBlock>
        </div>
        <MarqueeBlock reverse>
          {/*<MarqueeImages*/}
          {/*  imagesUrls={imagesUrls.slice(*/}
          {/*    imagesUrls.length / 2,*/}
          {/*    imagesUrls.length,*/}
          {/*  )}*/}
          {/*/>*/}
          <MarqueeImages
            images={imagesUrls2.slice(
              imagesUrls2.length / 2,
              imagesUrls2.length,
            )}
          />
        </MarqueeBlock>
      </div>
    </div>
  );
};

const MarqueeImages = (props: { images: CloudinaryImage[] }) => {
  return (
    <>
      {props.images.map((image) => (
        <div
          className={
            "max-w-[400px] max-h-[200px] overflow-hidden rounded-xl hover:filter-none transition-all"
          }
        >
          <AdvancedImage cldImg={image} key={image.toString()} plugins={[]} />
        </div>
      ))}
    </>
  );
};

const MarqueeBlock = (
  props: PropsWithChildren<{ reverse?: boolean; fast?: boolean }>,
) => (
  <div
    className={`[--gap:var(--space)] flex overflow-x-hidden select-none gap-[30px] p-2  ${
      props.fast ? "[--duration:20s]" : "[--duration:60s]"
    }`}
  >
    <div
      className={`shrink-0 flex items-center justify-around gap-[30px] min-w-full animate-[scroll_var(--duration)_linear_infinite] ${
        props.reverse &&
        " [animation-direction:reverse] [animation-delay:calc(10s_/_-2)]"
      }    `}
    >
      {props.children}
    </div>
    <div
      className={`shrink-0 flex items-center justify-around gap-[30px] min-w-full animate-[scroll_var(--duration)_linear_infinite] ${
        props.reverse &&
        " [animation-direction:reverse] [animation-delay:calc(10s_/_-2)]"
      }`}
      aria-hidden="true"
    >
      {props.children}
    </div>
  </div>
);

const MarqueeCSS = `

  

  
  

 
  @media (prefers-reduced-motion: reduce) {
    .marquee__group {
      animation-play-state: paused;
    }
  }

 

  @keyframes scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
`;
