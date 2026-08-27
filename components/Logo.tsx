import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image width={166} height={51} src="/img/logo.png" alt="logo" />
    </Link>
  );
}
