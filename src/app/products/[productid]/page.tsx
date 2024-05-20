export default function ProductDetails({
  params,
}: {
  params: {
    productid: String;
  };
}) {
  return <h1 className="text-md">Details about product #{params.productid}</h1>;
}
