export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing the documentation for concept {params.slug[1]} of feature{" "}
        {params.slug[0]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing the documentation for feature {params.slug[0]}</h1>;
  }
  return <h1 className="text-2xl text-yellow-300 font-bold">Docs Home page</h1>;
}
