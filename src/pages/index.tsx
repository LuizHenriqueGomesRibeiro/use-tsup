import { BreedHoundImagesDataProps, clientQueriesObject, serverQueriesObject } from "@/api-query-objects";

export const getServerSideProps = async () => {
  const list = await serverQueriesObject.breed_hound_images();

  return {
    props: {
      list
    }
  }
}

interface HomePageProps {
  list: BreedHoundImagesDataProps
}

export default function Home({ list }: HomePageProps) {
  const { makeRequest, data, status } = clientQueriesObject.breeds_image_random();
  return <div>
    <div>hello use-tsup</div>
    <div>status: 
      <span className="font-bold">{status}</span>
    </div>
    <button onClick={makeRequest} className="bg-red-400 rounded-2xl px-2 cursor-pointer text-white">Make request</button>
    {data && <img src={data.message} alt="" width={50} height={50} />}
    {list && list.message.map(image => <div className="flex flex-wrap">
      <img src={image} alt="" width={50} height={50} />
    </div>)}
  </div>
}