import Image from "next/image";
import loader from "@/assets/loader.gif";
const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image src={loader} alt="loader..." width={100} height={100} />
    </div>
  );
};

export default LoadingPage;
