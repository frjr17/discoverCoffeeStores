import Link from "next/link";
import { useRouter } from "next/router";

export default function CoffeeStore() {
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
    </div>
  );
}
