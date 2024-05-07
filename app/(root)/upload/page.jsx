import TopicsList from "@/components/TopicsList";
import Link from "next/link";

export default function Upload() {
  return (
    <div>
      <h1>Upload</h1>
      <Link className="" href={"/addTopic"}>
          Add Topic
            </Link>
      <TopicsList />
    </div>
  );
}
