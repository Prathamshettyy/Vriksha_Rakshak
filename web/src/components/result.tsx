import { Prediction } from "@/lib/types";

interface ResultProps {
  data: Prediction;
}

export default function Result({ data }: ResultProps) {
  const prediction = data.result;

  const percent = (num: number, digits = 2) => (num * 100).toFixed(digits) + "%";

  return (
    <div className="w-full mt-8 max-w-4xl mx-auto px-6">
      {!prediction.is_plant.binary ? (
        <div className="text-center text-xl p-6 text-red-600 border border-red-400 rounded-md bg-red-50">
          Image is not a plant. Please upload a valid plant image.
        </div>
      ) : (
        <>
          <div className="bg-secondary p-8 rounded-md text-center mb-12 shadow-md">
            <p className="text-3xl font-semibold">
              Plant is{" "}
              <span
                className={`font-bold ${
                  prediction.is_healthy.binary ? "text-green-600" : "text-red-600"
                }`}
              >
                {prediction.is_healthy.binary ? "Healthy" : "Unhealthy"}
              </span>
            </p>
            {prediction.is_healthy.binary && (
              <p className="mt-4 text-lg">Your plant is happy, you are truly a nature lover!</p>
            )}
          </div>

          {!prediction.is_healthy.binary && (
            <div className="space-y-16">
              <h2 className="text-center text-3xl font-bold mb-6">Potential Diseases</h2>

              {prediction.disease.suggestions.map((disease) => (
                <article
                  key={disease.id}
                  className="border border-gray-300 rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    {disease.name}: {percent(disease.probability, 2)}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {disease.similar_images.map((image) => (
                      <div
                        key={image.id}
                        className="relative w-40 h-40 overflow-hidden rounded-lg border border-gray-200 shadow-md"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.url}
                          alt={image.citation || disease.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs rounded px-2 py-1 font-semibold">
                          {(image.similarity * 100).toFixed(0)}% similarity
                        </span>
                      </div>
                    ))}
                  </div>

                  <section className="space-y-8 text-gray-800 px-4 sm:px-12 lg:px-20">
                    <div>
                      <h4 className="font-semibold text-xl mb-3 border-b border-gray-300 pb-2">
                        Description
                      </h4>
                      <p className="text-justify leading-relaxed">{disease.details.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-xl mb-3 border-b border-gray-300 pb-2">
                        Chemical Treatment
                      </h4>
                      <p className="leading-relaxed">
                        {(disease.details.treatment.chemical ?? []).length > 0
                          ? disease.details.treatment.chemical.join(", ")
                          : "N/A"}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-xl mb-3 border-b border-gray-300 pb-2">
                        Biological Treatment
                      </h4>
                      <p className="leading-relaxed">
                        {(disease.details.treatment.biological ?? []).length > 0
                          ? disease.details.treatment.biological.join(", ")
                          : "N/A"}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-xl mb-3 border-b border-gray-300 pb-2">
                        Prevention
                      </h4>
                      <p className="leading-relaxed">
                        {(disease.details.treatment.prevention ?? []).length > 0
                          ? disease.details.treatment.prevention.join(", ")
                          : "N/A"}
                      </p>
                    </div>
                  </section>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
