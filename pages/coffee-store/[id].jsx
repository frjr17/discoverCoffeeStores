import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStoresData from '../../data/coffee-stores.json'
export const getStaticProps = async (ctx) => {
  const {id} = ctx.params
  return {
    props:{
      coffeeStore:coffeeStoresData.find(store=>store.id.toString() ===id)
    }
  }
}

export const getStaticPaths = async () => {


  return {
    paths:[
      {params:{id:'0'}},
      {params:{id:'1'}}
    ],
    fallback:false
  }
}
export default function CoffeeStore(props) {
  const { id } = useRouter().query;

  return (
    <div>
      Coffee Store Page: {id}
      <Link href="/">
        Back to home
      </Link>
      <Link href="/coffee-store/dynamic">
       Go to page dynamic
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  );
}
