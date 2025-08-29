import Button from "@/components/Button";
import { getEntry } from "@/lib/contentful";
import Image from "next/image";

export default async function Home() {
  const entry = await getEntry("/home", "landingPage");
  console.log(
    "Entry:",
    entry.items[0].fields.cards[0].fields.callToAction.fields.redirectUrl
  );

  const pageData = entry.items[0];

  return (
    <div className="px-6 md:px-12 py-10 max-w-[1080px] mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-6xl mb-4">{pageData?.fields?.title}</h1>
        <p className="text-2xl">{pageData?.fields?.intro}</p>
      </div>
      <div
        className="flex items-center justify-between rounded-xl"
        style={{ backgroundColor: "var(--starbucks-green)" }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-white ">
            {pageData?.fields?.mainBanner?.fields?.title}
          </h2>
          <Button
            ctaText={
              pageData?.fields.mainBanner.fields.callToAction.fields
                .callToActionText
            }
            className="bg-white text-black"
            href={
              pageData?.fields.mainBanner.fields.callToAction.fields.redirectUrl
            }
          />
        </div>
        <div>
          <Image
            height={500}
            width={500}
            alt={pageData?.fields?.mainBanner?.fields?.asset?.description}
            src={`https:${pageData?.fields?.mainBanner?.fields?.asset?.fields?.file?.url}` || "Landing Image"}
            className="rounded-r-xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-20 gap-4 justify-between">
        {pageData?.fields?.cards.map((card, idx) => {
          const isGreen = idx === 0 || idx === 3;
          return (
            <div
              key={card.sys.id}
              className={`w-[480px] rounded-xl overflow-hidden min-h-[500px] ${
                isGreen ? "" : "bg-slate-100"
              }`}
              style={
                isGreen ? { backgroundColor: "var(--starbucks-green)" } : {}
              }
            >
              <Image
                height={500}
                width={500}
                alt={card?.fields?.asset?.description || "Card Image"}
                src={`https:${card?.fields?.asset?.fields?.file?.url}`}
                className="rounded-t-xl"
              />
              <div className="p-4 h-1/2 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      isGreen ? "text-white" : "text-black"
                    }`}
                  >
                    {card.fields.title}
                  </h3>
                  <p
                    className={`text-xl ${
                      isGreen ? "text-white" : "text-black"
                    }`}
                  >
                    {card.fields.description}
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    ctaText={card.fields.callToAction.fields.callToActionText}
                    className={
                      isGreen
                        ? "bg-white text-black"
                        : "bg-[var(--starbucks-green)] text-white"
                    }
                    href={card.fields.callToAction.fields.redirectUrl}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
