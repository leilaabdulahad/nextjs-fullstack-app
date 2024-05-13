import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 m-10">
        {topics.map((t) => (
          <div key={t._id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{t.title}</h2>
              <p className="text-gray-700">{t.description}</p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-4">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                
                  <HiPencilAlt className="text-gray-600" size={24} />
                
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}