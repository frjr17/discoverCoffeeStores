import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/card.module.css";

export default function Card(props) {
  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={classNames(styles.container,'glass')}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>

        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={props.imgUrl}
            width={260}
            height={160}

          />
        </div>
      </div>
    </Link>
  );
}
