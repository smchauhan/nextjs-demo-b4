import ShowProduct from "./ShowProduct";

// server component
const Page = async ({ params }) => {
  const data = await params;
  return (
    <div>
      List of the products
      <ShowProduct id={data.id} />
    </div>
  );
};

export default Page;
