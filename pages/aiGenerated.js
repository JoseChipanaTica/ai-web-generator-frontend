import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";

const AIGenerated = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (router.query.data) {
      setData(JSON.parse(router.query.data));
    }
  }, [router.query.data]);

  return (
    <div>
      <Head>
        <title>AI Generated</title>
        <meta name="description" content="Generated by AI Generated" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid md:grid-cols-4 min-h-screen gap-4 p-4">
        <div className="col-span-1 shadow-inner border hover:shadow-2xl  rounded-3xl p-4 h-[400px] md:h-[700px]">
          <h1>AIGenerated</h1>
        </div>

        <div className="md:col-span-3 rounded-3xl h-[700px] overflow-auto  border shadow-3xl hover:shadow-inner p-8 ">
          {data ? (
            <div>
              <SectionOne
                title={data.sectionOne.title}
                subtitle={data.sectionOne.subtitle}
              />

              <SectionTwo
                title={data.sectionTwo.title}
                subtitle={data.sectionTwo.subtitle}
              />
              <SectionThree
                title={data.sectionThree.title}
                subtitle={data.sectionThree.subtitle}
              />
              <SectionFour
                title={data.sectionFour.title}
                subtitle={data.sectionFour.subtitle}
              />
              <SectionFive
                title={data.sectionFive.title}
                subtitle={data.sectionFive.subtitle}
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIGenerated;
