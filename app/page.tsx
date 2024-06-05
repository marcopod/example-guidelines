"use client";
import CloseButton from "@/components/common/CloseButton";

export default function Home() {
  const handleClose = () => {
    console.log("Closed button");
  };
  return (
    <main className="">
      <CloseButton onClose={handleClose} />
    </main>
  );
}
