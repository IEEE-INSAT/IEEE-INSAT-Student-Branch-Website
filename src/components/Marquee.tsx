import React, { PropsWithChildren } from "react";

const imagesUrls = [
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869576/379308983_699232112238311_6593868613536339885_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869566/277567937_5124520917586436_749865808996775110_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869562/308759235_5626405944064595_4280187281631351941_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869569/307914948_5626411327397390_9061545839367157149_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869555/308123513_5626414617397061_8721558825572103761_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869583/311085290_5700927399945782_8404035943547899203_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869585/73533029_2566861600019060_6667760358502957056_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869575/71496451_2537542686284285_8724575674926366720_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869593/380270954_705913101570212_7296121337325895432_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869565/310510591_5648260515212471_8873098302929484764_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869579/301612089_5545634048808452_610910868762487940_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701869580/362271252_673414291486760_3657211550306372738_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883074/392773056_624771093186059_837371219729334812_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883103/403716493_646135081049660_8206959095086502085_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883106/403738844_737330878420425_419455848359247308_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883107/382714953_703514568468723_3741342510071942574_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883116/379044125_699232132238309_5847255879708829352_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883119/408101702_743435554476624_3362218712223190038_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883131/403898273_738397984980381_2922679499910348201_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883134/405542241_648318527497982_5959675387640645963_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883140/408109088_743437207809792_7234238279229121805_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883141/408123409_743437341143112_5694356693641983891_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883143/406608814_741355684684611_3857032896518395466_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883144/408094226_743437657809747_7679562815047334500_n.jpg",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1701883146/311594395_5700772696627919_310042677603182945_n.jpg",
];

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
          <MarqueeImages
            imagesUrls={imagesUrls.slice(0, imagesUrls.length / 2)}
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
          <MarqueeImages
            imagesUrls={imagesUrls.slice(
              imagesUrls.length / 2,
              imagesUrls.length,
            )}
          />
        </MarqueeBlock>
      </div>
    </div>
  );
};

const MarqueeImages = (props: { imagesUrls: string[] }) => {
  return (
    <>
      {props.imagesUrls.map((url) => (
        <img
          className={
            "max-w-[400px] max-h-[200px] object-cover rounded-xl saturate-50 hover:filter-none transition-all"
          }
          key={url}
          src={url}
          alt="Marquee Image"
          onError={(e) => {
            e.currentTarget.remove();
          }}
        />
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
