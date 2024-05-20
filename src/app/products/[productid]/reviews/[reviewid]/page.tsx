export default function Review({
  params,
}: {
  params: {
    productid: String;
    reviewid: String;
  };
}) {
  return (
    <h1 className="text-md">
      Review #{params.reviewid} about product #{params.productid}
    </h1>
  );
}
