export default function HomeBanner() {
  return (
    <div className="banner bg-[url(/images/bg-1.jpg)] bg-fixed object-cover bg-auto bg-center h-75 w-full">
      <div className="inset-0 bg-black/70 w-full h-full text-white flex items-center justify-center flex-col gap-3">
        <h1 className="font-medium text-3xl sm:">Mudahnya Promosi</h1>
        <p className="text-sm">
          Dengan Pick'O mencari influencer untuk promosi menjadi mudah
        </p>
      </div>
    </div>
  );
}
