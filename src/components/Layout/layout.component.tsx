import Navbar from "../Navbar";
import styles from "./layout.module.css";
import { Roboto } from "@next/font/google";
import Header from "../Header";
import Widget from "../Widget";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className={[roboto.className, styles.layoutContainer].join(" ")}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <section>{children}</section>
      </div>
      <Widget />
    </div>
  );
}
