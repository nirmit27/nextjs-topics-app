import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: {
    productid: string;
    reviewid: string;
  };
}) {
  if (parseInt(params.reviewid) > 10000) {
    notFound();
  }
  return (
    <h1 className="text-md">
      Review #{params.reviewid} about product #{params.productid}
    </h1>
  );
}
