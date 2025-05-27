export default async function petDetails({
  params,
}: {
  params: Promise<{ petId: string }>;
}) {
  const petId = (await params).petId;
  return <h1>PetDetails about: {petId}</h1>;
}
